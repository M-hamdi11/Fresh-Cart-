import Link from 'next/link';
import React from 'react';
import { HiOutlineUser } from 'react-icons/hi'; // أيقونة المستخدم المطابقة للديزاين

const AccountHeader = () => {
  return (
    <div className="w-full bg-[#22C55E] rounded-lg overflow-hidden">
      {/* الطبقة اللي فيها التدرج والألوان */}
      <div className="bg-gradient-to-br from-[#1BA34A] via-[#22C55E] to-[#4ADE80] p-6 md:p-10 text-white">
        
        {/* Breadcrumbs */}
        <nav className="text-xs md:text-sm mb-4 opacity-80 flex items-center gap-1">
          <Link href="/" className="cursor-pointer hover:underline">Home</Link>
          <span>/</span>
          <span className="font-medium">My Account</span>
        </nav>

        <div className="flex items-center gap-5">
          {/* User Icon Box */}
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md flex items-center justify-center">
            <HiOutlineUser size={40} className="text-white" />
          </div>

          {/* Text Information */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              My Account
            </h1>
            <p className="text-sm md:text-base opacity-90 font-light">
              Manage your addresses and account settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;