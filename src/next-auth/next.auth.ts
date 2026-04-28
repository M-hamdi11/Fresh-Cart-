import { NextAuthOptions } from "next-auth";
import { jwtDecode } from "jwt-decode";
import Credentials from "next-auth/providers/credentials";

export const nextauthconfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "email",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "password", type: "password", placeholder: "password" },
      },
      authorize: async function (credentials) {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();

        if (res.ok && data.user) {
          const { name, email } = data.user;
          // فك شفرة التوكن لجلب الـ ID
          const decoded: any = jwtDecode(data.token);
          
          return {
            name,
            email,
            id: decoded.id, // تأكد إن الـ ID جوه التوكن اسمه id
            usertoken: data.token
          };
        }
        return null;
      }
    })
  ],
  jwt: {
    maxAge: 60 * 60 * 24
  },
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // بننقل البيانات من الـ user للـ token أول مرة بس عند التسجيل
        token.token = user.usertoken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // بننقل البيانات من الـ token للـ session عشان تظهر في الـ Frontend
        session.user.id = token.id as string;
        session.user.usertoken = token.token as string;
      }
      return session;
    }
  }
};