import { templateImages } from "@/appProvider/templateImages";
import React from "react";

const ProductBanner = () => {
     return (
          <section className="product-banner-section">
               <div className="banner" style={{ backgroundColor: "#111" }}>
                    <figure className="w-100 " data-animation-name="fadeIn">
                         <img
                              src={templateImages.demo18.productSliderImage.productSlider3}
                              alt="product banner"
                         />
                    </figure>
                    <div className="container-fluid">
                         <div className="position-relative h-100">
                              <div className="banner-layer banner-layer-middle">
                                   <h3
                                        className="text-white text-uppercase ls-n-25 m-b-4 "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-duration={1000}
                                        data-animation-delay={200}
                                   >
                                        Ultra Boost
                                   </h3>
                                   <img
                                        className="m-b-4 "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-duration={1000}
                                        data-animation-delay={400}
                                        src={
                                             templateImages.demo18.productSliderImage.productSlider1
                                        }
                                        alt="img"
                                        width={540}
                                        height={100}
                                   />
                                   <a
                                        href="demo18-shop.html"
                                        className="btn btn-light "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-duration={1000}
                                        data-animation-delay={600}
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

export default ProductBanner;
