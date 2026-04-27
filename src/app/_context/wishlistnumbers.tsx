"use client";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useWishlistStore } from "../_store/cartstore";
export default function WishlistBadge({ initialCount = 0 }: { initialCount?: number }) {
  const count = useWishlistStore((s) => s.count) || initialCount;
  
  return (
    <Link href="/wishlist">
      <div className="flex items-center gap-1">
        {count > 0 && (
          <div className="bg-red-500 px-2 text-white rounded-full text-xs font-bold">
            {count}
          </div>
        )}
      </div>
    </Link>
  );
}