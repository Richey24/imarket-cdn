import { WishlistPayload } from "@/appProvider/types";
import axios from "axios";
import { useSession } from "next-auth/react";

export const useAddWishlist = () => {
     return async (payload: WishlistPayload, onSuccess: () => void, onError: () => void) => {
          try {
               const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/wishlist`,
                    payload,
               );
               if (response.data.status) {
                    onSuccess();
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useGetWishlist = () => {
     return async (userId: string, onSuccess: (data: any) => void, onError: () => void) => {
          try {
               const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/wishlist/${userId}`,
               );
               if (response.data.status) {
                    onSuccess(response.data.wishlist);
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};
