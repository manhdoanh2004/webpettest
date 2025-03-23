// // app/api/login/route.js
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';

// export async function POST(request:any) {
//   // ... Xử lý logic đăng nhập ...
//   const isAuthenticated = true; // Giả sử đăng nhập thành công

//   if (isAuthenticated) {

//     const cookiesObject = await cookies(); 
//     cookiesObject.set('authToken', 'your_auth_token_value', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       path: '/',
//       maxAge: 60 * 60 * 24,
//       sameSite: 'strict',
//     });

//     return NextResponse.json({ success: true, message: 'Đăng nhập thành công' });
//   } else {
//     return NextResponse.json({ success: false, message: 'Đăng nhập thất bại' }, { status: 401 });
//   }
// }





// app/api/login/route.js
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  const { email, password } = await request.json(); // Lấy username và password từ request body

  // URL của API xác thực tài khoản của người dùng  
  const AUTH_API_URL = 'https://your-auth-api.example.com/authenticate'; // **SỬA ĐỔI URL NÀY**

  try {
    const authResponse = await fetch(AUTH_API_URL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify({ email, password }), // Gửi email và password đến API xác thực
    });

    if (authResponse.ok) {
      // API xác thực trả về thành công (status code 200-299)
      const authData = await authResponse.json(); // Đọc dữ liệu JSON từ response của API xác thực
      // authData có thể chứa thông tin như token, user ID, v.v. tùy thuộc vào API xác thực của bạn
      const cookiesObject = await cookies(); 
      // **Xử lý đăng nhập thành công:**
     //Đặt cookie 'authToken' nếu API xác thực trả về thành công
      cookiesObject.set('authToken', authData.authToken, {// API trả về authToken trong response
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24,
        sameSite: 'strict',
      });

      return NextResponse.json({ success: true, message: 'Đăng nhập thành công' });

    } else {
      // API xác thực trả về lỗi (status code 4xx, 5xx)
      const errorData = await authResponse.json(); // Đọc thông tin lỗi từ response API xác thực
      const errorMessage = errorData.message || 'Lỗi xác thực từ API.'; // Lấy thông báo lỗi (nếu có)

      return NextResponse.json({ success: false, message: errorMessage }, { status: authResponse.status }); // Trả về lỗi, giữ nguyên status code từ API xác thực
    }

  } catch (error) {
    // Lỗi mạng hoặc lỗi không mong muốn khi gọi API xác thực
    console.error("Lỗi khi gọi API xác thực:", error);
    return NextResponse.json({ success: false, message: 'Lỗi kết nối đến server xác thực.' }, { status: 500 }); // Trả về lỗi 500 Internal Server Error
  }
}