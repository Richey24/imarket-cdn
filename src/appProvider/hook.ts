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
