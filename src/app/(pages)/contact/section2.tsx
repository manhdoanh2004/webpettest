"use client";


import { SlEnvolope } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Swal from 'sweetalert2'
export const Section2 = () => {

    interface formData
    {
        fullName:string,
        email:string,
        phone:string,
        address:string,
        content:string
    }

    const handleSubmit=(event:any)=>
    {
            event.preventDefault();
            const name=event.target.name;
            const email=event.target.email;
            const phonenumber=event.target.phonenumber;
            const address=event.target.address;
            const message=event.target.message;


            const FullName:string =name.value;
            const Email:string =email.value;
            const PhoneNumber:string =phonenumber.value;
            const Address:string =address.value;
            const Message:string =message.value;

            if(FullName=="")
            {
              name.style.borderColor="red";
              name.focus();
              Swal.fire({
                title: 'Lỗi!',
                text: 'Vui lòng nhập vào họ tên của bạn ',
                icon: 'error',
                confirmButtonText: 'Oke'
              })
              
            }
            else
            {
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
                  const regex=/^[a-zA-Z0-9._%+-]+@gmail\.com$/g;
                  if(!regex.test(Email))
                  { 
                     email.style.borderColor="red";
                     email.focus();
                    Swal.fire({
                      title: 'Lỗi!',
                      text: 'Vui lòng nhập đúng định dạng email ',
                      icon: 'error',
                      confirmButtonText: 'Oke'})

                  }else 
                  {
                    const regex=/^(0|\+84)(3[2-9]|5[689]|7[06-9]|8[1-9]|9[0-46-9])[0-9]{7}$/g;
                    if(PhoneNumber=="")
                    {
                      phonenumber.style.borderColor="red";
                      phonenumber.focus();
                      Swal.fire({
                        title: 'Lỗi!',
                        text: 'Vui lòng nhập vào số điện thoại của bạn ',
                        icon: 'error',
                        confirmButtonText: 'Oke'})
                    }
                    else
                    {
                      if(!regex.test(PhoneNumber))
                      {
                        phonenumber.style.borderColor="red";
                        phonenumber.focus()
                        Swal.fire({
                          title: 'Lỗi!',
                          text: 'Không tồn tại định dạng số điện thoại này  ',
                          icon: 'error',
                          confirmButtonText: 'Oke'})
                      }
                      else
                      {
                        if(Address=="")
                        {
                          address.style.borderColor="red";
                        address.focus()
                        Swal.fire({
                          title: 'Lỗi!',
                          text: 'Vui lòng nhập vào địa chỉ của bạn  ',
                          icon: 'error',
                          confirmButtonText: 'Oke'})
                        }
                        else
                        {
                          if(Message=="")
                            {
                              message.style.borderColor="red";
                              message.focus()
                              Swal.fire({
                                title: 'Lỗi!',
                                text: 'Vui lòng nhập vào dữ liệu  của bạn ',
                                icon: 'error',
                                confirmButtonText: 'Oke'})
    
                            }
                            else
                            {
                              const data:formData ={
                                fullName:FullName,
                                email:Email,
                                phone:PhoneNumber,
                                address:Address,
                                content:Message
                              }
                              console.log(data);
                                name.value=email.value=phonenumber.value=message.value=address.value="";
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
                    }
                  }
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
      <section className="contact-section2">
        <div className="container">
          <div className="contact-section2__listitem">
            <div className="contact-section2__left">
              <div className="contact-section2__infomation">
                <h2 className="contact-section2__infortitle">
                  LIÊN HỆ VỚI CHÚNG TÔI
                </h2>
                <div className="contact-section2__infordesc">
                  <div className="contact-section2__infordescItem">
                    <SlEnvolope />
                    <p>info@example.com</p>
                  </div>
                  <div className="contact-section2__infordescItem">
                    <FaPhone />
                    <p>001985512-854</p>
                  </div>
                  <div className="contact-section2__infordescItem">
                    <FaLocationArrow />
                    <p>
                      John Smith 123 Main Street Amsterdam, NH 1000 Netherlandsn
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-section2__social">
                <h3 className="contact-section2__socialtitle"> Social</h3>
                <div className="contact-section2__socialdesc">
                  <div className="contact-section2__socialdescitem">
                    <FaTwitter />
                    <p>@exampleAcount</p>
                  </div>
                  <div className="contact-section2__socialdescitem">
                    <FaFacebook />
                    <p>thong tin</p>
                  </div>
                  <div className="contact-section2__socialdescitem">
                    <FaYoutube />
                    <p>thong tin</p>
                  </div>
                  <div className="contact-section2__socialdescitem">
                    <FaInstagram />
                    <p>thong tin</p>
                  </div>
                </div>

                <div className="contact-section2__hours">
                  <h2 className="contact-section2__hourstitle">Thời gian</h2>
                  <div className="contact-section2_houesdesc">
                    08:00 - 12.00
                  </div>
                  <div className="contact-section2_houesdesc">
                    {" "}
                    13.00 - 17:00{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-section2__right">
              <div className="contact-section2__rightinfor">
                <h2 className="contact-section2__rightinforTitle">
                  Keep in touch
                </h2>
                <p className="contact-section2__rightinforDesc">
                  We would love to hear from you and answer any questions you
                  may have. You can contact us by filling out the form below,
                  sending us an email, or calling us on our phone number. We
                  will get back to you as soon as possible. You can also follow
                  us on our social media platforms and subscribe to our
                  newsletter to stay updated on our latest news and offers.
                  Thank you for your interest and support.
                </p>
              </div>
              <form className="contact-section2__rightform" onSubmit={(event)=>handleSubmit(event)}>
                <input type="text" name="name" placeholder="Họ tên" onKeyUp={(event)=>handleKeyup(event)} />
                <input type="text" name="email" placeholder="Email" onKeyUp={(event)=>handleKeyup(event)} />
                <input type="text" name ="phonenumber" placeholder=" Số điện thoại" onKeyUp={(event)=>handleKeyup(event)} />
                <input type="text" name ="address" placeholder="Địa chỉ" onKeyUp={(event)=>handleKeyup(event)} />
                <textarea placeholder="Nhập tin nhắn" name="message" onKeyUp={(event)=>handleKeyup(event)} />
                <button>Gửi </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
