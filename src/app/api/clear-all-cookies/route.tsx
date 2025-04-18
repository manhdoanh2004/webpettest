import { NextResponse } from 'next/server';

export async function POST() { 
  const response = NextResponse.json({code:"success", message: 'Đã yêu cầu xóa tất cả cookies' });

  // **Liệt kê các cookie  muốn xóa và set header Set-Cookie cho mỗi cookie
 
  const cookiesToClear = ['authToken']; // Ví dụ danh sách tên cookie

  cookiesToClear.forEach(cookieName => {
    response.headers.append( // Dùng append để thêm nhiều header Set-Cookie
      'Set-Cookie',
      `${cookieName}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict;` 
    );
  });

  return response;
}