import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ContactUsService } from "@/api/contact-us.api";
import toast from "react-hot-toast";
 
export const SubcribeEmail = () => {
     const contactUsApiService = new ContactUsService();
     const [email, setEmail] = useState<string>("");
     const mutation = useMutation({
          mutationFn: (payload: { email: string }) => {
               return contactUsApiService.sendSubcribeEmail(payload);
          },
          onSuccess() {
               toast.success("Message sent successfully");
          },
          onError(error) {
               toast.error("An Error occured while trying to send message");
          },
     });
     const onSubmit = async () => {
          try {
               mutation.mutate({ email: email });
          } catch (err: any) {
               toast.error(err.data.message);
               console.log(err.data.message)
          }
          
     };
     const updateEmail = (e) => {
          setEmail(() => e.target.value);
     };
     return (
          <div>
               <form action="#" className="mb-0">
                    <div className="footer-submit-wrapper d-flex">
                         <input
                              type="email"
                              className="form-control mb-0"
                              placeholder="Enter your Email address..."
                              onChange={updateEmail}
                         />
                         <button type="button" className="btn btn-md btn-dark" onClick={onSubmit}>
                              Subscribe
                         </button>
                         {/* <ToastContainer /> */}
                    </div>
               </form>
          </div>
     );
};
