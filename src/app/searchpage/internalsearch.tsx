'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { HiHome } from 'react-icons/hi'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { WishlistContext } from '../_context/wishlistcontext'

export default function Internalsearch() {
    const { searchvalue, setsearchvalue } = useContext(WishlistContext);
  return (
       <div className="container mx-auto px-4 py-6">
         {/* Breadcrumbs (النفيجيشن الفرعي) */}
         <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
           <Link href="/" className="flex items-center gap-1 hover:text-green-600 transition-colors">
             <HiHome size={16} />
             Home
           </Link>
           <span className="text-gray-300">/</span>
           <span className="text-gray-900 font-medium">Search Results</span>
         </nav>
   
         {/* Search Form */}
         <form className="max-w-2xl" onSubmit={(e) => e.preventDefault()}>
           <div className="relative group">
             {/* أيقونة البحث من React Icons */}
             <HiOutlineMagnifyingGlass 
               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" 
               size={22} 
             />
             
             <input
               type="text"
               value={searchvalue}
               onChange={(e) => setsearchvalue(e.target.value)}
               placeholder="Search for products..."
               className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all text-lg shadow-sm"
             />
           </div>
         </form>
       </div>
  )
}
