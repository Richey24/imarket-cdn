import { useState } from "react";
import Slider from "react-slick";
import { sunglassesProducts } from "../../data";
import { templateImages } from "@/appProvider/templateImages";
import { Product } from "../Product";
export const ProductSection2 = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <section
               className="section-9 product-collection bg-fixed"
               style={{
                    backgroundImage: `url(${templateImages.demo16.bgImages.bg7})`,
                    backgroundColor: "#dcdbd9",
               }}
          >
               <div className="container text-center">
                    <div className="title-group">
                         <h2 className="text-white m-b-1">Sunglasses On Sale</h2>
                         <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pt-2 text-white mb-4">
                              Starting at
                              <span>
                                   $<strong>19</strong>99
                              </span>
                         </h5>
                    </div>
                    {/* .End .title-group */}
               </div>
               {/* End .container */}
               <div className="container">
                    <div className="products-slider  owl-theme nav-out nav-image-center">
                         <Slider {...settings}>
                              {sunglassesProducts.map((product, idx) => (
                                   <Product key={idx} {...product} />
                              ))}
                         </Slider>

                         {/* End .product-default */}
                    </div>
                    {/* End .section-products-carousel */}
               </div>
               {/* End .container */}
          </section>
     );
};
