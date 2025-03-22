import type { Metadata } from "next";
import path from "../../../../../../public/Frame.svg"
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import UserLayout from "@/app/components/layouts/userLayout";
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



export default  async function Petdetail( {
  params,
}: {
  params: Promise<{ petid: string }>
})
{
  
  const{petid}= await params;
  console.log(petid)

    return(
        <>
        <UserLayout>

     <Section1 petid={petid}/>
     <Section2/>
        </UserLayout>
        </>
    )
}