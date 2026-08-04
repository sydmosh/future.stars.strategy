$ErrorActionPreference = "Stop"
$dir = "D:\Projects app\Mosh Books\books-moshoeshoe"
$p = Start-Process -FilePath "cmd.exe" -ArgumentList "/c npm run dev" -WorkingDirectory $dir -RedirectStandardOutput "$dir\dev-server.log" -RedirectStandardError "$dir\dev-server.err.log" -WindowStyle Hidden -PassThru
Write-Output "Started dev server, PID: $($p.Id)"
