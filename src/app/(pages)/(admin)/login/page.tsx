import { Metadata } from "next";
import { ClientLogin } from "./clientLogin";
import path from "../../../assets/Img/Frame.svg"
export const metadata: Metadata = {
  title: " Đăng nhập ",
  description: "",
  icons:{
    icon:
    {
      url:path.src
    }
  }


};

export default function Login()
{

    return (
        <>

 <ClientLogin/>
        </>
    )
}