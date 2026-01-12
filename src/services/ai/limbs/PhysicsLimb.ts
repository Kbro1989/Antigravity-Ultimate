import { NeuralLimb } from './NeuralLimb';
import { AgentCapability } from '../AgentConstitution';
import { BaseIntent } from '../AITypes';

/**
 * PhysicsLimb - RSC-Native AABB Collision & Pathfinding
 * 
 * Architecture per BIG_PICTURE.md line 59:
 * - Server-Side: Simple AABB stubs + RSC tile-based pathfinding
 * - Browser-Side: Full cannon-es physics engine (delegated via LiveGameLimb)
 * 
 * RSC Coordinate System:
 * - Scale: 1:512 (world units to pixels)
 * - Tile Grid: 48x48 per region
 * - Collision maps stored in data204
 */

// RSC constants
const RSC_SCALE = 512;
const TILE_SIZE = 128; // World units per tile
const REGION_SIZE = 48; // Tiles per region

interface AABB {
    minX: number;
    minY: number;
    minZ: number;
    maxX: number;
    maxY: number;
    maxZ: number;
}

interface CollisionResult {
    collides: boolean;
    penetrationDepth?: number;
    normal?: [number, number, number];
    tileX?: number;
    tileZ?: number;
}
export class PhysicsLimb extends NeuralLimb {
    // In-memory collision state
    private bodies: Map<string, { aabb: AABB; velocity: [number, number, number]; mass: number }> = new Map();
    private gravity: [number, number, number] = [0, -9.81, 0];
    private lastStepTime: number = Date.now();
    private initialized: boolean = false;

    private async ensureInitialized() {
        if (this.initialized || !this.state) return;
        const storedBodies = await this.state.storage.get('physics_bodies');
        if (storedBodies) {
            this.bodies = new Map(Object.entries(storedBodies));
        }
        const storedGravity = await this.state.storage.get('physics_gravity');
        if (storedGravity) {
            this.gravity = storedGravity;
        }
        this.initialized = true;
    }

    private async persistState() {
        if (!this.state) return;
        await this.state.storage.put('physics_bodies', Object.fromEntries(this.bodies));
        await this.state.storage.put('physics_gravity', this.gravity);
    }

    /**
     * Step the physics simulation forward.
     * Server-side: Validates positions against collision maps.
     * Heavy simulation delegated to browser via LiveGameLimb.
     */
    async step_simulation(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        await this.ensureInitialized();
        const { deltaTime = 16.67, iterations = 10, delegate_to_browser = false } = params || {};

        const now = Date.now();
        const actualDelta = now - this.lastStepTime;
        this.lastStepTime = now;

        // If browser delegation requested, queue update via LiveGameLimb
        if (delegate_to_browser && (this as any).limbs) {
            try {
                await (this as any).limbs.call('live_game', 'send', {
                    type: 'physics_step',
                    data: { deltaTime, iterations, bodies: Array.from(this.bodies.entries()) }
                });
                return {
                    status: 'delegated',
                    target: 'browser',
                    frameTime: actualDelta,
                    bodies: this.bodies.size
                };
            } catch (e) {
                // Fallback to server-side
            }
        }

        // Server-side: Simple Euler integration for position validation
        let settledCount = 0;
        for (const [id, body] of this.bodies.entries()) {
            // Apply gravity
            body.velocity[1] += this.gravity[1] * (deltaTime / 1000);

            // Update position
            body.aabb.minY += body.velocity[1] * (deltaTime / 1000);
            body.aabb.maxY += body.velocity[1] * (deltaTime / 1000);

            // Ground collision (simple Y=0 floor)
            if (body.aabb.minY <= 0) {
                body.aabb.maxY -= body.aabb.minY;
                body.aabb.minY = 0;
                body.velocity[1] = 0;
                settledCount++;
            }
        }

        // Persist state to Durable Object storage
        await this.persistState();

        return {
            status: 'success',
            settlement: settledCount === this.bodies.size ? 'stable' : 'active',
            frameTime: Math.round(actualDelta * 100) / 100,
            iterations,
            bodiesProcessed: this.bodies.size,
            settledCount
        };
    }

    async simulate(params: any) {
        return this.step_simulation(params);
    }

    /**
     * Set gravity vector for the simulation.
     */
    async set_gravity(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        await this.ensureInitialized();
        const { gravity = [0, -9.81, 0] } = params || {};

        this.gravity = gravity;
        await this.persistState();

        return {
            status: 'success',
            gravity: this.gravity,
            applied: true
        };
    }

    /**
     * Apply a force to a physics body.
     * Converts force to velocity change based on mass.
     */
    async apply_force(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        await this.ensureInitialized();
        const { bodyId, force = [0, 10, 0], impulse = false } = params || {};

        const body = this.bodies.get(bodyId);
        if (!body) {
            // Create new dynamic body if none exists
            this.bodies.set(bodyId, {
                aabb: { minX: 0, minY: 0, minZ: 0, maxX: 1, maxY: 1, maxZ: 1 },
                velocity: [0, 0, 0],
                mass: 1
            });
        }

        const targetBody = this.bodies.get(bodyId)!;
        const massInv = 1 / targetBody.mass;

        if (impulse) {
            // Instant velocity change
            targetBody.velocity[0] += force[0] * massInv;
            targetBody.velocity[1] += force[1] * massInv;
            targetBody.velocity[2] += force[2] * massInv;
        } else {
            // Accumulated force (applied over next step)
            targetBody.velocity[0] += force[0] * massInv * 0.016; // ~16ms
            targetBody.velocity[1] += force[1] * massInv * 0.016;
            targetBody.velocity[2] += force[2] * massInv * 0.016;
        }

        await this.persistState();

        return {
            status: 'success',
            bodyId,
            force,
            resultingVelocity: targetBody.velocity
        };
    }

    /**
     * AABB collision detection between two boxes.
     * Uses RSC tile-based coordinates (1:512 scale).
     */
    async detect_collision(params: any): Promise<{ status: string; collisions: CollisionResult[]; count: number }> {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { bodyA, bodyB, worldPosition, checkTiles = false } = params || {};

        const collisions: CollisionResult[] = [];

        // If checking a single world position against tile collision map
        if (worldPosition && checkTiles) {
            const tileX = Math.floor(worldPosition.x / TILE_SIZE);
            const tileZ = Math.floor(worldPosition.z / TILE_SIZE);

            // RSC collision map lookup (would integrate with data204)
            // For now, return basic ground collision check
            const isBlocked = await this.checkTileCollision(tileX, tileZ);

            if (isBlocked) {
                collisions.push({
                    collides: true,
                    tileX,
                    tileZ,
                    normal: [0, 1, 0]
                });
            }
        }

        // AABB vs AABB collision
        if (bodyA && bodyB) {
            const aabbA = this.bodies.get(bodyA)?.aabb || bodyA;
            const aabbB = this.bodies.get(bodyB)?.aabb || bodyB;

            const collides = this.aabbIntersects(aabbA, aabbB);

            if (collides) {
                const penetration = this.calculatePenetration(aabbA, aabbB);
                collisions.push({
                    collides: true,
                    penetrationDepth: penetration.depth,
                    normal: penetration.normal
                });
            }
        }

        return {
            status: 'success',
            collisions,
            count: collisions.length
        };
    }

    /**
     * Calculate bounding box for an entity.
     * Integrates with RSC model data from JagArchive when available.
     */
    async calculate_bounds(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { modelId, vertices, position = [0, 0, 0], scale = [1, 1, 1] } = params || {};

        let bounds: AABB;

        if (vertices && Array.isArray(vertices)) {
            // Calculate from raw vertex data
            let minX = Infinity, minY = Infinity, minZ = Infinity;
            let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

            for (const v of vertices) {
                minX = Math.min(minX, v[0] || v.x || 0);
                minY = Math.min(minY, v[1] || v.y || 0);
                minZ = Math.min(minZ, v[2] || v.z || 0);
                maxX = Math.max(maxX, v[0] || v.x || 0);
                maxY = Math.max(maxY, v[1] || v.y || 0);
                maxZ = Math.max(maxZ, v[2] || v.z || 0);
            }

            bounds = { minX, minY, minZ, maxX, maxY, maxZ };
        } else if (modelId) {
            // Try to fetch from RSC model cache via RelicLimb
            try {
                const modelData = await (this as any).limbs?.call('relic', 'resolve_asset', {
                    uri: `relic://model/${modelId}`,
                    type: 'mesh'
                });

                if (modelData?.bounds) {
                    bounds = modelData.bounds;
                } else {
                    // Default RSC model bounds (typical NPC size)
                    bounds = { minX: -0.5, minY: 0, minZ: -0.5, maxX: 0.5, maxY: 2, maxZ: 0.5 };
                }
            } catch {
                bounds = { minX: -0.5, minY: 0, minZ: -0.5, maxX: 0.5, maxY: 2, maxZ: 0.5 };
            }
        } else {
            // Default unit cube
            bounds = { minX: 0, minY: 0, minZ: 0, maxX: 1, maxY: 1, maxZ: 1 };
        }

        // Apply position and scale
        const scaled: AABB = {
            minX: position[0] + bounds.minX * scale[0],
            minY: position[1] + bounds.minY * scale[1],
            minZ: position[2] + bounds.minZ * scale[2],
            maxX: position[0] + bounds.maxX * scale[0],
            maxY: position[1] + bounds.maxY * scale[1],
            maxZ: position[2] + bounds.maxZ * scale[2]
        };

        return {
            status: 'success',
            bounds: scaled,
            center: [
                (scaled.minX + scaled.maxX) / 2,
                (scaled.minY + scaled.maxY) / 2,
                (scaled.minZ + scaled.maxZ) / 2
            ],
            size: [
                scaled.maxX - scaled.minX,
                scaled.maxY - scaled.minY,
                scaled.maxZ - scaled.minZ
            ]
        };
    }

    /**
     * Validate a movement path using RSC tile-based pathfinding.
     * Checks for obstacles along the path.
     */
    async validate_path(params: any) {
        this.enforceCapability(AgentCapability.EXECUTE_COMMAND);
        const { start, end, entityBounds } = params || {};

        if (!start || !end) {
            return { status: 'error', message: 'start and end positions required' };
        }

        // Convert world coords to tile coords
        const startTile = { x: Math.floor(start.x / TILE_SIZE), z: Math.floor(start.z / TILE_SIZE) };
        const endTile = { x: Math.floor(end.x / TILE_SIZE), z: Math.floor(end.z / TILE_SIZE) };

        // Simple line-of-sight check (Bresenham-style)
        const blockedTiles: Array<{ x: number; z: number }> = [];
        const dx = Math.abs(endTile.x - startTile.x);
        const dz = Math.abs(endTile.z - startTile.z);
        const sx = startTile.x < endTile.x ? 1 : -1;
        const sz = startTile.z < endTile.z ? 1 : -1;
        let err = dx - dz;
        let x = startTile.x;
        let z = startTile.z;

        while (x !== endTile.x || z !== endTile.z) {
            const isBlocked = await this.checkTileCollision(x, z);
            if (isBlocked) {
                blockedTiles.push({ x, z });
            }

            const e2 = 2 * err;
            if (e2 > -dz) { err -= dz; x += sx; }
            if (e2 < dx) { err += dx; z += sz; }
        }

        return {
            status: 'success',
            pathValid: blockedTiles.length === 0,
            blockedTiles,
            startTile,
            endTile,
            distance: Math.sqrt(dx * dx + dz * dz)
        };
    }

    // --- Private Helpers ---

    private aabbIntersects(a: AABB, b: AABB): boolean {
        return (
            a.minX <= b.maxX && a.maxX >= b.minX &&
            a.minY <= b.maxY && a.maxY >= b.minY &&
            a.minZ <= b.maxZ && a.maxZ >= b.minZ
        );
    }

    private calculatePenetration(a: AABB, b: AABB): { depth: number; normal: [number, number, number] } {
        const overlapX = Math.min(a.maxX - b.minX, b.maxX - a.minX);
        const overlapY = Math.min(a.maxY - b.minY, b.maxY - a.minY);
        const overlapZ = Math.min(a.maxZ - b.minZ, b.maxZ - a.minZ);

        if (overlapX < overlapY && overlapX < overlapZ) {
            return { depth: overlapX, normal: a.minX < b.minX ? [-1, 0, 0] : [1, 0, 0] };
        } else if (overlapY < overlapZ) {
            return { depth: overlapY, normal: a.minY < b.minY ? [0, -1, 0] : [0, 1, 0] };
        } else {
            return { depth: overlapZ, normal: a.minZ < b.minZ ? [0, 0, -1] : [0, 0, 1] };
        }
    }

    /**
     * Check tile collision against RSC collision map.
     * Would integrate with data204 collision data when available.
     */
    private async checkTileCollision(tileX: number, tileZ: number): Promise<boolean> {
        // Try to get collision data from RelicLimb
        try {
            const collisionData = await (this as any).limbs?.call('relic', 'fetch_relic_content', {
                path: `collision/${Math.floor(tileX / REGION_SIZE)}_${Math.floor(tileZ / REGION_SIZE)}`,
                category: 'landscape'
            });

            if (collisionData?.tiles) {
                const localX = tileX % REGION_SIZE;
                const localZ = tileZ % REGION_SIZE;
                return !!collisionData.tiles[localZ * REGION_SIZE + localX];
            }
        } catch {
            // No collision data available - assume passable
        }

        return false;
    }
}
