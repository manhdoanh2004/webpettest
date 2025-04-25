

import { Section1 } from "./section1";
import { Section2 } from "./section2";
import UserLayout from "@/app/components/layouts/userLayout";
import { Suspense } from 'react';

export default async  function Petlist()
{

return(
  <>


<UserLayout>
 <Section1/>
 <Suspense fallback={<div>Đang tải danh sách thú cưng...</div>}> {/* Fallback UI khi đang loading */}
 <Section2/>
 </Suspense>
</UserLayout>
  </>
)
}