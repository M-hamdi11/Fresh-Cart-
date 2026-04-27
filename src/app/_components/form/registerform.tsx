"use client";
import React from "react";
import {
  socialBtn,
  labelStyle,
  inputWrapper,
  iconSpan,
  inputStyle,
  inputClassNames,
} from "@/app/(auth)/register/style";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@heroui/react";
import Link from "next/link";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Left from "@/app/_components/form/left";
import { ca } from "zod/locales";
import { registeractions } from "./register.actions";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
const registerSchema = zod
  .object({
    name: zod
      .string({ message: "name must be a text" })
      .nonempty("name is required"),
    email: zod
      .string({ message: "email must be a text" })
      .nonempty("email is required")
      .email("invalid email format"),
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
    phone: zod
      .string({ message: "phone must be a text" })
      .nonempty("phone is required")
      .regex(/^01[0125][0-9]{8}$/, "invalid Egyptian phone number"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "passwords do not match",
    path: ["rePassword"],
  });
  export type registertype = zod.infer<typeof registerSchema>;


export default function RegisterPage() {
  const router = useRouter();
 
  const { handleSubmit, control, formState } = useForm<registertype>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  async function mysubmit(data: registertype) {
    console.log("registered data : ", data);
    const isRegistered = await registeractions(data);
    if(isRegistered){
        
      toast.success('Registered Successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       setTimeout(() => {
        router.push('/login');
       }, 2000);
        

        
    }else{
      toast.error('Account already exists', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
 
    
  }

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "stretch",
        background: "#f9fafb",
      }}
    >
      {/* Left Panel */}
      <Left />

      {/* Right Panel */}
      <div
        style={{
          width: 500,
          minWidth: 420,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "48px 44px",
          boxShadow: "-4px 0 32px rgba(0,0,0,0.07)",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 6,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="#16a34a" />
            <path d="M10 26c2-6 8-10 8-10s6 4 8 10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="18" cy="13" r="4" fill="#bbf7d0" />
          </svg>
          <span style={{ fontSize: 22, fontWeight: 900, color: "#15803d" }}>
            Fresh<span style={{ color: "#111" }}>Cart</span>
          </span>
        </div>

        <h1 style={{ textAlign: "center", fontSize: 26, fontWeight: 900, color: "#111", marginBottom: 4 }}>
          Create Account!
        </h1>
        <p style={{ textAlign: "center", color: "#6b7280", fontSize: 14, marginBottom: 24 }}>
          Sign up to start your fresh shopping experience
        </p>

        <button style={socialBtn}>
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.1 0 5.6 1.1 7.6 2.9l5.6-5.6C33.5 3.5 29.1 1.5 24 1.5 15 1.5 7.4 7 4.1 14.7l6.6 5.1C12.5 13.5 17.8 9.5 24 9.5z" />
            <path fill="#34A853" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.8-2.1 5.1-4.5 6.7l7 5.4c4.1-3.8 6.2-9.4 6.2-16.1z" />
            <path fill="#FBBC05" d="M10.7 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6l-6.6-5.1A22.5 22.5 0 0 0 1.5 24c0 3.6.9 7 2.4 10l6.8-5.4z" />
            <path fill="#4A90D9" d="M24 46.5c5.1 0 9.4-1.7 12.5-4.6l-7-5.4c-1.7 1.1-3.9 1.8-5.5 1.8-6.2 0-11.5-4.2-13.3-9.9l-6.8 5.4C7.4 41 15 46.5 24 46.5z" />
          </svg>
          Continue with Google
        </button>
        <button style={{ ...socialBtn, marginTop: 10 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
          </svg>
          Continue with Facebook
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "20px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
          <span style={{ color: "#9ca3af", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
            OR CONTINUE WITH EMAIL
          </span>
          <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
        </div>

        <form onSubmit={handleSubmit(mysubmit)}>
          <div style={{ marginBottom: 14 }}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    name={field.name}
                    value={field.value ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                    onBlur={field.onBlur}
                    classNames={inputClassNames}
                    variant="bordered"
                    placeholder="Name"
                    isInvalid={fieldState.invalid}
                  />
                  {fieldState.error && <p style={{ color: "red", fontSize: 12, marginTop: 4 }}>{fieldState.error.message}</p>}
                </>
              )}
            />
          </div>

          <div style={{ marginBottom: 14 }}>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    name={field.name}
                    value={field.value ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                    onBlur={field.onBlur}
                    classNames={inputClassNames}
                    variant="bordered"
                    placeholder="Email"
                    type="email"
                    isInvalid={fieldState.invalid}
                  />
                  {fieldState.error && <p style={{ color: "red", fontSize: 12, marginTop: 4 }}>{fieldState.error.message}</p>}
                </>
              )}
            />
          </div>

          <div style={{ marginBottom: 14 }}>
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    name={field.name}
                    value={field.value ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                    onBlur={field.onBlur}
                    classNames={inputClassNames}
                    variant="bordered"
                    placeholder="Phone"
                    isInvalid={fieldState.invalid}
                  />
                  {fieldState.error && <p style={{ color: "red", fontSize: 12, marginTop: 4 }}>{fieldState.error.message}</p>}
                </>
              )}
            />
          </div>

          <div style={{ marginBottom: 14 }}>
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    name={field.name}
                    value={field.value ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                    onBlur={field.onBlur}
                    classNames={inputClassNames}
                    variant="bordered"
                    type="password"
                    placeholder="Password"
                    isInvalid={fieldState.invalid}
                  />
                  {fieldState.error && <p style={{ color: "red", fontSize: 12, marginTop: 4 }}>{fieldState.error.message}</p>}
                </>
              )}
            />
          </div>

          <div style={{ marginBottom: 14 }}>
            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    name={field.name}
                    value={field.value ?? ""}
                    onValueChange={(value) => field.onChange(value)}
                    onBlur={field.onBlur}
                    classNames={inputClassNames}
                    variant="bordered"
                    type="password"
                    placeholder="Confirm Password"
                    isInvalid={fieldState.invalid}
                  />
                  {fieldState.error && <p style={{ color: "red", fontSize: 12, marginTop: 4 }}>{fieldState.error.message}</p>}
                </>
              )}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <input
              id="keep"
              name="keepSignedIn"
              type="checkbox"
              style={{ width: 16, height: 16, accentColor: "#16a34a", cursor: "pointer" }}
            />
            <label htmlFor="keep" style={{ fontSize: 14, color: "#374151", cursor: "pointer" }}>
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 800,
              cursor: "pointer",
              letterSpacing: 0.5,
              boxShadow: "0 4px 16px rgba(22,163,74,0.3)",
              fontFamily: "inherit",
            }}
          >
            Create Account
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: 14, color: "#6b7280", marginTop: 18 }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#16a34a", fontWeight: 800, textDecoration: "none" }}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

