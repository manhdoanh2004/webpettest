import type { Metadata } from "next";
import path from "../../../../../public/Frame.svg"
export const metadata: Metadata = {
    title: " Thông tin thú cưng ",
    description: "",
    icons:{
      icon:
      {
        url:path.src
      }
    }

    
  };
export default async function Petdetail( {params}:any)
{
 const {petid}= await params
//   const res=await fetch(`https://dummyjson.com/products/${petid}`);
//   const data=await res.json();
//  console.log(data)
    return(
        <>
        <h1> Trang petdetail</h1>
        </>
    )
}