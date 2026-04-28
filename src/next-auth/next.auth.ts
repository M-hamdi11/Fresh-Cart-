import { NextAuthOptions } from "next-auth";
import { jwtDecode } from "jwt-decode";
import Credentials from "next-auth/providers/credentials";

export const nextauthconfig: NextAuthOptions={
providers:[ 
    Credentials({
     name:"email",
     credentials:{
        email:{label:"email",type:"email",placeholder:"email"},
        password:{label:"password",type:"password",placeholder:"password"},
     },
     authorize: async function(credentials){
         
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
            method:"POST",
            body:JSON.stringify(credentials),
            headers:{"Content-Type":"application/json"}
          })
         const data = await res.json();
         console.log(data);
         
          if(res.ok){
           
            const {name,email}=data.user;

            const user :{id:string}=jwtDecode(data.token);
            const user_id=user.id;
            return {  
               name,

               email,

                id:user_id,

                usertoken:data.token
            };
          }
            
          return null;
    }
    })

     ],
     jwt:{
        maxAge:60*60*24
     },

     pages:{
        signIn:"/login"
     },


     callbacks:{
        jwt(params){
        if(params.user){
         params.token.token=(params.user as any).usertoken;
         params.token.id=params.user.id;
        }

         return params.token;

        },


        session(params){

        (params.session.user as any).id=(params.token.id)as string ;
         
          return params.session;
              

        }


     }

}