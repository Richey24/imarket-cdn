import Image from "next/image";
import Link from "next/link";

function SendMessage() {
     return (
          <section className="call-section tw-bg-[#212529]">
               <div className="container">
                    <div className="row align-items-center">
                         <div className="col-lg-7">
                              <h4 className="text-white text-uppercase">
                                   looking for help to find auto parts?
                              </h4>
                              <h2 className="text-white">
                                   Best Auto Parts Downtown Los Angeles CA
                              </h2>
                              <h3>Call Us or Drop Us a Message Through Our Contact Form</h3>
                         </div>
                         <div className="col-lg-5 call-action">
                              <div className="d-inline-flex align-items-center text-left divider">
                                   <i className="icon-phone-1 text-white mr-2"></i>
                                   <h6 className="pt-1 line-height-1 text-uppercase text-white">
                                        Call us now
                                        <a href="tel:#" className="d-block text-white ls-10 pt-2">
                                             +123 5678 890
                                        </a>
                                   </h6>
                              </div>
                              <a
                                   href="contact.html"
                                   className="btn btn-borders btn-rounded btn-outline-white ls-25"
                              >
                                   Send Us a Message
                              </a>
                         </div>
                    </div>
               </div>
               <svg
                    className="custom-svg-3"
                    data-animation-name="fadeIn"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 649 578"
               >
                    <path
                         fill="#f26100"
                         d="M-225.5,154.7l358.45,456.96c7.71,9.83,21.92,11.54,31.75,3.84l456.96-358.45c9.83-7.71,11.54-21.92,3.84-31.75
                        L267.05-231.66c-7.71-9.83-21.92-11.54-31.75-3.84l-456.96,358.45C-231.49,130.66-233.2,144.87-225.5,154.7z"
                    ></path>
                    <path
                         className=" appear-animate-svg"
                         data-animation-name="customLineAnim"
                         data-animation-delay="300"
                         data-animation-duration="5000"
                         fill="none"
                         stroke="#FFF"
                         stroke-width="1.5"
                         stroke-miterlimit="10"
                         d="M416-21l202.27,292.91c5.42,7.85,3.63,18.59-4.05,24.25L198,603"
                    ></path>
               </svg>
          </section>
     );
}

export default SendMessage;
