import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
  const user=true;
  if(user)
  {
    return NextResponse.next();
  }
  else return NextResponse.redirect(new URL('/login', request.url))

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}