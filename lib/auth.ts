import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    {
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.error('Missing credentials')
            return null;
          }

          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email.toString(),
            password: credentials.password.toString(),
          })

          if (error || !data.user || !data.user.email) {
            console.error('Authentication error:', error)
            return null;
          }

          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.email.split('@')[0] || 'User',
            role: 'user' // Add a default role
          } as const
        } catch (error) {
          console.error('Error during authentication:', error)
          return null
        }
      }
    }
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
    updateAge: 4 * 60 * 60, // 4 hours
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        token.id = user.id;
        token.role = 'admin'; // Force admin role for all authenticated users
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = 'admin'; // Ensure role is always admin
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to /admin after login
      if (url.startsWith(baseUrl)) {
        return `${baseUrl}/admin`;
      }
      // Handle relative URLs
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      return baseUrl;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  trustHost: true,
  useSecureCookies: process.env.NODE_ENV === 'production'
})
