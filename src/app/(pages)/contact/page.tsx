import type { Metadata } from "next";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
export const metadata: Metadata = {
    title: " Liên hệ với chúng tôi ",
    description: "",
    icons:{
      icon:"/frame.svg"
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