'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Definir el tipo de usuario extendido
interface ExtendedUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
}

// Extender el tipo de sesión para incluir la propiedad 'role'
declare module 'next-auth' {
  interface User extends ExtendedUser {}
  
  interface Session {
    user?: ExtendedUser;
  }
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
    } else if (status === 'authenticated' && session?.user?.role !== requiredRole) {
      router.push('/');
    }
  }, [status, session, router, requiredRole]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (status === 'authenticated' && session?.user?.role === requiredRole) {
    return <>{children}</>;
  }

  return null;
}
