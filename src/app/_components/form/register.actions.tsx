'use server';

import { registertype } from "./registerform";

export async function registeractions(data:registertype){
    try{
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",{
          method:"POST",
          body:JSON.stringify(data),
          headers:{"Content-Type":"application/json"}
        })
        
        const result = await res.json();
        console.log(result);
        if(res.ok){
          return true;
        }
        else{
          return false;
        }
        
  
      }catch(err){
        console.log(err);
      }
}
