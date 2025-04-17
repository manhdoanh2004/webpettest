import Link from "next/link"
import orderSuccecc from "../../../assets/Img/order-success.svg"
import { FaAnglesLeft } from "react-icons/fa6"
export default function Section1()
{
    return(
        <>
            <div className="order-success">
               <div className="container">
               <div className="order-success__box">
              
               <div className="order-success__images">
                    <img src={orderSuccecc.src} alt="" />
                </div>
                <h1 className="order-success__title">
                    Đặt hàng thành công!
                </h1>
                <p className="order-success__desc">
                    Nhân viên của chúng tôi sẽ liên hệ với bạn sớm nhất có thể
                </p>
                <Link href={"/pets"} className="order-success__turnback"> <FaAnglesLeft />
                Quay lại mua hàng
                </Link>
               </div>
              
               </div>

            </div>
        </>
    )
}