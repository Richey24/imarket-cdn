import Slider from "react-slick";
import { BrowseCategoryProps, ProductProps } from "../types";
import { Product } from "./Product";
import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import React from "react";

const OurCategory: React.FC<BrowseCategoryProps> = (props) => {
     return (
          <div className="product-category mx-2" data-animation-name="fadeInUpShorter">
               <a href="demo38-shop.html">
                    <figure>
                         <Image src={props.imageUrl} alt="category" width={220} height={220} />
                    </figure>
                    <div className="category-content">
                         <h3>{props.title}</h3>
                    </div>
               </a>
          </div>
     );
};
const BrowseOurCategories: React.FC<{ browseCategories: BrowseCategoryProps[] }> = (props) => {
     let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          className: "",
     };
     return (
          <section
               className="category-container curve-style bg-primary position-relative"
               style={{
                    backgroundImage: "url(assets/images/demoes/demo38/banners/category-banner.jpg)",
               }}
          >
               <div
                    className="container "
                    data-animation-name="fadeInUpShorter"
                    data-animation-delay={200}
               >
                    <div className="heading text-uppercase text-center">
                         <h5 className="text-white">DEPARTMENTS</h5>
                         <h2
                              className="text-capitalize text-white mb-0 "
                              data-animation-delay={100}
                              data-animation-name="fadeIn"
                         >
                              Browse Our Categories
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
                              {props.browseCategories.map((category, index) => (
                                   <OurCategory {...category} key={index} />
                              ))}
                         </Slider>
                    </div>
                    {/* End .featured-proucts */}
               </div>
          </section>
     );
};
export default BrowseOurCategories;
