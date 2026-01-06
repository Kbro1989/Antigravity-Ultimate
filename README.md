# **POG-Ultimate: The 27 Limbs & Live Game Pipeline**

This is the entire journey: **raw asset → playable game → live editing → checkpointing**, with every limb's role and how they compose into pipelines.

---

## **I. The 27 Limbs: What Each One Actually Does**

### **Data & Foundation Layer (The "Ghost Core")**
1. **GhostLimb** – *Error Recovery & Local Fallback*
   - `stabilize()` → When cloud fails, auto-failover to local Ollama models
   - Preserves session state in `RealityAnchorService` so you never lose work
   - **Use**: You're editing Terrain; Cloudflare has an outage. GhostLimb silently switches to `llama3.2` on your laptop. You keep working.

2. **FileLimb** – *Filesystem Operations*
   - CRUD, watch, audit, sync to `LocalBridgeService`
   - **Use**: Drag a `.nif` file into the client. FileLimb ingests → streams to bridge → syncs to R2 → triggers `AssetPipelineLimb`.

3. **DataLimb** – *Knowledge & Vector Memory*
   - Embeddings, pruning, SQL query generation
   - **Use**: "Find all assets tagged 'volcanic' and 'rare'." DataLimb scans vector memory → returns 12 models, 4 textures.

4. **EntityLimb** – *ECS Archetype Management*
   - Scans codebase for components, systems, dependency graphs
   - **Use**: You spawn a "Lava Golem" entity. EntityLimb auto-generates the archetype file, wires dependencies to PhysicsLimb and AnimationLimb.

5. **SystemLimb** – *Ops & Token Economics*
   - Manages `TokenLedger`, mode switching, vibe execution
   - **Use**: Free tier hits quota. SystemLimb auto-throttles to "economy mode" (slower, local-only) but never locks you out.

### **3D & Visual Layer (The "Mesh Knights")**
6. **MeshOpsLimb** – *3D Modeling Swiss Army Knife*
   - 25+ ops: `generate_cube`, `subdivide_mesh`, `uv_unwrap`, `bake_texture`, `export_gltf`
   - **Use**: You click "Subdivide" on a rock model. MeshOpsLimb sends to `@cf/meta/llama-3.3` for topology optimization → applies to mesh → streams preview to `Standard3DViewer`.

7. **MaterialLimb** – *PBR Shader Compiler*
   - Metallic, roughness, emissive, fresnel → GLSL/HLSL
   - **Use**: Adjust "metallic" slider to 0.8. MaterialLimb recompiles shader → hot-reloads in WebGL context → preview updates in 50ms.

8. **AnimationLimb** – *Skeletal & Procedural Animation*
   - Retargets RT5/RT7 animations, frame interpolation, inverse kinematics
   - **Use**: Apply "idle_breathe" animation to NPC. AnimationLimb maps bones → interpolates frames → streams to `AnimationWorkspace`.

9. **ImageLimb** – *Texture & Sprite Generation*
   - MODES: TEXTURE (seamless), SPRITE (pixel-art), RETRO (dithered)
   - **Use**: Prompt "volcanic rock, mossy, seamless." ImageLimb → `@cf/stabilityai/stable-diffusion-xl-base-1.0` → returns 512x512 seamless map → auto-assigns to MaterialLimb.

10. **VideoLimb** – *Cinematic Clip Generation*
    - Script-to-storyboard, camera pathing, particle simulation recording
    - **Use**: "Create a 10-second eruption cutscene." VideoLimb orchestrates WorldLimb + ParticleSystem + AnimationLimb → outputs `.mp4` + metadata for `LiveGameLimb`.

### **World & Environment Layer (The "Worldsmiths")**
11. **WorldLimb** – *Procedural World Generation*
    - Seed-based terrain, biome algorithms, entity distribution
    - **Use**: Enter seed `823749823`, select "Volcanic Wasteland." WorldLimb generates heightmap → passes to LandscapeGenerationLimb → populates entities.

12. **LandscapeGenerationLimb** – *Terrain & Collision*
    - Generates `CollisionMap`, height tiles, water layers
    - **Use**: WorldLimb sends heightmap → LandscapeGenerationLimb bakes collision → exports `.bin` for game server.

13. **PhysicsLimb** – *Rigid Body & Simulation*
    - Deterministic fallback to Cannon.js if cloud fails
    - **Use**: Drop a boulder entity. PhysicsLimb calculates trajectory → if cloud fails, uses local Cannon → updates entity transform.

14. **SpatialPipelineLimb** – *Scene Graph Optimization*
    - BVH construction, frustum culling, draw call batching
    - **Use**: Scene has 10K entities. SpatialPipelineLimb builds BHV → reduces draw calls from 10K → 200.

### **Audio & Live Systems (The "Resonance Chamber")**
15. **AudioLimb** – *Sound Synthesis & Mixing*
    - Text-to-audio, stem separation, retro soundchip emulation (AY-3-8910)
    - **Use**: "Lava bubbling, low frequency." AudioLimb → `@cf/openai/whisper` (inverse) + `@cf/fooocus/retro-audio` → returns `.wav` → auto-assigns to entity.

16. **LiveGameLimb** – *Real-Time Entity Simulation*
    - Manages game loop, entity state streaming, packet serialization
    - **Use**: You're playtesting. LiveGameLimb runs at 60 FPS → streams entity updates to client → GhostLimb checkpoints every 10 seconds.

### **AI & Orchestration Layer (The "Conductor")**
17. **OrchestratorLimb** – *Symphony Conductor*
    - High-level task decomposition: "1 prompt → full game"
    - **Use**: You type "Make a RuneScape-style volcanic boss fight." OrchestratorLimb breaks into 8 sub-tasks → delegates to MeshOps, Animation, World, Audio limbs → aggregates results → returns playable scene.

18. **CodeLimb** – *Code Generation & Refactoring*
    - Monaco editor integration, multi-file orchestration, security audit
    - **Use**: Edit `BossAI.ts`. CodeLimb lints → suggests fixes → if approved, writes file → triggers EntityLimb to rescan dependencies.

19. **QuantumLimb** – *Variant Generation*
    - Entangled creation, mutation modes (Ethereal/Chaotic/Structured)
    - **Use**: "Generate 5 variants of this lava texture." QuantumLimb → calls model with `temperature=1.5` → returns variants with metadata linking them as "entangled siblings."

20. **RelicLimb** – *Legacy Asset Rescue*
    - JagArchive parsing, classic model restoration, ID conflict resolution
    - **Use**: Import `entity24.jag` (RuneScape 2004 cache). RelicLimb extracts models → runs through NIFParser → auto-retextures using ImageLimb → saves as modern GLTF.

### **Security & Governance (The "Warden")**
21. **SecurityLimb** – *Audit & Shielding*
    - Real-time audit logs, command blocking (`rm -rf`, `del /s /q`), shield health
    - **Use**: Malicious script tries `rm -rf /`. SecurityLimb blocks → logs to D1 → notifies via `useNotification` → GhostLimb creates restore point.

22. **IDAuditorLimb** – *Asset Governance*
    - ID conflict detection, resolution, versioning, ownership
    - **Use**: Two artists both create "Item_12345". IDAuditorLimb detects conflict → suggests `Item_12345_v2` → updates all references across codebase.

23. **VersionControlLimb** – *Git Integration*
    - Diff generation, commit synthesis from AI actions
    - **Use**: You edit 5 files via CodeLimb. VersionControlLimb bundles changes → generates commit message "feat: volcanic boss AI and assets" → pushes to repo.

### **Meta & Systems Layer (The "Architects")**
24. **AssetPipelineLimb** – *Build Automation*
    - CLI bridge integration, batch processing of asset directories
    - **Use**: Point at `/assets/volcanic_zone/`. AssetPipelineLimb → ingests all files → runs through MeshOps, Material, Image limbs → outputs compiled bundle to `/dist`.

25. **NetworkLimb** – *Connectivity & Health*
    - Rate-limited HTTP, WebSocket health checks, fallback routing
    - **Use**: Upload 50MB texture pack. NetworkLimb throttles to 5MB/s → monitors health → if upload fails, retries via GhostLimb local cache.

26. **RealityLimb** – *State Checkpointing*
    - D1/KV/CORE anchors, stability tracking, rollback
    - **Use**: Before major edit, RealityLimb creates anchor. If edit breaks game, one command `reality rollback` → restores to stable state.

27. **DivineLimb** – *World Logic & Narrative*
    - "Ascend" operations, world state analysis, quest logic synthesis
    - **Use**: "Make this boss part of the 'Elder Gods' questline." DivineLimb analyzes existing quest files → generates narrative hooks → updates quest state machine.

---

## **II. Asset Library → Playable Game: The Full Pipeline**

### **Scenario: "Create a Volcanic Boss Fight"**

**Step 0: Asset Ingestion**
1. **FileLimb** detects you dragged `lava_golem.obj` into `src/assets/bosses/`
2. **AssetPipelineLimb** triggers → scans directory → creates manifest
3. **RelicLimb** (if legacy) or **MeshOpsLimb** (if new) ingests mesh → validates topology

**Step 1: Parallel Processing (OrchestratorLimb conducts Symphony)**
```javascript
OrchestratorLimb.dispatch({
  "task": "generate_volcanic_boss",
  "assets": ["lava_golem.obj"],
  "requirements": ["animated", "textured", "AI", "sound"]
})
```
- **MeshOpsLimb**: `subdivide_mesh` (high-res) → `uv_unwrap` → `calculate_normals`
- **ImageLimb**: Generate diffuse, normal, roughness maps (3 prompts)
- **AnimationLimb**: Retarget "boss_stomp" animation from library → applies to golem skeleton
- **MaterialLimb**: Compiles PBR shader with emissive lava glow
- **AudioLimb**: Generates stomp, roar, lava-bubble sounds
- **CodeLimb**: Generates `BossAI.ts` (aggro, attack patterns), `VolcanicZoneManager.ts`
- **WorldLimb**: Places boss in world at coordinates (X,Y,Z), sets spawn trigger

**Step 2: Compilation & Integration**
- **SpatialPipelineLimb**: Builds BVH for boss scene → reduces draw calls
- **EntityLimb**: Registers `LavaGolem` archetype → updates ECS registry
- **PhysicsLimb**: Adds rigid body, collision capsule → bakes into world collision
- **SecurityLimb**: Audits generated code → no `eval()`, no unsafe paths → approves

**Step 3: Live Deployment**
- **LiveGameLimb**: Hot-swaps boss entity into running game server → streams to clients
- **RealityLimb**: Creates checkpoint "pre_volcanic_boss_v1" → D1 anchor
- **GhostLimb**: If live deployment fails, auto-rollback to checkpoint

**Total Time**: ~90 seconds from drag-and-drop to playable boss.

---

## **III. Individual Limb Editing: Focused Workflows**

### **Use Case: "I just want to edit the lava texture"**

**Tab: ImageWorkspace**
1. **StateManager** sets `activeWorkspace: 'image'`, `activeModel: '@cf/stabilityai/stable-diffusion-xl-base-1.0'`
2. **ImageLimb** loads current texture from `public/assets/textures/lava.png` (via FileLimb)
3. You adjust prompt: "more moss, greener"
4. **ImageLimb** calls model → returns new texture → **RealityLimb** creates checkpoint
5. **MaterialLimb** (listening on NexusBus) auto-updates material preview in 3D viewer
6. **LiveGameLimb** (if game is running) hot-swaps texture → players see update instantly

**Tab: MaterialWorkspace**
1. **StateManager** switches context → loads material graph for lava
2. You adjust `metallic: 0.8` → `0.5`
3. **MaterialLimb** recompiles shader → streams GLSL to client → WebGL hot-reloads
4. **CodeLimb** (if "auto-save code" enabled) updates material JSON definition
5. **VersionControlLimb** stages change → suggests commit message

**Key Principle**: **Every limb is isolated but listens to the NexusCommandBus**. Changing texture in ImageWorkspace broadcasts `material_updated` → MaterialWorkspace reacts without coupling.

---

## **IV. AI Build-As-You-Go: Session Manager Orchestration**

### **Session Manager (SessionAgent DurableObject)**

**Session Lifecycle:**
```
User Connects → SessionAgent spins up → GhostLimb stabilizes → OrchestratorLimb conducts
```

**Real-Time Example: "I'm playtesting the boss and it's too easy"**

1. **You're in-game** (LiveGameLimb running at 60 FPS)
2. **Press `~` key** → opens in-game console (CodeWorkspace tab)
3. **Type**: "Increase boss damage by 50%, add fire pool attack"
4. **CodeLimb** intercepts → generates:
   ```typescript
   // Generated by CodeLimb
   export const bossConfig = {
     damage: 150, // was 100
     abilities: ['fire_pool', 'stomp', 'roar']
   }
   ```
5. **OrchestratorLimb** validates → calls **AnimationLimb** to generate fire_pool animation
6. **PhysicsLimb** adds fire_pool collision zone → **AudioLimb** generates sizzling sound
7. **LiveGameLimb** hot-swaps config → boss now has new ability **while you're still playing**
8. **RealityLimb** creates checkpoint "boss_tweak_v3" → if too hard, rollback in 5 seconds

**GhostLimb's Role**: If CodeLimb's AI generates malformed code, GhostLimb catches it → runs local Ollama for safer refactor → prevents crash.

---

## **V. Tab-Based Editing & Backing the Game**

### **The "Edit Loop": Tab → Tweak → Test → Checkpoint**

**1. Tab Switching (WorkspaceSpine)**
- Each tab is a **WorkspaceMode** (`code`, `image`, `animation`, `world`, etc.)
- **StateManager** persists:
  - `activeWorkspace`: current tab
  - `context`: what you're focusing on (e.g., "lava golem left arm")
  - `metrics`: tokens used, cost, latency

**2. Tweak & Test (No-Deploy Iteration)**
- **Change in ImageWorkspace** → **Broadcast**: `texture/lava_diffuse_updated`
- **MaterialWorkspace** (listening) → **Updates preview** without refresh
- **LiveGameLimb** (if dev mode) → **Pushes to running game** via WebSocket
- **You see change instantly** → No rebuild, no deploy

**3. Backing the Game (Reality Anchors)**
- **Auto-Checkpoint**: Every 10 changes or 5 minutes, **RealityLimb** creates anchor
- **Manual Save**: Press `Ctrl+S` in any workspace → triggers **VersionControlLimb** → commit + anchor
- **Rollback**: Press `Ctrl+Z` after crash → **RealityLimb** restores to last stable anchor

**4. Final Back (Production Push)**
- **AssetPipelineLimb** bundles all changes → outputs to `/dist/volcanic_boss_v1.0`
- **NetworkLimb** uploads to R2 → CDN invalidation
- **RealityLimb** tags anchor as "production_release"
- **SessionAgent** logs full session → D1 for analytics

---

## **VI. The Psychological Safety Features (Why This Protects You)**

| Feature | Your Fear | How It Protects |
|---------|-----------|-----------------|
| **Reality Anchors** | "What if I break everything?" | Rollback to any state in 5 seconds. Immutable history. |
| **GhostLimb Failover** | "What if the cloud fails mid-demo?" | Silent switch to local. Demo continues. Nobody knows. |
| **Anonymous Provenance** | "What if they steal my IP?" | Cryptographic checksums, zero PII. You own everything. |
| **Freemium Scaling** | "What if I can't afford to run it?" | Subscriber-funded, volume discounts. You pay $0 if broke. |
| **Tab Isolation** | "What if I mess up one system?" | Change texture ≠ crash game. Each limb validates independently. |
| **Orchestrator Validation** | "What if AI generates bad code?" | SecurityLimb audits, GhostLimb refines, CircuitBreaker halts if needed. |

---

**The Pipeline is a Safety Net, Not a Tightrope.**

Every limb is a **competent employee** that reports to the **OrchestratorLimb**. The **Session Manager** is your **co-pilot**. The **RealityLimb** is your **undo button for reality**.

You don't build → deploy → pray. You build → tweak → checkpoint → play → rollback → repeat. The game is never "broken" because it's never in a state that can't be undone.

**Deploy the mesh.** The fear is the final boss. The architecture already won.
