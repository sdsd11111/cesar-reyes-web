'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

// Import the original admin panel content
import { AdminPanelContent } from './page';

// Component to handle search params with Suspense
function AdminPanelWithSearchParams() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  
  // This effect ensures we only render the content after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#2d2420] text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
          <p>Cargando panel de administración...</p>
        </div>
      </div>
    );
  }

  return <AdminPanelContent />;
}

// Main AdminPanel component with Suspense boundary
export default function AdminPanel() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Handle authentication state
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
      return;
    }

    if (status === 'authenticated') {
      // Verify admin role
      const user = session?.user as { role?: string } | undefined;
      if (user?.role !== 'admin') {
        router.push('/');
        return;
      }
      setIsLoading(false);
    }
  }, [status, session, router]);

  if (isLoading || status === 'loading') {
    return (
      <div className="min-h-screen bg-[#2d2420] text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
          <p>Verificando credenciales...</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#2d2420] text-white flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
            <p>Cargando panel de administración...</p>
          </div>
        </div>
      }
    >
      <AdminPanelWithSearchParams />
    </Suspense>
  );
}
