"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleMapComponent from "@/app/components/GoogleMap";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ContactUsService } from "@/api/contact-us.api";
import { IcontactUsReq } from "./contact.types";
import { schema } from "./schema";
import { getSubDomain } from "@/utils/helper";
import { AppContext } from "@/appProvider";

export default function ContactUs() {
     const contactUsApiService = new ContactUsService();
     const currentPage = "contact_us";

     const { site } = useContext(AppContext);

     const pageData = site?.theme?.pages?.find((page: { name: any }) => page.name === currentPage);
     const minifiedData = pageData?.sections[0]?.component.props.static;
     console.log("minifoed", minifiedData);

     const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
     } = useForm({
          resolver: yupResolver(schema),
     });

     const mutation = useMutation({
          mutationFn: (payload: IcontactUsReq) => {
               return contactUsApiService.sendContactUsMessage(payload);
          },
          onSuccess() {
               toast.success("Message sent successfully");
          },
          onError(error) {
               toast.error("An Error occured while trying to send message");
          },
     });

     const onSubmit = async (data: IcontactUsReq) => {
          console.log({ data });
          try {
               mutation.mutate(data);
          } catch (err: any) {
               toast.error(err.data.message);
          }
     };

     const img1 =
          "https://images.unsplash.com/photo-1689481172416-dae28c4a08b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=822&q=80";
          
     return (
          <main className="main">
               <GoogleMapComponent></GoogleMapComponent>
               <div className="container">
                    <div className="row pt-12">
                         <div className="col-md-6">
                              <h2 className="ls-n-10 tw-mb-1 tw-pb-2">
                                   <strong>Contact Us</strong>
                              </h2>

                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <input
                                        type="text"
                                        id="domain"
                                        className="hidden"
                                        value={getSubDomain(window.location.host) || ""}
                                        {...register("domain")}
                                        name="domain"
                                   />
                                   <div className="row">
                                        <div className="col-md-6">
                                             <div className="form-group required-field">
                                                  <label htmlFor="fullName">Your Full Name</label>
                                                  <input
                                                       type="text"
                                                       className="form-control"
                                                       id="fullName"
                                                       {...register("fullName")}
                                                       name="fullName"
                                                  />
                                                  <p className="tw-text-red-500 tw-text-base">
                                                       {errors.fullName?.message}
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="col-md-6">
                                             <div className="form-group required-field">
                                                  <label htmlFor="email">Your email address</label>
                                                  <input
                                                       type="email"
                                                       {...register("email")}
                                                       className="form-control"
                                                       id="email"
                                                       name="email"
                                                  />
                                                  <p className="tw-text-red-500 tw-text-base">
                                                       {errors.email?.message}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                             type="text"
                                             {...register("subject")}
                                             className="form-control"
                                             id="subject"
                                             name="subject"
                                        />
                                        <p className="tw-text-red-500 tw-text-base">
                                             {errors.subject?.message}
                                        </p>
                                   </div>

                                   <div className="form-group tw-mb-0">
                                        <label htmlFor="content">Your Message</label>
                                        <textarea
                                             cols={30}
                                             rows={1}
                                             {...register("content")}
                                             id="content"
                                             className="form-control"
                                             name="content"
                                        ></textarea>
                                        <p className="tw-text-red-500 tw-text-base">
                                             {errors.content?.message}
                                        </p>
                                   </div>

                                   <button
                                        type="submit"
                                        className="bg-gray-800 text-white px-4 py-2 w-full mt-4 rounded-md"
                                   >
                                        SEND MESSAGE
                                   </button>
                              </form>
                         </div>

                         <div className="col-md-6">
                              <h2 className="contact-title">
                                   <strong>Get in touch</strong>
                              </h2>
                              <p>{minifiedData?.getInTouch}</p>

                              <hr className="tw-mt-3 tw-mb-0" />

                              <div className="contact-info tw-mb-2">
                                   <h2 className="contact-title">
                                        <strong>The Office</strong>
                                   </h2>

                                   <div className="porto-sicon-box d-flex align-items-center">
                                        <div className="porto-icon">
                                             <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <h3 className="porto-sicon-title">
                                             <strong>Address:</strong> 1234 Street Name, City Name,
                                             United States
                                        </h3>
                                   </div>
                                   <div className="porto-sicon-box  d-flex align-items-center">
                                        <div className="porto-icon">
                                             <i className="fa fa-phone"></i>
                                        </div>
                                        <h3 className="porto-sicon-title">
                                             <strong>Phone:</strong> (123) 456-7890
                                        </h3>
                                   </div>
                                   <div className="porto-sicon-box  d-flex align-items-center">
                                        <div className="porto-icon">
                                             <i className="fa fa-envelope"></i>
                                        </div>
                                        <h3 className="porto-sicon-title">
                                             <strong>Email:</strong> mail@example.com
                                        </h3>
                                   </div>
                              </div>

                              <hr className="tw-mt-1 tw-mb-0" />

                              <div className="contact-time">
                                   <h2 className="contact-title">
                                        <strong>Business Hours</strong>
                                   </h2>

                                   <div className="porto-sicon-box d-flex align-items-center">
                                        <div className="porto-icon">
                                             <i className="far fa-clock"></i>
                                        </div>
                                        <h3 className="porto-sicon-title">
                                             Monday - Friday 9am to 5pm
                                        </h3>
                                   </div>

                                   <div className="porto-sicon-box  d-flex align-items-center">
                                        <div className="porto-icon">
                                             <i className="far fa-clock"></i>
                                        </div>

                                        <h3 className="porto-sicon-title">Saturday - 9am to 2pm</h3>
                                   </div>

                                   <div className="porto-sicon-box d-flex align-items-center">
                                        <div className="porto-icon">
                                             <i className="far fa-clock"></i>
                                        </div>
                                        <h3 className="porto-sicon-title">Sunday - Closed</h3>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </main>
     );
}
