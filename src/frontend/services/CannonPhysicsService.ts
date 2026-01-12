import * as CANNON from 'cannon-es';

interface PhysicsBody {
    id: string;
    aabb: {
        minX: number;
        minY: number;
        minZ: number;
        maxX: number;
        maxY: number;
        maxZ: number;
    };
    velocity: [number, number, number];
    mass: number;
}

/**
 * CannonPhysicsService - Browser-Side Physics Engine
 * 
 * Fulfills architecture per BIG_PICTURE.md line 59.
 * Handles heavy simulation delegated from the Workers via LiveGameLimb.
 */
export class CannonPhysicsService {
    private static instance: CannonPhysicsService;
    private world: CANNON.World;
    private bodies: Map<string, CANNON.Body> = new Map();
    private lastTime: number = 0;

    private constructor() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.81, 0); // Standard RSC gravity
        this.world.broadphase = new CANNON.NaiveBroadphase();
        (this.world.solver as CANNON.GSSolver).iterations = 10;

        // Add ground plane
        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({ mass: 0 });
        groundBody.addShape(groundShape);
        groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        this.world.addBody(groundBody);
    }

    public static getInstance(): CannonPhysicsService {
        if (!CannonPhysicsService.instance) {
            CannonPhysicsService.instance = new CannonPhysicsService();
        }
        return CannonPhysicsService.instance;
    }

    /**
     * Synchronize a batch of bodies from the worker.
     */
    public syncBodies(workerBodies: [string, any][]) {
        for (const [id, data] of workerBodies) {
            let body = this.bodies.get(id);

            if (!body) {
                // Create new body based on AABB
                const width = data.aabb.maxX - data.aabb.minX;
                const height = data.aabb.maxY - data.aabb.minY;
                const depth = data.aabb.maxZ - data.aabb.minZ;

                const shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));
                body = new CANNON.Body({
                    mass: data.mass || 1,
                    position: new CANNON.Vec3(
                        (data.aabb.minX + data.aabb.maxX) / 2,
                        (data.aabb.minY + data.aabb.maxY) / 2,
                        (data.aabb.minZ + data.aabb.maxZ) / 2
                    )
                });
                body.addShape(shape);
                this.world.addBody(body);
                this.bodies.set(id, body);
            }

            // Sync velocity and position
            body.velocity.set(data.velocity[0], data.velocity[1], data.velocity[2]);
            body.position.set(
                (data.aabb.minX + data.aabb.maxX) / 2,
                (data.aabb.minY + data.aabb.maxY) / 2,
                (data.aabb.minZ + data.aabb.maxZ) / 2
            );
        }
    }

    /**
     * Step the simulation.
     */
    public step(dt: number = 1 / 60) {
        this.world.step(dt);
    }

    /**
     * Get current state for sync back to worker.
     */
    public getState() {
        const state: Record<string, any> = {};
        for (const [id, body] of this.bodies.entries()) {
            state[id] = {
                position: [body.position.x, body.position.y, body.position.z],
                velocity: [body.velocity.x, body.velocity.y, body.velocity.z],
                quaternion: [body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w]
            };
        }
        return state;
    }

    public reset() {
        for (const body of this.bodies.values()) {
            this.world.removeBody(body);
        }
        this.bodies.clear();
    }
}
