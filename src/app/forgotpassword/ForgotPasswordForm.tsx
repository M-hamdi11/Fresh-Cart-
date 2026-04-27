'use client';
import React, { useRef } from 'react'; // 1. استدعاء useRef
import { MdOutlineMailOutline } from "react-icons/md";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaLock, FaKey } from "react-icons/fa";
import forgotpasswordaction from './forgotpasswordaction';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


export default function ForgotPasswordForm() {
  // 2. عمل مرجع (Ref) للـ input
  const emailRef = useRef(null);
  const router=useRouter();

  async function handleSubmit(e){
    e.preventDefault();
    
    // 3. سحب القيمة من الـ Ref عند الضغط على الزرار
    const emailValue = emailRef.current?.value;
    const res = await forgotpasswordaction(emailValue);
if(res.statusMsg=="success"){
    toast.success(`${res.message}`);
    router.push(`/verfycode?email=${encodeURIComponent(emailValue)}`);
}else if(res.statusMsg=="fail"){
    toast.error(`${res.message}`);
}

    if (!emailValue) {
      toast.error("Please enter your email");
      return;
    }




    console.log("Sending reset code to:", emailValue);
    // هنا تقدر تبعت الـ emailValue للـ API بتاعك
  };

  return (
    <div className="w-full">
      {/* الـ Stepper */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs"><MdOutlineMailOutline /></div>
        <div className="h-[1px] w-8 bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs"><FaKey /></div>
        <div className="h-[1px] w-8 bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs"><FaLock /></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email Address</label>
          <div className="relative">
            <MdOutlineMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="Enter your email address"
              ref={emailRef} // 4. ربط الـ Ref بالـ Input
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
              required
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#0aad0a] hover:bg-[#099609] text-white font-semibold py-3 rounded-lg transition-colors shadow-md shadow-green-200"
        >
          Send Reset Code
        </button>

        <div className="flex flex-col items-center gap-6 mt-4">
          <a href="/login" className="flex items-center gap-2 text-sm text-green-600 font-medium hover:underline">
            <HiArrowNarrowLeft /> Back to Sign In
          </a>
        </div>
      </form>
    </div>
  );
}