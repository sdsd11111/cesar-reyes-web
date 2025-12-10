# Documentación: Lógica de subida y uso de imágenes con Bunny.net

## 1. Lógica actual
- El usuario sube una imagen desde el panel.
- El panel envía la imagen y metadatos (alt, title) a `/api/upload-image` (Next.js API route).
- El backend guarda la imagen en `public/images/articulos` y responde con la URL interna.
- El panel genera el Markdown listo para el artículo:
  ```
  ![Texto alternativo](/images/articulos/archivo.webp "Título de la imagen")
  ```
- El usuario copia y pega ese Markdown en el contenido del artículo.

## 2. Nueva lógica con Bunny.net
- El usuario sube una imagen desde el panel.
- El panel envía la imagen y metadatos a `/api/upload-image`.
- El backend sube la imagen a Bunny.net Storage Zone, carpeta `articulos`, usando la API HTTP.
- El backend responde con la URL pública de Bunny.net:
  ```
  https://<pullzone>.b-cdn.net/articulos/archivo.webp
  ```
- El panel genera el Markdown listo para el artículo:
  ```
  ![Texto alternativo](https://<pullzone>.b-cdn.net/articulos/archivo.webp "Título de la imagen")
  ```
- El usuario copia y pega ese Markdown en el contenido del artículo.

## 3. Variables y seguridad
- La API key y configuración de Bunny.net se guardan en `.env.local` para pruebas locales.
- Antes de subir a producción o a git, se eliminan las variables sensibles.
- La subida a Bunny.net solo se hace desde el backend (nunca desde el frontend).

## 4. Tareas pendientes (registro)
- [ ] Eliminar las API keys y datos sensibles antes de subir a git o producción.
- [ ] Afinar y probar todo el sistema de subida de imágenes a Bunny.net.
- [ ] Cambiar la URL de las imágenes en los artículos existentes si es necesario.
- [ ] Documentar el proceso final para futuros cambios o migraciones.
- [ ] Poner en producción la nueva lógica y probar en Vercel.
- [ ] (Opcional) Agregar manejo de errores y feedback visual en el panel para subidas fallidas.
- [ ] (Opcional) Permitir elegir entre Bunny.net y almacenamiento local según entorno.

## 5. Notas
- No se guarda registro local de las imágenes subidas, solo se usa la URL pública.
- El formato Markdown generado se mantiene igual, solo cambia la URL.
- La API key y el hostname de Bunny.net se configuran en variables de entorno para seguridad.
