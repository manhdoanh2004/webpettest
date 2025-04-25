import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Section2()
{
    return(
        <>
        <div className="admin-petlist-section2">
          <div className="admin-petlist-section2__wrap">
            
            <div className="admin-petlist-section2__search">
            <FaSearch />
              <input type="text" placeholder="Tìm kiếm" />
            </div>
           
          </div>
        </div>
        </>
    )
}