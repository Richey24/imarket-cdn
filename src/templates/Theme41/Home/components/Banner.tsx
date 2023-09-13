import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import Slider from "react-slick";


export const Banner = () => {

     const settings = {
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     return (
          <div className="intro-slider" style={{ backgroundColor: "#ececec" }}>
               <div className="container slide-animate show-nav-hover nav-big">
                    <Slider {...settings}>
                         <div className="intro-slide1 banner">
                              <div className="row">
                                   <div className="col-lg-6 order-1">
                                        <div className="banner-layer banner-layer-middle position-relative">
                                             <h5 className="banner-subtitle font-weight-normal "
                                                  data-animation-name="fadeInUpShorter" data-animation-delay="100">Exclusive
                                                  Product New Arrival
                                             </h5>
                                             <h2 className="banner-title font-weight-bold "
                                                  data-animation-name="fadeInUpShorter" data-animation-delay="200">Sauce Combo
                                             </h2>
                                             <h3 className="banner-desc text-uppercase "
                                                  data-animation-name="fadeInUpShorter" data-animation-delay="300">Special Blend
                                             </h3>
                                             <h4 className="custom-text-1 text-secondary " data-animation-delay="500">
                                                  Super Hot!
                                             </h4>
                                             <p className="text-right " data-animation-name="fadeInRightShorter"
                                                  data-animation-delay="700">EXCLUSIVE PRODUCTS ON SALE</p>
                                             <h2 className="up-to text-right mb-0 pb-2 "
                                                  data-animation-name="fadeInLeftShorter" data-animation-delay="800">
                                                  <sup className="font-weight-bold">UP
                                                       TO</sup><strong>50%<small>OFF</small></strong>
                                             </h2>
                                        </div>
                                   </div>
                                   <div className="col-lg-6 order-0 order-lg-1">
                                        <figure className="banner-media">
                                             <Image src={templateImages.demo41.bannerImage.banner2} data-plugin-float-element
                                                  data-plugin-options="{'startPos': 'top', 'speed': 9.8, 'transition': true, 'horizontal':false,'transitionDuration':1000}"
                                                  width="497" height="473" alt="intro-banner" />
                                        </figure>
                                   </div>
                              </div>
                         </div>
                         <div className="intro-slide2 banner">
                              <div className="row">
                                   <div className="col-lg-6">
                                        <figure className="banner-media position-relative">
                                             <Image src={templateImages.demo41.bannerImage.banner3} data-plugin-float-element
                                                  data-plugin-options="{'startPos': 'top', 'speed': 9.8, 'transition': true, 'horizontal':false,'transitionDuration':1000}"
                                                  width="497" height="473" alt="intro-banner" />
                                        </figure>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="banner-layer banner-layer-middle position-relative pb-3">
                                             <h5 className="banner-subtitle font-weight-normal "
                                                  data-animation-name="fadeInUpShorter" data-animation-delay="100">Exclusive
                                                  Product New Arrival
                                             </h5>
                                             <h2 className="banner-title font-weight-bold "
                                                  data-animation-name="fadeInUpShorter" data-animation-delay="200">Fit Low Carb
                                             </h2>
                                             <h3 className="banner-desc text-uppercase "
                                                  data-animation-name="fadeInUpShorter" data-animation-delay="300">Candy Bar</h3>
                                             <h4 className="custom-text-2 " data-animation-delay="500">Sugar-Free</h4>
                                             <p className="text-right " data-animation-name="fadeInRightShorter"
                                                  data-animation-delay="700">BREAKFAST PRODUCTS ON SALE</p>
                                             <h2 className="up-to text-right mb-0 pb-2 "
                                                  data-animation-name="fadeInLeftShorter" data-animation-delay="800">
                                                  <sup className="font-weight-bold">UP
                                                       TO</sup><strong>70%</strong>
                                             </h2>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Slider>
               </div>
               {/* <div className="container">
                    <div className="content-box " data-animation-name="fadeInUpShorter"
                         data-animation-delay="300">
                         <div className="row justify-content-center mx-0">
                              <div className="col-xl-4 col-md-6">
                                   <h2>1.</h2>
                                   <h3>Order Grocery</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipi-scing elit.</p>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                   <h2>2.</h2>
                                   <h3>Make a Secure Payment</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit orci ipsum dolor sit.</p>
                              </div>
                              <div className="col-xl-4 col-md-6">
                                   <h2>3.</h2>
                                   <h3>Deliver Order</h3>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor elit.</p>
                              </div>
                         </div>
                    </div>
               </div> */}
          </div>
     );
};
