'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Definir el tipo de usuario extendido
interface ExtendedUser {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
  role?: string;
}

export default function ProtectedRoute({
  children,
  requiredRole = 'admin',
}: {
  children: React.ReactNode;
  requiredRole?: string;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/auth/signin?callbackUrl=${encodeURIComponent(window.location.pathname)}`);
    } else if (status === 'authenticated') {
      // Usar type assertion para acceder al rol de manera segura
      const userRole = (session?.user as any)?.role;
      if (userRole !== requiredRole) {
        router.push('/');
      }
    }
  }, [status, session, router, requiredRole]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (status === 'authenticated') {
    // Usar type assertion para acceder al rol de manera segura
    const userRole = (session?.user as any)?.role;
    if (userRole === requiredRole) {
      return <>{children}</>;
    }
  }

  // Mostrar un estado de carga mientras se verifica la autenticación
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
}
