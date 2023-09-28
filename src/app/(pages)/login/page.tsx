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
import LoadingIcon from "@/app/components/Icons/LoadingIcon";
import { withAuthHidden } from "@/utils/middleware";

function Login() {
     const [csrfToken, setCsrfToken] = React.useState<string | null>("");
     const [isLoading, setLoading] = React.useState<boolean | null>(false);
     const router = useRouter();

     // const [login, { isLoading }] = useLoginMutation();
     const searchParams = useSearchParams();
     const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

     const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
     } = useForm({
          resolver: yupResolver(schema),
     });
     const onSubmit = async (data: LoginRequest) => {
          setLoading(true);
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
                    setLoading(false);

                    toast.error("invalid email or password");
               }
          } catch (err: any) {
               setLoading(false);
               toast.error(err.data.message);
          }
     };

     React.useEffect(() => {
          getCsrfToken().then((csr) => {
               setCsrfToken(csr || null);
          });
     }, []);

     return (
          <div className="tw-flex tw-w-screen tw-h-screen tw-items-center tw-justify-center">
               <div className="tw-bg-gray-50 tw-p-6 tw-border tw-rounded-xl tw-w-full md:tw-w-1/2 xl:tw-w-1/3">
                    <div className="heading tw-mb-1">
                         <h2 className="title">Login</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="tw-mb-1">
                              <label htmlFor="login-email">
                                   Username or email address
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="email"
                                   {...register("email")}
                                   className={`${
                                        errors.email?.message && "tw-border-red-500"
                                   } form-input form-wide`}
                                   id="login-email"
                              />
                              <p className="tw-text-red-500 tw-text-base">
                                   {errors.email?.message}
                              </p>
                         </div>
                         <div className="tw-mb-1">
                              <label htmlFor="login-password">
                                   Password
                                   <span className="required">*</span>
                              </label>
                              <input
                                   type="password"
                                   {...register("password")}
                                   className={`${
                                        errors.email?.message && "tw-border-red-500"
                                   } form-input form-wide`}
                                   id="login-password"
                              />
                              <p className="tw-text-red-500 tw-text-base">
                                   {errors.password?.message}
                              </p>
                         </div>
                         <div className="form-footer">
                              <div className="custom-control custom-checkbox tw-mb-0">
                                   <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="lost-password"
                                   />
                                   <label
                                        className="custom-control-label tw-mb-0"
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
                              className="tw-flex tw-gap-5 tw-items-center tw-justify-center btn tw-bg-gray-800 tw-text-gray-50 hover:tw-bg-gray-700 btn-md w-100 tw-mt-4 tw-rounded-xl"
                         >
                              {isLoading && <LoadingIcon />}LOGIN
                         </button>
                    </form>
               </div>
          </div>
     );
}

export default withAuthHidden(Login);
