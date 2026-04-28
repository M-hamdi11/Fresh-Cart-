"use client";
import React from "react";
import { socialBtn, inputClassNames } from "@/app/(auth)/register/style";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@heroui/react";
import Link from "next/link";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Left from "@/app/_components/form/left";
import { registeractions } from "./register.actions";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const registerSchema = zod.object({
  name: zod.string().nonempty("name is required"),
  email: zod.string().nonempty("email is required").email("invalid email format"),
  phone: zod.string().nonempty("phone is required").regex(/^01[0125][0-9]{8}$/, "invalid Egyptian phone number"),
  password: zod.string().nonempty("password is required").min(8, "password must be at least 8 characters"),
  rePassword: zod.string().nonempty("please confirm your password"),
}).refine((data) => data.password === data.rePassword, {
  message: "passwords do not match",
  path: ["rePassword"],
});

export type registertype = zod.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const { handleSubmit, control } = useForm<registertype>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "", rePassword: "", phone: "" },
  });

  async function mysubmit(data: registertype) {
    const isRegistered = await registeractions(data);
    if(isRegistered){
      toast.success('Registered Successfully');
      setTimeout(() => router.push('/login'), 2000);
    } else {
      toast.error('Account already exists');
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 font-['Nunito']">
      <div className="hidden lg:flex lg:flex-1">
        <Left />
      </div>

      <div className="w-full lg:w-[500px] bg-white flex flex-col justify-center px-6 py-10 md:px-12 shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
           <svg width="30" height="30" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="10" fill="#16a34a" /><path d="M10 26c2-6 8-10 8-10s6 4 8 10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" /><circle cx="18" cy="13" r="4" fill="#bbf7d0" /></svg>
           <span className="text-xl font-black text-green-700">Fresh<span className="text-black">Cart</span></span>
        </div>

        <h1 className="text-center text-2xl font-black text-gray-900 mb-1">Create Account!</h1>
        <p className="text-center text-gray-500 text-sm mb-6">Sign up to start your fresh shopping experience</p>

        <form onSubmit={handleSubmit(mysubmit)} className="space-y-3">
          <Controller name="name" control={control} render={({ field, fieldState }) => (
            <div>
              <Input {...field} variant="bordered" placeholder="Name" classNames={inputClassNames} isInvalid={fieldState.invalid} />
              {fieldState.error && <p className="text-red-500 text-[10px] mt-1">{fieldState.error.message}</p>}
            </div>
          )} />
          <Controller name="email" control={control} render={({ field, fieldState }) => (
            <div>
              <Input {...field} variant="bordered" placeholder="Email" classNames={inputClassNames} isInvalid={fieldState.invalid} />
              {fieldState.error && <p className="text-red-500 text-[10px] mt-1">{fieldState.error.message}</p>}
            </div>
          )} />
          <Controller name="phone" control={control} render={({ field, fieldState }) => (
            <div>
              <Input {...field} variant="bordered" placeholder="Phone" classNames={inputClassNames} isInvalid={fieldState.invalid} />
              {fieldState.error && <p className="text-red-500 text-[10px] mt-1">{fieldState.error.message}</p>}
            </div>
          )} />
          <Controller name="password" control={control} render={({ field, fieldState }) => (
            <div>
              <Input {...field} type="password" variant="bordered" placeholder="Password" classNames={inputClassNames} isInvalid={fieldState.invalid} />
              {fieldState.error && <p className="text-red-500 text-[10px] mt-1">{fieldState.error.message}</p>}
            </div>
          )} />
          <Controller name="rePassword" control={control} render={({ field, fieldState }) => (
            <div>
              <Input {...field} type="password" variant="bordered" placeholder="Confirm Password" classNames={inputClassNames} isInvalid={fieldState.invalid} />
              {fieldState.error && <p className="text-red-500 text-[10px] mt-1">{fieldState.error.message}</p>}
            </div>
          )} />

          <button type="submit" className="w-full py-4 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl font-bold shadow-lg mt-4 hover:scale-[1.01] transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <Link href="/login" className="text-green-600 font-bold">Sign In</Link>
        </p>
      </div>
    </div>
  );
}