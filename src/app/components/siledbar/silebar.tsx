import { FaGear } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaGaugeHigh } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
export const SileBar=()=>
{
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
        <li><a className="inner-logout" href="#"><FaPowerOff/>Đăng xuất</a></li>
      </ul>
    </nav>
    <div className="sider-overlay"></div>
    </>
    )
}