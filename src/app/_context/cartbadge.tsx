"use client";
import { useCartStore } from "@/app/_store/cartstore";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function CartBadge({ initialCount = 0 }: { initialCount?: number }) {
  const count = useCartStore((s) => s.count) || initialCount;
  
  return (
    <Link href="/cart">
      <div className="flex items-center gap-1">
        {count > 0 && (
          <div className="bg-red-500 px-2 text-white rounded-full  font-bold text-xs">
            {count}
          </div>
        )}
      </div>
    </Link>
  );
}