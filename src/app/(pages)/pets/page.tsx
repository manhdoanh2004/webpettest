
import type { Metadata } from "next";
import Link from "next/link";
import { ClientPet } from "./Clientpet";
export const metadata: Metadata = {
    title: " Danh sách  thú cưng ",
    description: "",
    icons:{
      icon:"/frame.svg"
    }
    
  };




export default  function Petlist()
{
  
return(
  <>
 <ClientPet/>
  </>
)
}