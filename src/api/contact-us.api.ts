import { IcontactUsReq } from "@/app/(pages)/contact-us/contact.types";
import api from "@/utils/api";


export const sendSubcribeEmail = async (email: string) => {
     const { data } = await api.post("/xxx", { email });
     return data;
};

export const sendContactUsMessage = async (
     payload: IcontactUsReq) => {
     const { data } = await api.post("/contact-us", payload);

     return data;
};