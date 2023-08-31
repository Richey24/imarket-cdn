import Image from "next/image";
import Slider from "react-slick";
import { templateImages } from "@/appProvider/templateImages";

const Banner = () => {
     let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          className: "intro-slider slide-animat curved-border  nav-big ",
     };
     return (
          <section className="intro-section">
               <div className="container">
                    <div className="home-slider slide-animate owl-carousel owl-theme owl-carousel-lazy">
                         <Slider {...settings}>
                              <div>
                                   <div className="home-slide home-slide-1 banner d-flex flex-wrap">
                                        <div className="col-lg-4 d-flex justify-content-center">
                                             <div
                                                  className="d-flex flex-column justify-content-center "
                                                  data-animation-name="fadeInLeftShorter"
                                                  data-animation-delay={200}
                                             >
                                                  <h4 className="text-light text-uppercase m-b-1">
                                                       Extra
                                                  </h4>
                                                  <h2 className="text-uppercase m-b-1">20% off</h2>
                                                  <h4 className="font-weight-bold text-uppercase heading-border m-b-3">
                                                       BIKES
                                                  </h4>
                                                  <h3 className="font5 m-b-5">Summer Sale</h3>
                                                  <div>
                                                       <a
                                                            href="demo27-shop.html"
                                                            className="btn btn-dark btn-lg"
                                                       >
                                                            Shop all sale
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                        <div
                                             className="col-lg-8 with-bg"
                                             style={{
                                                  backgroundImage: `url(${templateImages.demo27.sliderImage.slide3})`,
                                             }}
                                        >
                                             <div
                                                  className=""
                                                  data-animation-name="fadeInLeftShorter"
                                                  data-animation-delay={500}
                                             >
                                                  <Image
                                                       className="m-b-5"
                                                       src={
                                                            templateImages.demo27.sliderImage.slide1
                                                       }
                                                       width={740}
                                                       height={397}
                                                       alt="banner"
                                                  />
                                             </div>
                                             <div
                                                  className="content-box d-sm-flex "
                                                  data-animation-name="fadeInLeftShorter"
                                                  data-animation-delay={700}
                                             >
                                                  <h5 className="text-uppercase m-b-2">
                                                       only{" "}
                                                       <b className="text-secondary">
                                                            <small>$</small>399<small>99</small>
                                                       </b>
                                                  </h5>
                                                  <div className="content-info">
                                                       <h6 className="mb-0">
                                                            Start Shopping Right Now
                                                       </h6>
                                                       <p className="font2 mb-0">
                                                            * Get Plus Discount Buying Package
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <div className="home-slide home-slide-2 banner d-flex flex-wrap">
                                        <div className="col-lg-5 d-flex justify-content-center">
                                             <div
                                                  className="d-flex flex-column justify-content-center "
                                                  data-animation-name="fadeInRightShorter"
                                                  data-animation-delay={200}
                                             >
                                                  <h4 className="text-light text-uppercase m-b-1">
                                                       Extra
                                                  </h4>
                                                  <h2 className="text-uppercase m-b-1">20% off</h2>
                                                  <h4 className="font-weight-bold text-uppercase heading-border m-b-3">
                                                       BIKES
                                                  </h4>
                                                  <h3 className="font5 p-b-4 m-b-5">Summer Sale</h3>
                                                  <div>
                                                       <a
                                                            href="demo27-shop.html"
                                                            className="btn btn-dark btn-lg"
                                                       >
                                                            Shop all sale
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                        <div
                                             className="col-lg-7 order-lg-first text-lg-right "
                                             data-animation-name="fadeInRightShorter"
                                             data-animation-delay={500}
                                        >
                                             <Image
                                                  className="m-b-5"
                                                  src={templateImages.demo27.sliderImage.slide2}
                                                  width={740}
                                                  height={397}
                                                  alt="banner"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
export default Banner;
