"use client";
import React from "react";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginRequest, useLoginMutation } from "@/redux/services/auth";
import toast from "react-hot-toast";
import { schema } from "./schema";
import axios from "axios";

export default function Login() {
     const [csrfToken, setCsrfToken] = React.useState<string | null>("");
     const router = useRouter();

     // const [login, { isLoading }] = useLoginMutation();
     const searchParams = useSearchParams();
     const callbackUrl = searchParams.get("callbackUrl") || "/profile";

     const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
     } = useForm({
          resolver: yupResolver(schema),
     });
     const onSubmit = async (data: LoginRequest) => {
          try {
               console.log(data);

               const res = await signIn("credentials", {
                    redirect: false,
                    email: data.email,
                    password: data.password,
                    callbackUrl,
               });
               //uahomorejoice@gmail.com
               //Rejoice11#

               console.log(res);
               if (!res?.error) {
                    router.push(callbackUrl);
               } else {
                    toast.error("invalid email or password");
               }
          } catch (err: any) {
               toast.error(err.data.message);
          }
     };
     React.useEffect(() => {
          getCsrfToken().then((csr) => {
               setCsrfToken(csr || null);
          });
     }, []);

     return (
          <div className="flex w-screen h-screen items-center justify-center">
               <div className="bg-gray-50 p-6 border rounded-xl w-full md:w-1/2 xl:w-1/3">
                    <div className="heading mb-1">
                         <h2 className="title">Login</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="mb-1">
                              <label htmlFor="login-email">
                                   Username or email address
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="email"
                                   {...register("email")}
                                   className={`${
                                        errors.email?.message && "border-red-500"
                                   } form-input form-wide`}
                                   id="login-email"
                              />
                              <p className="text-red-500 text-base">{errors.email?.message}</p>
                         </div>
                         <div className="mb-1">
                              <label htmlFor="login-password">
                                   Password
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="password"
                                   {...register("password")}
                                   className={`${
                                        errors.email?.message && "border-red-500"
                                   } form-input form-wide`}
                                   id="login-password"
                              />
                              <p className="text-red-500 text-base">{errors.password?.message}</p>
                         </div>
                         <div className="form-footer">
                              <div className="custom-control custom-checkbox mb-0">
                                   <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="lost-password"
                                   />
                                   <label
                                        className="custom-control-label mb-0"
                                        htmlFor="lost-password"
                                   >
                                        Remember me
                                   </label>
                              </div>

                              <a
                                   href="forgot-password.html"
                                   className="forget-password text-dark form-footer-right"
                              >
                                   Forgot Password?
                              </a>
                         </div>
                         <button
                              type="submit"
                              className="btn bg-gray-800 text-gray-50 hover:bg-gray-700 btn-md w-100 mt-4 rounded-md"
                         >
                              LOGIN
                         </button>
                    </form>
               </div>
          </div>
     );
}
