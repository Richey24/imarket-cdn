import Link from "next/link";
import { socialMap } from "@/utils/helper";

const Footer = (props: any): JSX.Element => {
     const { static: staticProps, company } = props.props;
     console.log({ t5: props });
     return (
          <footer style={{ backgroundColor: "#F6F7F9", paddingTop: "40px" }} className="footer">
               <div className="footer-middle">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3 col-md-4 mb-2 mb-md-0">
                                   <div className="widget widget-contact-info">
                                        <h4 style={{ color: "black" }} className="widget-title">
                                             Contact Info
                                        </h4>
                                        <ul className="contact-info">
                                             <li>
                                                  <span
                                                       style={{ color: "black" }}
                                                       className="contact-info-label"
                                                  >
                                                       Address:
                                                  </span>
                                                  {company?.city + " " + company?.country}
                                             </li>
                                             <li>
                                                  <span
                                                       style={{ color: "black" }}
                                                       className="contact-info-label"
                                                  >
                                                       Phone:
                                                  </span>
                                                  <Link href="tel:">(123) 456-7890</Link>
                                             </li>
                                             <li>
                                                  <span
                                                       style={{ color: "black" }}
                                                       className="contact-info-label"
                                                  >
                                                       Email:
                                                  </span>{" "}
                                                  <Link href={`mailto:${company?.user_id?.email}`}>
                                                       {company?.user_id?.email}
                                                  </Link>
                                             </li>
                                             <li>
                                                  <span
                                                       style={{ color: "black" }}
                                                       className="contact-info-label"
                                                  >
                                                       Working Days/Hours:
                                                  </span>
                                                  Mon - Sun / 9:00AM - 8:00PM
                                             </li>
                                        </ul>

                                        <div className="social-icons">
                                             {company.site.header.component.props.static.socials.map(
                                                  (social) => {
                                                       return (
                                                            <Link
                                                                 style={{
                                                                      color: "black",
                                                                      backgroundColor: "white",
                                                                      border: "none",
                                                                 }}
                                                                 href={social.link}
                                                                 className={`social-icon ml-0${
                                                                      socialMap[social.name]
                                                                 }`}
                                                                 target="_blank"
                                                                 title={social.name}
                                                            ></Link>
                                                       );
                                                  },
                                             )}
                                        </div>
                                   </div>
                              </div>

                              <div className="col-lg-9 col-md-8">
                                   <div className="widget widget-newsletter">
                                        <h4
                                             style={{ color: "black" }}
                                             className="widget-title m-b-1 pb-2"
                                        >
                                             Subscribe newsletter
                                        </h4>
                                        <div className="row">
                                             <div className="col-lg-6">
                                                  <p className="pt-2 mb-lg-0">
                                                       Get all the latest information on Events,
                                                       Sales and Offers. Sign up for newsletter
                                                       today.
                                                  </p>
                                             </div>

                                             <div className="col-lg-6">
                                                  <form action="#" className="d-flex mb-0 w-100">
                                                       <input
                                                            type="email"
                                                            className="form-control mb-0"
                                                            placeholder="Email Address"
                                                            required
                                                       />

                                                       <input
                                                            style={{ backgroundColor: "#2385DD" }}
                                                            type="submit"
                                                            className="btn btn-primary shadow-none ls-10"
                                                            value="Subscribe"
                                                       />
                                                  </form>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="row pt-3">
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3
                                                       style={{ color: "black" }}
                                                       className="widget-title"
                                                  >
                                                       Account
                                                  </h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li>
                                                                 <Link href="/dashboard">
                                                                      Dashboard
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                 <Link href="/cart">Cart</Link>
                                                            </li>

                                                            <li>
                                                                 <Link href="/order">
                                                                      Order history
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                 <Link href="/wishlist">
                                                                      Wishlist
                                                                 </Link>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3
                                                       style={{ color: "black" }}
                                                       className="widget-title"
                                                  >
                                                       About
                                                  </h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li>
                                                                 <Link href="/about">About us</Link>
                                                            </li>
                                                            <li>
                                                                 <Link href="/contact-us">
                                                                      Contact us
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                 <Link href="#">
                                                                      Shipping & Delivery
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                 <Link href="/privacy">
                                                                      Privacy
                                                                 </Link>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div style={{ border: "none" }} className="footer-bottom">
                    <div className="container d-flex justify-content-between align-items-center flex-wrap">
                         <p className="footer-copyright py-3 pr-4 mb-0 ls-n-10">
                              © Dreamtechlabs 2023. All Rights Reserved
                         </p>

                         {/* <Image src={VisaPayment} alt="payment methods"
                              className="footer-payments py-3" width={200} height={200} /> */}
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
