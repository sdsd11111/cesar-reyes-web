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
