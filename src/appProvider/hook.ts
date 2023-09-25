import axios from "axios";

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
     return async (
          companyId: string,
          userId: string,
          items: any,
          onSuccess: () => void,
          onError: () => void,
     ) => {
          try {
               const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/carts`, {
                    companyId,
                    userId,
                    items,
               });
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
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/carts/${userId}`,
               );
               console.log("get-response", response);
               if (response.data.status) {
                    onSuccess(response.data.data);
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};

export const useUpdateCart = () => {
     return async (
          cartId: string,
          items: any,
          userId: string,
          onSuccess: () => void,
          onError: () => void,
     ) => {
          try {
               const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/carts/`, {
                    cartId,
               });
               console.log("get-response", response);
               if (response.data.status) {
                    onSuccess();
               }
          } catch (err) {
               onError();
               console.log(err);
          }
     };
};
