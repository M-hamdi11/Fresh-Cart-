"use client";

import { carttype } from "@/api/types";
import React, { createContext, useContext, useRef, useSyncExternalStore, ReactNode, useState } from "react";

export type CartContextType = {
  numberofcartitems: number;
  numberofcartitemsfromlayout: number; 
  updateCartItems: (num: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartContextProvider({
  children,
  cart,
}: {
  children: ReactNode;
  cart: carttype | undefined;
}) {
  const countRef = useRef(cart?.products?.length ?? 0);
  const listenersRef = useRef(new Set<() => void>());

  const subscribe = (listener: () => void) => {
    listenersRef.current.add(listener);
    return () => listenersRef.current.delete(listener);
  };

  const getSnapshot = () => countRef.current;

  const numberofcartitems = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const updateCartItems = (num: number) => {
    countRef.current = num;
    listenersRef.current.forEach((l) => l()); 
  };

  const [numberofcartitemsfromlayout, setnumberofcartitems] = useState(()=>{
    return cart?.products?.length ?? 0

  })

  return (
    <CartContext.Provider value={{ numberofcartitems,numberofcartitemsfromlayout, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function usecartcontext(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("usecartcontext must be used within a CartContextProvider");
  }
  return context;
}