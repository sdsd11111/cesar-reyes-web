import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

// Obtener el directorio actual en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

// Mapeo de slugs a archivos de artículos
const articleMappings = {
  // Artículos de asesoría de negocios para pymes
  'la-fina-linea-entre-la-confianza-y-el-fracaso': 'la_fina_línea_entre_la_confianza_y_el_fracaso_-_césar_reyes.md',
  'fotografia-editorial': 'fotografía_editorial_-_césar_reyes.md',
  'marketing-digital-para-emprendedores': 'marketing_digital_para_emprendedores_-_césar_reyes.md',
  'nichos-de-mercado-que-son-y-como-reconocerlos': 'nichos_de_mercado_qué_son_y_cómo_reconocerlos_-_césar_reyes.md',
  '6-claves-del-exito-2024': '6_claves_del_éxito_2024_-_césar_reyes.md',
  'como-vender-productos-por-internet': 'cómo_vender_productos_por_internet_-_césar_reyes.md',
  'estrategias-de-marketing-digital': 'estrategias_de_marketing_digital_-_césar_reyes.md',
  'seo-y-campanas': 'seo_y_campañas_-_césar_reyes.md',
  'arquitectura-y-estudios-de-mercado': 'arquitectura_y_estudios_de_mercado_-_césar_reyes.md',
  'artesanos-pequenos-empresarios-y-pymes': 'pueden_los_artesanos_pequeños_empresarios_y_pymes_triunfar_en_internet_-_césar_reyes.md',
  'como-vender-algo-en-facebook': 'cómo_vender_algo_en_facebook_-_césar_reyes.md',
  'tarjetas-de-presentacion-con-brillo-uv-selectivo': 'tarjetas_de_presentación_con_brillo_uv_selectivo_-_césar_reyes.md',
  'como-mostrar-tu-catalogo-en-facebook': 'cómo_mostrar_tu_catálogo_en_facebook_-_césar_reyes.md',
  'rendimiento-en-campanas': 'rendimiento_en_campañas_-_césar_reyes.md',
  'basta-de-perder-dinero-en-publicidad-sin-estrategia': 'basta_de_perder_dinero_en_publicidad_sin_estrategia_-_césar_reyes.md',
  'clientes-consultorio-juridico': 'cómo_conseguir_clientes_para_tu_consultorio_jurídico_en_ecuador_-_césar_reyes.md',
  'como-atraer-mas-pacientes': 'cómo_atraer_más_pacientes_-_césar_reyes.md',
  'automatizacion-de-procesos-en-el-estudio-de-arquitectura': 'automatización_de_procesos_en_el_estudio_de_arquitectura_-_césar_reyes.md',
  
  // Artículos de automatización
  'las-mejores-herramientas-para-automatizar-tus-redes-sociales': 'las_mejores_herramientas_para_automatizar_tus_redes_sociales_-_césar_reyes.md',
  'estrategias-de-contenido-como-aumentar-la-interaccion-en-redes-sociales': 'estrategias_de_contenido_cómo_aumentar_la_interacción_en_redes_sociales_-_césar_reyes.md',
  'automatizacion-crecimiento-empresarial-ecuador': 'automatización_y_crecimiento_empresarial_en_ecuador_estrategias_y_beneficios_-_césar_reyes.md',
  'automatizacion-para-pequenos-negocios': 'automatización_en_pequeños_negocios_estrategias_-_césar_reyes.md',
  'automatiza-tu-pequeno-negocio': 'automatiza_tu_pequeño_negocio_-_césar_reyes.md',
  'el-final-de-una-era-automatizacion-para-pequenos-negocios': 'el_final_de_una_era_automatización_para_pequeños_negocios_-_césar_reyes.md',
  'catalogo-electronico': 'catálogo_electrónico_-_césar_reyes.md',
  'automatizacion-para-pymes-en-2025': 'tendencias_de_automatización_para_pymes_en_2025_-_césar_reyes.md',
  'eficiencia-energetica-y-automatizacion': '2025_eficiencia_energética_y_automatización_en_pymes_es_el_futuro_-_césar_reyes.md',
  'automatiza-tu-empresa': 'automatiza_tu_empresa_-_césar_reyes.md',
  'automatizacion-de-redes-sociales': 'automatización_de_redes_sociales_cómo_ahorrar_tiempo_y_mejorar_tu_estrategia_de_costos_-_césar_reyes.md',
  
  // Artículos de diseño web
  'deja-de-perder-tiempo-y-dinero-necesitas-una-pagina-web-profesional': 'deja_de_perder_tiempo_y_dinero_necesitas_una_página_web_profesional_-_césar_reyes.md',
  'pagina-web': '10_consejos_para_diseñar_una_página_web_efectiva_-_césar_reyes.md',
  'que-es-un-sitio-web-y-cual-es-su-proposito': 'qué_es_un_sitio_web_y_cual_es_su_propósito_-_césar_reyes.md',
  
  // Planificación estratégica
  'mujeres-artesanas-del-ecuador': 'mujeres_artesanas_del_ecuador_-_césar_reyes.md',
  'gestion-de-redes-sociales-la-verdad-detras-del-costo-de-venta': 'gestión_de_redes_sociales_la_verdad_detrás_del_costo_de_venta_-_césar_reyes.md',
  'tus-competidores-se-estan-llevando-tus-clientes': 'tus_competidores_se_están_llevando_tus_clientes_-_césar_reyes.md',
  'oportunidades-de-negocio': 'oportunidades_de_negocio_-_césar_reyes.md',
  
  // SEO y marketing
  'facebook-caido': 'facebook_caído_-_césar_reyes.md',
  'seo-artesanos-profesionales-empresarios': 'aumenta_ventas_con_seo_para_artesanos_y_profesionales_-_césar_reyes.md',
  
  // Categoría sin categoría
  'tarjetas-digitales': 'qué_son_tarjetas_digitales_-_césar_reyes.md',
  'como-mostrar-tus-productos-y-servicios-de-manera-efectiva': 'diseños_de_catálogos_digitales_en_loja_-_ecuador_-_césar_reyes.md'
};

// Mapeo de slugs a rutas completas
const urlMappings = {
  // Artículos de automatización
  'las-mejores-herramientas-para-automatizar-tus-redes-sociales': 'articulos-sobre-automatizacion-para-tu-empresa/las-mejores-herramientas-para-automatizar-tus-redes-sociales',
  'estrategias-de-contenido-como-aumentar-la-interaccion-en-redes-sociales': 'articulos-sobre-automatizacion-para-tu-empresa/estrategias-de-contenido-como-aumentar-la-interaccion-en-redes-sociales',
  'automatizacion-crecimiento-empresarial-ecuador': 'articulos-sobre-automatizacion-para-tu-empresa/automatizacion-crecimiento-empresarial-ecuador',
  'automatizacion-para-pequenos-negocios': 'articulos-sobre-automatizacion-para-tu-empresa/automatizacion-para-pequenos-negocios',
  'automatiza-tu-pequeno-negocio': 'articulos-sobre-automatizacion-para-tu-empresa/automatiza-tu-pequeno-negocio',
  'el-final-de-una-era-automatizacion-para-pequenos-negocios': 'articulos-sobre-automatizacion-para-tu-empresa/el-final-de-una-era-automatizacion-para-pequenos-negocios',
  'catalogo-electronico': 'articulos-sobre-automatizacion-para-tu-empresa/catalogo-electronico',
  'automatizacion-para-pymes-en-2025': 'articulos-sobre-automatizacion-para-tu-empresa/automatizacion-para-pymes-en-2025',
  'eficiencia-energetica-y-automatizacion': 'articulos-sobre-automatizacion-para-tu-empresa/eficiencia-energetica-y-automatizacion',
  'automatiza-tu-empresa': 'articulos-sobre-automatizacion-para-tu-empresa/automatiza-tu-empresa',
  'automatizacion-de-redes-sociales': 'articulos-sobre-automatizacion-para-tu-empresa/automatizacion-de-redes-sociales',
  'como-mostrar-tus-productos-y-servicios-de-manera-efectiva': 'articulos-sobre-automatizacion-para-tu-empresa/como-mostrar-tus-productos-y-servicios-de-manera-efectiva',
  
  // Artículos de asesoría de negocios
  'la-fina-linea-entre-la-confianza-y-el-fracaso': 'asesoria-de-negocios-para-pymes/la-fina-linea-entre-la-confianza-y-el-fracaso',
  'fotografia-editorial': 'asesoria-de-negocios-para-pymes/fotografia-editorial',
  'marketing-digital-para-emprendedores': 'asesoria-de-negocios-para-pymes/marketing-digital-para-emprendedores',
  'nichos-de-mercado-que-son-y-como-reconocerlos': 'asesoria-de-negocios-para-pymes/nichos-de-mercado-que-son-y-como-reconocerlos',
  '6-claves-del-exito-2024': 'asesoria-de-negocios-para-pymes/6-claves-del-exito-2024',
  'como-vender-productos-por-internet': 'asesoria-de-negocios-para-pymes/como-vender-productos-por-internet',
  'estrategias-de-marketing-digital': 'asesoria-de-negocios-para-pymes/estrategias-de-marketing-digital',
  'seo-y-campanas': 'asesoria-de-negocios-para-pymes/seo-y-campanas',
  'arquitectura-y-estudios-de-mercado': 'asesoria-de-negocios-para-pymes/arquitectura-y-estudios-de-mercado',
  'artesanos-pequenos-empresarios-y-pymes': 'asesoria-de-negocios-para-pymes/artesanos-pequenos-empresarios-y-pymes',
  'como-vender-algo-en-facebook': 'asesoria-de-negocios-para-pymes/como-vender-algo-en-facebook',
  'tarjetas-de-presentacion-con-brillo-uv-selectivo': 'asesoria-de-negocios-para-pymes/tarjetas-de-presentacion-con-brillo-uv-selectivo',
  'como-mostrar-tu-catalogo-en-facebook': 'asesoria-de-negocios-para-pymes/como-mostrar-tu-catalogo-en-facebook',
  'rendimiento-en-campanas': 'asesoria-de-negocios-para-pymes/rendimiento-en-campanas',
  'basta-de-perder-dinero-en-publicidad-sin-estrategia': 'asesoria-de-negocios-para-pymes/basta-de-perder-dinero-en-publicidad-sin-estrategia',
  'clientes-consultorio-juridico': 'asesoria-de-negocios-para-pymes/clientes-consultorio-juridico',
  'como-atraer-mas-pacientes': 'asesoria-de-negocios-para-pymes/como-atraer-mas-pacientes',
  'automatizacion-de-procesos-en-el-estudio-de-arquitectura': 'asesoria-de-negocios-para-pymes/automatizacion-de-procesos-en-el-estudio-de-arquitectura',
  
  // Artículos de diseño web
  'deja-de-perder-tiempo-y-dinero-necesitas-una-pagina-web-profesional': 'articulos-sobre-diseno-web-para-empresas/deja-de-perder-tiempo-y-dinero-necesitas-una-pagina-web-profesional',
  'pagina-web': 'articulos-sobre-diseno-web-para-empresas/pagina-web',
  'que-es-un-sitio-web-y-cual-es-su-proposito': 'articulos-sobre-diseno-web-para-empresas/que-es-un-sitio-web-y-cual-es-su-proposito',
  
  // Planificación estratégica
  'mujeres-artesanas-del-ecuador': 'planificacion-estrategica-para-empresas/mujeres-artesanas-del-ecuador',
  'gestion-de-redes-sociales-la-verdad-detras-del-costo-de-venta': 'planificacion-estrategica-para-empresas/gestion-de-redes-sociales-la-verdad-detras-del-costo-de-venta',
  'tus-competidores-se-estan-llevando-tus-clientes': 'planificacion-estrategica-para-empresas/tus-competidores-se-estan-llevando-tus-clientes',
  'oportunidades-de-negocio': 'planificacion-estrategica-para-empresas/oportunidades-de-negocio',
  
  // SEO y marketing
  'facebook-caido': 'articulos-sobre-seo-y-campanas-de-marketing/facebook-caido',
  'seo-artesanos-profesionales-empresarios': 'articulos-sobre-seo-y-campanas-de-marketing/seo-artesanos-profesionales-empresarios',
  
  // Sin categoría
  'tarjetas-digitales': 'uncategorized/tarjetas-digitales'
};

// Plantilla para las páginas de artículos
const pageTemplate = (articlePath: string) => `import ArticlePage from '@/components/ArticlePage';

export default function Article() {
  return <ArticlePage articlePath="${articlePath}" />;
}
`;

async function generateArticlePages() {
  // Contadores para el resumen
  let successCount = 0;
  let errorCount = 0;
  // Usar __dirname para obtener la ruta correcta
  const basePath = path.join(__dirname, '..', 'app', 'blog');
  const articlesPath = path.join(__dirname, '..', 'articulos', 'articulos_scrapeados_final');
  
  // Verificar si la ruta de artículos existe
  if (!fs.existsSync(articlesPath)) {
    console.error(`❌ No se encontró la carpeta de artículos en: ${articlesPath}`);
    return { successCount: 0, errorCount: 1 };
  }
  
  // Crear las rutas para cada artículo
  for (const [slug, fileName] of Object.entries(articleMappings) as [string, string][]) {
    try {
      // Obtener la ruta completa del artículo desde el mapeo
      const articleUrlPath = urlMappings[slug as keyof typeof urlMappings] || `general/${slug}`;
      
      // Dividir la ruta en partes para crear la estructura de carpetas
      const pathParts = articleUrlPath.split('/');
      const articleSlug = pathParts.pop() || slug;
      const categoryPath = pathParts.join('/');
      
      // Si no hay categoría, usar 'general'
      const category = categoryPath || 'general';
      
      // Crear la ruta completa del directorio
      const dirPath = path.join(basePath, categoryPath, articleSlug);
      const filePath = path.join(dirPath, 'page.tsx');
      
      // Ruta al archivo del artículo (relativa a la raíz del proyecto)
      const articleFilePath = path.join('articulos', 'articulos_scrapeados_final', fileName);
      
      // Verificar si el archivo del artículo existe
      const fullArticlePath = path.join(__dirname, '..', articleFilePath);
      if (!fs.existsSync(fullArticlePath)) {
        console.error(`❌ No se encontró el archivo del artículo: ${fileName}`);
        errorCount++;
        continue;
      }
      
      try {
        // Crear el directorio si no existe
        await mkdir(dirPath, { recursive: true });
        
        // Crear el archivo de la página
        await writeFile(filePath, pageTemplate(articleFilePath));
        
        console.log(`✅ Generado: /blog/${articleUrlPath}`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error al crear la página para ${articleUrlPath}:`, error);
        errorCount++;
      }
    } catch (error) {
      console.error(`❌ Error al generar la página para ${slug}:`, error);
    }
  }
  
  console.log('\n✅ Generación de páginas de artículos completada');
  
  // Retornar los contadores para el resumen
  return { successCount, errorCount };
}

// Ejecutar el script
generateArticlePages()
  .then((result) => {
    // Asegurarse de que siempre tengamos valores por defecto
    const { successCount = 0, errorCount = 0 } = result || {};
    console.log('\n✅ Generación de páginas completada');
    console.log(`📊 Resumen:`);
    console.log(`   - Páginas generadas correctamente: ${successCount}`);
    console.log(`   - Errores: ${errorCount}`);
    
    if (errorCount > 0) {
      console.log('\n⚠️  Algunas páginas no se pudieron generar. Revisa los mensajes de error anteriores.');
    }
  })
  .catch(error => {
    console.error('❌ Error en la generación de páginas:', error);
    process.exit(1);
  });
