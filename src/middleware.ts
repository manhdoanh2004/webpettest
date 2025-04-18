// // _middleware.js (hoặc _middleware.ts)
// import { NextRequest, NextResponse } from 'next/server';

// export async function middleware(req:NextRequest) {
//   const path = req.nextUrl.pathname;
//   const isLoggedIn = req.cookies.get('loggedIn')?.value === 'true';
// console.log(isLoggedIn);
//   if (path.startsWith('/admin/dashboard')) {
//     if (!isLoggedIn) {
//       return NextResponse.redirect(new URL('/admin/login', req.url));
//     }
//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/admin/:path*',
// };

// middleware.ts (hoặc _middleware.ts)
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const authToken =  req.cookies.get('authToken')?.value; // Lấy token từ cookie authToken
console.log(authToken);
  if (path.startsWith('/admin/dashboard')) {
    if (!authToken) { // Kiểm tra authToken cookie
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }


    return NextResponse.next(); // Cho phép truy cập nếu có authToken
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};