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
