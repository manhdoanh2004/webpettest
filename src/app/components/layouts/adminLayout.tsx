

import { HeaderAdmin } from "@/app/components/header/headerAdmin";
import { FooterAdmin } from "@/app/components/footer/footerAdmin";
import { SileBar } from "../siledbar/silebar";



export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
    
  

        <HeaderAdmin/>
        <SileBar/>
        {children}

        <FooterAdmin/>

  
    </>
  );
}
