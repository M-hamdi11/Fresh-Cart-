'use client'

import { useEffect, useState } from "react";
import { createContext } from "react";

 export interface WishlistContextType {
    numberofwishlistitems: number;
    setnumberofwishlistitems: React.Dispatch<React.SetStateAction<number>>;
    searchvalue: string;
    setsearchvalue: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export const WishlistContext = createContext<WishlistContextType | null>(null);

export default function WishlistContextprovider({children, wishlist}:{children:React.ReactNode, wishlist: any}){
    
    const [numberofwishlistitems, setnumberofwishlistitems] = useState(() => {
        // لو الـ wishlist مبعوتة وهي عبارة عن array، هات الـ length بتاعها علطول
        if (Array.isArray(wishlist)) {
            return wishlist.length;
        }
        // لو مبعوتة كـ Object (في حالة لو غيرت الـ service)
        if (wishlist?.data) {
            return wishlist.data.length;
        }
        return 0;
    });
    const [searchvalue, setsearchvalue] = useState( "" );

    return (
        <WishlistContext.Provider value={{ numberofwishlistitems, setnumberofwishlistitems ,searchvalue, setsearchvalue}}>
            {children}
        </WishlistContext.Provider>
    )
}