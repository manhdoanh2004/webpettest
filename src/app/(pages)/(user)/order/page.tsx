
import UserLayout from "@/app/components/layouts/userLayout";

import Section2 from "./Section2";
import Section1 from "./Section1";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Đặt hàng ",
  description: "",

  

};
export default function Order() {
  return (
    <UserLayout>
      <>
      
        <Section1 />

        <Section2 />
      </>
    </UserLayout>
  );
}
