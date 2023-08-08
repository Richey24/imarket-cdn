import Image from "next/image";
import logo from "../../../assets/images/your-logo.png";
import phone from "../../../assets/images/phone-white.png";
import slide1 from "../../../assets/images/demoes/demo6/slider/slide-1.jpg";
import product1 from "../../../assets/images/products/product-1.jpg";
import product2 from "../../../assets/images/products/product-2.jpg";
import product3 from "../../../assets/images/products/product-3.jpg";
import menuBanner from "../../../assets/images/menu-banner.jpg";
import menuBanner1 from "../../../assets/images/menu-banner-1.jpg";
// import vid1 from "../../../assets/images/demoes/demo6/slider/slide-2.mp4";

const Header = () => {
     return (
          <div>

               <main className="main home">
                    <div className="home-slider-container">
                         <div className="home-slider dot-inside slide-animate" data-owl-options="{
                    'dots': true,
                    'nav': false
                }">
                              <div className="home-slide home-slide-1 banner banner-h-100 banner-md-vw-small">
                                   <Image className="slide-bg h-100" src={slide1}
                                        style={{ backgroundColor: "#ccc" }} width="1903" height="969" alt="Home Banner" />
                                   {/* <!-- End .slide-bg --> */}
                                   <div className="banner-layer banner-layer-middle text-center">
                                        <h2 className="text-center font3 font-weight-normal m-b-4 text-primary appear-animate"
                                             data-animation-duration="1200" data-animation-name="fadeIn">Summer Fashion Trends</h2>
                                        <h3 className="text-center m-b-1 text-uppercase appear-animate" data-animation-delay="800"
                                             data-animation-duration="1200" data-animation-name="blurIn">big sale up to</h3>
                                        <h3 className="text-center m-b-4 text-sale appear-animate" data-animation-delay="1600"
                                             data-animation-duration="1200" data-animation-name="fadeIn">80%<small>OFF</small></h3>
                                        <h5 className="d-inline-block m-r-3 text-left text-uppercase appear-animate"
                                             data-animation-delay="2200" data-animation-duration="1200" data-animation-name="fadeIn">
                                             Starting At</h5>
                                        <h5 className="coupon-sale-text text-left text-light appear-animate" data-animation-delay="2200"
                                             data-animation-duration="1200" data-animation-name="fadeIn">
                                             $<b>199</b>99</h5>
                                        <div className="mb-0 p-t-2 appear-animate" data-animation-delay="2500"
                                             data-animation-name="fadeInUpShorter">
                                             <a href="demo6-shop.html" className="btn btn-borders btn-xl btn-outline-dark ls-10">
                                                  SHOP NOW
                                             </a>
                                        </div>
                                   </div>
                                   {/* <!-- End .home-slide-content --> */}
                              </div>
                              {/* <!-- End .home-slide --> */}
                              <div className="home-slide home-slide-2 banner banner-h-100 loaded banner-lg-vw">
                                   {/* <video className="w-100" autoPlay loop muted>
                                        <source src={vid1} type="video/mp4" />
                                        Your browser does not support HTML5 video.
                                   </video> */}
                                   <div className="banner-layer banner-layer-middle banner-layer-left appear-animate"
                                        data-animation-name="fadeIn" data-animation-duration="1200" data-animation-delay="200">
                                        <h2 className="font3 font-weight-normal p-l-1 mb-0 ml-0">Summer Trends</h2>
                                        <h3 className="mb-0 text-left text-uppercase">sale</h3>
                                   </div>
                                   <div className="banner-layer banner-layer-middle banner-layer-right appear-animate"
                                        data-animation-name="fadeIn" data-animation-duration="1200" data-animation-delay="400">
                                        <h4 className="pl-2 font-weight-light mb-0 text-left text-uppercase">prices up to</h4>
                                        <h3 className="mb-0 text-sale m-l-n-xs text-left text-uppercase">80%<small>OFF</small></h3>
                                        <div className="mb-0 pl-2">
                                             <a href="demo6-shop.html" className="btn btn-modern btn-xl btn-primary">
                                                  SHOP NOW
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* <!-- End .home-slider --> */}
                    </div>
               </main>
          </div>
     );
};
export default Header;
