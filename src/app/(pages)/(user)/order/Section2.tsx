'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";


export default function Section2()
{


  const router=useRouter();
    interface dataForm{
        fullName:string,
        phoneNumber:string,
        email:string,
        address:string,
        note:string,
        listItem:Array<any>
    }

    const fetchdata=async(dataForm:dataForm)=>
    {
          // const res= await  fetch("",{
          //   method:"POST",
          //   headers:
          //   {
          //       "ContentType":"application/json"
          //   },
          //   body:JSON.stringify(dataForm)
          // });

          // const dataRes=  await res.json();

          // if(dataRes)
          // {
          //   if(dataRes.code=='success') 
          //   {
                
          //                         Swal.fire({
          //                           position: "center",
          //                           icon: "success",
          //                           title: "Đăt hàng thành công!",
          //                           showConfirmButton: false,
          //                           timer: 1500
          //                         });
          //   }
          //   else
          //   {
          //   }
          // }
          console.log(dataForm)
          router.push("/order-successfully")
    }
  
    const handSubMit=async(event:any)=>
    {
        event.preventDefault();

        const fullName=event.target.fullName;
        const email=event.target.email;
        const phoneNumber=event.target.phone;
        const address=event.target.address;
        const note=event.target.note;


        const FullName:string =fullName.value;
        const Email:string =email.value;
        const PhoneNumber:string =phoneNumber.value;
        const Address:string =address.value;
        const Note:string =note.value;



        let listItem:any=[];
        if (sessionStorage.getItem("cartList")) {
            const cartSession = sessionStorage.getItem("cartList") || "";
             listItem = [...JSON.parse(cartSession)];
          }

          const dataForm:dataForm={
            fullName:FullName,
            phoneNumber:PhoneNumber,
            email:Email,
            address:Address,
            note:Note,
            listItem:listItem
          }
          
                      if(FullName=="")
                      {
                        fullName.style.borderColor="red";
                        fullName.focus();
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
                                phoneNumber.style.borderColor="red";
                                phoneNumber.focus();
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
                                  phoneNumber.style.borderColor="red";
                                  phoneNumber.focus()
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
                                  
                                        const dataForm:dataForm={
                                          fullName:FullName,
                                          phoneNumber:PhoneNumber,
                                          email:Email,
                                          address:Address,
                                          note:Note,
                                          listItem:listItem
                                        }
                               
                                        fetchdata(dataForm);
                                        
                                        fullName.value=email.value=phoneNumber.value=note.value=address.value="";
                                        fullName.style.borderColor="#E0E0E0";
                                        email.style.borderColor="#E0E0E0";
                                        phoneNumber.style.borderColor="#E0E0E0";
                                        note.style.borderColor="#E0E0E0";
                                        address.style.borderColor="#E0E0E0";
                                       
                                      
                                  }
                              
                                }
                              }
                            }
                          }
                      }

         
          
    //    const res= await  fetch("",{
    //         method:"POST",
    //         headers:
    //         {
    //             "ContentType":"application/json"
    //         },
    //         body:JSON.stringify(dataForm)
    //       });

    //       const dataRes=  await res.json();

    //       if(dataRes)
    //       {
    //         if(dataRes.code=='success') 
    //         {
                
    //                               Swal.fire({
    //                                 position: "center",
    //                                 icon: "success",
    //                                 title: "Đăt hàng thành công!",
    //                                 showConfirmButton: false,
    //                                 timer: 1500
    //                               });
    //         }
    //         else
    //         {
    //         }
    //       }
      
       
    }

    const handleKeyup=(event:any)=>
      {
          if(event.target.value!="")
          {
            event.target.style.borderColor="#198754"
          
          }
      }
    
    return(
        <>
         <div className="section-12">
       <div className="container">
         <div className="inner-wrap">
           <form action="" id="order-form" onSubmit={(event)=>handSubMit(event)}  >
             <div className="inner-info">
               <div className="inner-title-main">
                 Thông Tin Khách Hàng
               </div>
               <div className="inner-inputs">
                 <div className="inner-input">
                   <input onKeyUp={(event)=>handleKeyup(event)} type="text" name="fullName" placeholder="Họ và tên" id="full-name-input"/>
                 </div>
                 <div className="inner-input">
                   <input onKeyUp={(event)=>handleKeyup(event)} type="text" name="phone" placeholder="Số điện thoại" id="phone-input"/>
                 </div>
                 <div className="inner-input">
                   <input onKeyUp={(event)=>handleKeyup(event)} type="text" name="address" placeholder="Địa chỉ" id="address-input"/>
                 </div>
                 <div className="inner-input">
                   <input onKeyUp={(event)=>handleKeyup(event)} type="text" name="email" placeholder="Email" id="email-input"/>
                 </div>
               </div>
               <textarea name="note" placeholder="Ghi chú"></textarea>
             </div>
             <div className="inner-method">
             
               <div className="inner-list">
                 <div className="inner-item">
                   <input type="radio" name="method" id="methodMoney" defaultValue="money" defaultChecked/>
                   <label htmlFor="methodMoney">Thanh toán tiền mặt khi nhận hàng</label>
                 </div>
               
               </div>
           
             </div>
             <div className="inner-button">
               <button type="submit">
                 ĐẶT HÀNG
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
        </>
    )
}