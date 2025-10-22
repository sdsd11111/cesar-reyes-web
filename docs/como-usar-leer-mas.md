# Cómo Usar el Componente `ExpandableText`

Este documento explica cómo implementar la funcionalidad de "seguir leyendo / ocultar" en cualquier página del sitio utilizando el componente reutilizable `ExpandableText`.

## Objetivo

El componente `ExpandableText` permite mostrar un texto corto en la vista móvil y ofrece un botón para expandir y contraer el contenido completo. En la vista de escritorio, muestra siempre el texto completo por defecto.

## Ubicación del Componente

El componente se encuentra en: `components/ui/expandable-text.tsx`

## Código del Componente

```tsx
'use client';

import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ExpandableTextProps {
  fullText: string;
  shortText: string;
  className?: string;
}

export const ExpandableText = ({ fullText, shortText, className }: ExpandableTextProps) => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isMobile) {
    return <p className={className} dangerouslySetInnerHTML={{ __html: fullText }} />;
  }

  return (
    <p className={className}>
      <span dangerouslySetInnerHTML={{ __html: isExpanded ? fullText : shortText }} />
      {' '}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-400 hover:text-blue-300 transition-colors duration-200 ml-1 font-semibold inline"
      >
        {isExpanded ? 'ocultar' : '...seguir leyendo'}
      </button>
    </p>
  );
};
```

## Cómo Usarlo

Sigue estos pasos para reemplazar un párrafo de texto estático con este componente:

### 1. Importa el Componente

Asegúrate de que la página donde lo vas a usar tenga la directiva `'use client';` al principio del archivo. Luego, importa el componente:

```tsx
import { ExpandableText } from '@/components/ui/expandable-text';
```

### 2. Reemplaza el Párrafo

Busca el párrafo que quieres hacer expandible y reemplázalo con el componente `ExpandableText`.

**Ejemplo:**

Si tienes este código:

```html
<p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
  Este es un texto muy largo que ocupa mucho espacio en la pantalla del móvil y queremos acortarlo para mejorar la experiencia de usuario.
</p>
```

Lo reemplazarías con:

```tsx
<ExpandableText
  className="text-lg md:text-xl max-w-4xl mx-auto mb-8"
  fullText="Este es un texto muy largo que ocupa mucho espacio en la pantalla del móvil y queremos acortarlo para mejorar la experiencia de usuario."
  shortText="Este es un texto muy largo..."
/>
```

### Propiedades (Props)

- `fullText` (obligatorio): Una cadena de texto con el contenido completo que se mostrará cuando se expanda.
- `shortText` (obligatorio): Una cadena de texto con la versión corta que se verá por defecto en móviles.
- `className` (opcional): Una cadena de texto para pasar clases de CSS (como las de Tailwind) al párrafo contenedor.

### Importante: Texto con HTML

El componente está preparado para renderizar HTML dentro del texto. Si necesitas usar etiquetas como `<strong>` o `<em>`, simplemente inclúyelas en las props `fullText` y `shortText`.

**Ejemplo con HTML:**

```tsx
<ExpandableText
  className="prose prose-lg"
  fullText="<strong>Texto en negrita.</strong> El resto del contenido completo."
  shortText="<strong>Texto en negrita.</strong>"
/>
```
