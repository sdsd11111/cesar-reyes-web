$sourceDir = "D:\Abel paginas\Cesar Reyes\CASI NOVIEMBRE\cesar-reyes-web-main\articulos\articulos_scrapeados_final"
$targetBase = "D:\Abel paginas\Cesar Reyes\CASI NOVIEMBRE\cesar-reyes-web-main\content\blog"

# Mapeo de palabras clave a carpetas
$categoryMap = @{
    "asesor" = "asesoria"
    "pyme" = "asesoria"
    "emprendedor" = "asesoria"
    "negocio" = "asesoria"
    "automatiza" = "automatizacion"
    "automatización" = "automatizacion"
    "diseño" = "diseno-web"
    "web" = "diseno-web"
    "página" = "diseno-web"
    "sitio" = "diseno-web"
    "seo" = "seo"
    "marketing" = "seo"
    "redes" = "seo"
    "facebook" = "seo"
    "estrategia" = "estrategia"
    "plan" = "estrategia"
    "competidor" = "estrategia"
    "mercado" = "estrategia"
}

# Función para determinar la categoría basada en el nombre del archivo
function Get-Category {
    param ([string]$fileName)
    
    $lowerName = $fileName.ToLower()
    
    foreach ($key in $categoryMap.Keys) {
        if ($lowerName -match $key) {
            return $categoryMap[$key]
        }
    }
    
    return "varios"
}

# Crear directorio de respaldo
$backupDir = "$targetBase\backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null

# Mover archivos
Get-ChildItem -Path $sourceDir -Filter "*.md" | ForEach-Object {
    $category = Get-Category -fileName $_.Name
    $targetDir = Join-Path -Path $targetBase -ChildPath $category
    $targetFile = Join-Path -Path $targetDir -ChildPath $_.Name
    
    # Crear directorio de destino si no existe
    if (-not (Test-Path -Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }
    
    # Mover el archivo
    Move-Item -Path $_.FullName -Destination $targetFile -Force
    
    # Crear copia de respaldo
    Copy-Item -Path $_.FullName -Destination (Join-Path -Path $backupDir -ChildPath $_.Name) -Force
    
    Write-Host "Movido: $($_.Name) -> $targetFile"
}

Write-Host "\nProceso completado. Se creó una copia de respaldo en: $backupDir"
