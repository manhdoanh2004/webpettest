import { FaPenToSquare, FaTrashCan } from "react-icons/fa6"
import avatar from "../../../../../assets/Img/product_pet-1.jpg"
import Link from "next/link"
export default function Section3(){
    return(
        <>
 <div className="admin-petlist-section3">
          <div className="admin-petlist-section3__table-2">
            <table>
              <thead>
                <tr>
                  <th className="admin-petlist-section3__center">
                    <input className="admin-petlist-section3__check" type="checkbox" />
                  </th>
                  <th>Tên tour</th>
                  <th>Ảnh đại diện</th>
                  <th>Giá</th>
                  <th>Còn lại</th>
                 
                  <th className="admin-petlist-section3__center">Trạng thái</th>
                  <th>Tạo bởi</th>
                  <th>Cập nhật bởi</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="admin-petlist-section3__center">
                    <input className="admin-petlist-section3__check" type="checkbox" />
                  </td>
                  <td>Tour Hạ Long</td>
                  <td>
                    <img
                      className="admin-petlist-section3__avatar"
                      src={avatar.src}
                    />
                  </td>
                  <td>
                    <div> 5.000.000đ</div>
                  </td>
                  <td className="admin-petlist-section3__left">
                    <div>10</div>
                  </td>
                
                  <td className="admin-petlist-section3__center">
                    <div className="badge badge-green">Hoạt động</div>
                  </td>
                  <td>
                    <div>Lê Văn A</div>
                    <div className="admin-petlist-section3__time">16:30 - 20/10/2024</div>
                  </td>
                  <td>
                    <div>Lê Văn A</div>
                    <div className="admin-petlist-section3__time">16:30 - 20/10/2024</div>
                  </td>
                  <td>
                    <div className="admin-petlist-section3__buttons">
                      <Link href={`/admin/pet/edit/adn234`} className="admin-petlist-section3__edit">
                      <FaPenToSquare/>
                      </Link>
                      <Link href={`/admin/pet/delete/adn234`} className="admin-petlist-section3__delete">
                      <FaTrashCan/>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}