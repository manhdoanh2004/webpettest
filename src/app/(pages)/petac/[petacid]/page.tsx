
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: " Thông tin phụ kiện thú cưng ",
    description: "",
    icons:{
      icon:"/frame.svg"
    }
    
  };
export default async function PetAcId( {params}:any)
{
    const {petacid}= await params

    const res=await fetch(`https://dummyjson.com/products/${petacid}`);
    const data=await res.json();
   console.log(data)
      return(
          <>
          <h1> Trang pet Ac detail</h1>
          </>
      )
}