import type { Metadata } from "next";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import path from "../../../../public/Frame.svg"
export const metadata: Metadata = {
    title: " Liên hệ với chúng tôi ",
    description: "",
    icons:{
      icon:
      {
        url:path.src
      }
    }
    

  };
export default function Contact()
{
    return(
        <>
       <Section1/>
       <Section2/>
       <Section3/>
        </>
    )
}