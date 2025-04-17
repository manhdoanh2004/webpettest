'use client'
import { useSearchParams } from "next/navigation";

export default function Section1()
{
      const searchParams = useSearchParams();
    const key = searchParams.get('key');
    console.log(key)
    return(
        <>
        
        </>
    )
}