'use client'
import fillter from "../../assets/Img/Filter.svg"
export const Fillter=()=>
{
    return (
        <>
            <div className="sp-section-1__option">
            <div className="sp-section-1__option-iteam"><img src={fillter.src} alt="filler"/>
              <p>Bộ lọc  </p>
            </div>
            <div className="sp-section-1__op1">
              <h4 className="sp-section-1__title">Giống</h4>
              <form className="sp-section-1__s1">
                <div className="sp-section-1__duc">
                  <input type="checkbox" id="duc" name="gioitinh" value="Đực"/>
                  <label htmlFor="duc">Đực </label>
                </div>
                <div className="sp-section-1__cai">
                  <input type="checkbox" id="cai" name="gioitinh" value="Cái"/>
                  <label htmlFor="cai">Cái </label>
                </div>
              </form>
            </div>
            <div className="sp-section-1__op2">
              <h4 className="sp-section-1__title">Màu sắc</h4>
              <form className="sp-section-1__s1" action="#">
                <div className="sp-section-1__color-xam">
                  <input type="checkbox" id="den" name="color" defaultValue="den"/>
                      <label htmlFor ="den">Đen </label>
                </div>
                <div className="sp-section-1__color-trang">
                  <input type="checkbox" id="trang" name="color" defaultValue="trang"/>
                  <label htmlFor="trang">trắng </label>
                </div>
              </form>
            </div>
            <div className="sp-section-1__op3">
              <h4 className="sp-section-1__title">Kích thước</h4>
              <form className="sp-section-1__s1" action="#">
                <div className="sp-section-1__size-nho">
                  <input type="checkbox" id="nho" name="size" value="nho"/>
                  <label htmlFor="nho">Nhỏ </label>
                </div>
                <div className="sp-section-1__size-vua">
                  <input type="checkbox" id="vua" name="size" value="vua"/>
                  <label className="vua">Vừa </label>
                </div>
                <div className="sp-section-1__size-lon">
                  <input type="checkbox" id="lon" name="size" value="lon"/>
                  <label htmlFor="lon">Lớn </label>
                </div>
              </form>
            </div>
          </div>
        </>
    )
}