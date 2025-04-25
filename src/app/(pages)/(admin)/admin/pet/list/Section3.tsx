'use client'
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6"
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
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
        try {
          const res= await fetch(`https://67cd6ddbdd7651e464ee5912.mockapi.io/petlist/product`);
          const data= await res.json();
          setProductList(data);
        } catch (error) {
          console.log('lỗi api')
        }
        
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
                  {/* <th className="admin-petlist-section3__center">
                    <input className="admin-petlist-section3__check" type="checkbox" />
                  </th> */}
                  <th>Tên thú cưng</th>
                  <th>Ảnh đại diện</th>
                  <th>Giá</th>
                  <th>Còn lại</th>
                 
                  {/* <th className="admin-petlist-section3__center">Trạng thái</th>
                  <th>Tạo bởi</th>
                  <th>Cập nhật bởi</th> */}
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {productList?(<>
                {productList.map((item:any)=><tr key={item.id}>
                  {/* <td className="admin-petlist-section3__center">
                    <input className="admin-petlist-section3__check" type="checkbox" />
                  </td> */}
                  <td>{item.name}</td>
                  <td>
                    <img
                      className="admin-petlist-section3__avatar"
                      src={item.img}
                    />
                  </td>
                  <td>
                    <div> {item.price.toLocaleString("vi")}đ</div>
                  </td>
                  <td className="admin-petlist-section3__left">
                    <div>10</div>
                  </td>
                  {/* <td className="admin-petlist-section3__center">
                    <div className="badge badge-green">Hoạt động</div>
                  </td> */}
                  {/* <td>
                    <div>Lê Văn A</div>
                    <div className="admin-petlist-section3__time">16:30 - 20/10/2024</div>
                  </td> */}
                  {/* <td>
                    <div>Lê Văn A</div>
                    <div className="admin-petlist-section3__time">16:30 - 20/10/2024</div>
                  </td> */}
                  <td>
                    <div className="admin-petlist-section3__buttons">
                      <Link href={`/admin/pet/list/${item.id}`} className="admin-petlist-section3__edit">
                      <FaPenToSquare/>
                      </Link>
                      <button onClick={(event)=>handleDelete(event,item.id)} className="admin-petlist-section3__delete">
                      <FaTrashCan/>
                      </button>
                    </div>
                  </td>
                </tr>)}
                </>)
                :(<>{Array(6).fill("").map((item:any,index:any)=><tr key={index+1} >
                  <td className="admin-petlist-section3__center">
                    <Skeleton
                    width={20} height={20}

                     className="admin-petlist-section3__check"  />
                  </td>
                  <td> <Skeleton style={{ textAlign:"center"}}/></td>
                 
                  <td>
                    <Skeleton
                    width={60}
                    height={60}
                    style={{marginLeft:"10px"}}
                      className="admin-petlist-section3__avatar"
                    />
                  </td>
                  <td>
                    <Skeleton/>
                  </td>
                  <td className="admin-petlist-section3__left"> <Skeleton /></td>
                 
                  <td className="admin-petlist-section3__center">
                    <Skeleton className="badge badge-green"/>           
                  </td>
                  <td>
                    <Skeleton/>
                    <Skeleton className="admin-petlist-section3__time"/>
                  </td>
                  <td>
                    <Skeleton/>
                    <Skeleton className="admin-petlist-section3__time"/>
                  </td>
                  <td >
                    <div className="admin-petlist-section3__buttons" >
                      <Skeleton width={48} height={32} className="admin-petlist-section3__edit"/>
                      <Skeleton width={48} height={32} style={{marginLeft:"5px"}} className="admin-petlist-section3__delete"/>
                    </div>
                  </td>
                </tr>)}</>)}
             
              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}