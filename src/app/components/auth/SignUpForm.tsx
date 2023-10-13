"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { RegisterRequest, useRegisterMutation } from "@/redux/services/auth";
import toast from "react-hot-toast";
import LoadingIcon from "@/app/components/Icons/LoadingIcon";

export default function SignUpForm() {
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
          if (typeof window !== "undefined") {
               const subDomain = window.location.host.split(".")[0];
               setDomain(subDomain);
          }
     }, []);
     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <div className="tw-mb-1 tw-relative float-label-input">
                    <input
                         type="text"
                         id="firstname"
                         {...formRegister("firstname")}
                         placeholder=" "
                         className={`${
                              errors.firstname?.message && "!tw-border-red-500"
                         } tw-w-full tw-bg-white focus:tw-outline-none focus:tw-shadow-outline tw-border tw-border-gray-300 tw-rounded-md tw-py-3 tw-px-3 tw-block tw-appearance-none tw-leading-normal focus:tw-border-blue-400`}
                    />
                    <label
                         htmlFor="firstname"
                         className="tw-absolute tw-top-3 tw-left-0 tw-text-gray-400 tw-pointer-events-none tw-tw-transition tw-duration-200 tw-ease-in-outbg-white tw-px-2 tw-text-grey-darker"
                    >
                         First Name*
                    </label>
                    <p className="tw-text-red-500 tw-text-lg">{errors.firstname?.message}</p>
               </div>
               <div className="tw-mb-1 tw-relative float-label-input">
                    <input
                         type="text"
                         id="lastname"
                         {...formRegister("lastname")}
                         placeholder=" "
                         className={`${
                              errors.lastname?.message && "!tw-border-red-500"
                         } tw-w-full tw-bg-white focus:tw-outline-none focus:tw-shadow-outline tw-border tw-border-gray-300 tw-rounded-md tw-py-3 tw-px-3 tw-block tw-appearance-none tw-leading-normal focus:tw-border-blue-400`}
                    />
                    <label
                         htmlFor="lastname"
                         className="tw-absolute tw-top-3 tw-left-0 tw-text-gray-400 tw-pointer-events-none tw-tw-transition tw-duration-200 tw-ease-in-outbg-white tw-px-2 tw-text-grey-darker"
                    >
                         Last Name
                    </label>
                    <p className="tw-text-red-500 tw-text-lg">{errors.lastname?.message}</p>
               </div>
               <div className="tw-mb-1 tw-relative float-label-input">
                    <input
                         type="text"
                         id="email"
                         {...formRegister("email")}
                         placeholder=" "
                         className={`${
                              errors.email?.message && "!tw-border-red-500"
                         } tw-w-full tw-bg-white focus:tw-outline-none focus:tw-shadow-outline tw-border tw-border-gray-300 tw-rounded-md tw-py-3 tw-px-3 tw-block tw-appearance-none tw-leading-normal focus:tw-border-blue-400`}
                    />
                    <label
                         htmlFor="email"
                         className="tw-absolute tw-top-3 tw-left-0 tw-text-gray-400 tw-pointer-events-none tw-tw-transition tw-duration-200 tw-ease-in-outbg-white tw-px-2 tw-text-grey-darker"
                    >
                         Email address
                    </label>
                    <p className="tw-text-red-500 tw-text-lg">{errors.email?.message}</p>
               </div>
               <div className="tw-mb-1 tw-relative float-label-input">
                    <input
                         type="text"
                         id="password"
                         {...formRegister("password")}
                         placeholder=" "
                         className={`${
                              errors.password?.message && "!tw-border-red-500"
                         } tw-w-full tw-bg-white focus:tw-outline-none focus:tw-shadow-outline tw-border tw-border-gray-300 tw-rounded-md tw-py-3 tw-px-3 tw-block tw-appearance-none tw-leading-normal focus:tw-border-blue-400`}
                    />
                    <label
                         htmlFor="password"
                         className="tw-absolute tw-top-3 tw-left-0 tw-text-gray-400 tw-pointer-events-none tw-tw-transition tw-duration-200 tw-ease-in-outbg-white tw-px-2 tw-text-grey-darker"
                    >
                         Password
                    </label>
                    <p className="tw-text-red-500 tw-text-lg">{errors.password?.message}</p>
               </div>
               <div className="tw-mb-1 tw-relative float-label-input">
                    <input
                         type="password"
                         id="confirmPassword"
                         {...formRegister("confirmPassword")}
                         placeholder=" "
                         className={`${
                              errors.confirmPassword?.message && "!tw-border-red-500"
                         } tw-w-full tw-bg-white focus:tw-outline-none focus:tw-shadow-outline tw-border tw-border-gray-300 tw-rounded-md tw-py-3 tw-px-3 tw-block tw-appearance-none tw-leading-normal focus:tw-border-blue-400`}
                    />
                    <label
                         htmlFor="confirmPassword"
                         className="tw-absolute tw-top-3 tw-left-0 tw-text-gray-400 tw-pointer-events-none tw-tw-transition tw-duration-200 tw-ease-in-outbg-white tw-px-2 tw-text-grey-darker"
                    >
                         Confirm Password
                    </label>
                    <p className="tw-text-red-500 tw-text-lg">{errors.confirmPassword?.message}</p>
               </div>

               <p>By signing up you agree with our terms and condition</p>
               <button
                    type="submit"
                    className="tw-flex !tw-rounded-xl tw-gap-5 tw-items-center tw-justify-center tw-py-3 tw-px-6 tw-text-xl bg-primary tw-text-gray-50   w-100 tw-mt-4  tw-overflow-hidden"
               >
                    {isLoading && <LoadingIcon />}Register
               </button>
          </form>
     );
}
