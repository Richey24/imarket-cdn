import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import slide1 from "../../../../assets/images/demoes/demo4/slider/slide-1.jpg";
import slide2 from "../../../../assets/images/demoes/demo4/slider/slide-2.jpg";

const Banner = () => {
     return (
          <Carousel>
               <Carousel.Item>
                    <div className="home-slide home-slide1 banner">
                         <Image className="slide-bg" src={slide1} height={499} alt="slider image" />
                         <div className="container d-flex align-items-center">
                              <div className="banner-layer" data-animation-name="fadeInUpShorter">
                                   <h4 className="text-transform-none m-b-3">
                                        Find the Boundaries. Push Through!
                                   </h4>
                                   <h2 className="text-transform-none mb-0">Summer Sale</h2>
                                   <h3 className="m-b-3">70% Off</h3>
                                   <h5 className="d-inline-block mb-0">
                                        <span>Starting At</span>
                                        <b className="coupon-sale-text text-white bg-secondary align-middle">
                                             <sup>$</sup>
                                             <em className="align-text-top">199</em>
                                             <sup>99</sup>
                                        </b>
                                   </h5>
                                   <a href="category.html" className="btn btn-dark btn-lg">
                                        Shop Now!
                                   </a>
                              </div>
                              {/* End .banner-layer */}
                         </div>
                    </div>
               </Carousel.Item>
               <Carousel.Item>
                    <div className="home-slide home-slide2 banner banner-md-vw">
                         <Image
                              className="slide-bg"
                              style={{ backgroundColor: "#ccc" }}
                              width={1903}
                              height={499}
                              src={slide2}
                              alt="slider image"
                         />
                         <div className="container d-flex align-items-center">
                              <div
                                   className="banner-layer d-flex justify-content-center"
                                   data-animation-name="fadeInUpShorter"
                              >
                                   <div className="mx-auto">
                                        <h4 className="m-b-1">Extra</h4>
                                        <h3 className="m-b-2">20% off</h3>
                                        <h3 className="mb-2 heading-border">Accessories</h3>
                                        <h2 className="text-transform-none m-b-4">Summer Sale</h2>
                                        <a href="category.html" className="btn btn-block btn-dark">
                                             Shop All Sale
                                        </a>
                                   </div>
                              </div>
                              {/* End .banner-layer */}
                         </div>
                    </div>
               </Carousel.Item>
          </Carousel>
     );
};

export default Banner;
