import AdminLayout from "@/app/components/layouts/adminLayout"
import { Seciton1 } from "./Section1"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Sửa sản phẩm ",
  description: "",



};


export default async function PetEdit({
    params,
  }: {
    params: Promise<{ id: any }>
  })
{
    const {id}=await params
    console.log(id)
    return(
        <>
        <AdminLayout>
        <main className="admin-create-product">
        <Seciton1 id={id}/>
       
        </main>

        </AdminLayout>
        </>
    )
}