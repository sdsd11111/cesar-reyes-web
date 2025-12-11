import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Debug helper function
const logDebug = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[DEBUG] ${message}`, data || '');
  }
};

// Configuration
const isDev = process.env.NODE_ENV === 'development';
const useSecureCookies = false; // Force false for local development

// Cookie names - must match NextAuth configuration
const sessionCookieName = 'next-auth.session-token';
const csrfCookieName = 'authjs.csrf-token';
const callbackCookieName = 'authjs.callback-url';

// List of public paths that don't require authentication
const publicPaths = [
  '/',
  '/blog',
  '/menu-digital',
  '/mensajeria',
  '/motor-reservas-hotel',
  '/auth/signin',
  '/auth/error',
  '/api/auth',
  '/_next',
  '/favicon.ico'
];

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Skip middleware for public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    logDebug(`Skipping auth check for public path: ${pathname}`);
    return NextResponse.next();
  }

  // Skip for static files and API routes
  if (pathname.includes('.') || pathname.startsWith('/api/')) {
    logDebug(`Skipping auth check for static/API path: ${pathname}`);
    return NextResponse.next();
  }

  // Debug info
  logDebug(`Processing request for: ${pathname}`, {
    cookies: request.cookies.getAll().map(c => c.name),
    hasSessionCookie: request.cookies.has(sessionCookieName),
    hasCsrfCookie: request.cookies.has(csrfCookieName),
    hasCallbackCookie: request.cookies.has(callbackCookieName)
  });

  // Get the session token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: useSecureCookies,
    // Explicitly set cookie name to match NextAuth config
    cookieName: sessionCookieName
  });

  logDebug('Session token check', {
    hasToken: !!token,
    token: token ? {
      name: token.name,
      email: token.email,
      expires: token.exp ? new Date(token.exp * 1000).toISOString() : null
    } : null
  });

  // Handle admin routes
  if (pathname.startsWith('/admin')) {
    if (!token) {
      logDebug('No session token found, redirecting to login');
      const signInUrl = new URL('/auth/signin', request.url);
      signInUrl.searchParams.set('callbackUrl', '/admin');

      const response = NextResponse.redirect(signInUrl);
      response.headers.set('x-middleware-cache', 'no-cache');
      return response;
    }

    logDebug('User is authenticated, allowing access to admin');
    const response = NextResponse.next();
    response.headers.set('x-middleware-cache', 'no-cache');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api/|_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp|css|js|json)$).*)',
  ],
};
