// pages/api/login.js (hoặc pages/api/login.ts)
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
  const { username, password } = await req.json();

  // **TODO: Thay thế bằng logic xác thực thực tế của bạn**
  // Ví dụ: Kiểm tra username và password trong database.

  if (username === 'admin' && password === 'password') { // **Ví dụ đơn giản, cần thay thế**
    const res = NextResponse.json({ success: true, message: 'Đăng nhập thành công' });
    // Set session cookie 'loggedIn=true' (không có Expires/Max-Age) - Server-side cookie setting
    res.headers.set('Set-Cookie', `loggedIn=true; Path=/; HttpOnly; Secure; SameSite=Strict`);
    return res;
  } else {
    return NextResponse.json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng.' }, { status: 401 });
  }
}