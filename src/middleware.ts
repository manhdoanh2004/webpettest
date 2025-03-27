// _middleware.js (hoặc _middleware.ts)
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req:NextRequest) {
  const path = req.nextUrl.pathname;
  const isLoggedIn = req.cookies.get('loggedIn')?.value === 'true';

  if (path.startsWith('/admin')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};