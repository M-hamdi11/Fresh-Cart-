"use server";

import { user_cart, wishlist_items } from "@/api/services/rout.services";
import { carttype,ProductType } from "@/api/types";

export async function getcartaction(): Promise<carttype | undefined> {
  return await user_cart();
}
export async function getwishlistaction(): Promise<ProductType[] | undefined> {
  return await wishlist_items();
}