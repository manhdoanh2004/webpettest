import { Suspense } from "react";
import Section1 from "./Section1";
import UserLayout from "@/app/components/layouts/userLayout";

export default function Search()
{
    return(
        <>
        <UserLayout>
        <h1>Trang kết quả tìm kiếm</h1>
        <Suspense fallback={"Đang tìm kiếm"}>
             <Section1/>     
        </Suspense>
    
        </UserLayout>
       
        </>
    )
}