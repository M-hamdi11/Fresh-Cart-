'use client'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { removeFromWishlist } from './removewishlistaction';
import { toast } from 'react-toastify';
import { useWishlistStore } from '@/app/_store/cartstore';


export default function Removefromwishlist( {product_id}:{product_id:string} ) {
  const setCount = useWishlistStore((s) => s.setCount);

  async function handleRemoveFromWishlist( product_id: string) {
   const removeFromWishlistdatacount =  await removeFromWishlist(product_id);
   if(removeFromWishlistdatacount){
    toast.success("Product removed from wishlist");
    setCount(removeFromWishlistdatacount);

   }
   else{
    toast.error("Something went wrong");
   }

  }
  return (
    <button onClick={()=>handleRemoveFromWishlist(product_id)} className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all">
                           <FaTrashAlt />
                         </button>
  )
}
