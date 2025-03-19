import type { Metadata } from "next";
import path from "../../../../../public/Frame.svg"
import { Section1 } from "../../pets/[petid]/section1";
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

    return(
        <>
     <Section1/>
        </>
    )
}