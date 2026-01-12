# Save as POG-ManifestGenerator.ps1
param(
    [string]$AssetsPath = "C:\Users\Destiny\Desktop\New folder\POG-Ultimate\public\assets",
    [string]$OutputPath = "C:\Users\Destiny\Desktop\New folder\POG-Ultimate\public\assets\deployment-manifest.json"
)

$manifest = @{
    generatedAt = Get-Date -Format "o"
    variants    = @{}
}

# Tag deployments based on heuristics
function Get-DeploymentTag($file) {
    if ($file.Name -match "Classic") { return "legacy" }
    if ($file.LastWriteTime -gt (Get-Date).AddMinutes(-10)) { return "latest" }
    if ($file.Length -lt 50000) { return "mobile-variant" }
    return "stable"
}

if (Test-Path $AssetsPath) {
    Get-ChildItem -Path $AssetsPath -Filter "*.js" | Where-Object {
        $_.Name -match '^(?<name>.+?)-(?<hash>[A-Za-z0-9_-]{8,})\.js$'
    } | ForEach-Object {
        $baseName = $matches['name']
        $hash = $matches['hash']
        
        $variant = @{
            hash          = $hash
            size          = $_.Length
            lastModified  = $_.LastWriteTime.ToString("o")
            deploymentTag = Get-DeploymentTag $_
        }
        
        if (-not $manifest.variants[$baseName]) {
            $manifest.variants[$baseName] = @()
        }
        $manifest.variants[$baseName] += $variant
    }
}
else {
    Write-Warning "Assets path not found: $AssetsPath"
}

$manifest | ConvertTo-Json -Depth 10 | Set-Content $OutputPath -Encoding UTF8
Write-Host "✅ Manifest generated: $OutputPath"
