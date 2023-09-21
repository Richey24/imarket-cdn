import React from "react";
import { ToastContainer, toast } from "react-toastify";
export const SubcribeEmail = () => {
    const notify = () =>
    toast.success("Submitted successfully!", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
    });
     return (
          <div>
               {" "}
               <form action="#" className="mb-0">
                    <div className="footer-submit-wrapper d-flex">
                         <input
                              type="email"
                              className="form-control mb-0"
                              placeholder="Enter your Email address..."
                         />
                         <button type="button" className="btn btn-md btn-dark" onClick={notify}>
                              Subscribe
                         </button>
                         {/* <ToastContainer /> */}
                    </div>
               </form>
          </div>
     );
};
