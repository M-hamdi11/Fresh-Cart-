'use server'
import { revalidatePath } from "next/cache";
import { decodetoken } from "../utls";
import { addressData } from "./adressmodal";


export async function addadressaction(addressdata: addressData) {
    const token = await decodetoken();
    
    if (!token) {
      console.error("No token found");
      return null;
    }
  
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
        method: "POST",
        headers: { 
          "token": token, // تأكد إن التوكن هنا سليم
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(addressdata),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        console.log("API Response:", data);
        revalidatePath("/profile");
        return data;
      } else {
        console.log("API Error:", data); // عشان تشوف الرد من السيرفر لو فيه مشكلة في البيانات
        return null;
      }
    } catch (err) {
      console.log("Fetch Error:", err);
      return null;
    }
  }
  export default async function deleteaddressaction(addressid: string) {
    const token = await decodetoken();
    try{
      if(token){
        const data= await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressid}`,{
          method:"DELETE",
          headers:{token:token}   
        })
        const res= await data.json();
        console.log(res);
        if(data.ok){
          revalidatePath("/profile");
          return res;
        }
        
      }
     
      }
    
    catch{
      console.log("error");
    }

  } 