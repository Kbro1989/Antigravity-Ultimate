# Neural Limbs Registry

The `src/services/ai/limbs` directory contains the specialized "Limbs" of the POG-Ultimate AI system. Each Limb is a modular, capability-focused agent that handles specific domains of logic, enabling the `SessionAgent` to orchestrate complex tasks.

## Core Limbs

*   **`NeuralLimb.ts`**: The abstract base class for all Limbs. Enforces capabilities, manages intents, and provides standard logging/telemetry.
*   **`OrchestratorLimb.ts`**: The central coordinator. Breaks down high-level user intents into sub-tasks and delegates them to other Limbs.
*   **`SystemLimb.ts`**: Handles system-level operations like optimization, diagnostics, and environment configuration.
*   **`CodeLimb.ts`**: Specialized in code generation, refactoring, analysis, and execution (safe sandbox).
*   **`FileLimb.ts`**: Manages file system operations, reading/writing project files, and handling artifacts.
*   **`RelicLimb.ts`**: The bridge to RuneScape Classic and Modern assets. Handles cache reading, decoding, and "Museum" interaction.
*   **`DivineLimb.ts`**: Responsible for "Divine" acts of creation—world synthesis, entity spawning, and high-level game logic generation.

## Media & Perception Limbs

*   **`ImageLimb.ts`**: Handles image generation (Flux, DALL-E) and manipulation.
*   **`VideoLimb.ts`**: Manages video generation and processing.
*   **`AudioLimb.ts`**: Handles Text-to-Speech (TTS), Speech-to-Text (STT), and audio effect generation.
*   **`VisionLimb.ts`**: Provides VLM (Vision Language Model) capabilities to "see" and analyze images.

## Game Engine Limbs

*   **`WorldLimb.ts`**: Manages 3D world state, terrain generation, and scene graph manipulation.
*   **`EntityLimb.ts`**: Handles NPC and player entity logic, behavior, and persistence.
*   **`BehaviorLimb.ts`**: Defines and executes AI behaviors (stat machines, scripts) for game entities.
*   **`PhysicsLimb.ts`**: Interacts with the physics engine (Cannon.js / Ammo.js) for simulation.
*   **`AnimationLimb.ts`**: Generates and manages 3D animations and rigging.
*   **`MaterialLimb.ts`**: Generates PBR materials and textures for 3D assets.
*   **`MeshOpsLimb.ts`**: Performs geometric operations on 3D meshes (simplification, boolean, generation).

## Specialized Services

*   **`IDAuditorLimb.ts`**: Maintains the integrity of asset IDs (the "Golden Record"), preventing conflicts and ensuring canonical truth.
*   **`DataLimb.ts`**: General purpose data scraping, processing, and vector memory interaction.
*   **`NetworkLimb.ts`**: Handles external API requests and network communication.
*   **`SecurityLimb.ts`**: Enforces security policies, validates prompts, and manages access control keys.
*   **`VersionControlLimb.ts`**: Interfaces with Git (via MCP or internal logic) to manage project history.
*   **`ProxyLimb.ts`**: Facilitates communication between the Cloudflare Worker and local/remote proxies.
*   **`QuantumLimb.ts`**: *[Experimental]* Handles high-entropy tasks and provenance verification.
*   **`GhostLimb.ts`**: *[Experimental]* A lingering presence for background tasks and "subconscious" processing.
*   **`RealityLimb.ts`**: *[Experimental]* Bridges virtual and augmented reality contexts.
*   **`SignatureLimb.ts`**: Handles cryptographic signing for verified asset provenance.

## Pipeline Integration

*   **`AssetPipelineLimb.ts`**: Orchestrates the flow of an asset from generation -> optimization -> persistence.
*   **`SpatialPipelineLimb.ts`**: Manages spatial indexing and queries for the 3D world.
*   **`LandscapeGenerationLimb.ts`**: Specialized generator for terrain heightmaps and biomes.
*   **`LiveGameLimb.ts`**: Real-time interaction with the running game client state.

## Usage

Limbs are not instantiated directly but accessed via the `LimbRegistry` in `SessionAgent`. Intents are routed to them via `processIntent`.

```typescript
// Example: Requesting the CodeLimb to generate a function
const result = await limbs.processIntent({
    limbId: 'code',
    action: 'generate',
    payload: {
        language: 'typescript',
        prompt: 'Create a recursive binary search function'
    }
});
```
