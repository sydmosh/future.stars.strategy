try {
  $r = Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing -TimeoutSec 90
  Write-Output ("HTTP " + $r.StatusCode)
} catch {
  Write-Output ("ERR: " + $_.Exception.Message)
}
