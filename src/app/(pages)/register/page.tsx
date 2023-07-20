"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

export default function Register() {
     const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
     } = useForm({
          resolver: yupResolver(schema),
     });

     const onSubmit = (data) => {
          console.log(data);
     };

     return (
          <div className="flex w-screen h-screen items-center justify-center">
               <div className="bg-gray-50 p-6 border rounded-xl w-full md:w-1/2 xl:w-1/3">
                    <div className="heading mb-1">
                         <h2 className="title">Register</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="mb-1">
                              <label htmlFor="register-email">
                                   Email address
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="email"
                                   {...register("email")}
                                   className={`${
                                        errors.email?.message && "border-red-500"
                                   } form-input form-wide`}
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
                                   {...register("password")}
                                   className={`${
                                        errors.email?.message && "border-red-500"
                                   } form-input form-wide`}
                                   id="register-password"
                              />
                              <p className="text-red-500 text-base">{errors.password?.message}</p>
                         </div>
                         <div className="form-footer mb-2">
                              <button
                                   type="submit"
                                   className="btn bg-gray-800 text-gray-50 hover:bg-gray-700 rounded-sm btn-md w-100"
                              >
                                   Register
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
}
