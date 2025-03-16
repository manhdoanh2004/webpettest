'use client'
import section3bg1 from "../../assets/Img/section-3_bg1.svg";
import section3bg2 from "../../assets/Img/section-3_bg2.svg";
import section3bg3 from "../../assets/Img/section-3_bg3.svg";
import section3bg4 from "../../assets/Img/section-3_bg4.svg";
import sectionmain from "../../assets/Img/section-3_Image_main.png";
import { FaRegCirclePlay } from "react-icons/fa6";
export const Section3=()=>
{
    return (
        <>
          <section className="section-3">
        <div className="container">
          <div className="section-3__wrap">
            <img className="section-3__bg3" src={section3bg3.src} alt="" />
            <img className="section-3__bg1" src={section3bg1.src} alt="" />
            <div className="section-3__image-main">
              <img src={sectionmain.src} alt="" />
            </div>
            <div className="section-3__content">
              <h1 className="section-3__title"> Thêm Một Bạn</h1>
              <h2 className="section-3__subtitle"> Thêm Ngàn Niềm Vui!</h2>
              <p className="section-3__desc"></p> Có một con thú cưng đồng nghĩa
              với việc bạn có thêm niềm vui mới. Chúng tôi có hơn 200 con thú
              cưng khác nhau có thể đáp ứng nhu cầu của bạn!
              <div className="section-3__buttons">
                <a className="button button--outline" href="#">
                  Giới Thiệu <FaRegCirclePlay />
                </a>
                <a className="button" href="#">
               
                  Khám Phá Ngay
                </a>
              </div>
            </div>
            <img className="section-3__bg2" src={section3bg2.src} alt="" />
            <img className="section-3__bg4" src={section3bg4.src} alt="" />
          </div>
        </div>
      </section>
        </>
    )
}