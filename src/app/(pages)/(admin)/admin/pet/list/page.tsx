import AdminLayout from "@/app/components/layouts/adminLayout";
import Seciton1 from "./Section1";
import { Metadata } from "next";
import Seciton2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
export const metadata: Metadata = {
    title: " Quản lý sản phẩm ",
    description: "",
  
  
  
  };
export default function List()
{
    return(
        <>
      <AdminLayout>
      
      <main className="admin-petlist">
      <Seciton1/>
      <Seciton2/>
      <Section3/>
      <Section4/>
        </main>
       
       
      </AdminLayout>
        </>
    )
}