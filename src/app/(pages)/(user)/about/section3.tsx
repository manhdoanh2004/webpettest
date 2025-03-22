'use client'
import aboutsection3member from "../../../assets/Img/about-section3__member.png"
export const Section3=()=>
{
    return (
        <>
        <section className="about-section3">
            <div className="container">
                <h2 className="about-section3__title">Nhóm của chúng tôi</h2>
                <div className="about-section3__team">
                    <div className="about-section3__member">
                           <div className="about-section3__memberimg">
                               <img src={aboutsection3member.src} alt="ảnh thành viên" />
                           </div>
                            <div className="about-section3__namemember">Doanh</div>
                            <div className="about-section3__position">Manager</div>
                    </div>
                    <div className="about-section3__member">
                           <div className="about-section3__memberimg">
                               <img src={aboutsection3member.src} alt="ảnh thành viên" />
                           </div>
                            <div className="about-section3__namemember">Doanh</div>
                            <div className="about-section3__position">Manager</div>
                    </div>
                    <div className="about-section3__member">
                           <div className="about-section3__memberimg">
                               <img src={aboutsection3member.src} alt="ảnh thành viên" />
                           </div>
                            <div className="about-section3__namemember">Doanh</div>
                            <div className="about-section3__position">Manager</div>
                    </div>
                 
                </div>
            </div>
        </section>
        </>
    )
}