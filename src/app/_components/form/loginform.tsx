"use client";
import React from "react";
import { socialBtn, inputClassNames } from "@/app/(auth)/register/style";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@heroui/react";
import Link from "next/link";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Left from "@/app/_components/form/left";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { usecartcontext } from "@/app/_context/cartcontext";
import { getcartaction, getwishlistaction } from "@/app/_components/addtocart/getcartaction";
import { useCartStore, useWishlistStore } from "@/app/_store/cartstore";

const loginSchema = zod.object({
  email: zod.string().nonempty("email is required").email("invalid email format"),
  password: zod.string().nonempty("password is required").min(8, "password must be at least 8 characters"),
});

export type logintype = zod.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const { updateCartItems } = usecartcontext();
  const setwishCount = useWishlistStore((s) => s.setCount);
  const setcartCount = useCartStore((s) => s.setCount);

  const { handleSubmit, control } = useForm<logintype>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function mysubmit(data: logintype) {
    const res = await signIn("credentials", { redirect: false, ...data });
    if (res?.ok) {
      const cart = await getcartaction();
      const wishlistData = await getwishlistaction() as any;
      updateCartItems(cart?.products?.length ?? 0);
      setcartCount(cart?.products?.length ?? 0);
      setwishCount(wishlistData?.length ?? 0);
      toast.success('Welcome back!');
      setTimeout(() => router.push('/'), 2000);
    } else {
      toast.error('Wrong email or password');
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 font-['Nunito']">
      {/* القسم الأيسر - يختفي في الموبايل ويظهر في الشاشات الكبيرة */}
      <div className="hidden lg:flex lg:flex-1">
        <Left />
      </div>

      {/* قسم الفورم - عرض كامل في الموبايل وعرض محدد في الديسك توب */}
      <div className="w-full lg:w-[500px] bg-white flex flex-col justify-center px-6 py-12 md:px-12 shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="#16a34a" />
            <path d="M10 26c2-6 8-10 8-10s6 4 8 10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="18" cy="13" r="4" fill="#bbf7d0" />
          </svg>
          <span className="text-2xl font-black text-green-700">
            Fresh<span className="text-black">Cart</span>
          </span>
        </div>

        <h1 className="text-center text-2xl md:text-3xl font-black text-gray-900 mb-1">Welcome Back!</h1>
        <p className="text-center text-gray-500 text-sm mb-8">Sign in to continue your fresh shopping experience</p>

        <button style={socialBtn} className="w-full mb-3 flex items-center justify-center gap-2 border p-3 rounded-xl hover:bg-gray-50 transition">
          <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.1 0 5.6 1.1 7.6 2.9l5.6-5.6C33.5 3.5 29.1 1.5 24 1.5 15 1.5 7.4 7 4.1 14.7l6.6 5.1C12.5 13.5 17.8 9.5 24 9.5z" /><path fill="#34A853" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.8-2.1 5.1-4.5 6.7l7 5.4c4.1-3.8 6.2-9.4 6.2-16.1z" /><path fill="#FBBC05" d="M10.7 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6l-6.6-5.1A22.5 22.5 0 0 0 1.5 24c0 3.6.9 7 2.4 10l6.8-5.4z" /><path fill="#4A90D9" d="M24 46.5c5.1 0 9.4-1.7 12.5-4.6l-7-5.4c-1.7 1.1-3.9 1.8-5.5 1.8-6.2 0-11.5-4.2-13.3-9.9l-6.8 5.4C7.4 41 15 46.5 24 46.5z" /></svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-[10px] font-bold tracking-widest">OR CONTINUE WITH EMAIL</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <form onSubmit={handleSubmit(mysubmit)} className="space-y-4">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Input {...field} classNames={inputClassNames} variant="bordered" placeholder="Email" isInvalid={fieldState.invalid} />
                {fieldState.error && <p className="text-red-500 text-xs mt-1 font-semibold">{fieldState.error.message}</p>}
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <Input {...field} type="password" classNames={inputClassNames} variant="bordered" placeholder="Password" isInvalid={fieldState.invalid} />
                {fieldState.error && <p className="text-red-500 text-xs mt-1 font-semibold">{fieldState.error.message}</p>}
              </div>
            )}
          />

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 accent-green-600" /> Keep me signed in
            </label>
            <Link href="/forgotpassword" className="text-green-600 font-bold text-sm">Forgot Password?</Link>
          </div>

          <button type="submit" className="w-full py-4 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl font-bold shadow-lg shadow-green-200 hover:scale-[1.02] transition">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Don&apos;t have an account? <Link href="/register" className="text-green-600 font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}