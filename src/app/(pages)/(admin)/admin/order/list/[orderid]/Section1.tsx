"use client";
import CloudinaryManualUploader from "@/app/components/cloudinaryupload/CloudinaryDirectUploader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
export default function Seciton1(props:{orderid:any}) {

  const {orderid}=props;

  // Bên trong component Section1
  const handleSubmitForm = async (event: any) => {
    event.preventDefault();
   

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const note = event.target.note.value;

    if (name == "") {
      event.target.name.style.borderColor = "red";
      event.target.name.focus();
      Swal.fire({
        title: "Lỗi!",
        text: "Vui lòng nhập vào tên sản phẩm! ",
        icon: "error",
        confirmButtonText: "Oke",
      });
    } 
    else 
    {
      if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/g.test(email))
      {
        event.target.email.style.borderColor = "red";
        event.target.email.focus();
        Swal.fire({
          title: "Lỗi!",
          text: "Vui lòng nhập đúng định dạng email! ",
          icon: "error",
          confirmButtonText: "Oke",
        });
      }

      
      else
      {
        const productData = {
          name,
          email,
          phone,
          note
    
        
        };
    
        console.log(productData)
        // try {
        //   const res = await fetch("", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(productData),
        //   });
        //   const data = await res.json();
        //   if (data.code == "success") {
        //     Swal.fire({
        //       position: "center",
        //       icon: "success",
        //       title: "Tạo sản phẩm thành công!",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //     setTimeout(()=>
        //     {
        //       router.push("/admin/pet/list")
        //     },1600)
        //   }
        //   else
        //   {
        //     alert("Tạo không thành công!")
        //   }
        // } catch (error) {
        //   alert("Lỗi không gửi dữ liệu được" + error);
        // }
      }
    }

  

 
  };

  const handleKeyup = (event: any) => {
    if (event.target.value != "") {
      event.target.style.borderColor = "#198754";
    }
  };
  return (
    <>
      <h1 className="box-title"> Đơn hàng {orderid}</h1>
      <div className="admin-create-product-section1">
        <form
          id="tour-create-form"
          onSubmit={(event) => handleSubmitForm(event)}
        >
          <div className="admin-create-product-section1__group">
            <label
              className="admin-create-product-section1__label"
              htmlFor="name"
            >
              Tên khách hàng
            </label>
            <input type="text" id="name" name="name" onChange={handleKeyup} />
          </div>
          <div className="admin-create-product-section1__group">
            <label
              className="admin-create-product-section1__label"
              htmlFor="email"
            >
              Email
            </label>
            <input type="text" id="email" name="email" onChange={handleKeyup} />
          </div>
          <div className="admin-create-product-section1__group">
            <label
              className="admin-create-product-section1__label"
              htmlFor="phone"
            >
              Số điện thoại
            </label>
            <input type="text" id="phone" name="phone" onChange={handleKeyup} />
          </div>
          <div className="admin-create-product-section1__two-col">
            <label
              className="admin-create-product-section1__label"
              htmlFor="note"
            >
              Ghi chú
            </label>
            <div className="admin-create-product-section1__boxInfor">
              <textarea id="note" name="note"></textarea>
            </div>
          </div>
          <div className="admin-create-product-section1__group">
            <label
              className="admin-create-product-section1__label"
              htmlFor="pay"
            >
             Phương thức thanh toán
            </label>
            <select id="pay" name="pay" defaultValue={"money"}>
              <option value="money">Tiền mặt</option>
              
            </select>
          </div>

          <div className="admin-create-product-section1__group">
            <label
              className="admin-create-product-section1__label"
              htmlFor="paystatus"
            >
             Trạng thái thanh toán
            </label>
            <select id="paystatus" name="paystatus" defaultValue={"conplete"}>
              <option value="conplete">Đã thanh toán</option>
              
            </select>
          </div>
          <div className="admin-create-product-section1__group">
            <label
              className="admin-create-product-section1__label"
              htmlFor="date"
            >
             Ngày đặt
            </label>
            <input type="text" id="date" name="date" readOnly />
          </div>
        
          <div className="admin-create-product-section1__group">
            <label
              className="admin-create-product-section1__label"
              htmlFor="status"
            >
             Trạng thái
            </label>
            <select id="status" name="status" defaultValue={"conplete"}>
              <option value="conplete">Đã giao hàng</option>
              
              
            </select>
          </div>
         

          <div className="admin-create-product-section1__group">
            <label className="admin-create-product-section1__label">Danh sách sản phẩm</label>
            <div className="admin-create-product-section1__order-list">
              <div className="admin-create-product-section1__order-item">
                <div className="admin-create-product-section1__order-image"><img src="" alt="ảnh"/></div>
                <div className="admin-create-product-section1__order-content">
                  <div className="admin-create-product-section1__order-name">sản phẩm 1</div>
                  <div className="admin-create-product-section1__order-text">màu </div>
                  <div className="admin-create-product-section1__order-text">tuổi </div>
                  <div className="admin-create-product-section1__order-text">giống</div>
                  <div className="admin-create-product-section1__order-text">giá</div>
                
                </div>
              </div>
              <div className="admin-create-product-section1__order-item">
                <div className="admin-create-product-section1__order-image"><img src="" alt="ảnh"/></div>
                <div className="admin-create-product-section1__order-content">
                  <div className="admin-create-product-section1__order-name">sản phẩm 1</div>
                  <div className="admin-create-product-section1__order-text">màu </div>
                  <div className="admin-create-product-section1__order-text">tuổi </div>
                  <div className="admin-create-product-section1__order-text">giống</div>
                  <div className="admin-create-product-section1__order-text">giá</div>
                
                </div>
              </div>
            </div>
          </div>
          <div className="admin-create-product-section1__group">
            <label className="label">Thanh toán</label>
            <div className="admin-create-product-section1__order-total">
              <div>Tổng tiền: 10.000.000đ</div>

            
              <div>Thanh toán: <span className="admin-create-product-section1__order-price">10.000.000đ</span></div>
            </div>
          </div>


       
      


          <div className="admin-create-product-section1__two-col admin-create-product-section1__button  ">
            <button>Cập nhật</button>
          </div>
        </form>
        <div className="admin-create-product-section1__back">
          <Link href="/admin/order/list">Quay lại danh sách</Link>
        </div>
      </div>
    </>
  );
}
