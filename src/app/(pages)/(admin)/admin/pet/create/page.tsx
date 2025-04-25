import { Metadata } from "next";
import Seciton1 from "./Seciton1";
import AdminLayout from "@/app/components/layouts/adminLayout";


export const metadata: Metadata = {
    title: " Tạo sản phẩm ",
    description: "",
  
  
  
  };
export default function CreateProduct()
{
    return(
        <>
        <AdminLayout>
            <main className="admin-create-product">

            <Seciton1/>
            </main>
     
        </AdminLayout>
    
        </>
    )
}