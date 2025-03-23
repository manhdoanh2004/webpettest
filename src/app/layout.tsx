import type { Metadata } from "next";
import "./globals.scss";
import path from "../../public/Frame.svg"
export const metadata: Metadata = {
  title: "Danh sách sản phẩm",
  description: "",
  icons:{
    icon:
    {
      url:path.src
    }
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
  

   

        {children}


      </body>
    </html>
  );
}
