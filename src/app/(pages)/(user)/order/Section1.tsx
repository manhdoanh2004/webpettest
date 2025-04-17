'use client'
import BoxBreadCrumb from "@/app/components/boxbreadcrumb/BoxBreadCrumb";
import { useCart } from "@/app/components/cart/CartContext";
import Link from "next/link";
import { useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";

export default function Section1()
{    const {  setQualitiItem,  setSumPrice, setListItemCart,qualitiItem,sumPrice ,listItemCart} = useCart();
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
          
       
         
        }
      }, []);
       //khi người dùng vào 1 trang thì lấy ra số lượng sản phẩm nếu có, chỉ chạy 1 lần 
  useEffect(() => {
    if (sessionStorage.getItem("cartList")) {
      const cartSession = sessionStorage.getItem("cartList") || "";
      let listItem = [...JSON.parse(cartSession)];
      setListItemCart(listItem);
    }
  }, []);
    

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

  
    return(
        <>
         <div className="section-11">
               <div className="container">
              
                 <div className="inner-wrap">
                 <BoxBreadCrumb name={""} title="Đặt hàng"/>
          
                   <div className="inner-head">
                     <div className="inner-title">
                       Giỏ Hàng
                     </div>
                     
                     <Link href="/pets" className="inner-back">
                       Quay lại mua hàng <FaAnglesRight/>
                     </Link>
                   </div>
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
                          href={`pets/${item.id}`}
                          className="box-cart__itemtitle"
                        >
                          {item.title}
                        </Link>
                        <div className="box-cart__itemprice">{item.price.toLocaleString("vi")} VND</div>
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
                  
                
                   <div className="inner-list-price">
                     <div className="inner-item">
                       <div className="inner-label">Tổng tiền:</div>
                       <div className="inner-price">{sumPrice?(<>{sumPrice.toLocaleString("vi")} đ</>):(<>0đ</>)}</div>
                     </div>
                   
                     <div className="inner-item">
                       <div className="inner-label">Thanh toán:</div>
                       <div className="inner-price-highlight">{sumPrice?(<>{sumPrice.toLocaleString("vi")} đ</>):(<>0đ</>)}</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
        </>
    )
}