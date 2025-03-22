
import type { Metadata } from "next";

import { Section1 } from "./section1";
import { Section2 } from "./section2";
import UserLayout from "@/app/components/layouts/userLayout";



export const metadata: Metadata = {
    title: " Danh sách  thú cưng ",
    description: "",


  };




export default  function Petlist()
{
  
return(
  <>
<UserLayout>

 <Section1/>
 <Section2/>
</UserLayout>
  </>
)
}