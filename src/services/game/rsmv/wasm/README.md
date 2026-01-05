# RSMV WASM Parser

This directory contains the Rust source code for the RuneScape Model Viewer (RSMV) binary parser.

## Building

To build the WASM module, you need `rust` and `wasm-pack` installed.

```bash
cd src/services/game/rsmv/wasm
wasm-pack build --target web
```

This will generate a `pkg` directory containing the `.wasm` binary and JS bindings.

## Usage

In the parent `index.ts`, we currently have a placeholder integration. Once built, you can import the initialization function from `pkg/rsmv_wasm.js`.

**Note**: The current implementation in `lib.rs` is a stub that returns a procedural cube. The real implementation requires implementing the Jagex proprietary format spec which is internal documentation.
