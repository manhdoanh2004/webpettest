'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";

export const Section2=()=>
{
  
    const [productsList,setProductList]=useState<any| undefined>(undefined);

    useEffect(()=>
    {
    
        async function  fectchData()
        {
            const res= await fetch('/api/products');
            const data=await res.json();
  
            setProductList(data);
        }
        fectchData();
    },[])
    let productLimit=[];
   if(productsList) 
   {
    productLimit=productsList.slice(0,4);
   }
  
    return (
      <>
        <section className="section-2">
          <div className="container">
            <div className="box-head">
              <div className="section-2__iteamleft">
                <div className="section-2__title">Có gì mới?</div>
                <h2 className="section-2__subtitle">
             
                  một số vật nuôi của chúng tôi
                </h2>
              </div>
              <div className="section-2__itemright">
               
              </div>
            </div>
            <div className="section-2__wrap">
             
                {productsList?(<>{
                    productLimit.map((item:any)=>( <div className="product-item" key={item.id}>
                      <div className="section-2__image">
                       
                        <Link href={`/pets/${item.id}`}>
                          <img src={item.img} alt="" />
                        </Link>
                      </div>
                      <div className="section-2__content">
                        <h3 className="section-2__ptitl">{item.name}</h3>
                        <div className="section-2__desc">
                          <div className="section-2__descleft">
                            <div className="section-2__gender">Giống:</div>
                            <div className="section-2__namegender">{item.gender}</div>
                          </div>
                          <div className="section-2__dos"></div>
                          <div className="section-2__desc-right">
                            <div className="section-2__age">Tuổi</div>
                            <div className="section-2__nage">{item.age<10?`0${item.age}`:item.age} Tháng </div>
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
                    Array(8).fill("").map((item,index)=>
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
            <div className="section-2__button-bottom">
              <a className="button button--outline" href="#">
                Xem thêm
                <FaAngleRight />
              </a>
            </div>
          </div>
        </section>
      </>
    );
}