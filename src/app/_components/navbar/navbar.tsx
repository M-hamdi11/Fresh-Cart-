"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from "@heroui/react";
import { useContext, useState } from "react";
import { FaHeart, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
import { RiUserLine, RiSettings4Line } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CartContextType, usecartcontext } from "@/app/_context/cartcontext";
import { WishlistContext, WishlistContextType } from "@/app/_context/wishlistcontext";
import WishlistBadge from "@/app/_context/wishlistnumbers";
import CartBadge from "@/app/_context/cartbadge";
import Logout from "../logout/Logout";
import { FaCartShopping } from "react-icons/fa6";

export default function Mynavbar() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState("");
  const { numberofwishlistitems, setsearchvalue, searchvalue } = useContext(WishlistContext) as WishlistContextType;
  const { numberofcartitemsfromlayout } = usecartcontext() as CartContextType;
  const router = useRouter();

  const username = session?.user?.name?.split(" ")[0] || "User";
  const isAuth = status === "authenticated";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Brands", href: "/brands" },
  ];

  const handleMobileSearch = () => {
    if (mobileSearch.trim()) {
      setsearchvalue(mobileSearch);
      router.push(`/searchpage/${mobileSearch}`);
      setIsMenuOpen(false);
    }
  };

  const handleMobileSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleMobileSearch();
  };

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className="w-full px-2 lg:px-10 sticky top-0 z-999 bg-white border-b border-gray-100 h-16 lg:h-18"
      >
        <div className="flex items-center justify-between w-full">

          {/* 1. Logo */}
          <NavbarBrand className="shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-green-600 p-1.5 rounded-lg text-white">
                <FaCartShopping size={20} />
              </div>
              <p className="font-bold text-xl lg:text-2xl text-gray-800 tracking-tight">FreshCart</p>
            </Link>
          </NavbarBrand>

          {/* 2. Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md xl:max-w-xl relative mx-4">
            <input
              type="text"
              onChange={(e) => setsearchvalue(e.target.value)}
              placeholder="Search for products..."
              className="w-full px-5 py-2 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
            />
            <Link
              href={`/searchpage/${searchvalue}`}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center"
            >
              <FiSearch size={14} />
            </Link>
          </div>

          {/* 3. Desktop Nav Links */}
          <NavbarContent className="hidden xl:flex gap-8" justify="center">
            {navLinks.map((link) => (
              <NavbarItem key={link.label}>
                <Link href={link.href} className="text-gray-700 hover:text-green-600 font-semibold transition-colors">
                  {link.label}
                </Link>
              </NavbarItem>
            ))}
            <Dropdown isOpen={isCatOpen} onOpenChange={setIsCatOpen}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent text-gray-700 hover:text-green-600 font-semibold min-w-fit"
                    endContent={<FaChevronDown size={10} className={isCatOpen ? "rotate-180" : ""} />}
                  >
                    Categories
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
                <DropdownItem key="all"><Link className="block w-full" href="/categories">All Categories</Link></DropdownItem>
                <DropdownItem key="electronics"><Link className="block w-full" href="/categories/6439d2d167d9aa4ca970649f">Electronics</Link></DropdownItem>
                <DropdownItem key="women"><Link className="block w-full" href="/categories/6439d58a0049ad0b52b9003f">Women's Fashion</Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>

          {/* 4. Action Icons */}
          <NavbarContent justify="end" className="gap-1 lg:gap-3 items-center">

            {/* Wishlist */}
            <Link href="/wishlist" className="relative p-2 text-gray-500 hover:text-green-600 transition-colors">
              <FaHeart size={22} />
              <div className="absolute top-0 right-0">
                <WishlistBadge initialCount={numberofwishlistitems} />
              </div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-500 hover:text-green-600 transition-colors">
              <FiShoppingCart size={24} />
              <div className="absolute top-0 right-0">
                <CartBadge initialCount={numberofcartitemsfromlayout} />
              </div>
            </Link>

            {/* User - Desktop Only */}
            <div className="hidden lg:block ml-1">
              {isAuth ? (
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <button className="flex items-center justify-center w-9 h-9 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
                      <RiUserLine size={20} />
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu className="w-52 bg-white border border-gray-100 rounded-xl shadow-xl p-2">
                    <DropdownItem key="profile" className="h-12 border-b border-gray-50 mb-1 pointer-events-none">
                      <p className="text-xs text-gray-400">Welcome,</p>
                      <p className="font-bold text-green-600">{username}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">
                      <Link href="/profile" className="flex items-center gap-2 text-gray-700">
                        <RiSettings4Line size={18} /> Profile
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="logout" className="text-red-600">
                      <div className="flex items-center gap-2">
                        <HiOutlineLogout size={18} /><Logout />
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Link href="/login" className="px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-bold transition-all">
                  Sign In
                </Link>
              )}
            </div>

            {/* ✅ Hamburger Button - Mobile Only - Plain button NO HeroUI */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-green-50 transition-colors"
            >
              {isMenuOpen
                ? <IoCloseOutline size={28} className="text-green-600" />
                : <HiMenuAlt3 size={28} className="text-green-600" />
              }
            </button>

          </NavbarContent>
        </div>

        {/* 5. Mobile Drawer */}
        <NavbarMenu className="fixed inset-y-0 right-0 w-[80%] max-w-[320px] bg-white shadow-2xl z-1000 p-0 flex flex-col h-screen overflow-y-auto">
          <div className="flex flex-col h-full">

            {/* Drawer Header */}
            <div className="p-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <div className="flex items-center gap-2">
                <div className="bg-green-600 p-1 rounded-md text-white">
                  <FaCartShopping size={18} />
                </div>
                <span className="font-bold text-lg text-gray-800">FreshCart</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
              >
                <IoCloseOutline size={24} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="px-4 py-4 border-b border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  value={mobileSearch}
                  onChange={(e) => setMobileSearch(e.target.value)}
                  onKeyDown={handleMobileSearchKeyDown}
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all pr-12"
                />
                <button
                  onClick={handleMobileSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white p-1.5 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FiSearch size={16} />
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col py-2 border-b border-gray-100">
              {["Home", "Shop", "Categories", "Brands"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="px-6 py-4 text-gray-700 font-medium flex justify-between items-center hover:bg-green-50 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                  <FaChevronRight size={12} className="text-gray-300" />
                </Link>
              ))}
            </div>

            {/* User Section */}
            <div className="flex flex-col py-2 border-b border-gray-100">
              {isAuth ? (
                <>
                  <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                    <div className="px-6 py-4 flex items-center gap-3 hover:bg-green-50 transition-colors">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <RiUserLine size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Welcome back</p>
                        <p className="font-bold text-gray-800">{username}</p>
                      </div>
                    </div>
                  </Link>
                  <div className="px-6 py-3 flex items-center gap-3 text-red-500 font-medium cursor-pointer hover:bg-red-50 transition-colors">
                    <HiOutlineLogout size={20} />
                    <Logout />
                  </div>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="mx-6 my-4 py-3 bg-green-600 text-white text-center rounded-xl font-bold hover:bg-green-700 transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Support */}
            <div className="mt-auto p-6">
              <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-4 border border-green-100">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm">
                  <BsHeadset size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Need Help?</p>
                  <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Contact Support</p>
                </div>
              </div>
            </div>

          </div>
        </NavbarMenu>
      </Navbar>
    </>
  );
}