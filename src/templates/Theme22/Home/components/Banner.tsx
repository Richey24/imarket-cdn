import Carousel from "react-bootstrap/Carousel";
import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import { featuredProductSliders } from "../data";

export const Banner = ({ sliders }) => {
     return (
          <section className="intro-section" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
               <div className="container">
                    <div className="row">
                         <div className="col-lg-9 mb-2">
                              <div className="home-slider slide-animate   owl-theme custom-nav">
                                   <Carousel>
                                        {" "}
                                        {sliders.map((data, index) => (
                                             <Carousel.Item>
                                                  <div className="home-slide home-slide-1 banner">
                                                       <Image
                                                            className="slide-bg"
                                                            src={data.imageUrl}
                                                            alt="slider image"
                                                            width={772}
                                                            height={434}
                                                       />

                                                       <div
                                                            className={`banner-layer banner-layer-middle ${
                                                                 index === 0
                                                                      ? "banner-layer-right"
                                                                      : "banner-layer-left"
                                                            }`}
                                                       >
                                                            <div
                                                                 className="appear-animate"
                                                                 data-animation-name="rotateInUpLeft"
                                                            >
                                                                 <h2 className="font1 ls-10 text-uppercase text-right m-b-4  w-50 d-flex align-items-start justify-content-start flex-wrap">
                                                                      {data.title}
                                                                 </h2>
                                                                 <div className="coupon-sale-text">
                                                                      <h4 className="m-b-2 font1 d-block text-white bg-dark skew-box">
                                                                           {data.h4}
                                                                      </h4>
                                                                      <h5 className="mb-0 font1 d-inline-block bg-dark skew-box">
                                                                           {data.text}
                                                                      </h5>
                                                                 </div>
                                                                 <a
                                                                      href="demo22-shop.html"
                                                                      className="btn btn-light btn-lg ls-10"
                                                                      style={{
                                                                           color: "#f14705",
                                                                           fontWeight: "bold",
                                                                      }}
                                                                 >
                                                                      View All Now
                                                                 </a>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </Carousel.Item>
                                        ))}
                                   </Carousel>
                              </div>
                         </div>
                         <div className="col-lg-3 mb-2">
                              <div className="featured-products-slider  owl-theme dot-inside dots-small">
                                   <Carousel>
                                        {featuredProductSliders.map((data) => (
                                             <Carousel.Item>
                                                  {" "}
                                                  <div className="product-default count-down">
                                                       <h3 className="product-name">Flash Deals</h3>
                                                       <figure>
                                                            <a href="demo22-product.html">
                                                                 <Image
                                                                      src={data.sliderImg}
                                                                      width={217}
                                                                      height={217}
                                                                      alt="product"
                                                                 />
                                                            </a>
                                                            <div className="label-group">
                                                                 <span className="product-label label-sale">
                                                                      - 34%
                                                                 </span>
                                                            </div>
                                                            <div className="product-countdown-container">
                                                                 <span className="product-countdown-title">
                                                                      {data.countDownTitle}
                                                                 </span>
                                                                 <div
                                                                      className="product-countdown countdown-compact"
                                                                      data-until="2021, 10, 5"
                                                                      data-compact="true"
                                                                 ></div>
                                                                 {/* End .product-countdown */}
                                                            </div>
                                                            {/* End .product-countdown-container */}
                                                       </figure>
                                                       <div className="product-details">
                                                            <h3 className="product-title">
                                                                 <a href="demo22-product.html">
                                                                      {data.title}
                                                                 </a>
                                                            </h3>
                                                            {/* <div class="ratings-container">
                      <div class="product-ratings">
                          <span class="ratings" style="width:100%"></span>
                          <span class="tooltiptext tooltip-top"></span>
                      </div>
                  </div> */}
                                                            {/* End .product-container */}
                                                            <div className="price-box">
                                                                 {data.oldPrice && (
                                                                      <span className="old-price">
                                                                           ${data.oldPrice}
                                                                      </span>
                                                                 )}
                                                                 <span className="product-price">
                                                                      ${data.productPrice}
                                                                 </span>
                                                            </div>
                                                            {/* End .price-box */}
                                                       </div>
                                                       {/* End .product-details */}
                                                  </div>
                                             </Carousel.Item>
                                        ))}
                                   </Carousel>
                              </div>
                         </div>
                    </div>
               </div>

               {/* <div className="cat-section container position-absolute">
                    <div style={{ display: "flex", columnGap: "20px" }}>
                         <a href="demo12-shop.html" className="btn btn-dark btn-lg">
                              ACCESSORIES
                         </a>
                         <a href="demo12-shop.html" className="btn btn-dark btn-lg">
                              CAPS
                         </a>
                         <a href="demo12-shop.html" className="btn btn-dark btn-lg">
                              DRESS
                         </a>
                         <a href="demo12-shop.html" className="btn btn-dark btn-lg">
                              ELECTRONICS
                         </a>
                         <a href="demo12-shop.html" className="btn btn-dark btn-lg">
                              FASHION
                         </a>
                         <a href="demo12-shop.html" className="btn btn-dark btn-lg">
                              HEADPHONE
                         </a>
                    </div>
               </div> */}
          </section>
     );
};

export default Banner;
