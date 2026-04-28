'use client';
import React, { useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaKey, FaLock, FaCheck } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { LuArrowLeftRight } from "react-icons/lu";
import handleverfycodeaction from './verfycodeaction';
import createnewpass from './../createnewpass/page';
import { toast } from 'react-toastify';

export default function VerifyCodeForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email') || "your email"; // استقبال الإيميل
  const codeRef = useRef<HTMLInputElement>(null);

  const handleVerify = async (e:React.FormEvent) => {
    e.preventDefault();
    const codeValue = codeRef.current?.value;
    console.log("Verifying code:", codeValue, "for email:", email);
    const result=await handleverfycodeaction(codeValue as string);
    if(result.status=="Success"){ 
      toast.success(`valid code`);
     router.push(`/createnewpass?email=${encodeURIComponent(email)}`);

    }
    else {
      toast.error(result.message);
    }
       
  };

  return (
    <div className="w-full">
      <p className="text-center text-gray-500 text-sm mb-8">
        Enter the 6-digit code sent to <span className="font-semibold text-gray-700">{email}</span>
      </p>

      {/* Stepper (المرحلة الثانية مفعّلة) */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs"><FaCheck /></div>
        <div className="h-[1px] w-8 bg-green-500"></div>
        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs"><FaKey /></div>
        <div className="h-[1px] w-8 bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs"><FaLock /></div>
      </div>

      <form onSubmit={handleVerify} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Verification Code</label>
          <div className="relative">
             {/* حقل إدخال الكود - خليته input واحد كبير لسهولة الكود أو ممكن تعمله 6 inputs */}
            <input
              type="text"
              ref={codeRef}
              maxLength={6}
              placeholder="· · · · · ·"
              className="w-full tracking-[1em] text-center font-bold py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-lg"
              required
            />
          </div>
          <div className="flex justify-center">
             <button type="button" className="text-xs text-green-600 flex items-center gap-1 hover:underline">
                Didn't receive the code? <span className="font-bold">Resend Code</span>
             </button>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#0aad0a] hover:bg-[#099609] text-white font-semibold py-3 rounded-lg transition-colors shadow-md shadow-green-200"
        >
          Verify Code
        </button>

        <div className="text-center">
          <button 
            type="button" 
            onClick={() => router.back()}
            className="text-sm text-gray-500 hover:text-green-600 flex items-center justify-center gap-2 mx-auto"
          >
            <LuArrowLeftRight className="text-xs" /> Change email address
          </button>
        </div>
      </form>
    </div>
  );
}