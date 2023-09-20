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
          <div>
               <div className="home-slider-container">
                    <div className="home-slider">
                         <Slider {...settings}>
                              <div className="home-slide home-slide-1 banner banner-h-100 banner-md-vw-small">
                                   <Image
                                        className="slide-bg h-100"
                                        src={templateImages.demo6.sliderImage.slider1}
                                        style={{ backgroundColor: "#ccc" }}
                                        width="1903"
                                        height="969"
                                        alt="Home Banner"
                                   />
                                   <div className="banner-layer banner-layer-middle text-center">
                                        <h2
                                             className="text-center font3 font-weight-normal m-b-4 text-primary "
                                             data-animation-duration="1200"
                                             data-animation-name="fadeIn"
                                        >
                                             Summer Fashion Trends
                                        </h2>
                                        <h3
                                             className="text-center m-b-1 text-uppercase "
                                             data-animation-delay="800"
                                             data-animation-duration="1200"
                                             data-animation-name="blurIn"
                                        >
                                             big sale up to
                                        </h3>
                                        <h3
                                             className="text-center m-b-4 text-sale "
                                             data-animation-delay="1600"
                                             data-animation-duration="1200"
                                             data-animation-name="fadeIn"
                                        >
                                             80%<small>OFF</small>
                                        </h3>
                                        <h5
                                             className="d-inline-block m-r-3 text-left text-uppercase "
                                             data-animation-delay="2200"
                                             data-animation-duration="1200"
                                             data-animation-name="fadeIn"
                                        >
                                             Starting At
                                        </h5>
                                        <h5
                                             className="coupon-sale-text text-left text-light "
                                             data-animation-delay="2200"
                                             data-animation-duration="1200"
                                             data-animation-name="fadeIn"
                                        >
                                             $<b>199</b>99
                                        </h5>
                                        <div
                                             className="mb-0 p-t-2 "
                                             data-animation-delay="2500"
                                             data-animation-name="fadeInUpShorter"
                                        >
                                             <a
                                                  href="demo6-shop.html"
                                                  className="btn btn-borders btn-xl btn-outline-dark ls-10"
                                             >
                                                  SHOP NOW
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="home-slide home-slide-2 banner banner-h-100 loaded banner-lg-vw">
                                   <Image
                                        className="slide-bg h-100"
                                        src={templateImages.demo10.sliderImage.slider1}
                                        style={{ backgroundColor: "#ccc" }}
                                        width="1903"
                                        height="969"
                                        alt="Home Banner"
                                   />
                                   <div
                                        className="banner-layer banner-layer-middle banner-layer-left "
                                        data-animation-name="fadeIn"
                                        data-animation-duration="1200"
                                        data-animation-delay="200"
                                   >
                                        <h2 className="font3 font-weight-normal p-l-1 mb-0 ml-0">
                                             Summer Trends
                                        </h2>
                                        <h3 className="mb-0 text-left text-uppercase">sale</h3>
                                   </div>
                                   <div
                                        className="banner-layer banner-layer-middle banner-layer-right "
                                        data-animation-name="fadeIn"
                                        data-animation-duration="1200"
                                        data-animation-delay="400"
                                   >
                                        <h4 className="pl-2 font-weight-light mb-0 text-left text-uppercase">
                                             prices up to
                                        </h4>
                                        <h3 className="mb-0 text-sale m-l-n-xs text-left text-uppercase">
                                             80%<small>OFF</small>
                                        </h3>
                                        <div className="mb-0 pl-2">
                                             <a
                                                  href="demo6-shop.html"
                                                  className="btn btn-modern btn-xl btn-primary"
                                             >
                                                  SHOP NOW
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </Slider>
                    </div>
               </div>

               <div className="banners-group">
                    <div className="row m-0">
                         <div
                              className="col-sm-6 col-xl-3 p-0 "
                              data-animation-delay="100"
                              data-animation-duration="1200"
                         >
                              <div className="banner banner-1 banner-md-vw-small">
                                   <a href="#">
                                        <Image
                                             src={templateImages.demo6.bannerImage.banner5}
                                             style={{ backgroundColor: "#add" }}
                                             alt="banner"
                                             width="480"
                                             height="200"
                                        />
                                   </a>
                                   <div className="banner-layer banner-layer-right banner-layer-middle">
                                        <h2 className="mb-0 text-right">TRENDING</h2>
                                        <h3 className="m-b-3 text-right">Hat Sales</h3>
                                        <h4 className="ls-10 m-b-3 text-right text-primary">
                                             STARTING AT $99
                                        </h4>
                                        <div className="mb-0 text-right">
                                             <a
                                                  href="demo6-shop.html"
                                                  className="btn btn-modern btn-md btn-dark"
                                             >
                                                  Buy NOW!
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div
                              className="col-sm-6 col-xl-3 p-0 "
                              data-animation-delay="500"
                              data-animation-duration="1200"
                         >
                              <div className="banner banner-2 banner-md-vw-small">
                                   <a href="#">
                                        <Image
                                             src={templateImages.demo6.bannerImage.banner2}
                                             style={{ backgroundColor: "#444" }}
                                             alt="banner"
                                             width="480"
                                             height="200"
                                        />
                                   </a>
                                   <div className="banner-layer banner-layer-right banner-layer-middle">
                                        <h2 className="ls-n-20 m-b-2 text-right text-primary">
                                             FLASH SALE
                                        </h2>
                                        <h3 className="ls-n-20 m-b-2 text-right">
                                             TOP BRANDS
                                             <br />
                                             SUMMER SUNGLASSES
                                        </h3>
                                        <h4 className="font-weight-bold ls-n-20 m-b-3 text-right text-light">
                                             STARTING AT
                                             <sup>$</sup>199<sup>99</sup>
                                        </h4>
                                        <div className="mb-0 text-right">
                                             <a
                                                  href="demo6-shop.html"
                                                  className="btn btn-modern btn-md btn-light"
                                             >
                                                  View Sale
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div
                              className="col-sm-6 col-xl-3 p-0 "
                              data-animation-delay="900"
                              data-animation-duration="1200"
                         >
                              <div className="banner banner-3 banner-md-vw-small">
                                   <a href="#">
                                        <Image
                                             src={templateImages.demo6.bannerImage.banner3}
                                             style={{ backgroundColor: "#aaa" }}
                                             alt="banner"
                                             width="480"
                                             height="200"
                                        />
                                   </a>
                                   <div className="banner-layer banner-layer-left banner-layer-middle">
                                        <h2 className="m-b-1 font3 text-left">Exclusive Shoes</h2>
                                        <h3 className="m-b-3 text-left">50% OFF</h3>
                                        <div className="vc_btn3-container mb-0 vc_btn3-inline">
                                             <a
                                                  href="demo6-shop.html"
                                                  className="btn btn-modern btn-md btn-dark ls-10"
                                             >
                                                  Get Yours!
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div
                              className="col-sm-6 col-xl-3 p-0 "
                              data-animation-delay="1200"
                              data-animation-duration="1200"
                         >
                              <div className="banner banner-4 banner-md-vw-small">
                                   <a href="#">
                                        <Image
                                             src={templateImages.demo6.bannerImage.banner4}
                                             style={{ backgroundColor: "#eee" }}
                                             alt="banner"
                                             width="480"
                                             height="200"
                                        />
                                   </a>
                                   <div className="row banner-layer banner-layer-middle align-items-center">
                                        <div className="col-7">
                                             <h3 className="m-b-1 text-right">DEAL PROMOS</h3>
                                             <h4 className="mb-0 text-right ls-10">
                                                  STARTING AT $99
                                             </h4>
                                        </div>
                                        <div className="col-5">
                                             <div className="mb-0">
                                                  <a
                                                       href="demo6-shop.html"
                                                       className="btn btn-modern btn-md btn-dark"
                                                  >
                                                       Shop Now
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
