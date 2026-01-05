$files = Get-ChildItem -Path "src" -Filter *.ts? -Recurse
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content -replace 'import\s+\{\s*Buffer\s*\}\s+from\s+["\u0027]buffer["\u0027];?', '// using global Buffer'
    if ($content -ne $newContent) {
        $newContent | Set-Content $file.FullName
        Write-Host "Fixed: $($file.FullName)"
    }
}
