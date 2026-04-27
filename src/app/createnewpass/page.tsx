// app/auth/create-new-password/page.jsx
import React from 'react'

import { FaEnvelope, FaShieldAlt, FaLock } from 'react-icons/fa'
import ResetPasswordForm from './createnewpassform'

export default function CreateNewPass() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Side: Branding Section */}
        <div className="md:w-1/2 bg-[#f8fcf9] p-12 flex flex-col items-center justify-center text-center">
          <div className="relative mb-10">
            {/* The Illustration Mockup */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-green-50">
               <div className="flex gap-6 justify-center items-center">
                  <div className="p-4 bg-green-50 rounded-2xl text-green-500"><FaEnvelope size={28}/></div>
                  <div className="p-5 bg-[#198754] rounded-2xl text-white scale-110 shadow-xl shadow-green-100"><FaLock size={32}/></div>
                  <div className="p-4 bg-green-50 rounded-2xl text-green-500"><FaShieldAlt size={28}/></div>
               </div>
            </div>
            {/* Carousel Dots */}
            <div className="flex gap-1.5 justify-center mt-6">
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              <div className="w-5 h-2 rounded-full bg-green-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Reset Your Password</h1>
          <p className="text-gray-500 leading-relaxed max-w-xs text-sm">
            Don't worry, it happens to the best of us. We'll help you get back into your account in no time.
          </p>
          
          <div className="flex gap-5 mt-16 text-[10px] text-gray-400 font-bold tracking-wider">
            <span className="flex items-center gap-1.5 uppercase"><FaEnvelope className="text-green-500"/> Email Verification</span>
            <span className="flex items-center gap-1.5 uppercase"><FaShieldAlt className="text-green-500"/> Secure Reset</span>
            <span className="flex items-center gap-1.5 uppercase"><FaLock className="text-green-500"/> Encrypted</span>
          </div>
        </div>

        {/* Right Side: Interaction Section */}
        <div className="md:w-1/2 flex items-center justify-center bg-white">
          <ResetPasswordForm />
        </div>

      </div>
    </div>
  )
}