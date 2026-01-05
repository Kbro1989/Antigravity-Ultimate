
/**
 * RSMV Binary Schemas
 * These schemas drive the Rust WASM SchemaInterpreter.
 * Extracted from deconstructed webviewer-deconstructed assets.
 */

export const RSMV_SCHEMAS = {
    // Main Index Schema (for cache major/minor indexing)
    INDEX: [
        "struct",
        ["format", "ubyte"],
        ["timestamp", ["match", ["ref", "format"], { ">=6": "uint", "other": 0 }]],
        ["flags", "ubyte"],
        ["$minorindex", "0"],
        ["indices", ["chunkedarray", ["match", ["ref", "format"], { ">=7": "varuint", "other": "ushort" }],
            [["minor", ["accum", "$minorindex", "ushort"]]],
            [["name", ["opt", ["flags", 0, "bitflag"], "uint"]]],
            [["crc", "uint"]],
            [["uncompressed_crc", ["opt", ["flags", 2, "bitflag"], "uint"]]],
            [["size", ["opt", ["flags", 2, "bitflag"], "uint"]]],
            [["uncompressed_size", ["opt", ["flags", 2, "bitflag"], "uint"]]],
            [["encryption_or_hash", ["opt", ["flags", 1, "bitflag"], ["buffer", 64, "hex"]]]],
            [["version", "uint"]],
            [["subindexcount", "varuint"]],
            [["$subindex", "0"], ["subindices", ["array", ["ref", "subindexcount"], ["accum", "$subindex", "ushort"]]]],
            [["subnames", ["opt", ["flags", 0, "bitflag"], ["array", ["ref", "subindexcount"], "uint"]]]]
        ]]
    ],

    // Classic Model Schema (Type 12)
    MODEL: [
        "struct",
        ["footbytes", ["match", "buildnr", { ">=764": 65535, ">=0": ["footer", 2, "ushort"] }]],
        ["colanimcount", ["match", "buildnr", { ">=764": ["footer", 2, "ushort"], ">=0": 0 }]],
        ["unkcount0", ["match", "buildnr", { ">=764": ["footer", 2, "ushort"], ">=0": 0 }]],
        ["uvcount", ["match", ["ref", "footbytes"], { "0xffff": ["footer", 2, "ushort"], "other": 0 }]],
        ["indexbufsize", ["match", ["ref", "footbytes"], { "0xffff": ["footer", 2, "ushort"], "other": ["ref", "footbytes"] }]],
        ["zsize", ["footer", 2, "ushort"]],
        ["ysize", ["footer", 2, "ushort"]],
        ["xsize", ["footer", 2, "ushort"]],
        ["hasbones", ["footer", 1, "bool"]],
        ["hasmaterials", ["match", ["ref", "footbytes"], { "0xffff": ["footer", 1, "bool"], "other": false }]],
        ["flag3", ["footer", 1, "bool"]],
        ["hasalpha", ["footer", 1, "bool"]],
        ["priority", ["footer", 1, "ubyte"]],
        ["extraflags", ["footer", 1, "ubyte"]],
        ["texmapcount", ["match", "buildnr", { ">=764": ["footer", 2, "ushort"], ">=0": ["footer", 1, "ubyte"] }]],
        ["facecount", ["footer", 2, "ushort"]],
        ["vertcount", ["footer", 2, "ushort"]],
        ["header1", ["match", "buildnr", { ">=754": "ubyte", ">=0": 0 }]],
        ["header2", ["match", "buildnr", { ">=764": "ubyte", ">=0": 0 }]],
        ["modelversion", ["match", "buildnr", { ">=764": "ubyte", "other": ["match", ["ref", "extraflags"], { "&8": ["footer", 1, "ubyte"], "other": 0 }] }]],
        ["vertdatasize", ["match", "buildnr", { ">=764": ["ref", "unkcount0"], "other": ["match", ["ref", "extraflags"], { "&16": ["footer", 2, "ushort"], "other": ["ref", "vertcount"] }] }]],
        ["vertflags", ["buffer", ["ref", "vertcount"], "ubyte"]],
        ["tritype", ["buffer", ["ref", "facecount"], "ubyte"]],
        ["facepriority", ["opt", ["priority", 255, "eqnot"], ["buffer", ["ref", "facecount"], "ubyte"]]],
        ["boneids", ["opt", ["hasbones", 1], ["buffer", ["ref", "vertdatasize"]]]],
        ["alpha", ["opt", ["hasalpha", 1], ["buffer", ["ref", "facecount"]]]],
        ["indexbuffer", ["buffer", ["ref", "indexbufsize"]]],
        ["colors", ["buffer", ["ref", "facecount"], "ushort"]],
        ["posx", ["buffer", ["ref", "xsize"]]],
        ["posy", ["buffer", ["ref", "ysize"]]],
        ["posz", ["buffer", ["ref", "zsize"]]]
    ],

    // Modern Mesh Schema (Type 47-ish)
    MESH: [
        "struct",
        ["format", "ubyte"],
        ["version", "ubyte"],
        ["always_0f", "ubyte"],
        ["meshCount", "ubyte"],
        ["unkCount0", "ubyte"],
        ["unkCount1", "ubyte"],
        ["unkCount2", "ubyte"],
        ["unkCount3", "ubyte"],
        ["unkCount4", ["match", { "version>=5": "ubyte", "other": 0 }]],
        ["meshes", ["opt", "version<=3", ["array", ["ref", "meshCount"], ["struct",
            ["$groupFlags", "ubyte"],
            ["unkint", "uint"],
            ["materialArgument", "ushort_le"],
            ["faceCount", "ushort_le"],
            ["hasVertices", ["ref", "$groupFlags", [0, 1], "bitflag"]],
            ["hasVertexAlpha", ["ref", "$groupFlags", [1, 1], "bitflag"]],
            ["hasFaceBones", ["ref", "$groupFlags", [2, 1], "bitflag"]],
            ["hasBoneIds", ["ref", "$groupFlags", [3, 1], "bitflag"]],
            ["isHidden", ["ref", "$groupFlags", [4, 1], "bitflag"]],
            ["hasSkin", ["ref", "$groupFlags", [5, 1], "bitflag"]],
            ["colourBuffer", ["opt", ["hasVertices", 1], ["buffer", ["ref", "faceCount"], "ushort"]]],
            ["alphaBuffer", ["opt", ["hasVertexAlpha", 1], ["buffer", ["ref", "faceCount"], "ubyte"]]],
            ["positionBuffer", ["opt", ["hasVertices", 1], ["buffer", ["ref", "vertexCount"], "short", 3]]]
        ]]]]
    ]
};
