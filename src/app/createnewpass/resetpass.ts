'use server'
export default async function resetpass( newpass:string , email:string) {
    try{
     const data = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({newPassword:newpass,email:email})
     })
     const result = await data.json();
     console.log(result);
     return result;
    }catch{
     console.log("error");
    
    }


}