import Carousel from "react-bootstrap/Carousel";
import { templateImages } from "@/appProvider/templateImages";
export const Banner = () => {
     return (
          <section className="intro-section" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
               <div className="container">
                    <div className="row">
                         <div className="col-lg-9 mb-2">
                              <div className="home-slider slide-animate   owl-theme custom-nav">
                                   <Carousel>
                                        {" "}
                                        <Carousel.Item>
                                             <div className="home-slide home-slide-1 banner">
                                                  <img
                                                       className="slide-bg"
                                                       src={
                                                            templateImages.demo22.sliderImage.slide1
                                                       }
                                                       alt="slider image"
                                                       width={772}
                                                       height={434}
                                                  />
                                                  <div className="banner-layer banner-layer-middle banner-layer-right">
                                                       <div
                                                            className="appear-animate"
                                                            data-animation-name="rotateInUpLeft"
                                                       >
                                                            <h2 className="font1 ls-10 text-uppercase text-right m-b-4">
                                                                 Electronic
                                                                 <br />
                                                                 Deals
                                                            </h2>
                                                            <div className="coupon-sale-text">
                                                                 <h4 className="m-b-2 font1 d-block text-white bg-dark skew-box">
                                                                      Exclusive COUPON
                                                                 </h4>
                                                                 <h5 className="mb-0 font1 d-inline-block bg-dark skew-box">
                                                                      <i className="text-dark ls-0">
                                                                           UP TO
                                                                      </i>
                                                                      <b className="text-white">
                                                                           $100
                                                                      </b>
                                                                      <sub className="text-dark">
                                                                           OFF
                                                                      </sub>
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
                                                  <div className="banner-layer banner-layer-bottom banner-layer-right">
                                                       <p className="ls-0 mb-0">
                                                            * Only 200 Available
                                                       </p>
                                                  </div>
                                             </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                             {" "}
                                             <div className="home-slide home-slide-2 banner">
                                                  <img
                                                       className="slide-bg"
                                                       src={
                                                            templateImages.demo22.sliderImage.slide2
                                                       }
                                                       alt="slider image"
                                                       width={772}
                                                       height={434}
                                                  />
                                                  <div className="banner-layer banner-layer-middle banner-layer-left">
                                                       <div
                                                            className="appear-animate"
                                                            data-animation-name="rotateInUpLeft"
                                                       >
                                                            <h2 className="font1 ls-10 text-uppercase m-b-4">
                                                                 Top Brands
                                                                 <br />
                                                                 Smartphones
                                                            </h2>
                                                            <div className="coupon-sale-text d-flex flex-column align-items-start">
                                                                 <h4 className="m-b-2 font1 d-block text-uppercase text-white bg-dark skew-box">
                                                                      Starting From
                                                                 </h4>
                                                                 <h5 className="mb-0 font1 d-inline-block bg-dark skew-box">
                                                                      <b className="text-white">
                                                                           $199
                                                                      </b>
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
                                   </Carousel>
                              </div>
                         </div>
                         <div className="col-lg-3 mb-2">
                              <div className="featured-products-slider  owl-theme dot-inside dots-small">
                                   <Carousel>
                                        <Carousel.Item>
                                             {" "}
                                             <div className="product-default count-down">
                                                  <h3 className="product-name">Flash Deals</h3>
                                                  <figure>
                                                       <a href="demo22-product.html">
                                                            <img
                                                                 src={
                                                                      templateImages.demo22
                                                                           .sliderImage.slide3
                                                                 }
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
                                                                 offer ends in:
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
                                                                 1080p Wifi IP Camera
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
                                                            <span className="old-price">
                                                                 $596.00
                                                            </span>
                                                            <span className="product-price">
                                                                 $299.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                             {" "}
                                             <div className="product-default count-down">
                                                  <h3 className="product-name">Flash Deals</h3>
                                                  <figure>
                                                       <a href="demo22-product.html">
                                                            <img
                                                                 src={
                                                                      templateImages.demo22
                                                                           .sliderImage.slide4
                                                                 }
                                                                 width={217}
                                                                 height={217}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                       <div className="label-group">
                                                            <span className="product-label label-sale">
                                                                 - 33%
                                                            </span>
                                                       </div>
                                                       <div className="product-countdown-container">
                                                            <span className="product-countdown-title">
                                                                 offer ends in:{" "}
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
                                                                 HD Camera
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
                                                            <span className="old-price">
                                                                 $299.00
                                                            </span>
                                                            <span className="product-price">
                                                                 $199.00
                                                            </span>
                                                       </div>
                                                       {/* End .price-box */}
                                                  </div>
                                                  {/* End .product-details */}
                                             </div>
                                        </Carousel.Item>
                                   </Carousel>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="cat-section container position-absolute">
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
               </div>
          </section>
     );
}

export default Banner