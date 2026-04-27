"use server";

import { addtoWishlistResponse } from "@/api/types";
import { decodetoken } from "@/app/utls";

export async function addtowishlistaction(productid: string) {
  const token = await decodetoken();
  if (!token) return undefined;

  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        method: "POST",
        body: JSON.stringify({ productId: productid }),
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const data = await res.json() as addtoWishlistResponse;
    console.log(data);
    return data.data.length;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

