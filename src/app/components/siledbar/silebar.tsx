'use client'
import { FaGear } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaGaugeHigh } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
export const SileBar=()=>
{

   const navLink = [
      {
        name: "Tổng quan",
        href: "/admin/dashboard",
        icon: <FaGaugeHigh/>,
      },
      {
        name: "Quản lý sản phẩm",
        href: "/admin/pet/list",
        icon: <FaTableCellsLarge/> ,
      },
      {
        name: " Quản lý đơn hàng",
        href: "/admin/order/list",
        icon: <FaListCheck/>,
      },
      {
        name: " Thông tin liên hệ",
        href: "/admin/contact",
        icon: <FaUserGroup/>,
      },
    ];
 
    const currentPath=usePathname();
 
  const router=useRouter();
  const handleLogout=async()=>
  {
    try {
      const res= await fetch('/api/clear-all-cookies',{
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
          }
        }
      )
      const data=await res.json();
      console.log(data)
      if(data.code=='success')
      {
        router.push('/admin/login');
      }
   
    } catch (error) {
      console.log('Lỗi api')
    }
      
   
  }
    return(
    <>
         <nav className="sider">
      <ul className="inner-menu">
        {navLink?(<>{
          navLink.map((item:any,index:any)=> <li key={index+1}><Link className={`${item.href==currentPath?"active":""}`} href={item.href}>{item.icon}{item.name}</Link></li>)
        }</>):(<>{}</>)}
  
      </ul>
      <hr/>
      <ul className="inner-menu">
      
        <li><a className="inner-logout"  onClick={handleLogout}><FaPowerOff/>Đăng xuất</a></li>
      </ul>
    </nav>
    <div className="sider-overlay"></div>
    </>
    )
}