"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { RegisterRequest, useRegisterMutation } from "@/redux/services/auth";
import toast from "react-hot-toast";

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
          <div className="flex w-screen h-screen items-center justify-center">
               <div className="bg-gray-50 p-6 border rounded-xl w-full md:w-1/2 xl:w-1/3">
                    <div className="heading mb-1">
                         <h2 className="title">Register</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="mb-1">
                              <label htmlFor="firstname">
                                   First Name
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="text"
                                   {...formRegister("firstname")}
                                   className={`${
                                        errors.firstname?.message && "border-red-500"
                                   } form-input form-wide bg-white px-3 py-2`}
                                   id="firstname"
                              />
                              <p className="text-red-500 text-base">{errors.firstname?.message}</p>
                         </div>
                         <div className="mb-1">
                              <label htmlFor="lastname">
                                   Last Name
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="text"
                                   {...formRegister("lastname")}
                                   className={`${
                                        errors.lastname?.message && "border-red-500"
                                   } form-input bg-white form-wide px-3 py-2`}
                                   id="lastname"
                              />
                              <p className="text-red-500 text-base">{errors.lastname?.message}</p>
                         </div>
                         <div className="mb-1">
                              <label htmlFor="register-email">
                                   Email address
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="email"
                                   {...formRegister("email")}
                                   className={`${
                                        errors.email?.message && "border-red-500"
                                   } form-input bg-white form-wide px-3 py-2`}
                                   id="register-email"
                              />
                              <p className="text-red-500 text-base">{errors.email?.message}</p>
                         </div>
                         <div className="mb-1">
                              <label htmlFor="register-password">
                                   Password
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="password"
                                   {...formRegister("password")}
                                   className={`${
                                        errors.email?.message && "border-red-500"
                                   } form-input bg-white form-wide px-3 py-2`}
                                   id="register-password"
                              />
                              <p className="text-red-500 text-base">{errors.password?.message}</p>
                         </div>
                         <div className="mb-1">
                              <label htmlFor="confirmPassword">
                                   Confirm Password
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="password"
                                   {...formRegister("confirmPassword")}
                                   className={`${
                                        errors.confirmPassword?.message && "border-red-500"
                                   } form-input bg-white form-wide px-3 py-2`}
                                   id="confirmPassword"
                              />
                              <p className="text-red-500 text-base">
                                   {errors.confirmPassword?.message}
                              </p>
                         </div>
                         <button
                              type="submit"
                              className="btn bg-gray-800 text-gray-50 hover:bg-gray-700 btn-md w-100 mt-4 rounded-md"
                         >
                              Register
                         </button>
                    </form>
               </div>
          </div>
     );
}
