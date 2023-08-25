import Image from "next/image";
import Slider from "react-slick";
import slide1 from "../../../../assets/images/demoes/demo8/slider/slide-1.jpg";
import slide2 from "../../../../assets/images/demoes/demo8/slider/slide-2.jpg";

const Banner = () => {
     const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     return (
          <div>
               <div className="container">
                    <div className="home-slider-container">
                         <div className="home-slider nav-outer show-nav-hover slide-animate">
                              <Slider {...settings}>
                                   <div className="home-slide">
                                        <figure style={{ backgroundColor: "#d7b697" }}>
                                             <Image
                                                  className="slide-bg"
                                                  src={slide1}
                                                  width="1180"
                                                  height="569"
                                                  alt="Home Banner"
                                             />
                                        </figure>
                                        <div className="home-slide-content sale-banner">
                                             <div
                                                  className="row no-gutter bg-primary"
                                                  data-animation-name="fadeInLeftShorter"
                                             >
                                                  <div className="col-auto col-md-6 d-flex flex-column justify-content-center col-1">
                                                       <h4
                                                            className="align-left text-uppercase mb-0"
                                                            data-animation-name="slideInRight"
                                                            data-animation-delay="400"
                                                       >
                                                            Furniture &amp; Garden
                                                       </h4>
                                                       <h3
                                                            className="text-white mb-0 align-left text-uppercase"
                                                            data-animation-name="slideInRight"
                                                            data-animation-delay="400"
                                                       >
                                                            Huge Sale
                                                       </h3>
                                                  </div>

                                                  <div
                                                       className="col-auto col-md-6 col-2"
                                                       data-animation-name="slideInLeft"
                                                       data-animation-delay="400"
                                                  >
                                                       <h2 className="text-white mb-0 position-relative align-left">
                                                            50
                                                            <small style={{ right: "35px" }}>
                                                                 %<ins>OFF</ins>
                                                            </small>
                                                       </h2>
                                                  </div>
                                             </div>
                                             <div className="mb-0 text-right">
                                                  <a
                                                       href="demo8-shop.html"
                                                       className="btn btn-lg btn-dark"
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="600"
                                                  >
                                                       Shop Now!
                                                  </a>
                                             </div>
                                        </div>
                                        S
                                   </div>

                                   <div className="home-slide home-slide-left">
                                        <figure style={{ backgroundColor: "#ceb49d" }}>
                                             <Image
                                                  className="slide-bg"
                                                  src={slide2}
                                                  width="1180"
                                                  height="569"
                                                  alt="Home Banner"
                                             />
                                        </figure>
                                        <div className="home-slide-content slide-content-dark sale-banner">
                                             <div
                                                  className="row no-gutter bg-secondary"
                                                  data-animation-name="fadeInRightShorter"
                                             >
                                                  <div className="col-auto col-md-6 d-flex flex-column justify-content-center col-1">
                                                       <h4
                                                            className="align-left text-uppercase mb-0"
                                                            data-animation-name="slideInRight"
                                                            data-animation-delay="300"
                                                       >
                                                            Home office sale
                                                       </h4>
                                                       <h3
                                                            className="text-white mb-0 align-left text-uppercase"
                                                            data-animation-name="slideInRight"
                                                            data-animation-delay="300"
                                                       >
                                                            mega off
                                                       </h3>
                                                  </div>

                                                  <div
                                                       className="col-auto col-md-6 col-2"
                                                       data-animation-name="slideInLeft"
                                                       data-animation-delay="300"
                                                  >
                                                       <h2 className="text-white mb-0 position-relative align-left">
                                                            50
                                                            <small style={{ right: "35px" }}>
                                                                 %<ins>OFF</ins>
                                                            </small>
                                                       </h2>
                                                  </div>
                                             </div>
                                             <div className="mb-0">
                                                  <a
                                                       href="demo8-shop.html"
                                                       className="btn btn-lg btn-primary"
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="600"
                                                  >
                                                       Shop Now!
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </Slider>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
