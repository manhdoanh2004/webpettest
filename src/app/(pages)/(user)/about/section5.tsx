import Link from "next/link"
import aboutsection3member from "../../../assets/Img/about-section3__member.png"
export const Section5=()=>
{
    return (
        <>
        <section className="about-section5">
            <div className="container">
                <h2 className="about-section5__title">Theo dõi instagram của chúng tôi </h2>
                <div className="about-section5__listinstagram">
                <div className="about-section5__item">
                        <Link href={"#"}>  <img src={aboutsection3member.src} alt="arnh đại diện  "/></Link>
                      
                    </div>
                    <div className="about-section5__item">
                        <Link href={"#"}>  <img src={aboutsection3member.src} alt="arnh đại diện  "/></Link>
                      
                    </div>
                    <div className="about-section5__item">
                        <Link href={"#"}>  <img src={aboutsection3member.src} alt="arnh đại diện  "/></Link>
                      
                    </div>
                    <div className="about-section5__item">
                        <Link href={"#"}>  <img src={aboutsection3member.src} alt="arnh đại diện  "/></Link>
                      
                    </div>
                   
                  
                </div>
            </div>
        </section>
        </>
    )
}