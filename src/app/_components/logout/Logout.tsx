'use client'
import { useCartStore, useWishlistStore } from '@/app/_store/cartstore';
import { button } from '@heroui/react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Logout() {
  const setcartCount=useCartStore((s)=>s.setCount);
  const setwishCount = useWishlistStore((s) => s.setCount);

    const router=useRouter();
   async function handlelogout () {
  setcartCount(0);
  setwishCount(0);
  
   const logout = await signOut({redirect:false});

   router.push('/login');
}
  return (
    <button onClick={handlelogout} className=" text-gray-700  py-2 px-4 rounded cursor-pointer ">Sign out</button>
  )
}
