import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Extiende los tipos de usuario por defecto de NextAuth
   */
  interface User {
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
    role: string;
  }

  /**
   * Extiende la sesión para incluir el rol del usuario
   */
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      role?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  /**
   * Extiende el token JWT para incluir el rol del usuario
   */
  interface JWT {
    id: string;
    name?: string | null;
    email: string;
    picture?: string | null;
    role: string;
    exp?: number;
    iat?: number;
    jti?: string;
  }
}
