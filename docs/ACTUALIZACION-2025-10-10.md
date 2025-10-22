# Actualización 2025-10-10

## Cambios principales

- **[nuevas páginas de servicio]**
  - `app/servicios/analisis-estrategico/estrategia-ganar-clientes/page.tsx`
  - `app/servicios/analisis-estrategico/plan-salir-google/page.tsx`
  - `app/servicios/analisis-estrategico/analisis-competencia/page.tsx`
  - `app/servicios/analisis-estrategico/consultoria-empresarial/page.tsx`
  - `app/servicios/analisis-estrategico/estudio-factibilidad/page.tsx`
  - `app/servicios/analisis-estrategico/reingenieria-procesos/page.tsx` (completada con 4 tabs, beneficios y CTA)

- **[MegaMenu]** `components/mega-menu/MegaMenu.tsx`
  - **Estructura**: restaurado y tipado `const categorias: Categoria[]`.
  - **Servicios añadidos** en categoría `Análisis Estratégico` (slug `analisis-estrategico`):
    - Estrategia para Ganar Clientes (`estrategia-ganar-clientes`)
    - Plan para Salir en Google (`plan-salir-google`)
    - Análisis de la Competencia (`analisis-competencia`)
    - Consultoría Empresarial (`consultoria-empresarial`)
    - El Antes de Endeudarte (`estudio-factibilidad`)
    - Procesos Lentos y Caros (`reingenieria-procesos`)
  - **Rutas**: `href={/servicios/${activeCategory.slug}/${serv.slug}}` para soportar múltiples categorías.
  - **Apertura en nueva pestaña**: `target="_blank"` y `rel="noopener noreferrer"` en cada link.
  - **UX submenú**:
    - Eliminado el encabezado del submenú (título de la categoría) en la columna izquierda.
    - Eliminadas descripciones bajo cada enlace; solo se muestra el título.
    - Hover de enlaces con fondo azul (`hover:bg-blue-600`) y texto blanco (`hover:text-white`), padding y bordes redondeados.
  - **Fix tipos**: agregado `handleBlur` con `React.FocusEvent<HTMLButtonElement>` y uso en `onBlur` del botón.

## Rutas para verificación local

- http://localhost:3000/servicios/analisis-estrategico/estrategia-ganar-clientes
- http://localhost:3000/servicios/analisis-estrategico/plan-salir-google
- http://localhost:3000/servicios/analisis-estrategico/analisis-competencia
- http://localhost:3000/servicios/analisis-estrategico/consultoria-empresarial
- http://localhost:3000/servicios/analisis-estrategico/estudio-factibilidad
- http://localhost:3000/servicios/analisis-estrategico/reingenieria-procesos

## Notas

- Mantener consistencia de imágenes en `categorias[].servicios[].imagen` cuando se disponga de creatividades específicas.
- Siguiente mejora sugerida: estado "activo" persistente para el enlace de la página actual en el submenú.
