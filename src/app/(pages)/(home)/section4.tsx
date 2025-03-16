'use client'
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import section4Image1 from "../../assets/Img/section-4_Image1.png";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
export const Section4 = () => {

    const [knowledge,setknowledge]=useState<any |undefined>(undefined)

    useEffect(()=>
    {
            async function fetchData() 
            {
                const res=await fetch("/api/knowledge");
                const data=await res.json();
                setknowledge(data);
                
            }
            fetchData();
    },[])

  return (
    <>
      <section className="section-4">
        <div className="container">
          <div className="box-head">
            <div className="section-4__iteamleft">
              <div className="section-4__title">Có thể bạn đã biết?</div>
              <h2 className="section-4__subtitle">
                Kiến thức thú cưng hữu ích
              </h2>
            </div>
            <div className="section-4__itemright">
              <Link className="button button--outline" href="/pets">
                Xem thêm <FaChevronRight />
              </Link>
            </div>
          </div>
          <div className="section-4__wrap">
            {knowledge?(<>{
              knowledge.map((item:any)=>(  <div className="product-item" key={item.id}>
                <div className="section-4__image">
                  <a href="#">
                    <img src={item.img} alt="" />
                  </a>
                </div>
                <div className="section-4__content">
                  <div className="section-4__tag">Kiến thức thú cưng</div>
                  <div className="section-4__suggest">
                   {item.title}
                  </div>
                  <div className="section-4__desc">
             
                    {item.des}
                  </div>
                </div>
              </div>))
            }</>):
            (<>
              {Array(3).fill("").map((item,index)=>(
               <div className="product-item" key={index+1}>
               <Skeleton className="section-4__image" style={{ height:'160px', width:'240px' }}/>
              
            
               <div className="section-4__content">
                 <Skeleton className="section-4__tag"/>
                 <Skeleton className="section-4__suggest"/>
                 <Skeleton className="section-4__desc"/>
               </div>
             </div>
              )
              )}
            </>) }

       
          </div>
          <div className="section-4__button-bottom-sc4">
            <Link className="button button--outline" href="/pets">
              Xem thêm<FaChevronRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
