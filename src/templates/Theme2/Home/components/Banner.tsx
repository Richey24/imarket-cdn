import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../../assets/images/demoes/demo1/slider/slide-1.png";
import slide2 from "../../../../assets/images/demoes/demo1/slider/slide-2.jpg";
import slide3 from "../../../../assets/images/demoes/demo1/slider/slide-3.jpg";
import Image from "next/image";
import { templateImages } from "@/appProvider/templateImages";
const Banner = () => {
     return (
          <Carousel>
               <Carousel.Item>
                    <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                         <Image
                              className="slide-bg"
                              src={templateImages.demo2.sliderImage.slider1}
                              alt=""
                              width="880"
                              height="428"
                         />
                         <Carousel.Caption className="h-100">
                              <div className="w-100 d-flex flex-column justify-content-center align-items-start h-100 text-uppercase">
                                   <h4 className="text-white mb-0">
                                        Find the Boundaries. Push Through!
                                   </h4>
                                   <h2 className="text-white mb-0">Summer Sale</h2>
                                   <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                                   <h5 className="text-white text-uppercase d-inline-block mb-0 ls-n-20 align-text-bottom">
                                        Starting At{" "}
                                        <b className="coupon-sale-text bg-secondary text-white d-inline-block">
                                             $ <em className="align-text-top">199</em>99
                                        </b>
                                        <a
                                             href="demo1-shop.html"
                                             className="btn btn-dark btn-md ls-10"
                                        >
                                             Shop Now!
                                        </a>
                                   </h5>
                              </div>
                         </Carousel.Caption>
                    </div>
               </Carousel.Item>
               <Carousel.Item>
                    <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                         <Image
                              className="slide-bg"
                              style={{ backgroundColor: "#dadada" }}
                              src={templateImages.demo2.sliderImage.slider2}
                              width="880"
                              height="428"
                              alt="home-slider"
                         />
                         <Carousel.Caption className="h-100">
                              <div className="w-100 d-flex flex-column justify-content-center align-items-start h-100 text-uppercase">
                                   <h4 className="m-b-2">Over 200 products with discounts</h4>
                                   <h2 className="m-b-3">Great Deals</h2>
                                   <h5 className="d-inline-block mb-0 align-top ls-n-20 mr-5 mb-2">
                                        Starting At $
                                        <b className="">
                                             <em>299</em>99
                                        </b>
                                        <a
                                             href="demo1-shop.html"
                                             className="btn btn-dark btn-md ls-10 ms-2"
                                        >
                                             Get Yours!
                                        </a>
                                   </h5>
                              </div>
                         </Carousel.Caption>
                    </div>
               </Carousel.Item>
               <Carousel.Item>
                    <div className="home-slide home-slide3 banner banner-md-vw banner-sm-vw  d-flex align-items-center">
                         <Image
                              className="slide-bg"
                              style={{ backgroundColor: "#e5e4e2" }}
                              src={templateImages.demo2.sliderImage.slider3}
                              width="880"
                              height="428"
                              alt="home-slider"
                         />
                         <Carousel.Caption className="h-100">
                              <div className="w-100 d-flex flex-column justify-content-center align-items-start h-100 text-uppercase">
                                   <h4 className="m-b-2">Up to 70% off</h4>
                                   <h2 className="m-b-3">New Arrivals</h2>
                                   <h5 className="d-inline-block mb-0 align-top mr-5 mb-2">
                                        Starting At $
                                        <b>
                                             <em className="display-5">299</em> 99
                                        </b>
                                        <a
                                             href="demo1-shop.html"
                                             className="btn btn-dark btn-md ls-10 ms-2"
                                        >
                                             Get Yours!
                                        </a>
                                   </h5>
                              </div>
                         </Carousel.Caption>
                    </div>
               </Carousel.Item>
          </Carousel>
     );
};
export default Banner;
