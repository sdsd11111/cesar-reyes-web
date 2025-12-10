// Función para formatear el slug de categoría a un nombre legible
export const formatCategory = (category: string): string => {
  if (!category) return "Sin categoría";
  
  // Mapeo de categorías a sus versiones formateadas
  const categoryMap: {[key: string]: string} = {
    'desarrollo-web': 'Desarrollo Web',
    'automatizacion': 'Automatización',
    'diseno-web': 'Diseño Web',
    'marketing-digital': 'Marketing Digital',
    'asesoria': 'Asesoría',
    'analisis-estrategico': 'Análisis Estratégico',
    'posicionamiento-marca': 'Posicionamiento de Marca',
    'programacion': 'Programación',
    'ia': 'Inteligencia Artificial',
    'ia-y-negocios-en-latam': 'IA y Negocios en LATAM',
    'pensamiento-estrategico-y-adaptacion': 'Pensamiento Estratégico',
    'proposito-autoconocimiento-liderazgo': 'Liderazgo'
  };

  // Si la categoría está en el mapa, devolver su versión formateada
  if (categoryMap[category]) {
    return categoryMap[category];
  }

  // Si no está en el mapa, intentar formatearla
  return category
    .split('-') // Dividir por guiones
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizar cada palabra
    .join(' '); // Unir con espacios
};
