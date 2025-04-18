"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { MdOutlineCoPresent } from "react-icons/md";
import contactImg4 from "../../assets/Img/contact-section1_img4.svg";
import imgpet from "../../assets/Img/product_pet-1.jpg";
import { useEffect, useState } from "react";
import { TbHandClick } from "react-icons/tb";
import { useCart } from "../cart/CartContext";
export const Header = () => {

  const router =useRouter();
    // Sử dụng hook useCart để lấy giá trị Context
    const { qualitiItem, setQualitiItem, sumPrice, setSumPrice, listItemCart, setListItemCart } = useCart();

  const currentPath = usePathname();
  const navLink = [
    {
      name: " Trang chủ",
      href: "/",
    },
    {
      name: "  Thú cưng",
      href: "/pets",
    },
    {
      name: "  Giới thiệu",
      href: "/about",
    },
    {
      name: "    Liên hệ",
      href: "/contact",
    },
  ];
  const navLinkMoblie = [
    {
      name: " Trang chủ",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "  Thú cưng",
      href: "/pets",
      icon: <FaThList />,
    },
    {
      name: "  Giới thiệu",
      href: "/about",
      icon: <MdOutlineCoPresent />,
    },
    {
      name: "    Liên hệ",
      href: "/contact",
      icon: <MdContactMail />,
    },
  ];
 

  useEffect(() => {
    const buttonMenu = document.querySelector("[data-menu]");
    if (buttonMenu) {
      const menuMoblie = document.querySelector(
        "[data-menumoblie]"
      ) as HTMLElement;
      buttonMenu.addEventListener("click", () => {
        if (menuMoblie) {
          menuMoblie.setAttribute("data-menumoblie", "show");
        }
      });

      const menuOverLay = document.querySelector(".box-menu-moblie__overlay");
      if (menuOverLay) {
        menuOverLay.addEventListener("click", () => {
          menuMoblie.setAttribute("data-menumoblie", "hidden");
        });
      }
    }
  }, []);

  const handleCart = () => {
    const listCart = document.querySelector(".box-cart") as HTMLElement;

    if (listCart) {
      listCart.setAttribute("data-listcart", "show");

      if (sessionStorage.getItem("cartList")) {
        const cartSession = sessionStorage.getItem("cartList") || "";

        let listItem = [...JSON.parse(cartSession)];
        setQualitiItem(listItem.length.toString());
        setListItemCart(listItem);
     
      }
    }

    const cartOverLay = document.querySelector(".box-cart__overLay");
    if (cartOverLay) {
      cartOverLay.addEventListener("click", () => {
        listCart.setAttribute("data-listcart", "hidden");
      });
    }
  };


  

  const handleDelete = async (event: any) => {
    const petid = event.target.dataset.index;

    if (sessionStorage.getItem("cartList")) {
      const cartSession = sessionStorage.getItem("cartList") || "";
      let list = [...JSON.parse(cartSession)];
     
      // Lọc ra item cần xóa dựa trên petid
      let listItem = list.filter((item: any) => item.index != petid);

  
      let sumprice = listItem.reduce((accumulator, Item) => { // Loại bỏ await vì reduce không phải promise
      
        return accumulator + Item.price;
      }, 0); // Giá trị khởi tạo của accumulator là 0
   
      setSumPrice(sumprice);
  

      sessionStorage.setItem("cartList", JSON.stringify(listItem)); // Cập nhật sessionStorage
      setListItemCart(listItem); // Cập nhật state listItemCart
      setQualitiItem(listItem.length.toString()); // Cập nhật số lượng item
    }
  };

  const handleSearch=(event:any)=>
  {
    event.preventDefault();
    const keySearch=event.target.search.value;
    if(keySearch)
    {
     
        // Tạo URLSearchParams object
        const page='1'// mặc định khi đến trang kết quả tìm kiếm thì luôn ở trang đầu tiên 
       const params = new URLSearchParams();
        params.append('key', keySearch);
        params.append('page', page);

    // tạo URL string bằng URLSearchParams.toString()
         const url = `/search?${params.toString()}`;
         
         router.push(url); // Truyền URL string vào router
    }
  
  }

  //khi người dùng vào 1 trang thì lấy ra số lượng sản phẩm nếu có, chỉ chạy 1 lần 
  useEffect(() => {
    if (sessionStorage.getItem("cartList")) {
      const cartSession = sessionStorage.getItem("cartList") || "";

      let listItem = [...JSON.parse(cartSession)];
     
   
      let sumprice = listItem.reduce((accumulator, Item) => {
        return accumulator + Item.price;
      }, 0); // Giá trị khởi tạo của accumulator là 0
      
      setSumPrice(sumprice);
      setQualitiItem(listItem.length.toString());
      setListItemCart(listItem);
   
     
    }
  }, []);

  return (
    <>
      <div className={`box-menu-moblie  `} data-menumoblie="">
        <div className="box-menu-moblie__menu">
          <div className="box-menu-moblie__menutitle">Menu</div>
          {navLinkMoblie.map((item: any, index: any) => (
            <div
              className={`${
                currentPath == item.href ? "box-menu-moblie__act" : ""
              }  box-menu-moblie__menuitem`}
              key={index + 1}
            >
              <div className="box-menu-moblie__desc">
                {item.icon}
                <div className="box-menu-moblie__content">
                  <Link href={item.href}>{item.name}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="box-menu-moblie__overlay"></div>
      </div>

      <div className="box-cart" data-listcart>
        <div className="box-cart__content">
          <div className="box-cart__title">Giỏ hàng của bạn</div>
          <div className="box-cart__listitem">
            {listItemCart ? (
              listItemCart.length > 0 ? (
                <>
                  {listItemCart.map((item: any, index: any) => (
                    <div
                      className="box-cart__item"
                      key={item.index}
                      data-key={`${item.index}`}
                    >
                      <img
                        src={item.img}
                        className="box-cart__itemimg"
                        alt=""
                      />
                      <div className="box-cart__itemdesc">
                        <Link
                          href={`${item.id}`}
                          className="box-cart__itemtitle"
                        >
                          {item.title}
                        </Link>
                        <div className="box-cart__itemprice">{item?item.price.toLocaleString("vi"):""} VND</div>
                        <button
                          className="box-cart__itemdelete"
                          onClick={(event) => handleDelete(event)}
                          data-key={`${index + 1}`}
                          data-index={`${item.index}`}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>Giỏ hàng trống</>
              )
            ) : (
              <>Không có sản phẩm</>
            )}
          </div>
          <div className="box-cart__sumPrice">
              <div className="box-cart__titleSumPrice">
              Tạm tính :
              </div>
              <div className="box-cart__descSumPrice">
              {sumPrice.toLocaleString("vi")} VND
              </div>
          </div>
          <div className="box-cart__buttons">
          
          {sumPrice==0?(<></>):<Link href={"/order"} className="button ">
              Thanh toán
            </Link>}
            
          </div>
        </div>
        <div className="box-cart__overLay"></div>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="header__button-menu" data-menu>
              <FaBars />
            </div>
            <div className="header__logo">
              <Link href="/">
                <img alt="Monito" src="../Frame.svg" />
              </Link>
            </div>
            <nav className="header__menu">
              <ul>
                {navLink.map((item: any) => (
                  <li key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                    <img
                      className={`${
                        currentPath == item.href ? "active" : ""
                      }  header__imgfoot`}
                      src={contactImg4.src}
                    />
                  </li>
                ))}
              </ul>
            </nav>
            <form className="header__search"  onSubmit={(event)=>handleSearch(event)}>
              <FaMagnifyingGlass />
              <input placeholder="Nhập từ khóa...." type="text" name="search"/>
            </form>
            <div className="header__cart">
              <div className="header__iconCart" onClick={handleCart}>
                <FaShoppingCart />
                <div className="header__qualiti">{qualitiItem}</div>
              </div>
            </div>
       
          </div>
        </div>
      </header>
    </>
  );
};
