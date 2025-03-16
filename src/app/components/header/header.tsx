"use client"
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import contactImg4 from "../../assets/Img/contact-section1_img4.svg"
export const Header=()=>
{
 const currentPath=usePathname();
    const navLink=[
    {
      name:" Trang chủ",
      href:"/"
    },
    {
      name:"  Thú cưng",
      href:"/pets"
    },
    {
      name:"  Giới thiệu",
      href:"/about"
    },
    {
      name:"    Liên hệ",
      href:"/contact"
    },

  ]

    return(
        <>
        <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__button-menu"><FaBars /></div>
          <div className="header__logo"><Link href="/">
            <img alt="Monito" src="../Frame.svg"/>
            </Link></div>
          <nav className="header__menu">
            <ul>
          
              {navLink.map((item:any)=>( 
              <li key={item.name}>
                <Link href={item.href}>
                   {item.name}
                 </Link>
                   <img className={`${currentPath==item.href?"active":""}  header__imgfoot`} src={contactImg4.src}/>
              </li>))}
            </ul>
          </nav>
          <form className="header__search" action=""><FaMagnifyingGlass />
            <input placeholder="Nhập từ khóa...." type="text"/>
          </form><a className="button" href="#">tham gia cộng Đồng</a>
          <div className="header__button-search"><FaMagnifyingGlass /></div>
        </div>
      </div>
    </header>
        </>
    )
}