import React from "react";
import Image from "next/image";
import GoogleMapComponent from "@/app/components/GoogleMap";

export default function ContactUs() {
     const img1 =
          "https://images.unsplash.com/photo-1689481172416-dae28c4a08b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=822&q=80";
     return (
          <main className="main">
               <GoogleMapComponent></GoogleMapComponent>
               <div className="container">
                    <div className="row pt-12">
                         <div className="col-md-6">
                              <h2 className="ls-n-10 mb-1 pb-2">
                                   <strong>Contact Us</strong>
                              </h2>

                              <form action="#">
                                   <div className="row">
                                        <div className="col-md-6">
                                             <div className="form-group required-field">
                                                  <label htmlFor="contact-name">Your name</label>
                                                  <input
                                                       type="text"
                                                       className="form-control"
                                                       id="contact-name"
                                                       name="contact-name"
                                                       required
                                                  />
                                             </div>
                                        </div>

                                        <div className="col-md-6">
                                             <div className="form-group required-field">
                                                  <label htmlFor="contact-email">
                                                       Your email address
                                                  </label>
                                                  <input
                                                       type="email"
                                                       className="form-control"
                                                       id="contact-email"
                                                       name="contact-email"
                                                       required
                                                  />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="form-group">
                                        <label htmlFor="contact-subject">Subject</label>
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="contact-subject"
                                             name="contact-subject"
                                        />
                                   </div>

                                   <div className="form-group mb-0">
                                        <label htmlFor="contact-message">Your Message</label>
                                        <textarea
                                             cols={30}
                                             rows={1}
                                             id="contact-message"
                                             className="form-control"
                                             name="contact-message"
                                             required
                                        ></textarea>
                                   </div>

                                   <div className="form-footer">
                                        <button type="submit" className="btn btn-primary">
                                             SEND MESSAGE
                                        </button>
                                   </div>
                              </form>
                         </div>

                         <div className="col-md-6">
                              <h2 className="contact-title">
                                   <strong>Get in touch</strong>
                              </h2>
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                   Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae
                                   velit congue iaculis vitae at risus. Lorem ipsum dolor sit amet,
                                   consectetur adipiscing elit.
                              </p>

                              <hr className="mt-3 mb-0" />

                              <div className="contact-info mb-2">
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

                              <hr className="mt-1 mb-0" />

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
