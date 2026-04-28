'use client'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa6'
import { addtowishlistaction } from './addtowishlistaction';
import { toast } from 'react-toastify';
import { useWishlistStore } from '@/app/_store/cartstore';

export default function Addtowishlist({ product_id, children }: { product_id: string, children?: React.ReactNode }) {
    const setCount = useWishlistStore((s) => s.setCount);

    async function handleAddToWishlist() {
        const datanumber = await addtowishlistaction(product_id);
        if (datanumber === undefined) {
            toast.error("please login first");
        } else {
            toast.success("Product added to wishlist");
            setCount(datanumber);
        }
    }

    // لو مبعتناش children، هنعرض الزرار الافتراضي (القلب)
    if (!children) {
        return (
            <button
                onClick={handleAddToWishlist}
                className="relative bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500"
                title="Add to wishlist"
            >
                <FaRegHeart />
                {/* النقطة الحمراء الصغيرة */}
                <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white" />
            </button>
        )
    }

    // لو بعتنا children، هنعرض الـ children ونخليها هي اللي بتنفذ الـ Click
    return (
        <div onClick={handleAddToWishlist} className="cursor-pointer">
            {children}
        </div>
    )
}
