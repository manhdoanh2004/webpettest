
import { NextResponse } from 'next/server';

export function middleware(request:any) {
  const path = request.nextUrl.pathname;

  const isLoginPage = path === '/login';
  const isAdminPage = path === '/admin';

  const authTokenCookie = request.cookies.get('authToken');
  const isAuthenticated = authTokenCookie ? true : false;

  // Chuyển hướng từ /login sang /admin **nếu đã đăng nhập và đang ở trang login**
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  if (isAdminPage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};