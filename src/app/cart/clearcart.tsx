'use client'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { clearcartaction } from './[id]/cartaction';
import { useCartStore } from '../_store/cartstore';


export default function Clearcart() {
    const setCount = useCartStore((s) => s.setCount);

    async function clearcart(){
      const data = await clearcartaction();
      if(data!==null){
        setCount(0);
      }

    }
  return (
     <div onClick={clearcart} className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-colors ">
                <MdDelete/>
                <p>Clear All Items</p>
                </div>
  )
}
