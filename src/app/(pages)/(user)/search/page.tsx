import { Suspense } from "react";
import Section1 from "./Section1";
import UserLayout from "@/app/components/layouts/userLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "kết quả tìm kiếm",
    description: "",
  
    
  
  };
export default function Search()
{
    return(
        <>
        <UserLayout>
       
        <Suspense fallback={"Đang tìm kiếm"}>
             <Section1/>     
        </Suspense>
    
        </UserLayout>
       
        </>
    )
}