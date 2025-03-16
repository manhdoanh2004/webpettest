'use client'

import Link from "next/link";
import { useEffect, useState } from 'react';
export const  ClientPet:any=()=>
{
    const [products, setProducts] = useState<any[]>([]);
    

    useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/products');
    
      const data = await response.json();
      setProducts(data);
  
    }
    fetchData();
  }, []);

 
return(
  <>
  <h1> Trang Pet</h1>
    <ul>
      {products.map((item:any)=> (<li key={item.id}>

        <Link href={`/pets/${item.id}`}>
        {item.title}
        </Link>
          
          
          </li>))}
    </ul>
  </>
)
}