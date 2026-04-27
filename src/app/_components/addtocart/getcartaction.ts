"use server";

import { user_cart, wishlist_items } from "@/api/services/rout.services";
import { carttype, getWishlistResponse } from "@/api/types";

export async function getcartaction(): Promise<carttype | undefined> {
  return await user_cart();
}
export async function getwishlistaction(): Promise<getWishlistResponse | undefined> {
  return await wishlist_items();
}