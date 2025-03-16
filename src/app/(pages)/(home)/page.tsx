import Image from "next/image";
import styles from "./page.module.css";
import { Section1 } from "./section1";
import style from "../../assets/scss/page.module.scss"
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";

export default function Home() {
  return (
  <>
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  </>
  );
}
