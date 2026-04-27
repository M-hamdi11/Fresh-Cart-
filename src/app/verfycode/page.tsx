import React from 'react';
import VerifyCodeForm from './VerifyCodeForm';
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function VerifyCodePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row border border-blue-50">
        
        {/* الجزء الأيسر الثابت */}
        <div className="w-full md:w-1/2 bg-[#f0f9f4] p-12 flex flex-col items-center justify-center text-center">
          <div className="relative mb-8">
            <div className="w-40 h-40 bg-white rounded-3xl shadow-sm flex items-center justify-center relative">
               <HiOutlineMailOpen className="text-green-500 text-7xl" />
               <div className="absolute bottom-4 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-green-200 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-green-200 rounded-full"></span>
               </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Reset Your Password</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 px-4">
            Don't worry, it happens to the best of us. We'll help you get back into your account in no time.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-gray-500 font-medium">
            <span className="flex items-center gap-1"><IoCheckmarkCircleOutline className="text-green-500 text-sm" /> Email Verification</span>
            <span className="flex items-center gap-1"><IoCheckmarkCircleOutline className="text-green-500 text-sm" /> Secure Reset</span>
            <span className="flex items-center gap-1"><IoCheckmarkCircleOutline className="text-green-500 text-sm" /> Encrypted</span>
          </div>
        </div>

        {/* الجزء الأيمن (Verify Code) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold text-[#0aad0a] mb-6">FreshCart</h1>
            <h3 className="text-xl font-bold text-gray-800">Check Your Email</h3>
          </div>

          <VerifyCodeForm />
        </div>
      </div>
    </div>
  );
}