
import {Header} from "../header/header"
import { Footer } from "../footer/footer";



export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <>
  

        <Header/>

        {children}

        <Footer/>

      </>
   
  );
}
