'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import Logout from '../logout/Logout'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi' // أيكونة تسجيل الخروج شبه اللي في الصورة

export default function Topparauth() {
  const session = useSession()
  
  // لجلب أول اسم فقط (مثلاً Usama بدل Usama Mohamed)
  const username = session.data?.user?.name?.split(' ')[0]

  const is_user_authenteceted = session.status === "authenticated"

  return (
    <>
      {is_user_authenteceted ? (
        <div className="flex items-center gap-5"> 
          {/* اسم المستخدم مع الأيكونة */}
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <FaRegUser className="text-xl" /> {/* حجم الأيكونة كبرته شوية لـ xl عشان يشبه الصورة */}
            <span className="text-sm">{username}</span>
          </div>

          {/* زرار الـ Logout بالشكل اللي في الصورة */}
          <div className="flex items-center gap-1 text-gray-700 font-medium cursor-pointe transition-colors">
            <HiOutlineLogout className="text-xl" />
            <Logout /> {/* تأكد إن مكون Logout جواه كلمة Sign Out أو عدله */}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/login" className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors">
            <FaRegUser className="text-xs" />
            <span>Sign In</span>
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/register" className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors">
            <span>Sign Up</span>
          </Link>
        </div>
      )}
    </>
  )
}