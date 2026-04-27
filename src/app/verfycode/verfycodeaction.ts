'use server'
export default async function handleverfycodeaction( verfycode:string ) {
    try{
       const data = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({resetCode:verfycode})
       });
       const result = await data.json();
       console.log(result);
       if(data.ok){
        return result;
       }
       else{
        return result;
       }
       
    }catch{
        console.log("error");

    }

}