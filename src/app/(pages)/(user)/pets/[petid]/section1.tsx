'use client'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



import product_pet1 from "../../../../assets/Img/product_pet-1.jpg"
import product_pet2 from "../../../../assets/Img/product_pet-2.jpg"
import product_pet3 from "../../../../assets/Img/product_pet-3.jpg"
import product_pet4 from "../../../../assets/Img/product_pet-4.jpg"
import product_pet5 from "../../../../assets/Img/product_pet-5.jpg"

import Link from "next/link";

import { Customer } from './customer';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "@/app/components/cart/CartContext";
import BoxBreadCrumb from "@/app/components/boxbreadcrumb/BoxBreadCrumb";
interface Section1Props {
  petid: string;
}
export const  Section1= ({ petid }: Section1Props) => {

  const {  setQualitiItem,  setSumPrice, setListItemCart } = useCart();

  const [thumbsSwiper, setThumbsSwiper] = useState<any|undefined>(undefined);

  const [productdetail,setproductdetail]=useState<any|undefined>(undefined);

    useEffect(()=>
    {
        async function fetchDataPro() {
          
            const res=await fetch(`https://67cd6ddbdd7651e464ee5912.mockapi.io/petlist/product/${petid}`)
            const data=await res.json();
            setproductdetail(data);
       
        }
        fetchDataPro();
      
    },[])
  
    const handleClick=()=>
      {
  
        //lấy ra thông tin sản phẩm
          const productInfofTitle=document.querySelector(".product-infor__title");
             const productInforPrice=document.querySelector(".product-infor__price");
             const productInforImg=document.querySelector(".product-infor__image-main img") as HTMLImageElement;
  
             if(productInfofTitle&&productInforPrice&&productInforImg)
             {
              let listItem=[];
              //nếu giỏ hàng của người dùng trước đó đã có 1 mảng chứa những sản phẩm khác rồi thì lấy ra  và thêm sản phẩm mới vào mảng
                if(sessionStorage.getItem("cartList"))
                {
  
                  const title=productInfofTitle.innerHTML;
                    const img=productInforImg.src.toString();
                    const price=productInforPrice.innerHTML
  
                    const regex=/\d+/g;
  
                    const ArrayPrice=price.match(regex);
  
  
                    const stringPrice=ArrayPrice?.join("")|| "";
                    const PriceInt=parseInt(stringPrice);
                  
  
                    const cartSession=sessionStorage.getItem("cartList") || "";
  
                     listItem=[...JSON.parse(cartSession)];
  
                     //tạo 1 sản phẩm
                    const cartItem={
                      index:listItem.length+1,
                      id:petid,
                      title:title,
                      img:img,
                      price:PriceInt
                    }
  
                    //thêm sản phẩm vào mảng sản phẩm
                  listItem.push(cartItem)
  
                  //cập nhậtt và lưu lại vào trong sessionStorage
                  sessionStorage.setItem("cartList",JSON.stringify(listItem));
  
                  // Tính toán lại sumPrice sau khi thêm item
                  let newSumPrice = listItem.reduce((accumulator, item) => {
                    return accumulator + item.price;
                  }, 0);
  
                  // Cập nhật state giỏ hàng thông qua Context
                  setListItemCart(listItem); // Cập nhật listItemCart state
                  setQualitiItem(listItem.length.toString()); // Cập nhật qualitiItem state
                  setSumPrice(newSumPrice); // Cập nhật sumPrice state
  
  
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thêm vào giỏ hàng thành công!",
                    showConfirmButton: false,
                    timer: 1500
                  });
  
  
                }
                else
                {
                  //nếu giỏ hàng của người dùng trước đó chưa có  mảng chứa những sản phẩm
                  const title=productInfofTitle.innerHTML;
                  const img=productInforImg.src.toString();
                  const price=productInforPrice.innerHTML
                    console.log(price);

                  const regex=/\d+/g; // Regex để lấy số từ chuỗi giá

                  const ArrayPrice=price.match(regex); // Tìm các số trong chuỗi giá

                  const stringPrice=ArrayPrice?.join("")|| ""; // Ghép các số lại thành chuỗi
                  const PriceInt=parseInt(stringPrice); // Chuyển chuỗi giá thành số (integer)
                  console.log(PriceInt);


                  //tạo sản phẩm
                const cartItem={
                  index:1,
                  id:petid,
                  title:title,
                  img:img,
                  price:PriceInt // <--- Sử dụng PriceInt (giá đã chuyển thành số)
                }

                //tạo mảng mới và thêm sản phẩm vaof mảng
                listItem.push(cartItem)

                //lưu mảng vào trong sessionStorage
                sessionStorage.setItem("cartList",JSON.stringify(listItem));

                // Tính toán sumPrice (trong trường hợp này chỉ có 1 item)
                let newSumPrice = listItem.reduce((accumulator, item) => {
                  return accumulator + item.price;
                }, 0);


                // Cập nhật state giỏ hàng thông qua Context
                setListItemCart(listItem); // Cập nhật listItemCart state
                setQualitiItem(listItem.length.toString()); // Cập nhật qualitiItem state
                setSumPrice(newSumPrice); // Cập nhật sumPrice state

  
  
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thêm vào giỏ hàng thành công!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
             }
  
      }


  return (
    <>
     <section className="product-infor">
        <div className="container">
          <div className="product-infor__wrap">
            <div className="product-infor__left">
            <Swiper
        spaceBetween={10}
        navigation={true}
   
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-infor__image-main"
      >
        <SwiperSlide>
          {productdetail?(<>
            <img src={productdetail.img}/>
          </>):(<>Loading..</>)}
       
        </SwiperSlide>
        <SwiperSlide>
          <img src={product_pet1.src}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product_pet2.src}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product_pet3.src}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product_pet4.src}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product_pet5.src}/>
        </SwiperSlide>
  
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-infor__image-thumb"
      >
          <SwiperSlide>
          {productdetail?(<>
            <img src={productdetail.img}/>
          </>):(<>Loading..</>)}
       
        </SwiperSlide>
        <SwiperSlide>
          <img src={product_pet1.src}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product_pet2.src}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product_pet3.src}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product_pet4.src}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={product_pet5.src}/>
        </SwiperSlide>
      </Swiper>
             
            </div>
            <div className="product-infor__right">
              <BoxBreadCrumb name={productdetail?productdetail.name :"loading.."} title="Chó"/>
              <h1 className="product-infor__title">{productdetail?productdetail.name :"loading.."}</h1>
              <div className="product-infor__price">{productdetail?productdetail.price? `${productdetail.price.toLocaleString("vi")} VND` :"loading.." : "loading.."}</div>
              <div className="product-infor__buttons">
                {" "}
                <Link href="/contact">
                  <div className="button">Liên hệ</div>
                </Link>
                <div>
                  <div className="button button--outline" data-buttonadditem  onClick={handleClick}>
                  <FaCartPlus/> Thêm vào giỏ hàng 
                  </div>
                </div>
              </div>
              <div className="product-infor__tables">
                <table>
                  <tbody>
                    {productdetail?(<>
                        <tr>
                      <td>SKU</td>
                      <td>#1000078</td>
                    </tr>
                    <tr>
                      <td>Giống</td>
                      <td>{productdetail.gender}</td>
                    </tr>
                    <tr>
                      <td>Tuổi</td>
                      <td>{productdetail.age} tháng </td>
                    </tr>
                 
                    <tr>
                      <td>Màu sắc</td>
                      <td>{productdetail.color}</td>
                    </tr>
                    <tr>
                      <td>Mô tả ngắn</td>
                      <td>
                       {productdetail.des}
                      </td>
                    </tr>
                    </>):(<tr><td>Loading...</td></tr>)}
                  </tbody>
                </table>
              </div>
              <nav className="box-share">
                <div className="box-share__label">
                  <i className="fa-solid fa-share-nodes"></i>Chia sẻ
                </div>
                <ul className="box-share__list">
                  <li>
                    {" "}
                    <Link className="box-share__link" href="#">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="box-share__link" href="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="box-share__link" href="#">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="box-share__link" href="#">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="product-infor__customer">
            <h2 className="product-infor__customer-title">
              Khách hàng của chúng tôi
            </h2>
                        <Customer/>
      
          </div>
        </div>
      </section>
    </>
  );
};
