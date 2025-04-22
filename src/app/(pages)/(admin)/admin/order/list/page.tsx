import AdminLayout from "@/app/components/layouts/adminLayout";
import Seciton1 from "./Section1";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: " Quản lý đơn hàng  ",
    description: "",
  
  
  
  };
export default function List()
{
    return(
        <>
      <AdminLayout>
        <Seciton1/>
      </AdminLayout>
        </>
    )
}