import AdminLayout from "@/app/components/layouts/adminLayout";
import { Metadata } from "next";
import Section1 from "./Section1";
import RevenueChart from "@/app/components/revenuechart/RevenueChart";
import Seciton2 from "./Section2";

export const metadata: Metadata = {
    title: " Quản lý ",
    description: "",
  
  
  
  };
export default function DashBoard()
{
 
 
    return(
        <>
          <AdminLayout>
          <main className="dashboard__main">

                 <Section1/>
             <Seciton2/>
          </main>
                     </AdminLayout>
        </>
    )
}