# Script para reorganizar la estructura de carpetas del blog
# Crea la estructura de carpetas según la URL deseada

$basePath = "d:\Abel paginas\Cesar Reyes\CASI NOVIEMBRE\cesar-reyes-web-main\app\blog"

# Mueve cada categoría a su propia carpeta dentro de blog
$categorias = @(
    "articulos-sobre-automatizacion-para-tu-empresa",
    "articulos-sobre-diseno-web-para-empresas",
    "articulos-sobre-seo-y-campanas-de-marketing",
    "asesoria-de-negocios-para-pymes",
    "automatizacion",
    "diseno-web",
    "general",
    "planificacion-estrategica-para-empresas",
    "seo-marketing",
    "uncategorized"
)

foreach ($categoria in $categorias) {
    $rutaOrigen = Join-Path $basePath $categoria
    
    # Si es una categoría que contiene artículos, mover su contenido a la raíz de blog
    if (Test-Path $rutaOrigen -PathType Container) {
        Write-Host "Procesando categoría: $categoria"
        
        # Mueve cada artículo a su propia carpeta dentro de blog
        $articulos = Get-ChildItem -Path $rutaOrigen -Directory
        
        foreach ($articulo in $articulos) {
            $nombreArticulo = $articulo.Name
            $rutaDestino = Join-Path $basePath $nombreArticulo
            
            Write-Host "  Moviendo artículo: $nombreArticulo"
            
            # Mueve la carpeta del artículo a la raíz de blog
            Move-Item -Path $articulo.FullName -Destination $rutaDestino -Force
        }
        
        # Elimina la carpeta de categoría si está vacía
        if ((Get-ChildItem -Path $rutaOrigen -Recurse | Measure-Object).Count -eq 0) {
            Remove-Item -Path $rutaOrigen -Recurse -Force
        }
    }
}

Write-Host "Reorganización completada. Verifica la nueva estructura de carpetas."
