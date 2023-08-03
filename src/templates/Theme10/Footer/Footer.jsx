import Image from "next/image";
import { instagram } from "../Home/data";
import Slider from "react-slick";
import { useState } from "react";

const Footer = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 4,
         slidesToScroll: 1,
         beforeChange: (current, next) => setCurrentSlide(next),  
    };
     return (
          <footer>
               <div className="footer-top">
                    <div className="container-fluid">
                         <div
                              className="instagram-section mb-2 appear-animate"
                              data-animation-name="fadeInDownShorter"
                              data-animation-delay={200}
                         >
                              <h2 className="section-title ls-n-10 text-center text-uppercase m-b-1">
                                   From Our Instagram
                              </h2>
                              <h6 className="text-body text-center font-weight-normal m-b-4   ">
                                   @portoecommerce
                              </h6>
                              <Slider {...settings}>
                                   {instagram.map((data, index) => (
                                        <div  className="instagram">
                                             <Image src={data.image} alt="instagram" />
                                        </div>
                                   ))}
                              </Slider>
                         </div>
                    </div>
               </div>
               <div className="footer font2">
                    <div className="container">
                         <div className="footer-middle">
                              <div className="row">
                                   <div className="col-lg-2 d-flex align-items-center">
                                        <a href="demo20.html">
                                             <img
                                                  src="assets/images/your-logo.png"
                                                  alt="Logo"
                                                  className="logo mb-3"
                                             />
                                        </a>
                                   </div>
                                   <div className="links link-parts row">
                                        <ul className="link-part col-lg-6 col-md-12 mb-0">
                                             <li>
                                                  <a href="demo2-about.html">About us</a>
                                             </li>
                                             <li>
                                                  <a href="demo2-contact.html">Cart</a>
                                             </li>
                                             <li>
                                                  <a href="demo2-contact.html">Checkout</a>
                                             </li>
                                             <li>
                                                  <a href="demo2-contact.html">Contact us</a>
                                             </li>
                                             <li>
                                                  <a href="login.html">Dashboard</a>
                                             </li>
                                        </ul>
                                        <ul className="link-part col-lg-6 col-md-12">
                                             <li>
                                                  <a href="#">Order tracking</a>
                                             </li>
                                             <li>
                                                  <a href="#">Order history</a>
                                             </li>
                                             <li>
                                                  <a href="#">Privacy</a>
                                             </li>
                                             <li>
                                                  <a href="#">Shipping &amp; Delivery</a>
                                             </li>
                                             <li>
                                                  <a href="#">Wishlist</a>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="col-lg-5 col-xl-4 d-flex justify-content-lg-end align-items-end">
                                        <div className="footer-question mb-3">
                                             <h6 className="text-white m-b-1">QUESTIONS?</h6>
                                             <h3 className="m-b-1">
                                                  <a
                                                       href="tel:1-888-123-456"
                                                       className="text-white"
                                                  >
                                                       1-888-123-456
                                                  </a>
                                             </h3>
                                        </div>
                                        <div className="social-icons mb-3">
                                             <a
                                                  href="#"
                                                  className="social-icon social-facebook icon-facebook"
                                                  target="_blank"
                                             />
                                             <a
                                                  href="#"
                                                  className="social-icon social-twitter icon-twitter"
                                                  target="_blank"
                                             />
                                             <a
                                                  href="#"
                                                  className="social-icon social-instagram icon-instagram"
                                                  target="_blank"
                                             />
                                        </div>
                                        {/* End .social-icons */}
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
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
