'use server'
import { decodetoken } from "../utls";
import { changepasswordtype, settingtype } from "./settingcontent";

// تحديث بيانات المستخدم (الاسم، الايميل، الهاتف)
export default async function changeuser(updateddata: settingtype) {
    const token = await decodetoken();
    if (!token) return { success: false, error: "Authentication token is missing" };

    try {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/users/updateMe/", {
            method: "PUT",
            headers: {
                "token": token as string, 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateddata), // إرسال البيانات مباشرة
        });
        const data = await res.json();
        return res.ok ? { success: true, data } : { success: false, error: data.message };
    } catch (err) {
        return { success: false, error: "Network error" };
    }
}

