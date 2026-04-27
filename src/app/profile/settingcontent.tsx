'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineUser, HiOutlineLockClosed, HiOutlineEye } from 'react-icons/hi';
import { MdSave } from 'react-icons/md';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

// --- Imports لربط الـ Logout والـ API ---
import changeuser from './changeuser';
import { changepasswordaction } from './changepassword';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCartStore, useWishlistStore } from '@/app/_store/cartstore';

// --- Schemas ---
const settingSchema = zod.object({
    name: zod.string().nonempty("name is required"),
    email: zod.string().nonempty("email is required").email("invalid email format"),
    phone: zod.string().nonempty("phone is required").regex(/^01[0125][0-9]{8}$/, "invalid Egyptian phone number"),
});

const changepasswordSchema = zod.object({
    currentPassword: zod.string().nonempty("current password is required"),
    password: zod.string().nonempty("password is required").min(8, "at least 8 characters")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "password must contain uppercase, lowercase, and a number"),
    rePassword: zod.string().nonempty("please confirm your password"),
}).refine((data) => data.password === data.rePassword, {
    message: "passwords do not match",
    path: ["rePassword"],
});

export type settingtype = zod.infer<typeof settingSchema>;
export type changepasswordtype = zod.infer<typeof changepasswordSchema>;

const SettingsContent = () => {
    // Hooks الأساسية للتحويل وتصفير الـ Store
    const router = useRouter();
    const setcartCount = useCartStore((s) => s.setCount);
    const setwishCount = useWishlistStore((s) => s.setCount);

    // 1. فورم تحديث البيانات الشخصية
    const { 
        handleSubmit: handleSubmitProfile, 
        register: registerProfile, 
        reset: resetProfile, 
        formState: { errors: errorsProfile } 
    } = useForm<settingtype>({
        resolver: zodResolver(settingSchema)
    });

    // 2. فورم تغيير الباسورد
    const { 
        handleSubmit: handleSubmitpasswordchange, 
        register: registerpasswordchange, 
        reset: resetpasswordchange, 
        formState: { errors: errorspassword } 
    } = useForm<changepasswordtype>({
        resolver: zodResolver(changepasswordSchema),
        defaultValues: {
            currentPassword: "",
            password: "",
            rePassword: ""
        }
    });

    // دالة تحديث بيانات البروفايل
    async function changeuserdata(data: settingtype) {
        const res = await changeuser(data);
        if (res.success) {
            toast.success("User updated successfully!");
            resetProfile();
        } else {
            toast.error(res.error);
        }
    }

    // --- الدالة المطلوبة: تغيير الباسورد + Logout ---
    async function changepassword(data: changepasswordtype) {
        const res = await changepasswordaction(data);
       
        if (res.success) {
            toast.success("Password updated! Logging out for security...");
            
          
          
            await signOut({ redirect: false });
            setcartCount(0); 
            setwishCount(0);
            
            router.push('/login');
        } else {
            toast.error(res.error);
        }
    }

    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500 pb-10">
            {/* العناوين الرئيسية */}
            <div className='px-1'>
                <h2 className='text-2xl font-bold text-gray-800'>Account Settings</h2>
                <p className='text-sm text-gray-500 mt-1'>Update Your Profile Information and Change Your Password</p>
            </div>

            {/* 1. Profile Information Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                        <HiOutlineUser size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Profile Information</h3>
                        <p className="text-xs text-gray-500">Update your personal details</p>
                    </div>
                </div>

                <form onSubmit={handleSubmitProfile(changeuserdata)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Full Name</label>
                        <input {...registerProfile('name')} type="text" placeholder="Enter your name" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all shadow-sm" />
                        {errorsProfile.name && <p className="text-red-500 text-xs mt-1">{errorsProfile.name.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Email Address</label>
                        <input {...registerProfile('email')} type="email" placeholder="Enter your email" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all shadow-sm" />
                        {errorsProfile.email && <p className="text-red-500 text-xs mt-1">{errorsProfile.email.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Phone Number</label>
                        <input {...registerProfile('phone')} type="text" placeholder="01xxxxxxxxx" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all shadow-sm" />
                        {errorsProfile.phone && <p className="text-red-500 text-xs mt-1">{errorsProfile.phone.message}</p>}
                    </div>

                    <button type="submit" className="flex items-center gap-2 bg-[#22C55E] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-600 transition-all shadow-md active:scale-95 mt-2">
                        <MdSave size={20} /> Save Changes
                    </button>
                </form>
            </div>

            {/* 2. Account Information (Static) */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4">Account Information</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-sm text-gray-500">User ID</span>
                        <span className="text-sm font-medium text-gray-800">#51-4576</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Role</span>
                        <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">User</span>
                    </div>
                </div>
            </div>

            {/* 3. Change Password Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-50 p-2 rounded-lg text-[#F97316]">
                        <HiOutlineLockClosed size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Change Password</h3>
                        <p className="text-xs text-gray-500">Update your account password</p>
                    </div>
                </div>

                <form onSubmit={handleSubmitpasswordchange(changepassword)} className="space-y-4">
                    {/* Current Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Current Password</label>
                        <div className="relative">
                            <input {...registerpasswordchange('currentPassword')} type="password" placeholder="Enter your current password" title="Current Password" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none pr-10 focus:border-orange-400 shadow-sm" />
                            <HiOutlineEye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" />
                        </div>
                        {errorspassword.currentPassword && <p className="text-red-500 text-xs mt-1">{errorspassword.currentPassword.message}</p>}
                    </div>

                    {/* New Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">New Password</label>
                        <div className="relative">
                            <input {...registerpasswordchange('password')} type="password" placeholder="Enter your new password" title="New Password" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none pr-10 focus:border-orange-400 shadow-sm" />
                            <HiOutlineEye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" />
                        </div>
                        {errorspassword.password && <p className="text-red-500 text-xs mt-1">{errorspassword.password.message}</p>}
                    </div>

                    {/* Confirm New Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Confirm New Password</label>
                        <div className="relative">
                            <input {...registerpasswordchange('rePassword')} type="password" placeholder="Confirm your new password" title="Confirm Password" className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none pr-10 focus:border-orange-400 shadow-sm" />
                            <HiOutlineEye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" />
                        </div>
                        {errorspassword.rePassword && <p className="text-red-500 text-xs mt-1">{errorspassword.rePassword.message}</p>}
                    </div>

                    <button type="submit" className="flex items-center justify-center gap-2 bg-[#F97316] text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md active:scale-95 mt-2">
                        <HiOutlineLockClosed /> Update Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SettingsContent;