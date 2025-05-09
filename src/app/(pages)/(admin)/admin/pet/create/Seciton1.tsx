"use client";
import CloudinaryManualUploader from "@/app/components/cloudinaryupload/CloudinaryDirectUploader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
export default function Seciton1() {

  const router=useRouter();
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const handleImageUploadSuccess = (imageUrl: string) => {
 
    setUploadedImageUrl(imageUrl);
   
  };

  // Bên trong component Section1
  const handleSubmitForm = async (event: any) => {
    event.preventDefault();
    // if (!uploadedImageUrl) {
    //   Swal.fire({
    //     title: 'Lỗi!',
    //     text: 'Vui lòng upload ảnh!',
    //     icon: 'error',
    //     confirmButtonText: 'Oke'})
    //   return;
    // }

    const name = event.target.name.value;
    const status = event.target.status.value;
    const color = event.target.color.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const gender = event.target.gender.value;
    const age = event.target.age.value;
    const information = event.target.information.value;
    const img = uploadedImageUrl;

    if (name == "") {
      event.target.name.style.borderColor = "red";
      event.target.name.focus();
      Swal.fire({
        title: "Lỗi!",
        text: "Vui lòng nhập vào tên sản phẩm! ",
        icon: "error",
        confirmButtonText: "Oke",
      });
    } else if (color == "") {
      event.target.color.style.borderColor = "red";
      event.target.color.focus();
      Swal.fire({
        title: "Lỗi!",
        text: "Vui lòng nhập vào màu sắc của sản phẩm! ",
        icon: "error",
        confirmButtonText: "Oke",
      });
    } else if (gender == "") {
      event.target.gender.style.borderColor = "red";
      event.target.gender.focus();
      Swal.fire({
        title: "Lỗi!",
        text: "Vui lòng nhập vào giới tính! ",
        icon: "error",
        confirmButtonText: "Oke",
      });
    } else if (age == "") {
      event.target.age.style.borderColor = "red";
      event.target.age.focus();
      Swal.fire({
        title: "Lỗi!",
        text: "Vui lòng nhập vào tuổi! ",
        icon: "error",
        confirmButtonText: "Oke",
      });
    } else if (price == "" || price < 0) {
      event.target.price.style.borderColor = "red";
      event.target.price.focus();
      Swal.fire({
        title: "Lỗi!",
        text: "Giá tiền nhập vào không đúng định dạng vui lòng nhập lại! ",
        icon: "error",
        confirmButtonText: "Oke",
      });
    } else if (quantity == "" || quantity < 0) {
      event.target.quantity.style.borderColor = "red";
      event.target.quantity.focus();
      Swal.fire({
        title: "Lỗi!",
        text: "Số lượng nhập vào không đúng định dạng vui lòng nhập lại! ",
        icon: "error",
        confirmButtonText: "Oke",
      });
    }

    const productData = {
      name,
      status,
      color,
      price:Number(price),
      gender,
     age: Number(age),
      quantity,
      information,
      img,
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

 
  };

  const handleKeyup = (event: any) => {
    if (event.target.value != "") {
      event.target.style.borderColor = "#198754";
    }
  };
  return (
    <>
      <h1 className="box-title">Tạo Sản Phẩm</h1>
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
              Tên sản phẩm
            </label>
            <input type="text" id="name" name="name" onChange={handleKeyup} />
          </div>

          <div className="admin-create-product-section1__group">
            <label
              className="admin-create-product-section1__label"
              htmlFor="status"
            >
              Trạng thái
            </label>
            <select id="status" name="status">
              <option value="active">Hoạt động</option>
              <option value="inactive">Dừng hoạt động</option>
            </select>
          </div>
          <div className="admin-create-product-section1__two-col">
            <label
              className="admin-create-product-section1__label"
              htmlFor="avatar"
            >
              Ảnh sản phẩm
            </label>
            <div className="admin-create-product-section1__upload-image">
              <input
                type="file"
                id="avatar"
                accept="image/*"
                filepond-image="null"
                name="image"
              />
              <CloudinaryManualUploader
                onUploadSuccess={handleImageUploadSuccess}
              />
            </div>
          </div>
          <div className="admin-create-product-section1__group">
            <label className="admin-create-product-section1__label">Giá </label>
            <div className="admin-create-product-section1__input-list">
              <div className="admin-create-product-section1__input-item">
                <input type="number" name="price" onChange={handleKeyup} />
              </div>
            </div>
            <label className="admin-create-product-section1__label">
              Số lượng{" "}
            </label>
            <div className="admin-create-product-section1__input-list">
              <div className="admin-create-product-section1__input-item">
                <input type="number" name="quantity" onChange={handleKeyup} />
              </div>
            </div>
          </div>
          <div className="admin-create-product-section1__group">
            <label className="admin-create-product-section1__label">
              Đặc điểm
            </label>
            <div className="admin-create-product-section1__input-list">
              <div className="admin-create-product-section1__input-item">
                <label>Màu sắc</label>
                <input type="text" name="color" onChange={handleKeyup} />
              </div>
              <div className="admin-create-product-section1__input-item">
                <label>Số tuổi (tháng)</label>
                <input type="number" name="age" onChange={handleKeyup} />
              </div>
              <div className="admin-create-product-section1__input-item">
                <label>Giới tính</label>
                <input type="text" name="gender" onChange={handleKeyup} />
              </div>
            </div>
          </div>

          <div className="admin-create-product-section1__two-col">
            <label
              className="admin-create-product-section1__label"
              htmlFor="information"
            >
              Mô tả sản phẩm
            </label>
            <div className="admin-create-product-section1__boxInfor">
              <textarea id="information" name="information"></textarea>
            </div>
          </div>

          <div className="admin-create-product-section1__two-col admin-create-product-section1__button  ">
            <button>Tạo mới</button>
          </div>
        </form>
        <div className="admin-create-product-section1__back">
          <Link href="/admin/pet/list">Quay lại danh sách</Link>
        </div>
      </div>
    </>
  );
}
