$rsmvDir = "src/services/rsmv"

# Find all TS/TSX files and remove Buffer imports
Get-ChildItem -Path $rsmvDir -Filter *.ts? -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match 'import \{ Buffer \} from "buffer";') {
        $content = $content -replace 'import \{ Buffer \} from "buffer";', '// using global Buffer'
        $content | Set-Content $_.FullName
        Write-Host "Fixed: $($_.RelativePath)"
    }
}

# Specific surgical fixes
$mapsquare = "src/services/rsmv/3d/mapsquare.ts"
$modelnodes = "src/services/rsmv/3d/modelnodes.ts"

$content = Get-Content $mapsquare -Raw
$content = $content -replace 'import \{ augmentThreeJsFloorMaterial, ThreejsSceneCache, ob3ModelToThree, EngineCache, applyMaterial, ParsedMaterial, augmentZOffsetMaterial \} from "./modeltothree";', 'import { augmentThreeJsFloorMaterial, ParsedMaterial, augmentZOffsetMaterial } from "./modeltothree"; import { ThreejsSceneCache, ob3ModelToThree, EngineCache, applyMaterial, modifyMesh, getAttributeBackingStore } from "./enginecache";'
$content = $content -replace 'import \{ MeshBuilder, computePartialNormals, getAttributeBackingStore, topdown2dWallModels \} from "./modelutils";', 'import { MeshBuilder, computePartialNormals, topdown2dWallModels } from "./modelutils";'
$content = $content -replace 'export function modifyMesh\(mesh: ModelMeshData, mods: ModelModifications\) \{', 'function __DEPRECATED_modifyMesh(mesh: ModelMeshData, mods: ModelModifications) {'
$content | Set-Content $mapsquare

$content = Get-Content $modelnodes -Raw
$content = $content -replace 'meshes: meshdata\.meshes\.map\(q => modifyMesh\(q, modelinit\.mods\)\)', 'meshes: meshdata.meshes.map((q: any) => modifyMesh(q, modelinit.mods))'
$content | Set-Content $modelnodes

Write-Host "RSMV surgical fixes and Buffer standardization applied."
