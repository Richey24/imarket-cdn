import axios from "axios";
import { useSession } from "next-auth/react";

export const useGetOrderHistory = () => {
     return async (userId: string, onSuccess: (data: any) => void, onError: () => void) => {
          try {
               const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/customer/history/${userId}`,
               );
               if (response.data.status) {
                    onSuccess(response.data.orders);
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};
