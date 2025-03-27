'use client'

import { useRouter } from "next/navigation";

export const ClientLogin=()=>
{
 
  const router = useRouter();
    

    const handleSubmit=async (event:any)=>
    {
        event.preventDefault();
        const email=event.target.email;
        const password=event.target.password;

     

        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
 
           // setSuccessMessage('Đăng nhập thành công! Đang chuyển hướng...'); // Hiển thị thông báo thành công
           router.push('/admin');
          } else {
            const errorData = await response.json();
          }
        } catch (e) {
         
          console.error("Lỗi đăng nhập:", e);
        }

    }
    return (
        <>
        <div className="page-account">
      <div className="form-account">
        <h2 className="inner-title">Đăng nhập</h2>
        <p className="inner-desc">Vui lòng nhập email và mật khẩu để tiếp tục</p>
        <form className="inner-form" id="login-form" onSubmit={(event)=>handleSubmit(event)}>
          <div className="inner-group">
            <label className="inner-label" htmlFor="email">Email</label>
            <input className="inner-control" type="email" name="email" id="email" placeholder=""/>
          </div>
          <div className="inner-group">
            <label className="inner-label" htmlFor="password">Mật khẩu</label>
            <input className="inner-control" type="password" name="password" id="password"/>
          </div>
      
          <button className="inner-button">Đăng Nhập</button>
        </form>
     
      </div>
    </div>
        </>
    )
}