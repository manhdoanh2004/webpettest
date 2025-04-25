import { Metadata } from "next";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Section5 } from "./section5";
import UserLayout from "@/app/components/layouts/userLayout";
export const metadata: Metadata = {
    title: " Thông tin về chúng tôi ",
    description: "",


  };


export default async function AboutPage()
{
   
  
    return(
        <>
        <UserLayout>
        <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
        </UserLayout>
    
        </>
    )
}