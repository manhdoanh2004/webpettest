"use client";
import aboutsection1Main from "../../assets/Img/about-section1__main.svg";
import aboutsection1Bg4 from "../../assets/Img/about-section1__bg4.svg";
import aboutsection1Bg1 from "../../assets/Img/about-section1__bg1.svg";
import aboutsection1Bg2 from "../../assets/Img/about-section1__bg2.svg";
import aboutsection1Bg3 from "../../assets/Img/about-section1__bg3.svg";
import icon from "../../../../public/Frame.svg";
import Link from "next/link";
export const Section1 = () => {
  return (
    <>
      <section className="about-section1">
        <div className="container">
          <div className="about-section1__listitem">
            <img
              src={aboutsection1Bg1.src}
              alt="ảnh nền "
              className="about-section1__bg1"
            />

            <img
              src={aboutsection1Bg3.src}
              alt="ảnh nền "
              className="about-section1__bg3"
            />
            <div className="about-section1__content">
              <p className="about-section1__nameshop">MonitoPet</p>
              <h1 className="about-section1__title">
                If animals could talk, they’d talk about us!
              </h1>
              <p className="about-section1__desc">
                At et vehicula sodales est proin turpis pellentesque sinulla a
                aliquam amet rhoncus quisque eget sit
              </p>
              <Link href="/pets" className="button">Xem Thú Cưng Ngay</Link>
            </div>
            <div className="about-section1__main">
              <img
                src={aboutsection1Main.src}
                alt="main"
                className="about-section1__imgmain"
              />
              <img className="about-section1__bg4" src={aboutsection1Bg4.src} />
            </div>
            <img src={aboutsection1Bg2.src}  alt="ảnh nền " className="about-section1__bg2" />
          </div>
        </div>
      </section>
    </>
  );
};
