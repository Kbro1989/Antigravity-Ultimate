## 14. Wrangler CLI Deep Dive: Edge Operations Guide

This section contains the compiled technical documentation for CLI-driven management of POG-Ultimate's edge infrastructure. Use these commands for maintenance, debugging, and scaling.

<details>
<summary><b>🛠️ Development & Deployment (dev, deploy, tail, secret)</b></summary>

#### `wrangler dev`
*Start a local server for developing your Worker.*
- `--remote`: Run on the global Cloudflare network with access to production resources.
- `--persist-to <dir>`: Specify directory for local storage persistence (defaults to `.wrangler/state`).
- `--inspector-port <port>`: Port for devtools to connect to.

#### `wrangler deploy`
*Deploy a Worker to Cloudflare.*
- `--no-bundle`: Skip internal build steps and directly deploy.
- `--dry-run`: Validate the build/deployment without actually deploying.
- `--metafile`: Output build metadata from esbuild for bundle analysis.

#### `wrangler tail`
*Start a log tailing session for a Worker.*
- `--format <json|pretty>`: Choose output format.
- `--status <ok|error|canceled>`: Filter by invocation status (essential for debugging 500s).
- `--search <text>`: Filter by text match in `console.log` messages.

#### `wrangler secret`
*Manage secrets referenced in your Worker.*
- `put <key>`: Create or update a secret.
- `bulk [file]`: Upload multiple secrets at once.
</details>

<details>
<summary><b>📦 Storage & Data Layers (kv, r2, d1)</b></summary>

#### `wrangler kv`
*Manage Workers KV Namespaces.*
- `namespace`: create, delete, list namespaces.
- `key`: put, get, delete, list individual keys.

#### `wrangler r2`
*Manage R2 buckets & objects.*
- `bucket`: create, list, delete buckets.
- `object`: put, get, delete, list objects (e.g., Innovation meshes).

#### `wrangler d1`
*Manage Workers D1 databases.*
- `execute <database> --command "SQL"`: Direct SQL execution for world state fixes.
- `time-travel restore <name> --bookmark`: Restore to a specific point-in-time (Reality Restoration).
- `export <name>`: Backup the world state as a `.sql` file.
</details>

<details>
<summary><b>🧠 AI Infrastructure (ai, vectorize)</b></summary>

#### `wrangler ai`
*Manage Workers AI models and finetuning.*
- `models --json`: List all available models in JSON format for catalog updates.
- `finetune create <model> <name> <folder>`: Upload custom lore models to Cloudflare.

#### `wrangler vectorize`
*Manage Vectorize indexes for RAG/Knowledge Cortex.*
- `query <name>`: Test vector search relevance directly from the terminal.
- `upsert <name>`: Manually inject new knowledge vectors.
- `create-metadata-index <name>`: Enable filtering on metadata properties (e.g., `item_type`).
</details>

---

### 15. Algorithmic Offloading: High-Efficiency Edge Patterns

To optimize the "metabolic rate" of the mesh, we offload structural and procedural tasks from LLMs to the standard Cloudflare Workers runtime (JS/WASM). This reduces token costs, latency, and "hallucination risk" by using deterministic logic for non-creative tasks.

#### **A. Structural Transformation (`HTMLRewriter`)**
Instead of asking an LLM to "Rewrite this HTML to add a sidebar," use `HTMLRewriter` to inject components at the edge.
- **Dynamic Injections**: Use KV values or D1 state to inject user-specific metadata or session-locked features directly into the HTML stream.
- **Micro-Frontend Orchestration**: Stitch together multiple limb outputs without a single large monolithic API response.
- **SEO & OG Generation**: Dynamically modify `<meta>` tags based on R2 entry metadata before the page reaches browsers.

#### **B. Procedural Generation (WASM & Rust)**
For complex geometric or binary tasks, bypass the LLM and use WebAssembly.
- **RSC Forensics**: Use Rust-compiled WASM to parse and reconstruct JagArchives, multiplying efficiency by 10x compared to JS-based parsing.
- **Geometric Synthesis**: Offload 3D mesh modification (decimation, vertex shifts) to WASM modules to keep the "Cortex" focused only on high-level creative intent.
- **Texture Transcoding**: Handle image resizing, color palletization (Pro-64 style), and entropy-based compression in the background.

#### **C. Pre-Processing & Filtering (Token Saving)**
Scrub and normalize data before it hits the `ModelRouter`.
- **PII Scrubbing**: Regex-based removal of sensitive data to maintain "Agent Fidelity" without compromising privacy.
- **Context Summarization (Algorithmic)**: Use simple frequency-based summarization or key-phrase extraction to compress large log files into high-density tokens before LLM ingestion.
- **Lore Context Validation**: Use D1 indices to verify if an item or NPC exists before asking an LLM to "Lookup its history," saving a RAG search cycle.

---

### 16. Media Offloading: Edge Transformation & Synthesis

Extend the "metabolic" strategy to binary media. Instead of using expensive Generative AI for standard image/audio transformations, use the Cloudflare Workers Media Pipeline and Custom WASM.

#### **A. Image Transformation Pipeline**
Leverage native Cloudflare Image Resizing and edge manipulation to save GPU cycles.
- **Dynamic Optimization**: Fetch full-resolution assets from R2 and use `fetch()` options to auto-resize, crop, blur, or convert to WebP/AVIF based on the client's `Accept` header.
- **Conditional Styling**: Inject watermarks or theme-based overlays (e.g., "Gilded Frame" for rare items) using `canvas`-like logic compiled to WASM.
- **Metadata Stripping**: Automatically remove EXIF data at the edge to preserve privacy and reduce file weight.

#### **B. WASM Media Processing (Libraries like Photon)**
Use high-performance Rust/C++ libraries compiled to WASM for effects that LLMs usually handle poorly.
- **Filter Application**: Apply complex visual filters (Grayscale, Pro-64 Color, Vintage Bloom) in sub-millisecond time.
- **Sprite Animation Synthesis**: Procedurally generate sprite sheets from individual PNGs stored in R2, offloading the stitching logic from the client.
- **Binary Transcoding**: Use WASM-based encoders (e.g., mini-FFmpeg stubs) for basic audio format conversions (WAV to MP3) directly in the Worker.

#### **C. Hybrid Browser-Worker Patterns (Heavy Media)**
For tasks exceeding the Worker's memory/CPU limits (like long-form video transcoding or complex 3D rendering), use the "Worker Browser" pattern.
- **Orchestration**: Use a Worker to launch a headless browser instance, execute the media logic (WASM FFmpeg/Three.js) in the browser context, and pipe the result back to R2.
- **Just-in-Time Rendering**: Buffer large audio streams at the edge, applying algorithmic noise reduction before serving to the client.

---

### Appendix A: The Edge Media Cortex (Exhaustive Offloading Matrix)

To achieve "Total Offloading," we utilize the full spectrum of Cloudflare's non-AI edge capabilities to handle media-type transformations. This matrix serves as the authoritative guide for offloading weight from LLMs.

| Media Type | Transformation Pattern | Generative Pattern | Offloading Benefit |
| :--- | :--- | :--- | :--- |
| **Images** | On-demand resizing, blurring, rotation, and auto-format (AVIF/WebP) via `fetch` options. | Dynamic Open Graph (OG) images using `workers-og` (Satori/WASM). | Eliminates GPU-heavy image synthesis for structural UI. |
| **Video** | Frame extraction, clipping, and cropping via Cloudflare Media Transformations. | Spritesheet generation for tile-set animations directly from video sources. | Prevents LLM-based frame analysis for simple visual extraction. |
| **Audio** | Chunked buffering and noise reduction stubs (WASM). | Merging/Concatenation of pre-recorded samples via Browser Rendering + FFmpeg.wasm. | Replaces expensive Text-to-Speech (TTS) for repetitive NPC barks. |
| **SVG** | Dynamic path manipulation and property injection via `HTMLRewriter`. | Real-time mini charts, health bars, and procedural vector icons. | Saves tokens on describing visual status; serves raw data as graphics. |
| **Binary** | JagArchive (RSC) parsing and reconstruction using Rust-compiled WASM. | Procedural noise (Perlin/Simplex) for terrain and texture synthesis. | Highly efficient, deterministic asset hydration at the edge. |
| **Canvas** | Offscreen manipulation using WASM-based stubs (Photon/ImageMagick stubs). | Algorithmic "Pro-64" style dithering and palletization. | Deterministic visual styling that requires zero AI inference. |

#### **Advanced Orchestration: The "Worker Browser" Hybrid**
For tasks that exceed standard Worker CPU/Memory limits (e.g., complex Three.js renders or long FFmpeg transcodes), use the **Browser Rendering API**:
1. **Trigger**: Worker receives a request for a "Complex Render."
2. **Launch**: Worker launches a headless Chrome instance.
3. **Execute**: Browser runs high-fidelity client-side libraries (Three.js, Canvas, Remotion).
4. **Capture**: Screenshot or stream result to R2/Client.

---

### Appendix B: Native Cloudflare Colabs (Integrated Sandboxes)

For rapid iteration without external account overhead, Cloudflare provides a suite of native "Colab-like" environments. These are ideal for testing the "Offloading Matrix" stubs before full integration.

#### **1. Workers Playground (No-Auth Sandbox)**
- **Capability**: Instant browser-level Node.js/Workerd environment.
- **Use Case**: Collaborative code sharing and logic prototyping without needing a Cloudflare account for "read-only" previews.
- **Offloading Link**: Test `HTMLRewriter` transformations or WASM Photon stubs in isolation.
- **URL**: `https://workers.cloudflare.com/playground`

#### **2. Multi-Modal AI Playground**
- **Capability**: Interactive dashboard for chaining LLMs, Text-to-Image, and Audio models.
- **Use Case**: Quick "fidelity testing" of lore prompts before baking them into a limb.
- **Collaboration**: Instant results with zero CLI configuration; ideal for non-technical "Lore Architects."
- **Path**: `Dashboard > AI > Workers AI > AI Playground`

#### **3. D1 Interactive SQL Console**
- **Capability**: Direct SQL editor for D1 production/preview databases.
- **Use Case**: Manual "Reality Restoration" or world-state patching during a live session.
    - [x] Dashboard navigation fix (workspace tiles clickable)
    - [x] Full Documentation Sovereignty refactor
    - [ ] R2 asset pipeline for generated content (Innovation Layer)
    - [ ] Multi-session collaboration via DO
    - [ ] Local Ollama fallback testing (Code-Agent role only)
    Replaces external tools like DBeaver or SQLite Browser for edge-native DBs.
- **Path**: `Dashboard > Storage & Database > D1 > [Database Name] > Console`

#### **4. Workers Dash Editor (Monaco/VS Code)**
- **Capability**: Full in-browser IDE with logs and network profiling.
- **Use Case**: "Hot-fixing" edge logic during a session without local Git/CLI access.
- **Collaboration**: Deploy-to-Preview features allow for instant "collaborative staging" via Cloudflare Pages.

---

**End of Master Strategy Guide.**---

## 17. The Opal v1.0 Update (Sovereign RSC Editor)

As of January 2026, the POG-Ultimate dashboard has been successfully reconstructed into the **Sovereign RSC Editor (Opal v1.0)**. This phase focused on purging all remaining placeholder content and establishing absolute functional truth at the edge.

### Key Reconstruction Milestones:
- **Branding Architecture**: The UI now strictly reflects the **Opal v1.0** core, with the centralized dashboard rebranded as the **Sovereign RSC Node**.
- **Limb Alignment**: All workspace tools in the `WorkspaceSpine` have been mapped to real cloud-native capabilities:
    - **RELC / ARCH**: Archeological restoration of `.jag` archives.
    - **IDEX**: Strict ID range enforcement via the `IDAuditor`.
    - **OPAL**: Neural innovation and procedural asset synthesis.
    - **LOGC**: RSC-native logic script reconstruction.
- **Diagnostic Sovereignty**: Mock "Neurometrics" have been replaced with real-time diagnostic vitals fetched directly from the `DiagnosticService` and `SessionDO`.
- **Relic Matrix Pipeline**: The `OrchestratorWorkspace` now executes real sovereign flows for relic reconstruction (e.g., `config85.jag` restoration) rather than simulated "sector syncs."
- **Asset Integrity**: `AssetHandler` now natively supports and serves RSC-specific binary formats (`.jag`, `.mem`, `.idx`) with correct `octet-stream` headers, enabling high-fidelity game data restoration.

**Status**: The POG Dashboard is now a functional, hardened, and Sovereign representation of the Cloudflare Worker's capabilities. 🏛️🌑

---
"In the convergence of binary history and neural future, we find the POG."
