import type { Metadata } from "next";
import "./globals.scss";
import {Header} from "./components/header/header"
import { Footer } from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Monito Pets",
  description: "",
  icons:{
    icon:"/frame.svg"
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
    
    <body className="">
  

        <Header/>

        {children}

        <Footer/>

      </body>
    </html>
  );
}
