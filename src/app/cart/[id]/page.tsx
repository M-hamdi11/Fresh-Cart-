'use client';
import { addressresponsedatatype, CartItemType, carttype } from "@/api/types";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { handleorderaction } from "../removefromcartactions";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getalladdressaction, getcartaction, getspacificaddressaction } from "./cartaction";
import { toast } from "react-toastify";
import { useCartStore } from "@/app/_store/cartstore";
import Link from "next/link";



const cashSchema = zod.object({
  city: zod
    .string({ message: "City must be a text" })
    .min(1, "City is required"),
  details: zod
    .string({ message: "Street address must be a text" })
    .min(1, "Street address is required"),
  phone: zod
    .string({ message: "Phone must be a text" })
    .nonempty("Phone number is required")
    .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
});

export type cashobjtype = zod.infer<typeof cashSchema>;

export default function CheckoutPage() {
  const [data, setData] = useState<carttype | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const setCount = useCartStore((s) => s.setCount);
  const router = useRouter();
  const [address, setAddress] = useState< addressresponsedatatype| null>(null);
  const [selectedAddress, setSelectedAddress] = useState<addressresponsedatatype | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  useEffect(() => {
    async function fetchCart() {
      try {
        setLoading(true);

        // 1. جلب بيانات السلة
        const res = await getcartaction();
        setData(res ?? null); // تحويل الـ undefined لـ null

        // 2. جلب كل العناوين
        const alladdres = await getalladdressaction() as addressresponsedatatype;

        // التأكد من أن alladdres مصفوفة ولديها عناصر
        if (alladdres && Array.isArray(alladdres) && alladdres.length > 0) {
          setAddress(alladdres);

          // 3. جلب تفاصيل أول عنوان
          const specificAddress = await getspacificaddressaction(alladdres[0]._id);
          setSelectedAddress(specificAddress ?? null);
        } else {
          // حالة عدم وجود عناوين: نمرر مصفوفة فاضية مع عمل Type Casting لتجنب never[]
          setAddress([] as unknown as addressresponsedatatype);
          setSelectedAddress(null);
        }

      } catch (err) {
        console.error("Error in fetchCart:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, []);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<cashobjtype>({
    resolver: zodResolver(cashSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
  });

  async function mysubmit(detailsobj: cashobjtype) {
   const iscreated = await handleorderaction(id?.toString()||"", detailsobj as cashobjtype);
   if(iscreated){
    toast.success("Order placed successfully!");
    setCount(0);
    router.push('/');
   }
  }

  return (
    <div className="min-h-screen pb-20 bg-[#f5f5f0]">
    <div className="max-w-6xl mx-auto px-4 py-8">
  
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.5 6H20l-1.68 8.39c-.16.8-.87 1.61-1.82 1.61H8.42c-.96 0-1.66-.71-1.82-1.5L5.5 6zM3 2H1v2h2l3.6 7.59L5.25 14c-.25.46-.25 1 0 1.46.41.41.97.54 1.5.54H19v-2H7.42l.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.46 4H5.21l-.94-2z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 leading-tight">Complete Your Order</h1>
            <p className="text-xs text-gray-500">Review your items and complete your purchase</p>
          </div>
        </div>
        <Link href="/cart" className="text-sm text-green-600 font-semibold hover:text-green-700 w-fit">
          ← Back to Cart
        </Link>
      </div>
  
      {/* Main Layout - Responsive Grid/Flex */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
  
        {/* ===== LEFT: Checkout Details ===== */}
        <div className="w-full lg:flex-1 flex flex-col gap-5">
  
          {/* Shipping Card */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-green-600 text-white px-5 py-4 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
              <div>
                <p className="font-bold text-sm">Shipping Address</p>
                <p className="text-[11px] opacity-80">Where should we deliver your order?</p>
              </div>
            </div>
  
            <div className="p-5 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-sm shrink-0" />
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide">Saved Addresses</p>
                </div>
                <p className="text-xs text-gray-400 ml-4">Select a saved address or enter a new one below</p>
              </div>
  
              {/* Saved Address Card */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:border-green-400 transition-all">
                {selectedAddress ? (
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="bg-green-100 p-2.5 rounded-full text-green-600 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-gray-800 uppercase tracking-tight">{selectedAddress.name}</h4>
                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SELECTED</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{selectedAddress.details}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        <div className="flex items-center gap-1.5">
                          <span className="text-gray-400 text-xs">📞</span>
                          <span className="text-xs font-medium text-gray-700">{selectedAddress.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-gray-400 text-xs">📍</span>
                          <span className="text-xs font-medium text-gray-700">{selectedAddress.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-4 text-center">
                     {loading ? (
                       <p className="text-xs text-gray-400 animate-pulse">Loading address data...</p>
                     ) : (
                       <p className="text-xs text-red-500 font-medium">⚠️ Address not found! Please select again.</p>
                     )}
                  </div>
                )}
              </div>
  
              <div onClick={() => setIsModalOpen(true)} className="border border-dashed border-green-400 rounded-xl p-3 flex items-center gap-2 cursor-pointer hover:bg-green-50 transition">
                <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center shrink-0 bg-green-50">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-sm font-bold text-green-600">Use a different address</p>
              </div>
  
              <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <p className="text-xs font-bold text-blue-700">Delivery Information</p>
                  <p className="text-xs text-blue-500">Please ensure your address is accurate</p>
                </div>
              </div>
  
              {/* Form Section */}
              <form id="checkout-form" onSubmit={handleSubmit(mysubmit)} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">City *</label>
                  <input
                    {...register("city")}
                    className={`w-full h-12 border rounded-xl px-4 text-sm focus:ring-2 outline-none transition ${
                      errors.city ? "border-red-400 focus:ring-red-500/20" : "border-gray-200 focus:ring-green-500/20"
                    }`}
                    placeholder="e.g. Cairo"
                  />
                  {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
                </div>
  
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">Street Address *</label>
                  <textarea
                    {...register("details")}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none resize-none transition min-h-[100px] ${
                      errors.details ? "border-red-400 focus:ring-red-500/20" : "border-gray-200 focus:ring-green-500/20"
                    }`}
                    placeholder="Building, street, apartment..."
                  />
                  {errors.details && <p className="mt-1 text-xs text-red-500">{errors.details.message}</p>}
                </div>
  
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">Phone Number *</label>
                  <div className="relative">
                    <input
                      {...register("phone")}
                      className={`w-full h-12 border rounded-xl px-4 text-sm focus:ring-2 outline-none transition ${
                        errors.phone ? "border-red-400 focus:ring-red-500/20" : "border-gray-200 focus:ring-green-500/20"
                      }`}
                      placeholder="01xxxxxxxxx"
                    />
                    <span className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">Egyptian numbers only</span>
                  </div>
                  {errors.phone && <p className="mt-1 text-[12px] font-bold text-red-500 px-1">{errors.phone.message}</p>}
                </div>
              </form>
            </div>
          </div>
  
          {/* Payment Card */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-green-600 text-white px-5 py-4 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
              <p className="font-bold text-sm">Payment Method</p>
            </div>
            <div className="p-5">
              <label className="border-2 border-green-500 bg-green-50 rounded-xl p-4 flex items-center gap-3 cursor-pointer">
                <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M12 10v6M9 13h6"/></svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">Cash on Delivery</p>
                  <p className="text-xs text-gray-500">Pay when your order arrives</p>
                </div>
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </label>
            </div>
          </div>
        </div>
  
        {/* ===== RIGHT: Order Summary - Sticky on Desktop ===== */}
        <div className="w-full lg:w-[320px] lg:sticky lg:top-8 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
            <div className="bg-green-600 text-white px-5 py-4">
              <p className="font-bold">Order Summary</p>
              <p className="text-xs opacity-80 mt-0.5">{data?.products?.length || 0} items</p>
            </div>
  
            <div className="p-4 space-y-3 border-b border-gray-100 max-h-60 overflow-y-auto custom-scrollbar">
              {data?.products?.map((item: CartItemType, i: number) => (
                <div key={i} className="flex gap-3 items-center">
                  <img src={item.product.imageCover} className="w-10 h-10 object-contain bg-gray-50 rounded border shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-gray-800 truncate">{item.product.title}</p>
                    <p className="text-[10px] text-gray-400">{item.count} × {item.price} EGP</p>
                  </div>
                  <p className="text-xs font-bold text-gray-900 whitespace-nowrap">{item.count * item.price} EGP</p>
                </div>
              ))}
            </div>
  
            <div className="p-5 bg-gray-50 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">{data?.totalCartPrice} EGP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="font-bold text-gray-800">Total</span>
                <span className="text-xl font-black text-green-600">{data?.totalCartPrice} EGP</span>
              </div>
  
              <button
                type="submit"
                form="checkout-form"
                className="w-full bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white py-4 rounded-xl font-bold text-sm transition-all shadow-lg mt-2"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  
    {/* Modal remains fixed as it was */}
    {isModalOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="p-6 border-b flex justify-between items-center bg-gray-50">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Select Delivery Address</h3>
              <p className="text-xs text-gray-500">Choose one of your saved locations</p>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition">✕</button>
          </div>
          <div className="p-4 max-h-[60vh] overflow-y-auto space-y-3 custom-scrollbar">
            {Array.isArray(address) && address.map((addr: addressresponsedatatype) => (
              <div 
                key={addr._id}
                onClick={() => { setSelectedAddress(addr); setIsModalOpen(false); }}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center
                  ${selectedAddress?._id === addr._id ? "border-green-500 bg-green-50 shadow-sm" : "border-gray-100 hover:border-green-200 hover:bg-gray-50"}`}
              >
                <div className="flex gap-3">
                  <div className={`mt-1 ${selectedAddress?._id === addr._id ? "text-green-600" : "text-gray-400"}`}>📍</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{addr.name}</p>
                    <p className="text-[11px] text-gray-500 line-clamp-1">{addr.details}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{addr.city} • {addr.phone}</p>
                  </div>
                </div>
                {selectedAddress?._id === addr._id && (
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-[10px] shadow-sm">✓</div>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 bg-gray-50 border-t flex justify-center">
            <Link href="/profile" className="text-xs font-bold text-green-600 hover:underline">+ Add New Address in Profile</Link>
          </div>
        </div>
      </div>
    )}
  </div>
  );
}