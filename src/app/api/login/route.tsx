// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const { email, password } = await req.json();
//     console.log(email, password);

//     if (email === 'admin@gmail.com' && password === 'password') {
//       const response = NextResponse.json({ code: 'success', message: 'Đăng nhập thành công' });
//       response.headers.set(
//         'Set-Cookie',
//         `loggedIn=true; HttpOnly; Secure; SameSite=Strict; max-age=3600`
//       );
//       return response;
//     } else {
//       return NextResponse.json({ code: 'error', message: 'Tài khoản hoặc mật khẩu không đúng.' }, { status: 401 });
//     }
//   } catch (error) {
//     console.error("Lỗi khi parse request body:", error);
//     return NextResponse.json({ success: false, message: 'Dữ liệu không hợp lệ.' }, { status: 400 });
//   }
// }
// app/api/login/route.ts (hoặc pages/api/login.ts nếu dùng Pages Router)
import { NextRequest, NextResponse } from 'next/server';
export const generateSimpleToken=(length:any)=>
{
  const characters = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
export async function POST(req: NextRequest) {
  try {
    const { Email, PassWord } = await req.json();
    
    console.log(Email,PassWord)
    if (Email === 'admin@gmail.com' && PassWord === 'Doanh@2004') {
     
      const token = generateSimpleToken(6); // Hàm này sẽ tạo token dựa ngẫu nhiên nó 6 số

      const responseData = { code: 'success', message: 'Đăng nhập thành công', token: token }; // Trả về token trong body 
      const response = NextResponse.json(responseData);

      // **Set token vào cookie**
      response.headers.set(
        'Set-Cookie',
        `authToken=${token}; HttpOnly; Secure;Path=/; max-age=3600` // Cookie tên là authToken
      );
     
      return response;
    } else {
      return NextResponse.json({ code: 'error', message: 'Email  hoặc mật khẩu không đúng.' }, { status: 401 });
    }
  } catch (error) {
    console.error("Lỗi khi parse request body:", error);
    return NextResponse.json({ success: false, message: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }
}