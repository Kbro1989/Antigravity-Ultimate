# POG Ultimate: The Recursive Agentic Engine

**"No mock stubs. Real geometry. AI-to-AI orchestration."**

POG Ultimate is a production-grade, recursive AI infrastructure designed to automate the entire lifecycle of game development, from asset generation to code orchestration. It simulates a "Maze" of interconnected neural limbs, each handling a specialized cognitive domain.

---

## 🏛️ System Architecture: "The Maze"

The architecture is designed as a centralized Nexus managing specialized Gates (Workspaces) through a secure Tunnel (Bridge).

### 1. The Nexus (Core)
*   **ServiceHub (`src/services/`):** The beating heart of the engine. Routes intelligence, manages costs, and dispatches intents.
*   **LimbRegistry (`LimbRegistry.ts`):** The "Neural Vault" where 23+ specialized AI agents are docked and ready for hot-loading.
*   **Orchestrator (`OrchestratorLimb`):** The "Brain within the Brain". Capable of breaking down high-level user prompts into multi-step execution graphs.

### 2. The Gates (Workspaces)
The Frontend (`src/frontend/components/workspaces`) creates specialized viewports for interacting with the Neural Limbs:
*   **Foundry Gates:** `CodeWorkspace`, `CreativeWorkspace`, `NetworkWorkspace`.
*   **Artisan Gates:** `MeshWorkspace`, `MaterialWorkspace`, `AnimationWorkspace`, `VideoWorkspace`.
*   **Ops Gates:** `SystemWorkspace`, `DataWorkspace`, `FileWorkspace`, `SecurityWorkspace`.
*   **The Forbidden Gates (Esoteric):** `Divine`, `Quantum`, `Reality`, `Relic`, `Ghost`.

### 3. The Tunnel (Bridge)
*   **CLIBridge:** A secure websocket tunnel connecting the web-based "Brain" to the local host OS.
*   **Capabilities:** Allows file system access, shell command execution, and local process management (Runescape Client, Blender, etc.) from the web UI.

---

## 🧠 The Neural Armory (23+ Limbs)

The engine is powered by specialized "Limbs" — isolated AI agents, each with a specific Constitution and Capabilities.

### 🏗️ 3D & Spatial Domain
*   **MeshOpsLimb:** Geometry processing, remeshing, and decimation.
*   **MaterialLimb:** PBR shader generation (`generate_shader`), texture baking.
*   **AnimationLimb:** Motion synthesis and retargeting (`retarget_motion`).
*   **PhysicsLimb:** Rigid body simulations and force calculations.
*   **SpatialPipelineLimb:** End-to-end geometry synthesis pipeline.
*   **WorldLimb:** Terrain generation (`generate_terrain`) and biome distribution.

### 🎨 Media & Art Domain
*   **ImageLimb:** Concept art, texture generation, and image editing.
*   **VideoLimb:** Video generation, interpolation, and upscaling (`upscale`).
*   **AudioLimb:** Sound FX synthesis and music composition.
*   **AssetPipelineLimb:** Orchestrates the flow from Concept -> Model -> Game Asset.

### 🔧 Core & Infrastructure
*   **CodeLimb:** Full-stack coding, refactoring, and static analysis.
*   **FileLimb:** File manipulation and provenance auditing (`audit_provenance`).
*   **SystemLimb:** Resource monitoring and optimization (`optimize_resources`).
*   **DataLimb:** D1/KV database management and cache pruning (`prune_cache`).
*   **NetworkLimb:** Connectivity diagnostics and limb-to-limb pinging.
*   **SecurityLimb:** Constitutional enforcement and emergency lockdowns.
*   **EntityLimb:** Management of game entities and NPC agents.

### 👻 Esoteric & Meta Domain
*   **GhostLimb:** Self-healing, error correction (`reconduct`), and stabilization.
*   **DivineLimb:** High-level "God Mode" intent manifestation (`manifest_reality`).
*   **QuantumLimb:** Handling non-local state and entanglement (`entangle_limbs`).
*   **RealityLimb:** Persistence anchoring and cache convergence (`anchor_convergence`).
*   **RelicLimb:** Legacy data excavation and restoration (`excavate_cache`).

### 🎮 Live Operations
*   **LiveGameLimb:** WebSocket interface for real-time game client interaction.

---

## 🔄 Pipelines

### 1. The Asset Pipeline
**Concept → Game Object**
1.  **ImageLimb** generates concept art from prompt.
2.  **MeshOpsLimb** converts 2D -> 3D geometry.
3.  **MaterialLimb** synthesizes PBR textures and shaders.
4.  **AnimationLimb** rigs and retargets motion.
5.  **AssetPipelineLimb** packages it for the game engine.

### 2. The Media Enhancement Pipeline
**Raw → Cinema**
1.  **VideoLimb** accepts raw footage or generates from text.
2.  **VideoLimb** (`interpolates`) to high FPS.
3.  **VideoLimb** (`upscale`) to 4K/8K resolution.

### 3. The Ghost Reconduction Pipeline
**Failure → Stability**
1.  **Orchestrator** detects an execution failure.
2.  **GhostLimb** wakes up and captures the error context.
3.  **GhostLimb** performs `reconduct`, rewinding state to a "Reality Anchor".
4.  **GhostLimb** patches the faulty logic and re-runs the graph.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v20+
- Python 3.11+
- Cloudflare Wrangler (for local dev)

### Setup
1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Start the Bridge (Local Host):**
    ```bash
    npm run bridge
    ```
3.  **Start the Brain (Web UI):**
    ```bash
    npm run dev
    ```

### Deployment
The engine supports "Self-Replication":
```bash
npm run deploy:all
```

---

## ⚖️ License & Capability
*   **Recursive Moat:** The AI can modify its own tools (with user permission).
*   **Universal Access:** Capable of interacting with any local file or process exposed via the Bridge.

*Powered by Agentic Intelligence.*
