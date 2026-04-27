import React from 'react'
import { FaTruck, FaGift, FaPhone } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Topparauth from '../top_par_auth/topparauth';

export default async function TopBar() {
    return (
        <div className="hidden lg:flex justify-between items-center h-10 px-10 border-b border-gray-100 text-sm bg-white">
            
            {/* Left Side */}
            <div className="flex items-center gap-6 text-gray-500">
                <span className="flex items-center gap-2">
                    <FaTruck className="text-green-600 text-xs" />
                    <span>Free Shipping on Orders 500 EGP</span>
                </span>
                <span className="flex items-center gap-2">
                    <FaGift className="text-green-600 text-xs" />
                    <span>New Arrivals Daily</span>
                </span>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-gray-500">
                    <a href="tel:+18001234567" className="flex items-center gap-1.5 hover:text-green-600 transition-colors font-normal">
                        <FaPhone className="text-[10px]" />
                        <span>+1 (800) 123-4567</span>
                    </a>
                    <a href="mailto:support@freshcart.com" className="flex items-center gap-1.5 hover:text-green-600 transition-colors font-normal">
                        <HiOutlineMail className="text-xs" />
                        <span>support@freshcart.com</span>
                    </a>
                </div>

                {/* Vertical Divider */}
                <span className="w-px h-4 bg-gray-200"></span>

                <div className="flex items-center gap-4">
                    <Topparauth />
                </div>
            </div>
        </div>
    )
}