import { wishlist_items } from "@/api/services/rout.services";
import { getWishlistResponse } from "@/api/types";
import Link from "next/link";
import React from "react";
import { AddToCartButton } from "../_components/addtocart/addtocart";
import {FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import Removefromwishlist from "../_components/removefromwishlist/removefromwishlist";
import { FaHeart } from "react-icons/fa6";

export default async function Wishlist() {
  const wishlistData = (await wishlist_items()) || [];
  console.log(wishlistData.length); // تأكد من مسار الداتا حسب الـ API بتاعك

  return (
    <div className="min-h-screen bg-gray-50/50 py-8">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 mb-8">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <a className="hover:text-emerald-600 transition-colors" href="/">
              Home
            </a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Wishlist</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
              <FaHeart className="text-red-600 text-lg" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
              <p className="text-gray-500 text-sm">
                {wishlistData.length} items saved
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          {/* Table Header - Desktop Only */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Actions</div>
          </div>

          {/* Dynamic Mapping Section */}
          <div className="divide-y divide-gray-100">
            {wishlistData.length > 0 ? (
              wishlistData.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors"
                >
                  {/* Product Info */}
                  <div className="md:col-span-6 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0">
                      <img
                        alt={item.title}
                        className="w-full h-full object-contain p-2"
                        src={item.imageCover}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-medium text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-emerald-600 mt-1">
                        {item.category?.name}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                    <span className="md:hidden text-sm text-gray-500">
                      Price:
                    </span>
                    <div className="text-right md:text-center">
                      <div className="font-semibold text-gray-900">
                        {item.price} EGP
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="md:col-span-2 flex md:justify-center">
                    <span className="md:hidden text-sm text-gray-500 mr-2">
                      Status:
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      In Stock
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                    {/* زرار الكارت - ممكن تخليه Client Component لو فيه Logic كتير */}
                    <div className="flex gap-3 items-center">
                      <AddToCartButton productId={item._id} classnames="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-emerald-600 text-white hover:bg-emerald-700">
                       
                          <FaShoppingCart />
                          <span className="md:hidden lg:inline">
                            Add to Cart
                          </span>
                        
                      </AddToCartButton>
                      <Removefromwishlist product_id={item._id}/>
                      
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center">
                <div className="mb-4">
                  <i className="fa-solid fa-heart-crack text-4xl text-gray-200"></i>
                </div>
                <p className="text-gray-500">Your wishlist is empty</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <Link
            className="text-gray-500 hover:text-emerald-600 text-sm font-medium transition-colors"
            href="/shop"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
