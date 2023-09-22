"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { RegisterRequest, useRegisterMutation } from "@/redux/services/auth";
import toast from "react-hot-toast";
import LoadingIcon from "@/app/components/Icons/LoadingIcon";

export default function Register() {
     const [register, { isLoading }] = useRegisterMutation();
     const [domain, setDomain] = React.useState<string>("");
     const {
          register: formRegister,
          handleSubmit,
          formState: { errors },
          reset,
     } = useForm({
          resolver: yupResolver(schema),
     });

     const onSubmit = async (data: RegisterRequest) => {
          try {
               await register({ ...data, domain: domain }).unwrap();
               toast.success("Signup successful");
          } catch (err: any) {
               toast.error(err.data.message);
          }
     };

     React.useEffect(() => {
          const subDomain = window.location.host.split(".")[0];
          setDomain(subDomain);
     }, []);

     return (
          <div className="tw-flex tw-w-screen tw-h-screen tw-items-center tw-justify-center">
               <div className="tw-bg-gray-50 tw-p-6 tw-border tw-rounded-xl tw-w-full md:tw-w-1/2 xl:tw-w-1/3">
                    <div className="heading tw-mb-1">
                         <h2 className="title">Register</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="tw-mb-1">
                              <label htmlFor="firstname">
                                   First Name
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="text"
                                   {...formRegister("firstname")}
                                   className={`${
                                        errors.firstname?.message && "tw-border-red-500"
                                   } form-input form-wide tw-bg-white tw-px-3 tw-py-2`}
                                   id="firstname"
                              />
                              <p className="tw-text-red-500 tw-text-base">
                                   {errors.firstname?.message}
                              </p>
                         </div>
                         <div className="tw-mb-1">
                              <label htmlFor="lastname">
                                   Last Name
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="text"
                                   {...formRegister("lastname")}
                                   className={`${
                                        errors.lastname?.message && "tw-border-red-500"
                                   } form-input tw-bg-white form-wide tw-px-3 tw-py-2`}
                                   id="lastname"
                              />
                              <p className="text-red-500 text-base">{errors.lastname?.message}</p>
                         </div>
                         <div className="tw-mb-1">
                              <label htmlFor="register-email">
                                   Email address
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="email"
                                   {...formRegister("email")}
                                   className={`${
                                        errors.email?.message && "border-red-500"
                                   } form-input tw-bg-white form-wide tw-px-3 tw-py-2`}
                                   id="register-email"
                              />
                              <p className="tw-text-red-500 tw-text-base">
                                   {errors.email?.message}
                              </p>
                         </div>
                         <div className="tw-mb-1">
                              <label htmlFor="register-password">
                                   Password
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="password"
                                   {...formRegister("password")}
                                   className={`${
                                        errors.email?.message && "tw-border-red-500"
                                   } form-input tw-bg-white form-wide tw-px-3 tw-py-2`}
                                   id="register-password"
                              />
                              <p className="tw-text-red-500 tw-text-base">
                                   {errors.password?.message}
                              </p>
                         </div>
                         <div className="tw-mb-1">
                              <label htmlFor="confirmPassword">
                                   Confirm Password
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="password"
                                   {...formRegister("confirmPassword")}
                                   className={`${
                                        errors.confirmPassword?.message && "tw-border-red-500"
                                   } form-input tw-bg-white form-wide tw-px-3 tw-py-2`}
                                   id="confirmPassword"
                              />
                              <p className="tw-text-red-500 tw-text-base">
                                   {errors.confirmPassword?.message}
                              </p>
                         </div>

                         <button
                              type="submit"
                              className="tw-flex tw-gap-5 tw-items-center tw-justify-center btn tw-bg-gray-800 tw-text-gray-50 hover:tw-bg-gray-700 btn-md w-100 tw-mt-4 tw-rounded-2xl tw-overflow-hidden"
                         >
                              {isLoading && <LoadingIcon />}Register
                         </button>
                    </form>
               </div>
          </div>
     );
}
