# Save as Set-ActiveVariant.ps1
param(
    [string]$Workspace,
    [string]$TargetHash,
    [string]$ManifestPath = "C:\Users\Destiny\Desktop\New folder\POG-Ultimate\public\assets\deployment-manifest.json"
)

if (-not (Test-Path $ManifestPath)) {
    Write-Error "Manifest not found at $ManifestPath"
    exit 1
}

$manifest = Get-Content $ManifestPath | ConvertFrom-Json -Depth 10

# Find the variant
$variants = $manifest.variants.$Workspace
$active = $variants | Where-Object { $_.hash -eq $TargetHash }

if (-not $active) {
    Write-Error "Variant $TargetHash not found for $Workspace"
    exit 1
}

# Mark active (in memory representation for now, normally we'd save this state)
# For the purpose of this script, we'll generate the routing config directly.

# Generate runtime routing config
$routingConfig = @{
    activeVariants = @{}
}

# Preserve existing active variants if routing file exists
$routingPath = "$ManifestPath.routing"
if (Test-Path $routingPath) {
    $existing = Get-Content $routingPath | ConvertFrom-Json
    if ($existing.activeVariants) {
        foreach ($key in $existing.activeVariants.PSObject.Properties.Name) {
            $routingConfig.activeVariants[$key] = $existing.activeVariants.$key
        }
    }
}

# Update the specific workspace
$routingConfig.activeVariants[$Workspace] = $TargetHash

$routingConfig | ConvertTo-Json -Depth 10 | Set-Content $routingPath -Encoding UTF8
Write-Host "🎯 Activated $Workspace → $TargetHash"
Write-Host "Routing config saved to $routingPath"
