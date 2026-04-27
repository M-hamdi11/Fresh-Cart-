import { ProductType } from "@/api/types";
import Link from "next/link";
import { FaArrowsRotate, FaPlus, FaRegEye, FaRegHeart } from "react-icons/fa6";
import StarRating from "./starrating";
import { AddToCartButton } from "../addtocart/addtocart";
import Addtowishlist from "../addtowishlist/addtowishlist";

   export default function ProductCard({ product}: { product: ProductType}) {
    const hasDiscount =
      product.priceAfterDiscount && product.priceAfterDiscount < product.price;
    const discountPercent = hasDiscount
      ? Math.round(
          ((product.price - product.priceAfterDiscount!) / product.price) * 100
        )
      : null;
  
    return (
      <div
        id="product-card"
        className="bg-white border border-gray-200 rounded-lg overflow-hidden"
      >
        <div className="relative">
          <img
            className="w-full h-60 object-contain bg-white"
            alt={product.title}
            src={product.imageCover}
          />
  
          {discountPercent && (
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{discountPercent}%
              </span>
            </div>
          )}
  
          <div className="absolute top-3 right-3 flex flex-col space-y-2">

          <Addtowishlist product_id={product._id}/>
  
            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm">
              <FaArrowsRotate />
            </button>
  
            <Link
              className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm"
              href={`/product/${product._id}`}
            >
              <FaRegEye />
            </Link>
          </div>
        </div>
  
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">
            {typeof product.category === 'object'
              ? product.category?.name
              : 'Electronics'}
          </div>
  
          <h3
            className="font-medium mb-1 cursor-pointer"
            title={product.title}
          >
            <Link className="line-clamp-2" href={`/products/${product._id}`}>
              {product.title}
            </Link>
          </h3>
  
          <div className="flex items-center mb-2">
            <div className="flex text-amber-400 mr-2">
              <StarRating rating={product.ratingsAverage ?? 0} />
            </div>
            <span className="text-xs text-gray-500">
              {product.ratingsAverage} ({product.ratingsQuantity})
            </span>
          </div>
  
          <div className="flex items-center justify-between">
            <div>
              {hasDiscount ? (
                <>
                  <span className="text-lg font-bold text-primary-600">
                    {product.priceAfterDiscount} EGP
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.price} EGP
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-800">
                  {product.price} EGP
                </span>
              )}
            </div>
  
            <button className="h-10 w-10 rounded-full flex items-center justify-center transition bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-70">
              <FaPlus />
            </button>
            <AddToCartButton productId={product._id} children={<FaPlus />} classnames="bg-green-600 text-white w-8 h-8 rounded-full hover:bg-green-700 flex items-center justify-center text-xl font-bold disabled:opacity-50" />
          </div>
        </div>
      </div>
    );
  }