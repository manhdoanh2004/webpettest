"use client";
import Link from "next/link";
import { Fillter } from "./fillter";
import fillter from "../../assets/Img/Filter.svg"
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const Section2 = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();



    const [limit,setLimit]=useState(9);// số item giới hạn hiển thị trang 1 trang 
    const [skip,setskip]=useState(0);// số item bỏ qua 
              
    const [pagination,setPagination]=useState<any|undefined>(undefined);// số trang sản phẩm
  const [productList, setProductList] = useState<any | undefined>(undefined);//danh sách sản phẩm 
 
  useEffect(() => {
   
    async function fetchData() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,rating,stock,thumbnail`
      );
      const data = await res.json();
      setProductList(data);
      setPagination(Math.ceil(parseInt(data.total)/limit));
    }
    fetchData();

        //lấy ra trang hiện tại ,nếu không có thì mặc định trang hiện tại là 1 
        const page=searchParams.get('page');
                
        if(!page)
        {
            const params = new URLSearchParams(searchParams);
            params.set('page', '1');
            router.push(`${pathname}?${params.toString()}`);
            setskip(0);
        }


  }, [limit,skip]);


 
    const currentPage = Number(searchParams.get('page')) || 1;
 

  


    
//   console.log(pagination)
  const handlePageChange = (newPage:any) => {
     const params = new URLSearchParams(searchParams);
        params.set('page', newPage);
     router.push(`${pathname}?${params.toString()}`);
     setskip(limit*newPage)
  };

  return (
    <>
      <section className="sp-section-1">
        <div className="container">
          <div className="sp-section-1__wrap">
            <Fillter />
            <div className="sp-section-1__wrap-iteam">
              <div className="sp-section-1__nhan">
                <div className="sp-section-1__title-main"> Chó nhỏ</div>
                <div className="sp-section-1__option-iteam2">
                  <img src={fillter.src} alt="fillter" />
                  <p>Bộ lọc </p>
                </div>
              </div>
              <div className="sp-section-1__list-iteam">
              {productList?(<>{
                  productList.products.map((item:any)=>( <div className="product-item" key={item.id}>
                    <div className="section-2__image">
                     
                      <Link href={`/pets/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} />
                      </Link>
                    </div>
                    <div className="section-2__content">
                      <h3 className="section-2__ptitl">{item.title}</h3>
                      <div className="section-2__desc">
                        <div className="section-2__descleft">
                          <div className="section-2__gender">Giống:</div>
                          <div className="section-2__namegender">{item.rating}</div>
                        </div>
                        <div className="section-2__dos"></div>
                        <div className="section-2__desc-right">
                          <div className="section-2__age">Tuổi</div>
                          <div className="section-2__nage">{item.stock<10?`0${item.age}`:item.age} Tháng </div>
                        </div>
                      </div>
                      <div className="section-2__price">{item.price.toLocaleString('vi')} VND</div>
                    </div>
                  </div>
                  ))
              }</>)
              :
              (<>
                 {
                  Array(9).fill("").map((item,index)=>
                  (
                    <div className="product-item" key={index}>
                    <Skeleton className="section-2__image"/>
                     
                  
              
                    <div className="section-2__content">
                      <Skeleton className="section-2__ptitl"/>
                      <div className="section-2__desc">
                        <div className="section-2__descleft">
                          <Skeleton className="section-2__gender"></Skeleton>
                          <Skeleton className="section-2__namegender"></Skeleton>
                        </div>
                        <Skeleton width={"200px"} height={"10px"} style={{ margin: '0px' }} className="section-2__dos"></Skeleton>
                        <div className="section-2__desc-right">
                          <Skeleton className="section-2__age"/>
                          <Skeleton className="section-2__nage"/>
                        </div>
                      </div>
                      <Skeleton className="section-2__price"/>
                    </div>
                  </div>
                  )
                )
                 }
              </>)}
              </div>

              <div className="sp-section-1__Pagination">
                <button className="button--item" onClick={()=>handlePageChange(currentPage>1?currentPage-1:currentPage)}>
                <FaArrowLeft />
                </button>
                {/* <button className="button--Act">1</button>
                <button>2</button>
                <button>3</button>
                <button className="button--Act2">4</button>
                <button>..</button>
                <button>28</button> */}
                {pagination?(<>
                {
                    Array(parseInt(pagination)).fill("").map((item,index)=>
                        <button key={index+1} className={`${currentPage==index+1?"button--Act":""}`} >{index+1}</button> )
                }</>):(<></>)}
                <button className="button--item" onClick={()=>handlePageChange(currentPage+1)}>
                <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
