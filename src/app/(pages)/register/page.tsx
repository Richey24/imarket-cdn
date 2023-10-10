"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterRequest, useRegisterMutation } from "@/redux/services/auth";
import toast from "react-hot-toast";
import LoadingIcon from "@/app/components/Icons/LoadingIcon";
import { useRouter } from "next/navigation";
import { withAuthHidden } from "@/utils/middleware";
import SignUpForm from "@/app/components/auth/SignUpForm";
import Image from "next/image";

function Register() {
     const [domain, setDomain] = React.useState<string>("");

     React.useEffect(() => {
          if (typeof window !== "undefined") {
               const subDomain = window.location.host.split(".")[0];
               setDomain(subDomain);
          }
     }, []);

     return (
          <div className="tw-flex tw-w-screen tw-h-screen tw-items-center tw-justify-center tw-px-3">
               <div className="tw-w-full md:tw-w-[70%]  2xl:tw-w-3/4 tw-h-fit tw-shadow md:tw-shadow-lg tw-rounded-xl tw-overflow-hidden">
                    <div className="tw-flex tw-gap-4 tw-items-stretch tw-justify-between tw-w-full tw-h-full">
                         <div className="tw-hidden h-full md:tw-block md:tw-w-2/4 tw-p-10">
                              <div className="tw-bg-gray-200 tw-rounded-xl tw-text-gray-900 tw-w-full tw-h-full">
                                   <div className="tw-p-8">
                                        <div className="tw-text-2xl">subdomain</div>
                                        <div className="tw-font-bold tw-text-4xl 2xl:tw-text-6xl tw-mt-24">
                                             Shoping made convenient
                                        </div>
                                        <p className=" tw-mt-8 tw-text-xl md:tw-text-2xl tw-font-light">
                                             Discover the worlds best community of buyers and
                                             sellers around you.
                                        </p>
                                   </div>
                                   <div className="tw-relative tw-h-80 tw-w-80  tw-mt-24">
                                        {" "}
                                        <Image fill src="/bagging.png" alt="hand with bag" />
                                   </div>
                              </div>
                         </div>
                         <div className="tw-p-10 tw-w-full">
                              <div className="heading tw-mb-1">
                                   <h2 className="tw-text-5xl tw-font-bold">Register</h2>
                              </div>
                              <SignUpForm />
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default withAuthHidden(Register);
