import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Section2()
{
    return(
        <>
        <div className="admin-petlist-section2">
          <div className="admin-petlist-section2__wrap">
            {/* <div className="admin-petlist-section2__change-status">
              <div className="admin-petlist-section2__item">
                <select>
                  <option value="">-- Hành động --</option>
                  <option value="">Hoạt động</option>
                  <option value="">Dừng hoạt động</option>
                  <option value="">Xóa</option>
                </select>
              </div>
              <div className="admin-petlist-section2__item">
                <button>Áp dụng</button>
              </div>
            </div> */}
            <div className="admin-petlist-section2__search">
            <FaSearch />
              <input type="text" placeholder="Tìm kiếm" />
            </div>
            <div className="admin-petlist-section2__button-create">
              <Link href={`/admin/pet/create`}>+ Tạo mới</Link>
            </div>
            {/* <div className="admin-petlist-section2__button-trash">
              <Link href={`/admin/trash`}>Thùng rác</Link>
            </div> */}
          </div>
        </div>
        </>
    )
}