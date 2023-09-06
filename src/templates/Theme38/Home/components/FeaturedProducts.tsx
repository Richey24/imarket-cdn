import Slider from "react-slick";
import { ProductProps } from "../types";
import { Product } from "./Product";
import { templateImages } from "@/appProvider/templateImages";

const FeaturedProducts: React.FC<{ featuredProducts: ProductProps[] }> = (props) => {
     let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          className: "",
     };
     return (
          <section className="products-container feautured-container">
               <div className="container">
                    <div className="heading text-uppercase text-center">
                         <h5
                              className=""
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              EXCLUSIVE SELECTION
                         </h5>
                         <h2
                              className="text-capitalize mb-0 "
                              data-animation-delay={300}
                              data-animation-name="fadeInUpShorter"
                         >
                              Featured Products
                         </h2>
                    </div>
                    <div
                         className="products-slider custom-products owl-carouse owl-theme nav-outer show-nav-hover nav-image-center "
                         data-animation-delay={500}
                         data-animation-name="fadeIn"
                         data-owl-options="{
						'dots': true,
                  'nav': false
					}"
                    >
                         <Slider {...settings}>
                              {props.featuredProducts.map((product, index) => (
                                   // <div className="col-sm-6 col-md-4" key={index}>
                                   <Product {...product} key={index} />
                                   // </div>
                              ))}
                         </Slider>
                    </div>
                    {/* End .featured-proucts */}
                    <div
                         className="banner banner-big-sale mb-6 "
                         data-animation-delay={100}
                         data-animation-name="fadeIn"
                         style={{
                              background: `#2A95CB center/cover url(${templateImages.demo38.bannerImage.banner3})`,
                         }}
                    >
                         <div className="banner-content row align-items-center mx-0">
                              <div className="col-lg-8 col-md-9 d-flex justify-content-center justify-content-md-start flex-column flex-md-row">
                                   <h2
                                        className="text-dark text-uppercase text-center text-md-left ls-n-20 mb-md-0 px-md-4 "
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={200}
                                   >
                                        <b className="text-white d-inline-block mb-1 mb-md-0">
                                             Big Sale
                                        </b>
                                   </h2>
                                   <h3
                                        className="text-center text-md-left "
                                        data-animation-name="fadeInLeftShorter"
                                        data-animation-delay={200}
                                   >
                                        Delivering Covid19 Essentials
                                        <small className="d-block text-transform-none align-middle">
                                             HAND SANITIZER, INFRARED THERMOMETERS AND MORE…
                                        </small>
                                   </h3>
                              </div>
                              <div className="col-lg-4 col-md-3 text-center text-md-left text-lg-right mt-2 mt-lg-0">
                                   <a
                                        className="btn btn-light btn-primary btn-lg "
                                        data-animation-name="fadeIn"
                                        data-animation-delay={150}
                                        href="demo38-shop.html"
                                   >
                                        Shop Now
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
export default FeaturedProducts;
