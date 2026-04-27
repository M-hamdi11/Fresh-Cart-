import { decodetoken } from "@/app/utls";
import { carttype, ProductType } from "../types";
import { getWishlistResponse } from "@/api/types";

export async function get_all_products():Promise<ProductType[]|undefined> {
    try{
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/products",{cache:"force-cache"});
      const data =await res.json();
      console.log(data.data);
      return data.data;
    }
    catch(error){
      return [];
      console.log(error);
    }
   }

   export async function user_cart():Promise<carttype|undefined> {
     const token= await decodetoken();
     if(token){
      try{
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
          headers:{token:token},
          
        });
        const data =await res.json();
        console.log(data.data);
        return data.data;
      }
      catch(error){
        console.log(error);
      }

     }
     else{
      return undefined;
     }
 

   }
   export async function get_all_categories():Promise<ProductType[]|undefined> {
    try{
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories",{cache:"force-cache"});
      const data =await res.json();
      console.log(data.data);
      return data.data;
    }
    catch(error){
      return [];
      console.log(error);
    }
   }

   export async function get_specific_category({ category_id }: { category_id: string }): Promise<ProductType[]> {
    try {
      // ✅ التصحيح: استدعاء منتجات القسم باستخدام فلتر category[in]
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products?category[in]=${category_id}`,
        { 
          cache: "force-cache", // أو استخدم { next: { revalidate: 3600 } } للتحكم في التحديث
        }
      );
  
      if (!res.ok) throw new Error("Failed to fetch products");
  
      const data = await res.json();
      
      // ✅ الـ API بيرجع المصفوفة داخل data.data
      return data.data || []; 
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
  
  // دالة إضافية لجلب بيانات القسم نفسه (الاسم والصورة) للـ Banner
  export async function get_category_details(category_id: string) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${category_id}`);
      const data = await res.json();
      return data.data;
    } catch (error) {
      return null;
    }
  }
  export async function get_prands() {
    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
      const data = await res.json();
      console.log(data.data);
      return data.data;
    } catch (error) {
      return null;
    }
  
  }
 
  export async function wishlist_items() {
    const token = await decodetoken();
    if (!token) return undefined;
  
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          cache: "no-store",
          headers: {
            token: token,
          },
        }
      );
  
      const data = await res.json() as getWishlistResponse;
      console.log(data);
      return data.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
  export async function getalladdress () {
    const token = await decodetoken();
    if (!token) return undefined;
  
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/addresses",
        {
          cache: "no-store",
          headers: {
            token: token,
          },
        }
      );
  
      const data = await res.json();
      console.log(data);
      return data.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
    
  }

  export async function getspacificaddress ( addressid:string) {
    const token = await decodetoken();
    if (!token) return undefined;
  
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/addresses/${addressid}`,
        {
          cache: "no-store",
          headers: {
            token: token,
          },
        }
      );
  
      const data = await res.json();
      console.log(data);
      return data.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
    
  }

  