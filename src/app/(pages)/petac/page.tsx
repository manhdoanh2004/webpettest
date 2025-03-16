
import type { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
export const metadata: Metadata = {
    title: " Phụ Kiện Thú cưng ",
    description: "",
    icons:{
      icon:"/frame.svg"
    }
    
  };
export default async function PetAcces()
    {
    
        
         const data  =await fetch('https://67cd6ddbdd7651e464ee5912.mockapi.io/petlist/product')
           
            const product=await data.json();
            console.log(product)
      
        return(
            <>
            <h1> Trang PetAcces</h1>
              <ul>
                {product.map((item:any)=> (<li key ={item.id}>
                  <Link href={`/petac/${item.id}`}>
                  {item.title}
                  </Link>
                  
                  </li>))}
              </ul>
            </>
        )
    }