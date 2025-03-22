'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Customer=()=>
{
    
    // const swiper = new Swiper('.swiper-container', {
    //     autoplay: {
    //       delay: 3000, // Thời gian chuyển ảnh (milliseconds)
    //       disableOnInteraction: false, // Tiếp tục autoplay khi tương tác
    //     },
    //     loop: true, // Lặp lại slide
    //     // ... các tùy chọn khác
    //   });
       const [customerimg,setcustomerimg]=useState<any|undefined>(undefined);

    
        useEffect(()=>
        {
            
            async function fetchDataCus() {
            
                const res=await fetch(`https://67d92bb700348dd3e2a9f669.mockapi.io/customer/imgCustomer`)
                const data=await res.json();
                setcustomerimg(data);
            }
            fetchDataCus();
    
        },[])


    return (
        <>
        
            <Swiper
          watchSlidesProgress={true} slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="product-infor__customer-image"
      >
               {customerimg?(<>{
                        customerimg.map((item:any)=>  
                       
                        <SwiperSlide key={crypto.randomUUID()} >  <img key={crypto.randomUUID()} className='myswiper' src={item.img} alt="ảnh customer" /></SwiperSlide>
                    )
                }</>):(<>Loading...</>)}
              
          
           
      </Swiper>
    </>
      
    )
}