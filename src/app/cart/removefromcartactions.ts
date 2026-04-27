'use server';
import { cashobjtype } from "@/api/types";
import { decodetoken } from "@/app/utls";
import { revalidatePath } from "next/cache";

export async function removecartaction(productid: string) {
  const token = await decodetoken();
  if (!token) return null;

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`, {
    method: "DELETE",
    headers: { token: token },
  });

  if (res.ok) {
    const data = await res.json();
    revalidatePath("/cart");
    return data.numOfCartItems;

  }
}
export async function updatecountaction(productid: string,newcount:number) {
  const token = await decodetoken();
  if (!token) return null;

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`, {
    method: "PUT",
    headers: { token: token,"Content-Type":"application/json" },
    body:JSON.stringify({count:newcount})
  });

  if (res.ok) {
    const data = await res.json();
    revalidatePath("/cart");
    return data.numOfCartItems;

  }
}

export async function handleorderaction(cartid: string, detailsobj: cashobjtype) {
  const token = await decodetoken();
  if (!token) return null;

  // التغيير هنا في العنوان:orders بدل cart
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartid}`, {
    method: "POST",
    headers: { 
      "token": token, 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      shippingAddress: detailsobj 
    })
  });

  if (res.ok) {
    const data = await res.json();
    console.log("Order Success:", data);
    return true;
  } else {
    const errorData = await res.json();
    console.error("Order Failed:", errorData);
    return false;
  }
}