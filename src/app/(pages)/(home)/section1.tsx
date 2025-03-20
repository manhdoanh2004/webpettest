'use client'
import { FaRegCirclePlay } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";
import section1Bg1 from "../../assets/Img/section-1_bg1.svg";
import section1Bg2 from "../../assets/Img/section-1_bg2.svg";
import section1Bg3 from "../../assets/Img/section1_bg3.svg";
import section1Bg4 from "../../assets/Img/section-1_bg4.svg";
import section1Bg5 from "../../assets/Img/section-1_bg5.svg";
import section1Bg6 from "../../assets/Img/section-1_bg6.svg";
import section1Bg8 from "../../assets/Img/section-1_bg8.svg";
import section1Bg7 from "../../assets/Img/section-1_bg7.svg";
import section1Main from "../../assets/Img/section1_Image-1.png";
import section2Main from "../../assets/Img/section-1_Image_main2.png";


export const Section1 = () => {
  return (
    <>
      <div className="section-1">
        <div className="container">
          <div className="section-1__wrap">
            <img className="section-1__bg8" src={section1Bg8.src} alt="bg8" />
            <img className="section-1__bg1" src={section1Bg1.src} alt="bg1" />
            <div className="section-1__content">
              <h1 className="section-1__title">Thêm Một Bạn</h1>
              <h2 className="section-1__subtitle">Thêm Ngàn Niềm Vui!</h2>
              <p className="section-1__desc">
                Có một con thú cưng đồng nghĩa với việc bạn có thêm niềm vui
                mới. Chúng tôi có hơn 200 con thú cưng khác nhau có thể đáp ứng
                nhu cầu của bạn!
              </p>
              <div className="section-1__buttons">
                <Link className="button button--outline" href="/about">
                  Giới Thiệu <FaRegCirclePlay />
                </Link>
                <Link className="button" href="/pets">
                  Khám Phá Ngay
                </Link>
              </div>
            </div>
            <div className="section-1__image">
              <img
                className="section-1__bg7"
                src={section1Bg7.src}
                alt=""
              />
              <img
                className="section-1__bg3"
                src={section1Bg3.src}
                alt=""
              />
              <img
                className="section-1__image-main"
                src={section1Main.src}
                alt=""
              />
            
              
              <img
                className="section-1__bg4"
                src={section1Bg4.src}
                alt=""
              />
              <img
                className="section-1__bg5"
                src={section1Bg5.src}
                alt=""
              />
              <img
                className="section-1__bg6"
                src={section1Bg6.src}
                alt=""
              />
            </div>
            <img
              className="section-1__bg2"
              src={section1Bg2.src}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
