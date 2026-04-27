"use client";
import { useState, useEffect } from "react";
import { AddToCartButton } from "@/app/_components/addtocart/addtocart";
import {
  FiHeart,
  FiShare2,
  FiTruck,
  FiRotateCcw,
  FiShoppingCart,
  FiCheck,
  FiBox,
  FiShield,
} from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import Addtowishlist from "../_components/addtowishlist/addtowishlist";
import ProductCard from "../_components/productcard/productcard";
// تأكد من المسار

export default function ProductDetailsClient({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.imageCover);
  const [activeTab, setActiveTab] = useState("details");
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loadingRelated, setLoadingRelated] = useState(true);

  // حساب نسبة الخصم للصورة الرئيسية
  const hasDiscount =
    product.priceAfterDiscount && product.priceAfterDiscount < product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.priceAfterDiscount) / product.price) * 100
      )
    : null;

  // فيتش المنتجات المتشابهة
  useEffect(() => {
    async function fetchRelated() {
      try {
        setLoadingRelated(true);
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products"
        );
        const data = await res.json();
        const allProducts = data.data;

        if (allProducts) {
          const filtered = allProducts.filter(
            (item: any) =>
              item.category?._id === product.category?._id &&
              item._id !== product._id
          );
          setRelatedProducts(filtered.slice(0, 5));
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoadingRelated(false);
      }
    }
    fetchRelated();
  }, [product.category?._id, product._id]);

  const getRatingWidth = (star: number) => {
    const mockWidths: any = { 5: "25%", 4: "60%", 3: "25%", 2: "5%", 1: "5%" };
    return mockWidths[star];
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-10">
      {/* 1. SECTION: PRODUCT HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 bg-white p-2">
        {/* Left: Images */}
        <div className="md:col-span-5 flex gap-4">
          <div className="flex flex-col gap-3 w-20">
            {product.images?.slice(0, 4).map((img: string, i: number) => (
              <div
                key={i}
                onClick={() => setMainImage(img)}
                className={`cursor-pointer rounded overflow-hidden border-2 transition-all ${
                  mainImage === img ? "border-green-500" : "border-gray-100"
                }`}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-20 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 relative border border-gray-100 rounded-lg overflow-hidden bg-white flex items-center justify-center p-4">
            <img
              src={mainImage}
              alt={product.title}
              className="max-w-full max-h-[450px] object-contain"
            />
            {discountPercent && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercent}%
              </span>
            )}
          </div>
        </div>

        {/* Right: Info */}
        <div className="md:col-span-7 space-y-5">
          <div>
            <p className="text-green-600 text-xs font-bold uppercase tracking-wider mb-1">
              {product.category?.name}
            </p>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <MdOutlineStar
                  key={i}
                  size={18}
                  className={
                    i < Math.round(product.ratingsAverage)
                      ? "text-yellow-400"
                      : "text-gray-200"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-green-600 font-bold">
              {product.ratingsAverage} ({product.ratingsQuantity} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900">
              {product.priceAfterDiscount || product.price} EGP
            </span>
            {hasDiscount && (
              <span className="text-xl text-gray-400 line-through">
                {product.price} EGP
              </span>
            )}
          </div>

          <hr className="border-gray-100" />

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="px-4 font-bold min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>
              <AddToCartButton
                productId={product._id}
                classnames="flex-1 bg-[#0aad0a] text-white rounded-md font-bold py-3 hover:bg-[#089108] transition-all flex items-center justify-center gap-2"
              >
                <FiShoppingCart size={20} /> Add to Cart
              </AddToCartButton>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <Addtowishlist product_id={product._id}>
                  <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-md text-gray-600 font-bold hover:bg-gray-50">
                    <FiHeart /> Wishlist
                  </button>
                </Addtowishlist>
              </div>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-md text-gray-600 font-bold hover:bg-gray-50">
                <FiShare2 /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECTION: TABS (EXACTLY LIKE FRESHCART) */}
      <div className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
        <div className="flex border-b border-gray-200">
          {[
            { id: "details", label: "Product Details", icon: <FiBox /> },
            {
              id: "reviews",
              label: `Reviews (${product.ratingsQuantity})`,
              icon: <MdOutlineStar />,
            },
            { id: "shipping", label: "Shipping & Returns", icon: <FiTruck /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold flex items-center gap-2 relative transition-all ${
                activeTab === tab.id
                  ? "text-green-600"
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              {tab.icon} {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600" />
              )}
            </button>
          ))}
        </div>

        <div className="p-8">
          {/* Details Content */}
          {activeTab === "details" && (
            <div className="space-y-6">
              <h3 className="font-bold text-lg">About this Product</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#f8f9fa] p-5 rounded-lg space-y-3">
                  <h4 className="font-bold text-sm border-b pb-2">
                    Product Information
                  </h4>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Category</span>
                    <span className="font-bold">{product.category?.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Brand</span>
                    <span className="font-bold">{product.brand?.name}</span>
                  </div>
                </div>
                <div className="bg-[#f8f9fa] p-5 rounded-lg space-y-3">
                  <h4 className="font-bold text-sm border-b pb-2">
                    Key Features
                  </h4>
                  <p className="text-xs font-bold text-gray-600 flex items-center gap-2">
                    ✓ 100% Authentic Product
                  </p>
                  <p className="text-xs font-bold text-gray-600 flex items-center gap-2">
                    ✓ High Quality Materials
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Content */}
          {activeTab === "reviews" && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="text-center w-32">
                  <h2 className="text-5xl font-bold">
                    {product.ratingsAverage}
                  </h2>
                  <div className="flex justify-center text-yellow-400 my-2">
                    {[...Array(5)].map((_, i) => (
                      <MdOutlineStar
                        key={i}
                        size={20}
                        className={
                          i < Math.round(product.ratingsAverage)
                            ? "text-yellow-400"
                            : "text-gray-200"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400">
                    Based on {product.ratingsQuantity} reviews
                  </p>
                </div>
                <div className="flex-1 w-full space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div
                      key={star}
                      className="flex items-center gap-4 text-xs font-bold text-gray-500"
                    >
                      <span className="w-10">{star} star</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: getRatingWidth(star) }}
                        />
                      </div>
                      <span className="w-10 text-right">
                        {getRatingWidth(star)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Shipping Content */}
          {activeTab === "shipping" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#E7F7ED] p-6 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 flex items-center gap-2 mb-3">
                  <FiTruck /> Shipping Information
                </h4>
                <ul className="text-xs text-green-700 space-y-2 font-medium">
                  <li>✓ Free shipping on orders over $50</li>
                  <li>✓ Standard delivery: 3-5 business days</li>
                </ul>
              </div>
              <div className="bg-[#E7F7ED] p-6 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 flex items-center gap-2 mb-3">
                  <FiRotateCcw /> Returns & Refunds
                </h4>
                <ul className="text-xs text-green-700 space-y-2 font-medium">
                  <li>✓ 30-day hassle-free returns</li>
                  <li>✓ Full refund or exchange available</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. SECTION: YOU MAY ALSO LIKE (CAROUSEL/GRID) */}
      <div className="space-y-6 pt-6 border-t">
      <div className="flex items-center gap-3">
          <div className="h-8 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800">
            You May Also <span className="text-emerald-600">Like</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {loadingRelated
            ? [...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-72 bg-gray-100 animate-pulse rounded-lg"
                />
              ))
            : relatedProducts.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
        </div>
      </div>
    </div>
  );
}
