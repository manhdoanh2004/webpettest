import AdminLayout from "@/app/components/layouts/adminLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: " Quản trị  ",
    description: "",
  
  
  
  };
export default function DashBoard()
{
    return(
        <>
          <AdminLayout>
                  Trang admin
                     </AdminLayout>
        </>
    )
}