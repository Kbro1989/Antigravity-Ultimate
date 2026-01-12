# Save as Deploy-POG.ps1
param([switch]$Force = $false)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$AssetsPath = "C:\Users\Destiny\Desktop\New folder\POG-Ultimate\public\assets"

# 1. Generate fresh manifest
& "$ScriptDir\POG-ManifestGenerator.ps1"

# 2. Analyze size deltas (find bloat)
$manifestPath = "$AssetsPath\deployment-manifest.json"
if (Test-Path $manifestPath) {
    $manifest = Get-Content $manifestPath | ConvertFrom-Json
    foreach ($ws in $manifest.variants.PSObject.Properties.Name) {
        $variants = $manifest.variants.$ws
        if ($variants.Count -gt 1) {
            $sizes = $variants | ForEach-Object { $_.size }
            $max = ($sizes | Measure-Object -Maximum).Maximum
            $min = ($sizes | Measure-Object -Minimum).Minimum
            $delta = $max - $min
            if ($delta -gt 100000) {
                # 100KB variance
                Write-Warning "$ws has $($delta/1KB)KB size variance - potential optimization target"
            }
        }
    }
}

# 3. Sync to Cloudflare (only active variants)
if ($Force) {
    Write-Host "Syncing manifest to R2..."
    # Assuming wrangler is in path or use npx
    npx wrangler r2 object put antigravity-assets/deployment-manifest.json --file "$manifestPath"
    
    # Also sync routing if exists
    if (Test-Path "$manifestPath.routing") {
        npx wrangler r2 object put antigravity-assets/deployment-manifest.json.routing --file "$manifestPath.routing"
    }

    # Sync Variant Assets to R2 for Permanent Storage (RealityLimb)
    Get-ChildItem -Path $AssetsPath -Filter "*.js" | Where-Object {
        $_.Name -match '^(?<name>.+?)-(?<hash>[A-Za-z0-9_-]{8,})\.js$'
    } | ForEach-Object {
        $r2Key = "assets/" + $_.Name
        Write-Host "Uploding variant to R2: $r2Key"
        npx wrangler r2 object put antigravity-assets/$r2Key --file $_.FullName
    }
    
    Write-Host "☁️  Manifest and Variants synced to R2"
}
else {
    Write-Host "Dry run complete. Use -Force to execute R2 sync."
}

# 4. Purge old variants (30 day retention)
# (Commented out for safety as requested - we keep variants for Chaos functionality)
# $cutoff = (Get-Date).AddDays(-30)
# Get-ChildItem -Path $AssetsPath -Filter "*.js" | Where-Object {
#    $_.LastWriteTime -lt $cutoff -and $_.Name -match '-[A-Za-z0-9_-]{8,}\.js$'
# } | Remove-Item -WhatIf:$(-not $Force)

Write-Host "🚀 Deploy sequence ready."
