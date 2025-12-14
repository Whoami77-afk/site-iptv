Write-Host "Checking environment for this project..." -ForegroundColor Cyan

$node = (Get-Command node -ErrorAction SilentlyContinue)
$npm = (Get-Command npm -ErrorAction SilentlyContinue)

if (-not $node) {
    Write-Host "Node.js não encontrado. Instale Node.js (https://nodejs.org/) ou use nvm." -ForegroundColor Red
} else {
    Write-Host "Node:" (node -v) -ForegroundColor Green
}

if (-not $npm) {
    Write-Host "npm não encontrado. Instale o Node.js para obter npm." -ForegroundColor Red
} else {
    Write-Host "npm:" (npm -v) -ForegroundColor Green
}

if ($node -and $npm) {
    Write-Host "Você pode instalar dependências e rodar o dev com:" -ForegroundColor Cyan
    Write-Host "  npm install" -ForegroundColor Yellow
    Write-Host "  npm run dev" -ForegroundColor Yellow
}
