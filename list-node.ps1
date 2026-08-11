Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -eq 3000 -or $_.LocalPort -eq 3001 } | Select-Object LocalAddress, LocalPort, OwningProcess | Format-List
Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" | Where-Object { $_.CommandLine -like '*books-moshoeshoe*' } | Select-Object ProcessId, ParentProcessId, CommandLine | Format-List
