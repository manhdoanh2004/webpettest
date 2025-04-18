'use client'

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export const ClientLogin=()=>
{
 
  const router = useRouter();
    

    const handleSubmit=async (event:any)=>
    {
        event.preventDefault();
        const email=event.target.email;
        const password=event.target.password;

     
      


        const Email:string =email.value;
        const PassWord:string =password.value;
       if(Email=="")
        {
          email.style.borderColor="red";
          email.focus();
          Swal.fire({
            title: 'Lỗi!',
            text: 'Vui lòng nhập vào email của bạn ',
            icon: 'error',
            confirmButtonText: 'Oke'})
        }
        else
        {
          
            if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/g.test(Email))
            { 
                email.style.borderColor="red";
                email.focus();
                Swal.fire({
                title: 'Lỗi!',
                text: 'Vui lòng nhập đúng định dạng email ',
                icon: 'error',
                confirmButtonText: 'Oke'})

            }
            else
            {
              if(PassWord=="")
              {
                password.style.borderColor="red";
                password.focus();
                Swal.fire({
                title: 'Lỗi!',
                text: 'Vui lòng nhập vào mật khẩu',
                icon: 'error',
                confirmButtonText: 'Oke'})
              }
              else
              {
                if(PassWord.length<8)
                {
                  password.style.borderColor="red";
                  password.focus();
                  Swal.fire({
                  title: 'Lỗi!',
                  text: 'Mật khẩu phải chứa ít nhất 8 kí tự!',
                  icon: 'error',
                  confirmButtonText: 'Oke'})
                }
                else
                {
                  if(!/[A-Z]/.test(PassWord))
                  {
                    password.style.borderColor="red";
                    password.focus();
                    Swal.fire({
                    title: 'Lỗi!',
                    text: 'Mật khẩu phải chứa ít nhất một chữ cái in hoa!',
                    icon: 'error',
                    confirmButtonText: 'Oke'})
                  }
                  else
                  {
                    if( !/[a-z]/.test(PassWord))
                    {
                      password.style.borderColor="red";
                    password.focus();
                    Swal.fire({
                    title: 'Lỗi!',
                    text: 'Mật khẩu phải chứa ít nhất một chữ cái thường!',
                    icon: 'error',
                    confirmButtonText: 'Oke'})
                    }
                    else
                    {
                      if(!/\d/.test(PassWord))
                      {
                        password.style.borderColor="red";
                        password.focus();
                        Swal.fire({
                        title: 'Lỗi!',
                        text: 'Mật khẩu phải chứa ít nhất một chữ số!',
                        icon: 'error',
                        confirmButtonText: 'Oke'})
                      }
                      else
                      {
                        if(!/[@$!%*?&]/.test(PassWord))
                        {
                          password.style.borderColor="red";
                          password.focus();
                          Swal.fire({
                          title: 'Lỗi!',
                          text: 'Mật khẩu phải chứa ít nhất một kí tự đặc biệt!',
                          icon: 'error',
                          confirmButtonText: 'Oke'})
                        }
                        else
                        {
                          try {
                            const response = await fetch('/api/login', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({ Email,PassWord}),
                            });
                              const data=await response.json();
                              console.log(data)
                              if(data.code=="success")
                              {
                                router.push('/admin/dashboard');
                              }
                              else
                              {
                                  
                                Swal.fire({
                                  position: "center",
                                  icon: "error",
                                  title: "Tài khoản  hoặc mật khẩu không chính xác!",
                                  showConfirmButton: false,
                                  timer: 1500
                                });
                              }
                      
                           
                          } catch (e) {
                           
                            console.error("Lỗi đăng nhập:", e);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
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