$backendRoot = Split-Path -Parent $PSScriptRoot
$pidFile = Join-Path $backendRoot 'native-logs/processes.json'
if (-not (Test-Path -LiteralPath $pidFile)) { Write-Output 'No native process file found.'; exit 0 }
$items = @(Get-Content -LiteralPath $pidFile -Raw | ConvertFrom-Json)
foreach ($item in $items) {
  Stop-Process -Id $item.Id -ErrorAction SilentlyContinue
}
Remove-Item -LiteralPath $pidFile -Force
Write-Output 'Stopped recorded native MindWeave processes.'
