'use client'
import React, { useEffect, useRef } from 'react';
import {
  Chart,
  LineController, // Hoặc BarController nếu muốn biểu đồ cột
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, // Hoặc BarElement cho biểu đồ cột
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Đăng ký các thành phần cần thiết cho Chart.js
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Định nghĩa kiểu dữ liệu cho props (nếu dùng TypeScript)
interface RevenueChartProps {
  data:any
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null); // Lưu tham chiếu đến đối tượng Chart

  


  useEffect(() => {
    if (!canvasRef.current || !data) {
      return; // Thoát nếu chưa có canvas hoặc data
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) {
      return; // Thoát nếu không lấy được context 2D
    }

    // Hủy biểu đồ cũ trước khi vẽ biểu đồ mới (quan trọng khi data thay đổi)
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Tạo biểu đồ mới
    chartRef.current = new Chart(ctx, {
      type: 'line', // Loại biểu đồ: 'line', 'bar', 'pie', ...
  
     data: {
      labels: ['T1', 'T2', 'T3', 'T4', 'T5','T6','T7','T8','T9','T10','T11','T12'],
      datasets: [
        {
          label: data.doanhthu.label, // Nhãn của dataset
          data:[...data.doanhthu.data],
          borderColor: '#4379EE', // Màu viền
          borderWidth: 1.5, // Độ dày của đường
        },
       
        {
          label: data.chiphi.label, // Nhãn của dataset
          data: [...data.chiphi.data], 
          borderColor: '#EF3826', // Màu viền
          borderWidth: 1.5, // Độ dày của đường
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Ngày'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Doanh thu (VND)'
          }
        }
      },
      maintainAspectRatio: false, // Không giữ tỷ lệ khung hình mặc định
    }
    });

    // Hàm cleanup: Hủy biểu đồ khi component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data]); // useEffect sẽ chạy lại khi `data` thay đổi

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      {/* Đặt canvas vào đây */}
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default RevenueChart;