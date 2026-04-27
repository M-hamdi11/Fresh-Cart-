'use server'
export default async function forgotpasswordaction(email:string){


try{
    const res =await fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email:email}),
        

    }
    )
    const result =await res.json();
    console.log(result);
    if(res){
        return result;
    }
    else{
        return false;
    }
    

}catch{
    
    console.log("erroroooooooo");
    

     
}



}