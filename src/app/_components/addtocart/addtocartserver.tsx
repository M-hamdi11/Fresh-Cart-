"use server";

import { decodetoken } from "@/app/utls";

export async function addtocartactions(productid: string) {
  const token = await decodetoken();
  if (!token) return undefined;

  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/cart",
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

    const data = await res.json();
    return data?.numOfCartItems ?? 0;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}