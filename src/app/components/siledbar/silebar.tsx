'use client'
import { FaGear } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaGaugeHigh } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { useRouter } from "next/navigation";
export const SileBar=()=>
{
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
        <li><a className="active" href="#"><FaGaugeHigh/>Tổng quan</a></li>
        <li><a href="#"><FaTableCellsLarge/> Quản lý sản phẩm</a></li>
        <li><a href="#"><FaListCheck/>Quản lý đơn hàng</a></li>
        <li><a href="#"><FaUserGroup/>Thông tin liên hệ</a></li>
      </ul>
      <hr/>
      <ul className="inner-menu">
        <li><a href="#"><FaGear/>Cài đặt chung</a></li>
        <li><a href="#"><FaUserGear/> Thông tin cá nhân</a></li>
        <li><a className="inner-logout"  onClick={handleLogout}><FaPowerOff/>Đăng xuất</a></li>
      </ul>
    </nav>
    <div className="sider-overlay"></div>
    </>
    )
}