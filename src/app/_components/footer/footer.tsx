import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCreditCard,
  FaCartShopping,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* --- 1. قسم المميزات (Features Section) --- */}
      <div className="bg-emerald-50 border-y border-emerald-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Shipping */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Free Shipping
                </h4>
                <p className="text-gray-500 text-xs">On orders over 500 EGP</p>
              </div>
            </div>

            {/* Easy Returns */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Easy Returns
                </h4>
                <p className="text-gray-500 text-xs">14-day return policy</p>
              </div>
            </div>

            {/* Secure Payment */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Secure Payment
                </h4>
                <p className="text-gray-500 text-xs">100% secure checkout</p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  24/7 Support
                </h4>
                <p className="text-gray-500 text-xs">Contact us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. الفوتر الرئيسي (Main Footer) --- */}
      <footer className="bg-[#0b1320] text-white">
        <div className="container mx-auto px-4 py-12">
          {/* الجريد الأساسي */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
            {/* العمود الأول: معلومات البراند */}
            <div className="lg:col-span-4 md:col-span-2">
              <Link href="/" className="inline-block mb-8 group">
                <div className="flex items-center gap-3">
                  {/* الأيقونة من رياكت أيكون */}
                  <div className="bg-green-600 p-2.5 rounded-xl shadow-[0_0_15px_rgba(22,163,74,0.4)] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <FaCartShopping className="text-white text-2xl" />
                  </div>

                  {/* الكلمة */}
                  <span className="text-2xl font-black text-white tracking-tight">
                    Fresh<span className="text-green-500">Cart</span>
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-sm">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>

              <div className="space-y-4 mb-6">
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  <FaPhone className="text-emerald-500" />
                  <span>+1 (800) 123-4567</span>
                </Link>
                <Link
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  <FaEnvelope className="text-emerald-500" />
                  <span>support@freshcart.com</span>
                </Link>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <FaLocationDot className="text-emerald-500 mt-0.5" />
                  <span>123 Commerce Street, New York, NY 10001</span>
                </div>
              </div>

              {/* أيقونات السوشيال */}
              <div className="flex items-center gap-3">
                {[
                  { icon: FaFacebookF, href: "#" },
                  { icon: FaTwitter, href: "#" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaYoutube, href: "#" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <item.icon size={14} />
                  </Link>
                ))}
              </div>
            </div>

            {/* عمود Shop */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5 text-white">Shop</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/shop"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/6439d2d167d9aa4ca970649f"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/6439d5b90049ad0b52b90048"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Men's Fashion
                  </Link>
                </li>
              </ul>
            </div>

            {/* عمود Account */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5 text-white">Account</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/profile"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>

            {/* عمود Support */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5 text-white">Support</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Returns & Refunds
                  </Link>
                </li>
              </ul>
            </div>

            {/* عمود Legal */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5 text-white">Legal</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* البار اللي تحت خالص */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              © 2026 <span className="text-white">FreshCart</span>. All rights
              reserved.
            </p>
            <div className="flex gap-4 items-center opacity-60">
              <span className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest">
                <FaCreditCard className="text-emerald-500" /> Visa
              </span>
              <span className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest">
                <FaCreditCard className="text-emerald-500" /> MasterCard
              </span>
              <span className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest">
                <FaCreditCard className="text-emerald-500" /> PayPal
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
