import { templateImages } from "@/appProvider/templateImages";
import Carousel from "react-bootstrap/Carousel";

export const Banner = () => {
     return (
          <section className="home-slider  owl-theme text-uppercase nav-big bg-gray">
               <Carousel>
                    {" "}
                    <Carousel.Item>
                         <div className="home-slide home-slide1 banner">
                              <img
                                   className="slide-bg"
                                   src={templateImages.demo14.sliderImage.slide1}
                                   alt="slider image"
                                   width={1120}
                                   height={500}
                                   style={{ backgroundColor: "#eee" }}
                              />
                              <div className="container">
                                   <div className="banner-layer banner-layer-middle banner-layer-right">
                                        <h4 className="text-capitalize m-b-3">
                                             Totally Wireless High-Performance
                                        </h4>
                                        <h2 className="m-b-2">Select headphones</h2>
                                        <h3 className="m-b-2">30% Off</h3>
                                        <h5 className="d-inline-block pt-2 mb-1 pb-1 ls-n-20 align-middle">
                                             Starting AT
                                             <b
                                                  className="coupon-sale-text  text-white d-inline-block align-sub"
                                                  style={{ background: "#ff7272" }}
                                             >
                                                  $<em className="align-middle">199</em>99
                                             </b>
                                        </h5>
                                        <a href="demo14-shop.html" className="btn btn-dark">
                                             Shop Now!
                                        </a>
                                   </div>
                                   {/* End .banner-layer */}
                              </div>
                              {/* End .container */}
                         </div>
                    </Carousel.Item>
                    <Carousel.Item>
                         <div className="home-slide home-slide2 banner">
                              <img
                                   className="slide-bg"
                                   src={templateImages.demo14.sliderImage.slide2}
                                   alt="slider image"
                                   width={1120}
                                   height={500}
                                   style={{ backgroundColor: "#eee" }}
                              />
                              <div className="container">
                                   <div className="banner-layer banner-layer-middle banner-layer-left">
                                        <h4 className="mb-0">Extra</h4>
                                        <h3 className="m-b-2">20% off</h3>
                                        <h3 className="m-b-3 heading-border">Accessories</h3>
                                        <h2 className="m-b-4">Drones on sale</h2>
                                        <a
                                             href="demo14-shop.html"
                                             className="btn btn-block btn-dark"
                                        >
                                             Shop All Sale
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </Carousel.Item>
               </Carousel>
          </section>
     );
};
