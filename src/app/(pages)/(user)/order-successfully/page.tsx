import { Metadata } from "next";
import Section1 from "./Section1";
import UserLayout from "@/app/components/layouts/userLayout";

export const metadata: Metadata = {
    title: "Đặt hàng thành công ",
    description: "",
  
    
  
  };
export default function OrderSuccessfully()
{
    return(
        <>
      
        <Section1/>
        
       
        </>
   
    )
}