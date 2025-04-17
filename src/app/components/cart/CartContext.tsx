'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Định nghĩa interface cho kiểu dữ liệu của Context 
interface CartContextType {
  qualitiItem: string;
  setQualitiItem: (itemCount: string) => void;
  sumPrice: number;
  setSumPrice: (price: number) => void;
  listItemCart: any[]; // Hoặc kiểu dữ liệu cụ thể cho item giỏ hàng
  setListItemCart: (items: any[]) => void;
}

// Tạo Context object
const CartContext = createContext<CartContextType | undefined>(undefined);

// Interface cho props của CartProvider
interface CartProviderProps {
  children: ReactNode; // Để bọc các component con
}

// Tạo component CartProvider
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
 
  const [qualitiItem, setQualitiItem] = useState<string>('0');
  const [sumPrice, setSumPrice] = useState<number>(0);
  const [listItemCart, setListItemCart] = useState<any[]>([]); // Khởi tạo mảng rỗng

  // Giá trị Context được cung cấp cho các component con
  const value: CartContextType = {
    qualitiItem,
    setQualitiItem,
    sumPrice,
    setSumPrice,
    listItemCart,
    setListItemCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Tạo custom hook để dễ dàng sử dụng CartContext và báo lỗi nếu dùng ngoài Provider
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};