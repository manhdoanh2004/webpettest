'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Fillter } from "../pets/fillter";
import Image from "next/image";
import fillter from "../../../assets/Img/Filter.svg";
import Router from "next/navigation";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Section1()
{    
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const  Router=useRouter();
    const keyword = searchParams.get('key');//lấy giá trị của biến key trên url
 
      const [limit, setLimit] = useState(9);
      const [skip, setskip] = useState(0);
      const [pagination, setPagination] = useState<any | undefined>(undefined);
      const [productList, setProductList] = useState<any | undefined>(undefined);
      const [currentPage, setCurrentPage] = useState(1);
   
      //lần đầu tiên vào trang nếu chưa có biến page trên url thì mặc định chuyển đến page 1, 
      // nếu có rồi thì chuyển đến page có giá trị bằng biến page trên url
      useEffect(() => {
        const page = Number(searchParams.get("page")) || 1;
       
        setCurrentPage(page);
        setskip(limit * (page - 1));
      }, [searchParams,limit]);
    
      // mỗi lần tìm kiếm hoăc chuyển page thì sẽ call lại api để lấy lại dữ liệu 
      useEffect(() => {
        async function fetchData() {
          const res = await fetch(
            `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}&skip=${skip}&select=title,price,rating,stock,thumbnail`
          );
          const data = await res.json();
          setProductList(data);
          setPagination(Math.ceil(parseInt(data.total) / limit));
        }
        fetchData();
      }, [skip, limit,keyword]);
    

     

      //mỗi khi chuyển trang thì set lại  giá trị cho biến page trên url
      const handlePageChange = (newPage: any) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", newPage);
        Router.push(`${pathname}?${params.toString()}`);
      };
    
     


    return(
        <>
        
         <section className="sp-section-1">
        <div className="container">
       
          <div className="sp-section-1__wrap">
            <Fillter />
            <div className="sp-section-1__wrap-iteam">
              <div className="sp-section-1__nhan">
                <div className="sp-section-1__title-main"> Chó nhỏ</div>
                <div className="sp-section-1__option-iteam2">
                <Image src={fillter.src} width={30} height={30} alt="filler"/>
                  <p>Bộ lọc </p>
                </div>
              </div>
              <div className="sp-section-1__list-iteam">
                {productList ? (
                  <>
                  {productList.products.length<1?(<>{`Không tìm thấy ${keyword} `}</>):
                      (<> {productList.products.map((item: any) => (
                      <div className="product-item" key={item.id}>
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
                              <div className="section-2__namegender">
                                {item.rating}
                              </div>
                            </div>
                            <div className="section-2__dos"></div>
                            <div className="section-2__desc-right">
                              <div className="section-2__age">Tuổi</div>
                              <div className="section-2__nage">
                                {item.age < 10 ? `0${item.age}` : item.age}{" "}
                                Tháng{" "}
                              </div>
                            </div>
                          </div>
                          <div className="section-2__price">
                            {item.price.toLocaleString("vi")} VND
                          </div>
                        </div>
                      </div>
                    ))}</>)}
                   
                  </>
                ) : (
                  <>
                    {Array(9)
                      .fill("")
                      .map((item, index) => (
                        <div className="product-item" key={index}>
                          <Skeleton className="section-2__image" />

                          <div className="section-2__content">
                            <Skeleton className="section-2__ptitl" />
                            <div className="section-2__desc">
                              <div className="section-2__descleft">
                                <Skeleton className="section-2__gender"></Skeleton>
                                <Skeleton className="section-2__namegender"></Skeleton>
                              </div>
                              <Skeleton
                                width={"200px"}
                                height={"10px"}
                                style={{ margin: "0px" }}
                                className="section-2__dos"
                              ></Skeleton>
                              <div className="section-2__desc-right">
                                <Skeleton className="section-2__age" />
                                <Skeleton className="section-2__nage" />
                              </div>
                            </div>
                            <Skeleton className="section-2__price" />
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>

              <div className="sp-section-1__Pagination">
                <button
                  className="button--item"
                  onClick={() =>
                    handlePageChange(
                      currentPage > 1 ? currentPage - 1 : currentPage
                    )
                  }
                >
                  <FaArrowLeft />
                </button>
                <button
                  className={`${
                  (  currentPage > pagination - 1 || currentPage==1)
                      ? "button--hiddendos"
                      : "button--dos"
                  }`}
                  onClick={() => handlePageChange(currentPage-1)}
                >
                  { currentPage - 1}
                </button>
                {pagination ? (
                  <>
                  
                    {Array(parseInt(pagination))
                      .fill("")
                      .map((item, index) => (
                        <button
                          key={index + 1}
                          className={`${
                            currentPage == index + 1 ? "button--Act" : ""
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                  </>
                ) : (
                  <><button
                  
                  className={`${
                    "button--Act" 
                  }`}
                >
                 1
                </button></>
                )}
                <div
                  className={`${
                    currentPage >= pagination - 1
                      ? "button--hiddendos"
                      : "button--dos"
                  }`}
                >
                  ...
                </div>
                <button
                  className={`${
                    currentPage > pagination - 1
                      ? "button--hiddendos"
                      : "button--dos"
                  }`}
                  onClick={() => handlePageChange(pagination)}
                >
                  {pagination}
                </button>
                <button
                  className="button--item"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}