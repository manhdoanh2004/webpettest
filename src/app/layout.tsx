import type { Metadata } from "next";
import "./globals.scss";
import path from "../../public/Frame.svg"
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

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
    <html lang="en">
    
    <body className="">
  

   

        {children}


      </body>
    </html>
  );
}
