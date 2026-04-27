'use server'

import { user_cart } from "@/api/services/rout.services";
import { carttype } from "@/api/types";
import { decodetoken } from "@/app/utls";
import { revalidatePath } from "next/cache";

export async function getcartaction(): Promise<carttype | undefined> {
    return await user_cart();
}

export async function clearcartaction() {
    const token = await decodetoken();
    if (!token) return null;

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: "DELETE",
        headers: { token: token },
    });

    if (res.ok) {
        const data = await res.json();
        revalidatePath("/cart");
        return data.numOfCartItems;
    }
}
  export async function getalladdressaction () {
    const token = await decodetoken();
    if (!token) return undefined;
  
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/addresses",
        {
          cache: "no-store",
          headers: {
            token: token,
          },
        }
      );
  
      const data = await res.json();
      console.log(data);
      return data.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
    
  }

  export async function getspacificaddressaction ( addressid:string) {
    const token = await decodetoken();
    if (!token) return undefined;
  
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/addresses/${addressid}`,
        {
          cache: "no-store",
          headers: {
            token: token,
          },
        }
      );
  
      const data = await res.json();
      console.log(data);
      return data.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
    
  }