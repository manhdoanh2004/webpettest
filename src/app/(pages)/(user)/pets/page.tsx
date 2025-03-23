'use client'
import Head from 'next/head';

import { Section1 } from "./section1";
import { Section2 } from "./section2";
import UserLayout from "@/app/components/layouts/userLayout";


export default  function Petlist()
{
  
return(
  <>

<Head>
        <title>Danh sách sản phẩm</title>
      </Head>
<UserLayout>
 <Section1/>
 <Section2/>
</UserLayout>
  </>
)
}