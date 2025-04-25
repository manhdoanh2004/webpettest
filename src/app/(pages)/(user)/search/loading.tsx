// src/app/loading.tsx
'use client'
export default function GlobalLoading() {

 
  return (
    <div style={{
     
      position: 'fixed',
      inset: 0, // Tương đương top: 0, right: 0, bottom: 0, left: 0
      backgroundColor: 'rgba(255, 255, 255, 0.85)', // Nền trắng mờ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999, 
    }}>
   
      <div style={{
        width: '50px', 
        height: '50px',
        border: '6px solid rgba(0, 0, 0, 0.1)', // Vòng tròn nền màu xám nhạt, trong suốt nhẹ
        borderTopColor: '#3498db', // Màu xanh dương cho phần quay
        borderRadius: '50%',
        animation: 'spinnerAnimation 1s linear infinite', // Áp dụng animation
      }}></div>

  
      <style jsx global>{`
        @keyframes spinnerAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}