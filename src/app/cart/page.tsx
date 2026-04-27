import { user_cart } from '@/api/services/rout.services';
import { carttype } from '@/api/types';
import React from 'react';
import Removeproduct from './removeproduct';
import Updateproductcountbtn from './updateproductcountbtn';
import Link from 'next/link';
import { FaArrowLeftLong, FaCartShopping } from "react-icons/fa6";
import Clearcart from './clearcart';
import EmptyCart from './emptycart';

export default async function Cart() {
  const data = await user_cart();

  // 🛑 حماية من الـ null
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-100">
          <p className="text-red-600 font-bold text-xl">Error loading cart</p>
          <p className="text-gray-500 mt-2">Please check your connection and try again.</p>
        </div>
      </div>
    );
  }

  const { _id, products, totalCartPrice } = data as carttype;

  // 🛑 Empty Cart
  if (!products || products.length === 0) {
    return <EmptyCart />;
  }

  // ✅ التصميم الجديد المطابق للصورة
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link className="hover:text-green-600 transition" href="/">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Shopping Cart</span>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="bg-green-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-green-100">
              <FaCartShopping size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Shopping Cart</h1>
              <p className="text-gray-500 mt-1">
                You have <span className="font-semibold text-green-600">{products.length} items</span> in your cart
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 🛒 Left Side: Products List */}
          <div className="lg:col-span-2 space-y-4">
            {products.map((item: any) => (
              <div 
                key={item._id} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  
                  {/* Image Container - FIXED SIZE */}
                  <div className="w-full sm:w-32 h-40 sm:h-32 shrink-0 rounded-xl bg-gray-50 p-2 border border-gray-50 overflow-hidden flex items-center justify-center">
                    <img 
                      alt={item.product?.title} 
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-500" 
                      src={item.product?.imageCover} 
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg leading-snug line-clamp-1">
                          {item.product?.title}
                        </h3>
                        <span className="inline-block px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-lg mt-2">
                          {item.product?.category?.name || "Fashion"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-0 flex flex-wrap items-end justify-between gap-4">
                      {/* Price & Quantity */}
                      <div className="space-y-3">
                        <p className="text-green-600 font-extrabold text-xl">{item.price} <span className="text-xs">EGP</span></p>
                        
                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100 w-fit">
                          <Updateproductcountbtn
                            id={item.product?.id}
                            newcount={item.count - 1}
                          />
                          <span className="w-10 text-center font-bold text-gray-800">{item.count}</span>
                          <Updateproductcountbtn
                            id={item.product?.id}
                            newcount={item.count + 1}
                            isincrement
                          />
                        </div>
                      </div>

                      {/* Total for this item & Delete */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Total Item</p>
                          <p className="text-lg font-black text-gray-900">
                            {item.price * item.count} <span className="text-sm font-normal text-gray-500">EGP</span>
                          </p>
                        </div>
                        <Removeproduct productid={item.product?.id} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Footer of List */}
            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <Link className="text-green-600 hover:text-green-700 font-bold text-sm flex items-center gap-2 group" href="/">
                <FaArrowLeftLong className="group-hover:-translate-x-1 transition-transform" /> 
                Continue Shopping
              </Link>
              <Clearcart />
            </div>
          </div>

          {/* 💳 Right Side: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-8">
              <div className="bg-gray-900 p-6">
                <h2 className="text-white font-bold text-xl tracking-tight">Order Summary</h2>
              </div>
              
              <div className="p-6 space-y-5">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Subtotal ({products.length} items)</span>
                  <span className="text-gray-900 font-bold">{totalCartPrice} EGP</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                
                <hr className="border-dashed border-gray-200" />
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Estimated Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-green-600 block">{totalCartPrice} EGP</span>
                    <span className="text-[10px] text-gray-400 font-medium italic">VAT Included</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    href={`/cart/${_id}`} 
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-[0.98]"
                  >
                    Proceed to Checkout
                  </Link>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Secure 256-bit SSL Encrypted payment
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}