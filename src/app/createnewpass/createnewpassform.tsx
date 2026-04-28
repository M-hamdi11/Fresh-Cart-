// components/ResetPasswordForm.jsx
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock, FaEye, FaEyeSlash, FaCheck } from 'react-icons/fa';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import resetpass from './resetpass';
import Page from './../profile/page';
import { toast } from 'react-toastify';
const zodschema = zod.object({
    password: zod
      .string({ message: "password must be a text" })
      .nonempty("password is required")
      .min(8, "password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "password must contain uppercase, lowercase, and a number"
      ),
    rePassword: zod
      .string({ message: "rePassword must be a text" })
      .nonempty("please confirm your password"),
} ).refine((data) => data.password === data.rePassword, {
    message: "passwords do not match",
    path: ["rePassword"],
})
export default function ResetPasswordForm() {
  const [showPass, setShowPass] = useState(false);
  const searchParams = useSearchParams();
  const router=useRouter();
  const email = searchParams.get('email') || "your email";
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(zodschema),
  });
  async function onSubmit(data: any) {

    const resetpassword =await resetpass( data.password , email);
    if(resetpassword){
      toast.success('password updated successfully');
      router.push('/login');
    }

  }

  return (
    <div className="w-full max-w-md p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Create New Password</h2>
        <p className="text-sm text-gray-500">
          Your new password must be different from previous passwords
        </p>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
          <FaCheck />
        </div>
        <div className="h-px w-8 bg-green-500"></div>
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
          <FaCheck />
        </div>
        <div className="h-px w-8 bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs shadow-lg shadow-green-200">
           <FaLock />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <FaLock size={14} />
            </span>
            <input
              {...register("password")}
              type={showPass ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm"
            />
            <span 
              onClick={() => setShowPass(!showPass)}
               className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer hover:text-gray-600"
            >
              {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <FaLock size={14} />
            </span>
            <input
              {...register("rePassword")}
              type="password"
              placeholder="Confirm new password"
              className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition text-sm"
            />
          
          </div>
          {errors.rePassword && (
            <p className="text-red-500 text-xs mt-1">{errors.rePassword.message}</p>
          )}
        </div>


        <button
          type="submit"
          className="w-full bg-[#198754] hover:bg-[#157347] text-white font-semibold py-3 rounded-lg transition duration-200 mt-4 shadow-md"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}