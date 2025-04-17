import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function BoxBreadCrumb(props:{name:any, title:any})
{
    const {name,title}=props;
    return(
        <>
         <nav className="box-breadcrumb">
                <div>
                  <ul className="box-breadcrumb__list">
                    <li className="box-breadcrumb__item">
                     
                      <Link className="box-breadcrumb__link" href="/">
                        Trang chủ
                      </Link>
                      <FaChevronRight />
                    </li>
                    <li className="box-breadcrumb__item">
                    
                      <Link className="box-breadcrumb__link" href="/pets">
                       {title?title:""}  
                      </Link>
                      {name?(<> <FaChevronRight /></>) :(<></>)}
                    </li>
                    <li className="box-breadcrumb__item">
                      {" "}
                      <Link className="box-breadcrumb__link" href="#">
                      {name?(<>{name==""?"":name}</>) :(<></>)}
                      </Link>
           
                    </li>
                  </ul>
                </div>
              </nav>
        </>
    )
}