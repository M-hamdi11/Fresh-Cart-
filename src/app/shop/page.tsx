import React from "react";
import ShopHeader from "./shopheader";
import { get_all_products } from "@/api/services/rout.services";
import { ProductType } from "@/api/types";
import { AddToCartButton } from "../_components/addtocart/addtocart";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import ProductCard from "../_components/productcard/productcard";

export default async function shop() {
  const products = (await get_all_products()) as ProductType[];
  return (
    <>
      <ShopHeader />

      <p className="p-3" style={{ color: "gray" }}>
        {" "}
        showing {products?.length} Products
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 relative">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />

        ))}
      </div>
    </>
  );
}
