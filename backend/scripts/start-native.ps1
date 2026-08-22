$ErrorActionPreference = 'Stop'

$backendRoot = Split-Path -Parent $PSScriptRoot
$workspaceRoot = Split-Path -Parent $backendRoot
$logRoot = Join-Path $backendRoot 'native-logs'
$pidFile = Join-Path $logRoot 'processes.json'
New-Item -ItemType Directory -Path $logRoot -Force | Out-Null

$services = @(
  @{ Name = 'iam-service'; Port = 3001; Entry = 'services/iam-service/dist/server.js' },
  @{ Name = 'academic-service'; Port = 3002; Entry = 'services/academic-service/dist/server.js' },
  @{ Name = 'commerce-service'; Port = 3003; Entry = 'services/commerce-service/dist/server.js' },
  @{ Name = 'live-exam-service'; Port = 3004; Entry = 'services/live-exam-service/dist/server.js' },
  @{ Name = 'notification-service'; Port = 3005; Entry = 'services/notification-service/dist/server.js' },
  @{ Name = 'admin-service'; Port = 3006; Entry = 'services/admin-service/dist/server.js' },
  @{ Name = 'student-service'; Port = 3007; Entry = 'services/student-service/dist/server.js' },
  @{ Name = 'school-service'; Port = 3008; Entry = 'services/school-service/dist/server.js' },
  @{ Name = 'cms-service'; Port = 3009; Entry = 'services/cms-service/dist/server.js' },
  @{ Name = 'file-service'; Port = 3010; Entry = 'services/file-service/dist/server.js' },
  @{ Name = 'analytics-service'; Port = 3011; Entry = 'services/analytics-service/dist/server.js' },
  @{ Name = 'worker-service'; Port = 0; Entry = 'services/worker-service/dist/worker.js' },
  @{ Name = 'api-gateway'; Port = 3000; Entry = 'services/api-gateway/dist/server.js' }
)

$started = @()
foreach ($service in $services) {
  $entry = Join-Path $backendRoot $service.Entry
  if (-not (Test-Path -LiteralPath $entry)) { throw "Missing compiled entry: $entry" }
  if ($service.Port -and (Get-NetTCPConnection -LocalPort $service.Port -State Listen -ErrorAction SilentlyContinue)) {
    Write-Output "$($service.Name): port $($service.Port) already in use; skipped"
    continue
  }
  $stdout = Join-Path $logRoot "$($service.Name).stdout.log"
  $stderr = Join-Path $logRoot "$($service.Name).stderr.log"
  $process = Start-Process -FilePath 'node.exe' -ArgumentList @('--max-old-space-size=96', $entry) `
    -WorkingDirectory $backendRoot -WindowStyle Hidden -RedirectStandardOutput $stdout `
    -RedirectStandardError $stderr -PassThru
  $started += [pscustomobject]@{ Name = $service.Name; Id = $process.Id; Port = $service.Port }
  Start-Sleep -Milliseconds 350
}

if (-not (Get-NetTCPConnection -LocalPort 5173 -State Listen -ErrorAction SilentlyContinue)) {
  $frontendRoot = Join-Path $workspaceRoot 'frontend'
  $frontendOut = Join-Path $logRoot 'frontend.stdout.log'
  $frontendErr = Join-Path $logRoot 'frontend.stderr.log'
  $frontend = Start-Process -FilePath 'npm.cmd' -ArgumentList @('run','dev','--','--host','127.0.0.1') `
    -WorkingDirectory $frontendRoot -WindowStyle Hidden -RedirectStandardOutput $frontendOut `
    -RedirectStandardError $frontendErr -PassThru
  $started += [pscustomobject]@{ Name = 'frontend'; Id = $frontend.Id; Port = 5173 }
}

$started | ConvertTo-Json | Set-Content -LiteralPath $pidFile
$started | Format-Table -AutoSize

