
import {Header} from "../header/header"
import { Footer } from "../footer/footer";

import{CartProvider} from "../cart/CartContext"

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <>
  
  <CartProvider >
  <Header/>

        {children}

        <Footer/>

  </CartProvider>
     

      </>
   
  );
}
