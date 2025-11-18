# Funcionalidad: Home Personalizada (home-test)

## 1. Objetivo

Ofrecer una experiencia de usuario personalizada en la página de inicio de prueba, mostrando dos versiones del contenido basadas en la prioridad que elija el visitante: una con un enfoque **lógico/racional** (orientado a datos y resultados) y otra con un enfoque **emocional** (orientado a dolores y aspiraciones).

Esta implementación está diseñada para ser 100% compatible con SEO.

## 2. Implementación Técnica

La funcionalidad se ha desarrollado en la ruta de prueba `/home-test` y utiliza el Renderizado del Lado del Servidor (SSR) de Next.js para entregar una página HTML completa y diferente para cada versión.

### 2.1. Mecanismo de Bloqueo y Elección Única

Para asegurar que el visitante elija una de las dos vistas (`lógica` o `emocional`) antes de explorar el resto de la página, se ha implementado un sistema de "bloqueo" en el lado del cliente (`HomeTestClient.tsx`).

- **Estado de Elección:** Se utiliza un estado de React (`const [choiceMade, setChoiceMade] = useState(false);`) para controlar si el usuario ya ha tomado una decisión.

- **Persistencia con `localStorage`:**
  - Al cargar el componente, un `useEffect` revisa si existe el valor `'userChoice'` en el `localStorage` del navegador.
  - Si el valor existe, significa que el usuario ya ha hecho una elección en una sesión anterior, y el estado `choiceMade` se establece en `true`.

- **Flujo de Interacción:**
  1. **Primera Visita:** Si `'userChoice'` no existe en `localStorage`, `choiceMade` es `false`. El componente solo renderiza la sección "Hero", ocultando todo el contenido inferior. Esto impide el scroll.
  2. **Toma de Decisión:** Los botones de elección en el Hero ahora ejecutan una función `handleChoice`. Esta función:
     - Guarda la elección del usuario (`'logico'` o `'emocional'`) en `localStorage.setItem('userChoice', ...)`. 
     - Actualiza el estado `choiceMade` a `true`.
     - Redirige al usuario a la URL correspondiente (`/home-test` o `/home-test?view=emocional`) usando el `useRouter` de Next.js.
  3. **Visitas Posteriores:** En la siguiente carga de la página (y en futuras visitas), el `useEffect` encontrará el valor en `localStorage`, `choiceMade` será `true` desde el inicio, y la página se mostrará completa sin ningún bloqueo.

### 2.2. Mecanismo de Selección de Contenido (SSR)

- **Vista Lógica (por defecto):** Se accede a través de la URL base: `/home-test`
- **Vista Emocional:** Se accede añadiendo un parámetro a la URL: `/home-test?view=emocional`

### 2.3. Flujo de Datos

1.  **`app/home-test/page.tsx` (Server Component):**
    - Este componente de servidor lee el parámetro `searchParams.view` de la URL.
    - Si `view` es `'emocional'`, selecciona el conjunto de textos `emocional`.
    - Si no, selecciona el conjunto de textos `logico` por defecto.
    - Pasa el objeto de contenido seleccionado como `props` al componente cliente.

2.  **`lib/content.ts`:**
    - Este archivo centraliza todo el contenido textual de la página.
    - Exporta un objeto `pageContent` que contiene dos propiedades principales: `logico` y `emocional`.
    - Cada propiedad contiene la estructura de textos para todas las secciones de la página (hero, servicios, quiz, etc.).

3.  **`app/home-test/HomeTestClient.tsx` (Client Component):**
    - Recibe el objeto `content` como `props` desde el componente de servidor.
    - Renderiza dinámicamente todas las secciones de la página utilizando los textos del objeto `content` recibido.
    - También recibe la prop `isEmotionalView` para renderizar condicionalmente componentes específicos, como el Quiz (`BusinessSuccessQuiz` o `BusinessSuccessQuizEmocional`).

## 3. Componentes Clave

- **`page.tsx`**: Orquestador del lado del servidor.
- **`HomeTestClient.tsx`**: Plantilla de la página que se rellena con contenido dinámico y gestiona el bloqueo inicial.
- **`lib/content.ts`**: Base de datos de contenido para ambas versiones.
- **`components/BusinessSuccessQuiz.tsx`**: Cuestionario para la vista lógica.
- **`components/BusinessSuccessQuiz_emocional.tsx`**: Cuestionario para la vista emocional.

## 4. Estructura de la Página

### Secciones Principales
1. **Hero Section** - Sección principal con imagen de fondo y llamado a la acción
2. **Carrusel de Empresas** - Muestra logos de empresas que han confiado en el servicio
3. **Selección de Prioridad** - Permite elegir entre enfoque lógico o emocional
4. **Quiz de Éxito Empresarial** - Cuestionario interactivo basado en la selección
5. **Proceso con Pasos Claros** - Explicación detallada de la metodología
6. **Trayectoria y Métricas** - Resultados cuantificables y experiencia
7. **Testimonios** - Opiniones de clientes satisfechos
8. **Video de Presentación** - Contenido multimedia explicativo
9. **Preguntas Frecuentes** - Sección de dudas comunes
10. **Datos de Mercado** - Estadísticas relevantes para el negocio

## 5. Ventajas de este Enfoque

- **SEO Óptimo:** Google rastrea dos URLs distintas (`/home-test` y `/home-test?view=emocional`) y en ambos casos recibe una página HTML completamente renderizada, evitando penalizaciones por *cloaking* o contenido oculto.
- **Rendimiento:** Se aprovecha el poder del SSR de Next.js, enviando una página rápida y completa al usuario.
- **Mantenibilidad:** Centralizar los textos en `lib/content.ts` hace que sea muy fácil editar o añadir contenido sin tocar la lógica de los componentes.
- **Experiencia de Usuario Mejorada:** Estructura clara y ordenada que guía al visitante a través de un viaje lógico de descubrimiento.
- **Adaptabilidad:** Diseño responsive que funciona perfectamente en todos los dispositivos.

## 6. Cambios Recientes

### 2025-10-04
- Eliminación de secciones duplicadas para una mejor experiencia de usuario
- Reorganización del flujo de contenido para una narrativa más efectiva
- Adición de la sección "Datos que no puedes ignorar sobre tu mercado"
- Optimización del rendimiento mediante la reducción de código redundante