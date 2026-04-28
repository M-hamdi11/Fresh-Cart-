import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function decodetoken() {
  const cookie = await cookies();
  
  const nexttoken =
    cookie.get("__Secure-next-auth.session-token")?.value ||
    cookie.get("next-auth.session-token")?.value;

  const jwtres = await decode({ token: nexttoken, secret: process.env.NEXTAUTH_SECRET! });
  
  if (jwtres) {
    return jwtres.token as string;
  } else {
    return null;
  }
}