'use client'
import React from 'react'
import { updatecountaction } from './removefromcartactions'
import { toast } from 'react-toastify';

export default function Updateproductcountbtn({isincrement=false,id,newcount}: {isincrement?: boolean ,id:string,newcount:number}) {
async function handleupdateproductcount(){

  const numbercart=  await updatecountaction(id,newcount);
  if(numbercart){
    toast.success("Product count updated!");
  }
  else{
    toast.error("Something went wrong!");
  }

}


  return (
    <button disabled={newcount<=0} onClick={handleupdateproductcount} className={isincrement?"w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors":"w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"}>{isincrement ? "+" : "-" }</button>
  )
}
