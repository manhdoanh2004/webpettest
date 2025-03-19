'use client'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

import Link from "next/link";

import { Customer } from './customer';
import { useEffect, useState } from "react";



export const  Section1= () => {
   
  const [productdetail,setproductdetail]=useState<any|undefined>(undefined);
   
    useEffect(()=>
    {
        async function fetchDataPro() {
            // const {petid}= await params;
            // console.log(petid)
            const res=await fetch(`https://67cd6ddbdd7651e464ee5912.mockapi.io/petlist/product/1`)
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
              <div className="product-infor__image-main">
                {productdetail?(<>
                    <img src={productdetail.img} alt="" />
                </>):(<>Loading...</>)}
              </div>
              
              <div className="product-infor__image-thumb">
                {/* <img src="assets/Img/product_pet-6.jpg" alt="" />
                <img src="assets/Img/product_pet-2.jpg" alt="" />
                <img src="assets/Img/product_pet-3.jpg" alt="" />
                <img src="assets/Img/product_pet-4.jpg" alt="" />
                <img src="assets/Img/product_pet-5.jpg" alt="" />
             */}
              </div>
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
                        Shiba Inu Màu Nâu Đỏ
                      </Link>
           
                    </li>
                  </ul>
                </div>
              </nav>
              <h1 className="product-infor__title">Shiba Inu Màu Nâu Đỏ</h1>
              <div className="product-infor__price">12.000.000 VND</div>
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
