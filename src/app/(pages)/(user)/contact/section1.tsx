'use client'
import contactImg1 from "../../../assets/Img/contact-section1_img1.png"
import contactImg2 from "../../../assets/Img/contact-section1_img2.png"
import contactImg3 from "../../../assets/Img/contact-section1_img3.png"
import contactImg4 from "../../../assets/Img/contact-section1_img4.svg"
import section3bg3 from "../../../assets/Img/section-3_bg3.svg";
import sectionmain from "../../../assets/Img/section-3_Image_main.png";
import { FaRegCirclePlay } from "react-icons/fa6";
export const Section1=()=>
{
    return(
        <>
            <section className="contact-section1">
              <div className=" container">
                
                <div className="contact-section1__imgList">
               
                         <img className="contact-section1__img3" src={contactImg3.src} />
                         <img className="contact-section1__img3-2" src={section3bg3.src} />
                          <div className="contact-section1__content">
                                
                                <h1 className="contact-section1__title"> Thêm Một Bạn

                                <img className="contact-section1__img4" src={contactImg4.src}/>
                                </h1>
                                <h2 className="contact-section1__subtitle"> Thêm Ngàn Niềm Vui!</h2>
                                <p className="contact-section1__desc"> Có một con thú cưng đồng nghĩa
                                    với việc bạn có thêm niềm vui mới. Chúng tôi có hơn 200 con thú
                                    cưng khác nhau có thể đáp ứng nhu cầu của bạn!
                                    </p>
                         </div>
              
               
                    <img className="contact-section1__img1" src={contactImg1.src} />
                <div className="contact-section1__imgmain">
                          <img className="contact-section1__img2" src={contactImg2.src} />
                          <img className="contact-section1__img2-2" src={sectionmain.src} />
                </div>

                   
                </div>
              

              </div>
            </section>
        </>
    )
}