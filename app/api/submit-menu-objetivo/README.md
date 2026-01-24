# API: Submit Menu Objetivo

Esta ruta (`/api/submit-menu-objetivo`) maneja el envío de formularios para captura de clientes potenciales (Leads).

## Lógica de Campañas

El endpoint detecta automáticamente el campo `campaign` que se envía desde el frontend para personalizar el correo de confirmación.

### Cómo agregar una nueva campaña

1.  En el frontend (`Client.tsx`), asegúrate de enviar el campo `campaign`:
    ```javascript
    body: JSON.stringify({
       ...data,
       campaign: 'Nombre De Tu Nueva Campaña' // <--- IMPORTANTE
    }),
    ```

2.  En `route.ts`, busca la estructura `switch` o `if/else` que maneja el contenido del correo (`mailOptions`) y agrega un nuevo caso:

    ```typescript
    let mailOptions;

    if (campaign === 'Nombre De Tu Nueva Campaña') {
        mailOptions = {
            // ... configuración específica para esta campaña
            subject: 'Asunto Personalizado',
            html: `<h1>Hola ${nombre}</h1>...`
        };
    } else {
        // ... configuración por defecto ("MenúObjetivo")
    }
    ```

### Campañas Actuales
- **Carnavales 2026**: Envía un correo específico con asunto "🎭 Cupo confirmado — Promoción especial Carnavales 2026".
- **Default**: Envía el correo estándar de "MenúObjetivo".
