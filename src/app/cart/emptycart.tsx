"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";

export default function EmptyCart() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-10">
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="relative mb-8">
          <div
            style={{
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              backgroundColor: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <FaBoxOpen style={{ fontSize: "50px", color: "#d1d5db" }} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Your cart is empty
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8 leading-relaxed">
          Looks like you haven&apos;t added anything to your cart yet.
          <br />
          Start exploring our products!
        </p>

        {/* Button */}
        <Link
          href="/"
          style={{
            backgroundColor: "#16a34a",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "white",
            padding: "14px 32px",
            borderRadius: "12px",
            fontWeight: "600",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            transition: "all 0.2s",
          }}
        >
          Start Shopping
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
