'use client'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import deleteaddressaction from './addadressaction'
import { toast } from 'react-toastify';

export default function Deleteaddress({addressid}:{addressid:string}) {
    async function deleteaddress(addressid:string) {
       const deleteres=await deleteaddressaction(addressid);
       if(deleteres){toast.success("Address deleted!");}
        
    }
  return (
    <button onClick={() => deleteaddress(addressid)} className="p-2.5 hover:bg-red-50 rounded-xl text-red-400">
              <HiOutlineTrash size={18} />
            </button>
  )
}
