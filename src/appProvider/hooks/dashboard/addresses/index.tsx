import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

export const useAddBillingAddress = () => {
     return async (payload: any, onSuccess: () => void, onError: () => void) => {
          try {
               const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/add-billing-address`,
                    payload,
               );
               if (response.data.status) {
                    onSuccess();
                    toast.success("Address added Successfully");
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useGetBillingAddress = () => {
     return async (onSuccess: () => void, onError: () => void) => {
          try {
               const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/billing`,
               );
               if (response.data.status) {
                    onSuccess();
                    toast.success("Address added Successfully");
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};
