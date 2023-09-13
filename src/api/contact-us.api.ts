import { IcontactUsReq } from "@/app/(pages)/contact-us/contact.types";
import { HTTPBaseService } from "@/utils/api";

export class ContactUsService extends HTTPBaseService {
     private static classInstance?: ContactUsService;

     constructor(token?: string) {
          super(token);
     }

     public static getInstance(token: string) {
          if (!this.classInstance) {
               this.classInstance = new ContactUsService(token);
          }

          return this.classInstance;
     }

     public sendContactUsMessage = async (
          payload: IcontactUsReq,
     ): Promise<{ isError: boolean; message: string }> => {
          const { data } = await this.instance.post("/contact-us", payload);

          return data;
     };
}
