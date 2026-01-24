'use client';

import dynamic from 'next/dynamic';

// Lazy load the FloatingPromoCard with SSR disabled
const FloatingPromoCard = dynamic(
  () => import('@/components/FloatingPromoCard'),
  { ssr: false }
);

export default function FloatingPromoCardWrapper() {
  return <FloatingPromoCard />;
}
