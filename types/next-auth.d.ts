import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Extiende los tipos de usuario por defecto de NextAuth
   */
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
  }

  /**
   * Extiende la sesión para incluir el rol del usuario
   */
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
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
    email?: string | null;
    picture?: string | null;
    role?: string;
  }
}
