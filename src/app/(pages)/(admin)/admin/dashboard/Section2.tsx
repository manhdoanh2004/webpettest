import RevenueChart from "@/app/components/revenuechart/RevenueChart";

export default function Seciton2(){
    const data={doanhthu:{
        label: 'Doanh thu 2025', // Nhãn của dataset
         data:[1000000, 1050000, 1540450, 18000900, 1940000, 1740000, 2800000, 3800000, 2700000, 2850000, 2510000, 29760000]}
         ,
         chiphi:{
           label: 'Chi phí 2025', // Nhãn của dataset
            data: [1000000, 1550000, 1740450, 10100900, 1640000, 1240000, 2200000, 2100000, 2300000, 2450000, 2010000, 25760000]
         }
     }
    return(
        <>
        <div className="dashboard__section-2">
        <h2 className="inner-title">Biểu đồ doanh thu</h2>
        <RevenueChart data={data}/>
        </div>
        
        </>
    )
}