'use client';
import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import AccountHeader from './accountheader';

// لاحظ أننا لم نعد نستورد AddressesContent هنا مباشرة لتجنب تداخل السيرفر والكلاينت
export default function ProfilePage({ 
  settingsChild, 
  addressesChild 
}: { 
  settingsChild: React.ReactNode, 
  addressesChild: React.ReactNode 
}){
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <AccountHeader />
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 sticky top-4">
            <h3 className="px-4 mb-4 font-bold text-gray-800">My Account</h3>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab('addresses')}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  activeTab === 'addresses' ? 'bg-green-50 text-green-600 border border-green-100' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <HiOutlineLocationMarker size={20} />
                  <span className="font-medium">My Addresses</span>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  activeTab === 'settings' ? 'bg-green-50 text-green-600 border border-green-100' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IoSettingsOutline size={20} />
                  <span className="font-medium">Settings</span>
                </div>
              </button>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-3">
          {/* هنا نعرض المكونات الجاهزة التي تم تمريرها من السيرفر */}
          {activeTab === 'settings' ? settingsChild : addressesChild}
        </main>
      </div>
    </div>
  );
};