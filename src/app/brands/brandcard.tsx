'use client'
import { brandType } from "@/api/types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


export function BrandCard({ brand }:{brand:brandType}) {
  return (
    <Link
      href={`/brands/${brand._id}`}
      className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm 
      hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
        {brand.name}
      </h3>

      {/* Hover Text */}
      <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-violet-600 flex items-center gap-1">
          View Products
          <FaArrowRight className="text-[10px]" />
        </span>
      </div>
    </Link>
  );
}