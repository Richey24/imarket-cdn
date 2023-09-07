import ContactInfo from "@/templates/shared/Footer/Contact-Info";
import CopyRight from "@/templates/shared/Footer/Copy-Right";

const Footer = (props: any): JSX.Element => {
     const { static: staticProps, company } = props.props;
     return (
          <footer className="footer bg-dark position-relative">
               <div className="footer-middle">
                    <div className="container position-static">
                         <div className="footer-ribbon bg-primary text-white ls-0">
                              Get in touch
                         </div>
                         {/* End .footer-ribbon */}
                         <div className="row">
                              <div className="col-lg-3 col-md-4">
                                   {/* contact-info */}
                                   <ContactInfo staticProps={staticProps} company={company} />
                                   {/* End .widget */}
                              </div>
                              {/* End .col-lg-3 */}
                              <div className="col-lg-9 col-md-8">
                                   <div className="widget widget-newsletter">
                                        <h4 className="widget-title">Subscribe newsletter</h4>
                                        <div className="row align-items-center">
                                             <div className="col-lg-6 col-md-12 mb-1">
                                                  <p className="mb-0">
                                                       Get all the latest information on Events,
                                                       Sales and Offers. Sign up for newsletter
                                                       today.
                                                  </p>
                                             </div>
                                             {/* End .col-lg-6 */}
                                             <div className="col-lg-6 col-md-12 mb-1">
                                                  <form action="#" className="d-flex mb-0 w-100">
                                                       <input
                                                            type="email"
                                                            className="form-control mb-0"
                                                            placeholder="Email Address"
                                                            required
                                                       />
                                                       <input
                                                            type="submit"
                                                            className="btn btn-primary shadow-none"
                                                            defaultValue="Subscribe"
                                                       />
                                                  </form>
                                             </div>
                                             {/* End .col-lg-6 */}
                                        </div>
                                        {/* End .row */}
                                   </div>
                                   {/* End .widget */}
                                   <div className="row">
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3 className="widget-title">Account</h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li>
                                                                 <a href="dashboard.html">
                                                                      Dashboard
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Cart</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Checkout</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Order tracking</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Order history</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Wishlist</a>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3 className="widget-title">About</h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li>
                                                                 <a href="about.html">About us</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Contact us</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">
                                                                      Shipping &amp; Delivery
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Privacy</a>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/* End .row */}
                              </div>
                              {/* End .col-lg-9 */}
                         </div>
                         {/* End .row */}
                    </div>
                    {/* End .container */}
               </div>
               {/* End .footer-middle */}
               <div className="container">
                    <CopyRight name={company.company_name} />
               </div>
               {/* End .footer-bottom */}
          </footer>
     );
};
export default Footer;
