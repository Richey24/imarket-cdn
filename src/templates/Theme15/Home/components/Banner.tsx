import Image from "next/image";
import Slider from "react-slick";
import { templateImages } from "@/appProvider/templateImages";

const Banner = ({ slides }) => {
     let settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
     };
     return (
          <Slider {...settings}>
               {slides.map((slide, index) => (
                    <div className="home-slide banner banner-md-vw-small">
                         <Image
                              className="slide-bg"
                              src={slide.imageUrl}
                              style={{ backgroundColor: "#efefef" }}
                              alt="banner"
                              width={1120}
                              height={445}
                         />
                         <div
                              className={`banner-layer ${
                                   index === 0
                                        ? "slide-1 banner-layer-left"
                                        : "slide-2 banner-layer-right"
                              } banner-layer-middle ${index === 0 && "text-right"}`}
                         >
                              <h4
                                   className={`m-b-3 ${index !== 0 && "text-right"}`}
                                   data-animation-delay={700}
                                   data-animation-name="splitRight"
                              >
                                   Luxury With Brands We Love
                              </h4>
                              <h3
                                   className={`m-b-2 font3 ${
                                        index === 0 && "text-right"
                                   } text-primary`}
                                   data-animation-name="blurIn"
                                   data-animation-duration={1200}
                              >
                                   Women&apos;s Lingerie
                              </h3>
                              <h5
                                   className={`${
                                        index === 0 && "d-inline-block"
                                   } ls-n-20 m-r-3 p-t-3 ${
                                        index === 0 ? "text-left" : "float-left"
                                   }`}
                                   data-animation-delay={1900}
                                   data-animation-duration={1200}
                                   data-animation-name="fadeInLeft"
                              >
                                   STARTING AT
                              </h5>
                              <h4
                                   className={`text-price ls-n-20 m-b-4 ${
                                        index === 0 && "text-left float-right"
                                   }`}
                                   data-animation-delay={1900}
                                   data-animation-duration={1200}
                                   data-animation-name="fadeInUp"
                              >
                                   $<b>199</b>99
                              </h4>
                              <div className="clearfix" />
                              <div
                                   className="mb-0"
                                   data-animation-delay={2400}
                                   data-animation-name="fadeInUpShorter"
                              >
                                   <a
                                        href="demo15-shop.html"
                                        className="btn btn-modern btn-lg btn-dark"
                                   >
                                        Shop Now!
                                   </a>
                              </div>
                         </div>
                    </div>
               ))}
          </Slider>
     );
};
export default Banner;
