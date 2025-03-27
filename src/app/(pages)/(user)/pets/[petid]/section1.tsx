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
import product_pet6 from "../../../../assets/Img/product_pet-6.jpg"

import Link from "next/link";

import { Customer } from './customer';
import { useEffect, useState } from "react";


interface Section1Props {
  petid: string;
}
export const  Section1= ({ petid }: Section1Props) => {

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
              <nav className="box-breadcrumb">
                <div>
                  <ul className="box-breadcrumb__list">
                    <li className="box-breadcrumb__item">
                     
                      <Link className="box-breadcrumb__link" href="/">
                        Trang chủ
                      </Link>
                      <FaChevronRight />
                    </li>
                    <li className="box-breadcrumb__item">
                    
                      <Link className="box-breadcrumb__link" href="/pets">
                        Chó 
                      </Link>
                      <FaChevronRight />
                    </li>
                    <li className="box-breadcrumb__item">
                      {" "}
                      <Link className="box-breadcrumb__link" href="#">
                      {productdetail?productdetail.name :"loading.."}
                      </Link>
           
                    </li>
                  </ul>
                </div>
              </nav>
              <h1 className="product-infor__title">{productdetail?productdetail.name :"loading.."}</h1>
              <div className="product-infor__price">{productdetail?productdetail.price? `${productdetail.price.toLocaleString("vi")} VND` :"loading.." : "loading.."}</div>
              <div className="product-infor__buttons">
                {" "}
                <Link href="/contact">
                  <div className="button">Liên hệ</div>
                </Link>
                <a href="#">
                  <div className="button button--outline">
                  <FaCartPlus/> Thêm vào giỏ hàng 
                  </div>
                </a>
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
