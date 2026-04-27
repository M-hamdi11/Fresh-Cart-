'use server'

import { decodetoken } from "../utls";
import { changepasswordtype } from "./settingcontent";

export async function changepasswordaction(updatepassowrd: changepasswordtype) {
    const token = await decodetoken();
    if (!token) return { success: false, error: "Authentication token is missing" };

    try {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword", {
            method: "PUT",
            headers: {
                "token": token as string, 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatepassowrd), // إرسال البيانات مباشرة
        });
        const data = await res.json();
        return res.ok ? { success: true, data } : { success: false, error: data.message };
    } catch (err) {
        return { success: false, error: "Something went wrong" };
    }
}