"use client";

import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Swal from 'sweetalert2'
import Link from "next/link";
export const Footer = () => {

  interface formData{
    email:string
  }


  const handlSunmit=(event:any)=>
  {
    event.preventDefault();
    const email=event.target.email;
    const emailContent=event.target.email.value;
    if(emailContent=="")
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
      const regex=/^[a-zA-Z0-9._%+-]+@gmail\.com$/g;
      if(!regex.test(emailContent))
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
        
      const data:formData={
        email:emailContent
      }
      console.log(data)
      email.value="";
          Swal.fire({
          position: "center",
          icon: "success",
          title: "Gửi thành công ",
          showConfirmButton: false,
          timer: 1500
             });

       
      
       }
    }
  

  }

  const handleKeyup=(event:any)=>
    {
        if(event.target.value!="")
        {
          event.target.style.borderColor=" #FEC58D"
        
        }
    }
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <h2 className="footer__content">
              Đăng ký ngay để không bỏ lỡ các chương trình của chúng tôi
            </h2>
            <form className="footer__form" action="" onSubmit={(event)=>handlSunmit(event)}>
              <input placeholder="Nhập email của bạn..." name="email" type="text" onKeyUp={(event)=>handleKeyup(event)} />
              <button className="button">Đăng Ký Ngay</button>
            </form>
          </div>
          <div className="footer__mider">
            <nav className="footer__menu">
              <ul>
                <li>
                  <Link href="/">trang chủ</Link>
                </li>
                <li>
                  <Link href="/pets">thú cưng </Link>
                </li>
                <li>
                  <Link href="/about">giới thiệu</Link>
                </li>
                <li>
                  <Link href="">liên hệ</Link>
                </li>
              </ul>
            </nav>
            <nav className="footer__icon">
              <ul>
                <li>
                  <a target="_blank" href="#">
                    {" "}
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                  <FaTwitter />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                  <FaInstagram />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                  <FaYoutube />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__bottom">
            <div className="footer__copyright">
              © 2025 Monito. All rights reserved.
            </div>
            <div className="footer__logo">
              <a href="#"></a>
            </div>
            <div className="footer__link">
              <ul>
                <li>
                  <a target="_blank" href="#">
                    Điều khoản dịch vụ
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
