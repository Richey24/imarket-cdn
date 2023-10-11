import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAddBillingAddress } from "@/appProvider/hooks/dashboard/addresses";
import { useSession } from "next-auth/react";
import LoadingIcon from "../Icons/LoadingIcon";

export default function BillingAddress() {
     const [isLoading, setLoading] = useState<boolean | null>(false);
     const { data: userData } = useSession();

     const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
     } = useForm({
          resolver: yupResolver(schema),
     });
     const addBilling = useAddBillingAddress();

     const onSubmit = async (data: any) => {
          setLoading(true);
          try {
               addBilling(
                    { ...data, userId: (userData as any)?.user?.id },
                    () => {
                         setLoading(false);
                         reset();
                    },
                    () => {
                         setLoading(false);
                    },
               );
          } catch (err: any) {
               setLoading(false);
               toast.error(err.data.message);
          }
     };

     return (
          <div className="address account-content mt-0 pt-2">
               <h4 className="title">Billing address</h4>

               <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                         <div className="col-md-6">
                              <div className="form-group">
                                   <label>
                                        First name <span className="required">*</span>
                                   </label>
                                   <input
                                        type="text"
                                        {...register("firstname")}
                                        className={`${
                                             errors.firstname?.message && "tw-border-red-500"
                                        } form-control`}
                                        required
                                   />
                              </div>
                         </div>

                         <div className="col-md-6">
                              <div className="form-group">
                                   <label>
                                        Last name <span className="required">*</span>
                                   </label>
                                   <input
                                        type="text"
                                        {...register("lastname")}
                                        className={`${
                                             errors.lastname?.message && "tw-border-red-500"
                                        } form-control`}
                                        required
                                   />
                              </div>
                         </div>
                    </div>

                    <div className="form-group">
                         <label>Company </label>
                         <input
                              type="text"
                              {...register("company")}
                              className={`${
                                   errors.company?.message && "tw-border-red-500"
                              } form-control`}
                         />
                    </div>

                    <div className="select-custom">
                         <label>
                              Country / Region <span className="required">*</span>
                         </label>
                         <select
                              name="orderby"
                              {...register("country")}
                              className={`${
                                   errors.country?.message && "tw-border-red-500"
                              } form-control`}
                         >
                              <option value="" selected={true}>
                                   British Indian Ocean Territory
                              </option>
                              <option value="1">Brunei</option>
                              <option value="2">Bulgaria</option>
                              <option value="3">Burkina Faso</option>
                              <option value="4">Burundi</option>
                              <option value="5">Cameroon</option>
                         </select>
                    </div>

                    <div className="form-group">
                         <label>
                              Street address <span className="required">*</span>
                         </label>
                         <input
                              type="text"
                              {...register("street")}
                              className={`${
                                   errors.street?.message && "tw-border-red-500"
                              } form-control`}
                              placeholder="House number and street name"
                              required
                         />
                         <input
                              type="text"
                              {...register("email")}
                              className={`${
                                   errors.email?.message && "tw-border-red-500"
                              } form-control`}
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              required
                         />
                    </div>

                    <div className="form-group">
                         <label>
                              Town / City <span className="required">*</span>
                         </label>
                         <input
                              type="text"
                              {...register("city")}
                              className={`${
                                   errors.city?.message && "tw-border-red-500"
                              } form-control`}
                              required
                         />
                    </div>

                    <div className="form-group">
                         <label>
                              State / Country <span className="required">*</span>
                         </label>
                         <input
                              type="text"
                              {...register("state")}
                              className={`${
                                   errors.state?.message && "tw-border-red-500"
                              } form-control`}
                              required
                         />
                    </div>

                    <div className="form-group">
                         <label>
                              Postcode / ZIP <span className="required">*</span>
                         </label>
                         <input
                              type="text"
                              {...register("zipcode")}
                              className={`${
                                   errors.zipcode?.message && "tw-border-red-500"
                              } form-control`}
                              required
                         />
                    </div>

                    <div className="form-group mb-3">
                         <label>
                              Phone <span className="required">*</span>
                         </label>
                         <input
                              type="number"
                              {...register("phone")}
                              className={`${
                                   errors.phone?.message && "tw-border-red-500"
                              } form-control`}
                              required
                         />
                    </div>

                    <div className="form-group mb-3">
                         <label>
                              Email address <span className="required">*</span>
                         </label>
                         <input
                              type="email"
                              {...register("email")}
                              className={`${
                                   errors.email?.message && "tw-border-red-500"
                              } form-control`}
                              placeholder="editor@gmail.com"
                              required
                         />
                    </div>

                    <div className="form-footer mb-0">
                         <div className="form-footer-right">
                              <button type="submit" className="btn btn-dark py-4">
                                   {isLoading ? <LoadingIcon /> : " ADD ADDRESS"}
                              </button>
                         </div>
                    </div>
               </form>
          </div>
     );
}
