import { nextauthconfig } from "@/next-auth/next.auth";
import NextAuth from "next-auth";

const handler = NextAuth(nextauthconfig)
export { handler as GET, handler as POST }