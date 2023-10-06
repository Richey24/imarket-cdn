import axios from "axios";
import { useSession } from "next-auth/react";
import { AddToCard, CreateCard } from "../types";

export const useGetSiteByDomain = () => {
     return async (domain: string, onSuccess: (data: any) => void, onError: () => void) => {
          try {
               const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/site/${domain}`,
               );
               if (response.data.status) {
                    onSuccess(response.data.company);
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useGetProducts = () => {
     return async (company_id: string, onSuccess: (data: any) => void, onError: () => void) => {
          try {
               const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/site/${company_id}`,
               );
               if (response.data.status) {
                    onSuccess(response.data.products);
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useGetFeaturedProducts = () => {
     return async (company_id: string, onSuccess: (data: any) => void, onError: () => void) => {
          try {
               const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${company_id}/featured`,
               );
               if (response.status === 201 || response.status === 200) {
                    onSuccess(response.data.products);
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useGetCategories = () => {
     return async (company_id: string, onSuccess: (data: any) => void, onError: () => void) => {
          try {
               const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/company/${company_id}`,
               );
               if (response.data.status) {
                    onSuccess(response.data.categories);
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useAddToCart = () => {
     return async (payload: AddToCard, onSuccess: () => void, onError: () => void) => {
          try {
               const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/product`,
                    {
                         ...payload,
                    },
               );
               console.log("response", response);
               if (response.data.status) {
                    onSuccess();
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useGetCart = () => {
     return async (userId: string, onSuccess: (data: any) => void, onError: () => void) => {
          try {
               const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/customer/${userId}`,
               );
               // console.log("get-response", response);
               if (response.data.status) {
                    onSuccess(response.data.order);
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useCreateCart = () => {
     return async (payload: CreateCard, onSuccess: () => void, onError: () => void) => {
          try {
               const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/create`,
                    {
                         ...payload,
                    },
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

export const useRemoveProductFromCart = () => {
     return async (orderLineId: number, onSuccess: () => void, onError: () => void) => {
          try {
               const response = await axios.delete(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/product/${orderLineId}`,
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

export const useUpdateProductQtyCart = () => {
     return async (
          orderLineId: number,
          qty: number,
          onSuccess: () => void,
          onError: () => void,
     ) => {
          try {
               const response = await axios.put(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/product/qty/${orderLineId}`,
                    { qty },
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

export const useChangeOrderStatus = () => {
     return async (orderId: number, status: string, onSuccess: () => void, onError: () => void) => {
          try {
               const response = await axios.put(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/status`,
                    { newStatus: status, orderId: orderId },
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
