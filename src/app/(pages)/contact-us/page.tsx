"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import GoogleMapComponent from "@/app/components/GoogleMap";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ContactUsService, } from "@/api/contact-us.api";
import { IcontactUsReq } from "./contact.types";
import { schema } from "./schema";
import { getSubDomain } from "@/utils/helper";
import { AppContext } from "@/appProvider";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Card } from "react-bootstrap";
import FaqAccordions from "./components/FaqAccordion";

function CustomToggle({ children, eventKey }) {
     const decoratedOnClick = useAccordionButton(eventKey);

     return (
          <button className="card-header collapsed" onClick={decoratedOnClick}>
               {children}
          </button>
     );
}

export default function ContactUs() {
     const contactUsApiService = new ContactUsService();
     const currentPage = "contact_us";

     const { site } = useContext(AppContext);
     const [activePanel, setActivePanel] = useState(null);

     const handlePanelClick = (panelId: string) => {
          if (activePanel === panelId) {
               // If the clicked panel is already active, close it.
               setActivePanel(null);
          } else {
               // Open the clicked panel.
               setActivePanel(panelId);
          }
     };

     console.log("===>", site);
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

     const address = "1600 Amphitheatre Parkway, Mountain View, CA";
     return (
          <main className="main">
               <GoogleMapComponent address={address} />
               <div className="container">
                    <div className="row py-5">
                         <div className="col-md-6">
                              <h4 className="ls-n-10 tw-mb-1 tw-pb-2">Contact Us</h4>

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
                              <h4 className="contact-title">Get in touch</h4>
                              <p>{minifiedData?.getInTouch}</p>

                              <hr className="tw-mt-3 tw-mb-0" />

                              <div className="my-4">
                                   <h4 className="contact-title">The Office</h4>

                                   <h5>
                                        <i className="fas fa-map-marker-alt mx-2"></i>{" "}
                                        {`${site.company.city} ${site.company.country}`}
                                   </h5>

                                   <h5>
                                        <i className="fa fa-mobile mx-2" aria-hidden="true"></i>{" "}
                                        Phone: {site.company.phone}
                                   </h5>

                                   <h5>
                                        <i className="fa fa-envelope mx-2"></i>Email:{" "}
                                        {minifiedData.contact_email}
                                   </h5>
                              </div>

                              <hr className="tw-mt-1 tw-mb-0" />

                              <div className="contact-time my-4">
                                   <h4 className="contact-title">Business Hours</h4>
                                   {minifiedData.businessHours.map((hour, index) => (
                                        <div key={index} className="">
                                             <h6 className="d-flex align-items-center">
                                                  <i className="far fa-clock mx-2"></i>
                                                  {hour}
                                             </h6>
                                        </div>
                                   ))}
                              </div>
                              <h4 className="mt-3 mb-1">Frequently Asked Questions</h4>
                              <FaqAccordions accordions={minifiedData.faq} />
                         </div>
                    </div>
               </div>
          </main>
     );
}
