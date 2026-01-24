'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface LearnMoreButtonProps {
  href: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
}

export default function LearnMoreButton({ 
  href, 
  className = '',
  variant = 'outline',
  size = 'default'
}: LearnMoreButtonProps) {
  return (
    <div className="mt-6">
      <Link href={href}>
        <Button 
          variant={variant} 
          size={size}
          className={`group flex items-center gap-2 ${className}`}
        >
          Conocer más
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  );
}
