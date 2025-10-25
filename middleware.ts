import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });

  const url = request.nextUrl.clone();
  const { pathname } = url;
  const isAuthPage = pathname.startsWith('/auth');
  const isApiAuthRoute = pathname.startsWith('/api/auth');
  const isAdminRoute = pathname.startsWith('/admin');
  const isPublicFile = pathname.includes('.');

  // Allow API routes and static files
  if (isApiAuthRoute || isPublicFile) {
    return NextResponse.next();
  }

  // Handle authentication pages
  if (isAuthPage) {
    if (token) {
      // If user is already authenticated, redirect to admin dashboard
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
  }

  // Admin route protection
  if (isAdminRoute) {
    if (!token) {
      // Store the current URL in the session storage
      const signInUrl = new URL('/auth/signin', request.url);
      signInUrl.searchParams.set('callbackUrl', '/admin');
      return NextResponse.redirect(signInUrl);
    }

    // Force admin role for all authenticated users in the middleware
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)',
  ],
};
