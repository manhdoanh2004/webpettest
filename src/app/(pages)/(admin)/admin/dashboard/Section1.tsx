
import React, { useEffect, useRef } from 'react';

import icon1 from"../../../../assets/Img/section-1-icon-1.svg"
import icon2 from"../../../../assets/Img/section-1-icon-2.svg"
import icon3 from"../../../../assets/Img/section-1-icon-3.svg"



export default function Section1()
{
    return(
        <>
    <h1 className="box-title">Tổng quan</h1>
      <div className="dashboard__section-1">
        <div className="inner-item">
          <div className="inner-icon"><img src={icon1.src}/></div>
          <div className="inner-content">
            <div className="inner-title">Người dùng</div>
            <div className="inner-number">1.200</div>
          </div>
        </div>
        <div className="inner-item">
          <div className="inner-icon"><img src={icon2.src}/></div>
          <div className="inner-content">
            <div className="inner-title">Đơn hàng</div>
            <div className="inner-number">3.600</div>
          </div>
        </div>
        <div className="inner-item">
          <div className="inner-icon"><img src={icon3.src}/></div>
          <div className="inner-content">
            <div className="inner-title">Doanh thu</div>
            <div className="inner-number">300.000.000đ</div>
          </div>
        </div>
      </div>
   
        </>
    )
}