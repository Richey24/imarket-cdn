import Link from "next/link";

const Footer = (props: any) => {
     const { static: staticProps, company } = props;
     return (
          <footer className="footer font2 mt-0">
               {/* <div className="footer-top"></div> */}
               <div className="footer-middle">
                    <div className="row">
                         <div className="col-sm-6 col-lg-3">
                              <div className="widget">
                                   <h3 className="widget-title">Customer Service</h3>
                                   <div className="widget-content">
                                        <ul className="links">
                                             {staticProps?.customerService?.map(
                                                  (link: any, idx: number) => (
                                                       <li key={idx}>
                                                            <Link href={link.link}>
                                                                 {link.name}
                                                            </Link>
                                                       </li>
                                                  ),
                                             )}
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
                                                  <a href="#">Shipping &amp; Delivery</a>
                                             </li>
                                             <li>
                                                  <a href="#">Privacy</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-6 col-lg-3">
                              <div className="widget">
                                   <h3 className="widget-title">More Information</h3>
                                   <div className="widget-content">
                                        <ul>
                                             <li>
                                                  <a href="#">Affiliates</a>
                                             </li>
                                             <li>
                                                  <a href="#">Refer a Friend</a>
                                             </li>
                                             <li>
                                                  <a href="#">Student Beans Offers</a>
                                             </li>
                                             <li>
                                                  <a href="#">Gift Vouchers</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-6 col-lg-3">
                              <div className="widget">
                                   <h3 className="widget-title">Follow Us</h3>
                                   <div className="widget-content">
                                        <div className="social-icons">
                                             <a
                                                  href="#"
                                                  className="social-icon social-facebook icon-facebook"
                                                  target="_blank"
                                                  title="Facebook"
                                             />
                                             <a
                                                  href="#"
                                                  className="social-icon social-twitter icon-twitter"
                                                  target="_blank"
                                                  title="Twitter"
                                             />
                                             <a
                                                  href="#"
                                                  className="social-icon social-instagram icon-instagram"
                                                  target="_blank"
                                                  title="Instagram"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="footer-bottom d-sm-flex align-items-center">
                    <div className="footer-left">
                         <span className="footer-copyright">
                              Porto eCommerce. © 2021. All Rights Reserved
                         </span>
                    </div>
                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                         <div className="payment-icons mr-0">
                              <span
                                   className="payment-icon visa"
                                   style={{
                                        backgroundImage:
                                             "url(assets/images/payments/payment-visa.svg)",
                                   }}
                              />
                              <span
                                   className="payment-icon paypal"
                                   style={{
                                        backgroundImage:
                                             "url(assets/images/payments/payment-paypal.svg)",
                                   }}
                              />
                              <span
                                   className="payment-icon stripe"
                                   style={{
                                        backgroundImage:
                                             "url(assets/images/payments/payment-stripe.png)",
                                   }}
                              />
                              <span
                                   className="payment-icon verisign"
                                   style={{
                                        backgroundImage:
                                             "url(assets/images/payments/payment-verisign.svg)",
                                   }}
                              />
                         </div>
                    </div>
               </div>
               {/* End .footer-bottom */}
          </footer>
     );
};
export default Footer;
