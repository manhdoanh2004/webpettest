import path from "../../../../public/Frame.svg"
import type { Metadata } from "next";

import { Section1 } from "./section1";
import { Section2 } from "./section2";
export const metadata: Metadata = {
    title: " Danh sách  thú cưng ",
    description: "",
    icons:{
      icon:
      {
        url:path.src
      }
    }
    
  
    
  };




export default  function Petlist()
{
  
return(
  <>

 <Section1/>
 <Section2/>
  </>
)
}