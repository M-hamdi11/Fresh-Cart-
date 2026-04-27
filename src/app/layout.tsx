import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer/footer";
import Providers from "./_components/provider/providers";
import Mynavbar from "./_components/navbar/navbar";
import TopBar from "./_components/top-bar/top-bar";
import { ToastContainer } from "react-toastify";
import Wrapperforsession from "./_components/wrapperforsession/wrapperforsession";
import CartContextProvider from "./_context/cartcontext";
import {user_cart, wishlist_items } from "@/api/services/rout.services";
import { carttype, getWishlistResponse } from "@/api/types";
import WishlistContextprovider from "./_context/wishlistcontext";
import wishlist from './wishlist/page';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreshCart",
  description: "FreshCart E-commerce Platform",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/263/263142.png", 
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Wrapperforsession>
          <WishlistContextprovider wishlist={await wishlist_items()}>
          <CartContextProvider cart={await user_cart()}>
            <TopBar />
            <Mynavbar />
            <Providers>
              {children}
              <Footer />
              <ToastContainer />
            </Providers>
          </CartContextProvider>
          </WishlistContextprovider>
        </Wrapperforsession>
      </body>
    </html>
  );
}
