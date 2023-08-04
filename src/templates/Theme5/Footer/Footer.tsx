import Image from "next/image";
import LogoFooter from "../../../assets/images/logo-footer.png";
import logo from "../../../assets/images/logo.png";
import VisaPayment from "../../../assets/images/demoes/demo5/payments.png";

const Footer = () => {
     return (
          <footer style={{ backgroundColor: "#F6F7F9", paddingTop: "40px" }} className="footer">
               <div className="footer-middle">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3 col-md-4 mb-2 mb-md-0">
                                   <div className="widget widget-contact-info">
                                        <h4 style={{ color: "black" }} className="widget-title">Contact Info</h4>
                                        <ul className="contact-info">
                                             <li>
                                                  <span style={{ color: "black" }} className="contact-info-label">Address:</span>1234 Street Name, City, England
                                             </li>
                                             <li>
                                                  <span style={{ color: "black" }} className="contact-info-label">Phone:</span><a href="tel:">(123) 456-7890</a>
                                             </li>
                                             <li>
                                                  <span style={{ color: "black" }} className="contact-info-label">Email:</span> <a
                                                       href="mailto:mail@example.com">mail@example.com</a>
                                             </li>
                                             <li>
                                                  <span style={{ color: "black" }} className="contact-info-label">Working Days/Hours:</span>
                                                  Mon - Sun / 9:00AM - 8:00PM
                                             </li>
                                        </ul>
                                        <div className="social-icons">
                                             <a style={{ color: "black", backgroundColor: "white", border: "none" }} href="#" className="social-icon social-facebook icon-facebook" target="_blank"
                                                  title="Facebook"></a>
                                             <a style={{ color: "black", backgroundColor: "white", border: "none" }} href="#" className="social-icon social-twitter icon-twitter" target="_blank"
                                                  title="Twitter"></a>
                                             <a style={{ color: "black", backgroundColor: "white", border: "none" }} href="#" className="social-icon social-instagram icon-instagram" target="_blank"
                                                  title="Instagram"></a>
                                        </div>
                                   </div>
                              </div>

                              <div className="col-lg-9 col-md-8">
                                   <div className="widget widget-newsletter">
                                        <h4 style={{ color: "black" }} className="widget-title m-b-1 pb-2">Subscribe newsletter</h4>
                                        <div className="row">
                                             <div className="col-lg-6">
                                                  <p className="pt-2 mb-lg-0">Get all the latest information on Events, Sales and
                                                       Offers. Sign up for newsletter today.</p>
                                             </div>

                                             <div className="col-lg-6">
                                                  <form action="#" className="d-flex mb-0 w-100">
                                                       <input type="email" className="form-control mb-0" placeholder="Email Address"
                                                            required />

                                                       <input style={{ backgroundColor: "#2385DD" }} type="submit" className="btn btn-primary shadow-none ls-10"
                                                            value="Subscribe" />
                                                  </form>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="row pt-3">
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3 style={{ color: "black" }} className="widget-title">Account</h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li><a href="dashboard.html">Dashboard</a></li>
                                                            <li><a href="#">Cart</a></li>
                                                            <li><a href="#">Checkout</a></li>
                                                            <li><a href="#">Order tracking</a></li>
                                                            <li><a href="#">Order history</a></li>
                                                            <li><a href="#">Wishlist</a></li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                             <div className="widget">
                                                  <h3 style={{ color: "black" }} className="widget-title">About</h3>
                                                  <div className="widget-content">
                                                       <ul>
                                                            <li><a href="about.html">About us</a></li>
                                                            <li><a href="#">Contact us</a></li>
                                                            <li><a href="#">Shipping & Delivery</a></li>
                                                            <li><a href="#">Privacy</a></li>
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
                         <p className="footer-copyright py-3 pr-4 mb-0 ls-n-10">© Dreamtechlabs 2023. All Rights Reserved</p>

                         {/* <Image src={VisaPayment} alt="payment methods"
                              className="footer-payments py-3" width={200} height={200} /> */}
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
