import Image from "next/image";
import { instagram, payments } from "../Home/data";
import Slider from "react-slick";
import { useState } from "react";
import logo from "../../../assets/images/your-logo.png";
const Footer = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 7,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <footer>
               <div className="footer-top" style={{ paddingRight: "50px", paddingLeft: "50px" }}>
                    <div className="container-fluid">
                         <div
                              className="instagram-section mb-2 appear-animate"
                              data-animation-name="fadeInDownShorter"
                              data-animation-delay={200}
                         >
                              <h2
                                   className="section-title ls-n-10 text-center text-uppercase m-b-1"
                                   style={{ fontWeight: "bold", marginTop: "10px" }}
                              >
                                   From Our Instagram
                              </h2>
                              <h6 className="text-body text-center font-weight-normal m-b-4   ">
                                   @portoecommerce
                              </h6>

                              <Slider {...settings}>
                                   {instagram.map((data, index) => (
                                        <Image
                                             src={data.image}
                                             alt="instagram"
                                             width={100}
                                             height={100}
                                        />
                                   ))}
                              </Slider>
                         </div>
                    </div>
               </div>
               <div className="footer font2" style={{ paddingRight: "50px", paddingLeft: "50px" }}>
                    <div className="container">
                         <div className="footer-middle">
                              <div className="row">
                                   <div className="col-lg-2 d-flex align-items-center">
                                        <a href="demo20.html">
                                             <img src={logo.src} alt="Logo" className="logo mb-3" />
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
                                   </div>
                              </div>
                         </div>
                         <div className="footer-bottom d-sm-flex align-items-center">
                              <div className="footer-left">
                                   <span className="footer-copyright" style={{ color: "#eee" }}>
                                        Porto eCommerce. © 2021. All Rights Reserved
                                   </span>
                              </div>
                              <div className="footer-right ml-auto mt-1 mt-sm-0">
                                   <div className="payment-icons mr-0">
                                        {payments.map((pay) => (
                                             <span
                                                  className="payment-icon visa"
                                                  style={{
                                                       backgroundImage: `url(${pay.image})`,
                                                  }}
                                             />
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
