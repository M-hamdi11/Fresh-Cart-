"use client";
import { useCartStore } from "@/app/_store/cartstore";
import { toast } from "react-toastify";
import { addtocartactions } from "./addtocartserver";
import { useTransition } from "react";

export function AddToCartButton({ productId,children,classnames }: { productId: string ,children?: React.ReactNode, classnames?: string }) {
  const setCount = useCartStore((s) => s.setCount);
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    startTransition(async () => {
      const newCount = await addtocartactions(productId);
      if (typeof newCount === "number") {
        setCount(newCount); 
        toast.success("Product added to cart!");
      } else {
        toast.error("Failed to add product");
      }
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isPending}
      className={classnames}
    >
      {isPending ? "..." : children}
    </button>
  );
}