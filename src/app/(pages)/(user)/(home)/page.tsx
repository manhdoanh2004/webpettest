
import UserLayout from "@/app/components/layouts/userLayout";
import { Section1 } from "./section1";

import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Monito Pets",
  description: "",
  
  
};

export default function Home() {
  return (
  <>
  <UserLayout>
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>

  </UserLayout>

  </>
  );
}
