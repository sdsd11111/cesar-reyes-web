'use client'

import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string
}

export default function OptimizedImage({ 
  src, 
  alt, 
  fallbackSrc,
  priority = false,
  ...props 
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
      onError={(e) => {
        if (fallbackSrc) {
          const target = e.target as HTMLImageElement
          target.src = fallbackSrc
        }
      }}
    />
  )
}
