'use client'
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6"
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import imageDefault from "../../../../../assets/Img/product_customer-4.jpg"
import 'react-loading-skeleton/dist/skeleton.css'
import Link from "next/link"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
export default function Section3(){
  
  const [productList,setProductList]=useState<any|undefined>(undefined);

  const [deleted,setDeleted]=useState(false);
  useEffect(()=>
  {
      async function fectData()
      {
        const res= await fetch(`https://67cd6ddbdd7651e464ee5912.mockapi.io/petlist/product`);
        const data= await res.json();
        setProductList(data);
      }
      fectData();
  },[])

  const handleDelete= (event:any,id:any)=>
  {
    Swal.fire({
      title: "Xác nhận xóa sản phẩm?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Xóa",
      denyButtonText: `Hủy`
    }).then  ( async(result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(id)
        // const dataFinal={
        //   id:id,
        //   status:"inactive",
        //   deletedBy:"293897973"
        // }

        // const res=await fetch("",{
        //   method:"DELETE",
        //   headers:{
        //     'Content-Type':"application/json"
        //   },
        //   body:JSON.stringify(dataFinal)
        // })

        // const data=await res.json();
        // if(data.code=='success')
        // {
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Xóa sản phẩm thành công!",
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
        //   setTimeout(()=>
        //   {
        //     setDeleted(!deleted);
        //   },1500)
         
        // }
        // else
        // {
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "error",
        //     title: "Xóa sản phẩm không thành công!",
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
        // }

       
      } 
    });
  }

  return(
        <>
 <div className="admin-petlist-section3">
          <div className="admin-petlist-section3__table-2">
            <table>
              <thead>
                <tr>
                <th>Mã</th>
                <th>Thông tin khách</th>
                <th>Danh sách đơn hàng</th>
                <th>Thanh toán</th>
                <th>Trạng thái</th>
                <th className="admin-petlist-section3__center">Ngày đặt</th>
                <th>Hành động</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div className="admin-petlist-section3__code">OD000001</div>
                </td>
                <td>
                  <div>Họ tên: Lê Văn A</div>
                  <div>SĐT: 0123456789</div>
                  <div>email: levana@gmail.com</div>
                  <div>địa chỉ: ngõ 123..</div>
                 
                  <div>Ghi chú: Test...</div>
                </td>
                <td >
                  <div className="admin-petlist-section3__listitem">
                  <div className="admin-petlist-section3__item">
                    <div className="admin-petlist-section3__image"><img src={imageDefault.src} alt=""/></div>
                    <div className="admin-petlist-section3__content">
                      <div className="admin-petlist-section3__name">Sản phẩm 1</div>
                      <div className="admin-petlist-section3__quantity">Số lượng: 3 x 1.500.000đ</div>
                   
                    </div>
                  </div>
                  <div className="admin-petlist-section3__item">
                    <div className="admin-petlist-section3__image"><img src={imageDefault.src} alt=""/></div>
                    <div className="admin-petlist-section3__content">
                      <div className="admin-petlist-section3__name">Sản phẩm 1</div>
                      <div className="admin-petlist-section3__quantity">Số lượng: 3 x 1.500.000đ</div>
                   
                    </div>
                  </div>
                  <div className="admin-petlist-section3__item">
                    <div className="admin-petlist-section3__image"><img src={imageDefault.src} alt=""/></div>
                    <div className="admin-petlist-section3__content">
                      <div className="admin-petlist-section3__name">Sản phẩm 1</div>
                      <div className="admin-petlist-section3__quantity">Số lượng: 3 x 1.500.000đ</div>
                   
                    </div>
                  </div>
                  </div>
                
             
                  
                </td>
                <td>
                  <div>Tổng tiền: 10.000.000đ</div>
                  <div>Thanh toán: 10.000.000đ</div>
                  <div>PTTT: Tiền mặt</div>
                  <div>TTTT: Đã thanh toán</div>
                </td>
                <td>
                  <div className="badge badge-green">Đã giao hàng thành công</div>
                </td>
                <td className="admin-petlist-section3__center">
                  <div>16:20</div>
                  <div>01/01/2024</div>
                </td>
                <td>
                  <div className="admin-petlist-section3__buttons">
                  <Link href={`/admin/order/list/${1}`} className="admin-petlist-section3__edit">
                      <FaPenToSquare/>
                      </Link>
                      <button className="admin-petlist-section3__delete">
                      <FaTrashCan/>
                      </button>
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