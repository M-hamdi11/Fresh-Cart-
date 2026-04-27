'use server'

import { decodetoken } from "@/app/utls";
import { revalidatePath } from "next/cache";


export async function removeFromWishlist(product_id:string){
    const token = await decodetoken();
  if(token){
    try{
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${product_id}`,{
            method:"DELETE",
            headers:{token:token}
           
 
        })
        const data = await res.json();
       
        if(res.ok){
          console.log("fuckkkkkkkkkkkkkkk",data);
            revalidatePath("/wishlist");
        }
        
        return data.data.length;
        
       
     }
     
     catch(err){
         console.log(err);
         
     }
  }
  else{
    return undefined;
    
  }
 


}