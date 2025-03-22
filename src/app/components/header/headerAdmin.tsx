import avatar from "../../assets/Img/Frame.svg"
import { FaBars } from "react-icons/fa";
export const HeaderAdmin=()=>
{
    return (
        <> <header className="headerAdmin">
        <div className="inner-logo"><a href="#"><span>Monito</span><span>Admin</span></a></div>
        <div className="inner-wrap">
         
          <div className="inner-account">
            <div className="inner-avatar"><img src={avatar.src} alt=""/></div>
            <div className="inner-text">
              <div className="inner-name">Le Van A</div>
              <div className="inner-role">Admin</div>
            </div>
          </div>
          <button className="inner-button-menu"><FaBars/></button>
        </div>
      </header></>
    )
}