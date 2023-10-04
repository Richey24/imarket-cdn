import { templateImages } from "@/appProvider/templateImages";
import Slider from "react-slick";
import Image from "next/image";

const Banner = ({ slides }) => {
     const settings = {
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc:
               slide?.imageUrl !== "" ? slide?.imageUrl : templateImages.demo19.sliderImage.slide1,
          title: "Find the Boundaries. Push Through!",
          saleTitle: "Summer Sale",
          discount: "70% Off",
          price: "$199.99",
          link: "demo13-shop.html",
     }));

     return (
          <div>
               <div className="home-slider slide-animate show-nav-hover nav-big text-uppercase">
                    <Slider {...settings}>
                         {mappedSlides.map((slide, next) => {
                              return (
                                   <div className="home-slide home-slide1 banner">
                                        <Image
                                             width={400}
                                             height={400}
                                             className="slide-bg"
                                             src={slide.imageSrc}
                                             style={{ backgroundColor: "#cfcfcf" }}
                                             alt="slider image"
                                        />
                                        <div className="container d-flex align-items-center">
                                             <div className="banner-layer">
                                                  <h4
                                                       className="text-transform-none mb-0 "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="200"
                                                  >
                                                       {slide.title}
                                                  </h4>
                                                  <h2
                                                       className="text-transform-none line-height-1 m-b-1 "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="400"
                                                  >
                                                       Smartphones
                                                  </h2>
                                                  <h3
                                                       className="line-height-1 m-b-3 "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="600"
                                                  >
                                                       {slide.discount}
                                                  </h3>
                                                  <a
                                                       href="demo19-shop.html"
                                                       className="btn btn-dark btn-xl ls-10 "
                                                       data-animation-name="fadeInUpShorter"
                                                       data-animation-delay="1000"
                                                  >
                                                       Shop Now!
                                                  </a>
                                                  <h5 className="float-right mb-0">
                                                       <span
                                                            className="d-inline-block align-top line-height-1 ls-n-20 m-b-4 "
                                                            data-animation-name="fadeInUpShorter"
                                                            data-animation-delay="1000"
                                                       >
                                                            Starting At
                                                       </span>
                                                       <b
                                                            className="coupon-sale-text d-inline-block ls-n-20 text-white bg-secondary m-b-1 "
                                                            data-animation-name="fadeInUpShorter"
                                                            data-animation-delay="800"
                                                       >
                                                            <sup>$</sup>199<sup>99</sup>
                                                       </b>
                                                  </h5>
                                             </div>
                                        </div>
                                   </div>
                              );
                         })}
                    </Slider>
               </div>
          </div>
     );
};

export default Banner;
