import type { Metadata } from "next";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import UserLayout from "@/app/components/layouts/userLayout";

export const metadata: Metadata = {
    title: " Liên hệ với chúng tôi ",
    description: "",
  
    

  };
export default async function Contact()
{  
    return(
        <>
        <UserLayout>
        <Section1/>
       <Section2/>
       <Section3/>
        </UserLayout>
      
        </>
    )
}