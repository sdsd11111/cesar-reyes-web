'use client';

import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '@/components/auth/auth-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}
