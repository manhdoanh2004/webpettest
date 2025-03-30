"use client"
import { usePathname } from "next/navigation";
import Link from "next/link"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { MdOutlineCoPresent } from "react-icons/md";
import contactImg4 from "../../assets/Img/contact-section1_img4.svg"
import imgpet from "../../assets/Img/product_pet-1.jpg"
import { useEffect, useState } from "react";
export const Header=()=>
{

  const [qualitiItem,setQualitiItem]=useState('0');

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
  const navLinkMoblie=[
    {
      name:" Trang chủ",
      href:"/",
      icon: <FaHome/>
    },
    {
      name:"  Thú cưng",
      href:"/pets",
         icon:   <FaThList/>
    },
    {
      name:"  Giới thiệu",
      href:"/about",
         icon:   <MdOutlineCoPresent />
    },
    {
      name:"    Liên hệ",
      href:"/contact",
      icon:   <MdContactMail/>
    },

  ];

  useEffect(()=>
  {
   
    const buttonMenu=document.querySelector("[data-menu]");
    if(buttonMenu) 
    {
      const menuMoblie=document.querySelector("[data-menumoblie]") as HTMLElement;
      buttonMenu.addEventListener("click",()=>
      {
       
        if(menuMoblie) 
        {
          menuMoblie.setAttribute("data-menumoblie","show");
         
        }
      })

      const menuOverLay=document.querySelector(".box-menu-moblie__overlay");
      if(menuOverLay)
      {
        menuOverLay.addEventListener("click",()=>
        {
       
            menuMoblie.setAttribute("data-menumoblie","hidden")
        })
      }
    }
  },[])


  useEffect(()=>
    {
     
      const buttonCart=document.querySelector(".header__iconCart");
      if(buttonCart) 
      {
        const listCart=document.querySelector(".box-cart") as HTMLElement;
        buttonCart.addEventListener("click",()=>
        {
         
          if(listCart) 
          {
            listCart.setAttribute("data-listcart","show");
           
          }
        })
  
        const cartOverLay=document.querySelector(".box-cart__overLay");
        if(cartOverLay)
        {
          cartOverLay.addEventListener("click",()=>
          {
         
            listCart.setAttribute("data-listcart","hidden")
          })
        }
      }
    },[])
  
  
    useEffect(()=>
    {
        const listItem=document.querySelectorAll(".box-cart__item");
        if(listItem)
        {
          setQualitiItem(listItem.length.toString());
        }
    },[])

    return(
        <>
         <div className={`box-menu-moblie  `} data-menumoblie="">
            <div className="box-menu-moblie__menu">
                <div className="box-menu-moblie__menutitle">Menu</div>
                {navLinkMoblie.map((item:any,index:any)=>
                   <div   className={`${currentPath==item.href?"box-menu-moblie__act":""}  box-menu-moblie__menuitem`} key={index+1}>
                       <div className="box-menu-moblie__desc">
                      {item.icon}
                      <div className="box-menu-moblie__content"><Link href={item.href}>{item.name}</Link></div>
                    </div>
                </div>)}
            </div>
            <div className="box-menu-moblie__overlay"></div>
          </div>

          <div className="box-cart" data-listcart >
            <div className="box-cart__content">
                  <div className="box-cart__title">Giỏ hàng của bạn</div>
                  <div className="box-cart__listitem">
                    
                    <div className="box-cart__item">
                        <img src={imgpet.src} className="box-cart__itemimg" alt="" />
                        <div className="box-cart__itemdesc">
                          <Link href={"pets/1"} className="box-cart__itemtitle">Thú cưng 1</Link>
                          <div className="box-cart__itemprice">9,000,000 <span>VND</span></div>
                          <button className="box-cart__itemdelete" >Xóa</button>
                          </div>

                    </div>
                    <div className="box-cart__item">
                        <img src={imgpet.src} className="box-cart__itemimg" alt="" />
                        <div className="box-cart__itemdesc">
                          <div className="box-cart__itemtitle">Thú cưng 1</div>
                          <div className="box-cart__itemprice">9,000,000 <span>VND</span></div>
                          <button className="box-cart__itemdelete" >Xóa</button>
                          </div>
                    </div>
                    <div className="box-cart__item">
                        <img src={imgpet.src} className="box-cart__itemimg" alt="" />
                        <div className="box-cart__itemdesc">
                          <div className="box-cart__itemtitle">Thú cưng 1</div>
                          <div className="box-cart__itemprice">9,000,000 <span>VND</span></div>
                          <button className="box-cart__itemdelete" >Xóa</button>
                          </div>
                    </div>
               
                  </div>
                  <div className="box-cart__buttons">

                    <a href="#" className="button ">Thanh toán</a>
                  </div>
            </div>
            <div className="box-cart__overLay"></div>
          </div>
        <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div  className="header__button-menu"  data-menu ><FaBars /></div>
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
          </form>
          <div className="header__cart">
                <div className="header__iconCart">
                <FaShoppingCart/>
                <div className="header__qualiti">{qualitiItem}</div>
                </div>
          </div>
          <div className="header__button-search"><FaMagnifyingGlass /></div>
        </div>
      </div>
    </header>
        </>
    )
}