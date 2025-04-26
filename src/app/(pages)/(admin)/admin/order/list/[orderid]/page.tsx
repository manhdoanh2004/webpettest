import AdminLayout from "@/app/components/layouts/adminLayout"
import Seciton1 from "./Section1"
import { Metadata } from "next";



export const metadata: Metadata = {
    title: " Sửa đơn hàng ",
    description: "",
  
  
  
  };

export default async function OrderEdit({
    params,
  }: {
    params: Promise<{ orderid: any }>
  })
{
    const {orderid}=await params
    console.log(orderid)
    return(
        <>
        <AdminLayout>
        <main className="admin-create-product">
        <Seciton1 orderid={orderid}/>
       
        </main>

        </AdminLayout>
        </>
    )
}