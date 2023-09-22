import React from "react";
import { PopularDepartmentProps } from "../types";
import Image from "next/image";
import Slider from "react-slick";
import { popularDepartments } from "../data";

const slidesToShow = 4;
let settings = {
     // dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: slidesToShow,
     slidesToScroll: 1,
     autoplay: true,
     swipeToSlide: true,
     arrows: true,
     accessibility: true,
     className: "",
};
const PopularDepartment: React.FC<PopularDepartmentProps> = (props) => {
     return (
          <div className="banner banner-image font2 mx-2">
               <a href="demo40-shop.html">
                    <Image
                         src={props.imageUrl}
                         width={374}
                         height={200}
                         alt="banner"
                         style={{ backgroundColor: "#f4f4f4" }}
                    />
               </a>
               <div className="banner-layer banner-layer-middle">
                    <h3>{props.title}</h3>
                    {props.totalProduct && <span>{props.totalProduct} Products </span>}
               </div>
          </div>
     );
};
const PopularDepartments: React.FC<{ popularDepartments: PopularDepartmentProps[] }> = ({
     popularDepartments,
}) => {
     return (
          <section className="categories-section">
               <div className="heading d-flex align-items-center flex-column flex-lg-row border-0 mb-0">
                    <h2 className="text-transform-none mb-0">Popular Departments</h2>
               </div>
               <Slider {...settings}>
                    {popularDepartments.length < slidesToShow
                         ? [
                                ...popularDepartments,
                                ...Array(slidesToShow - popularDepartments.length).fill(null),
                           ].map((popularDepartment, index) =>
                                popularDepartment ? (
                                     <PopularDepartment {...popularDepartment} key={index} />
                                ) : (
                                     <div key={index}></div>
                                ),
                           )
                         : popularDepartments.map((popularDepartment, index) => (
                                <PopularDepartment {...popularDepartment} key={index} />
                           ))}
               </Slider>

               <div className="owl-carousel owl-theme">
                    <div className="banner banner-image font2">
                         <a href="demo40-shop.html">
                              <img
                                   src="assets/images/demoes/demo40/categories/category-1.jpg"
                                   width={374}
                                   height={200}
                                   alt="banner"
                                   style={{ backgroundColor: "#f4f4f4" }}
                              />
                         </a>
                         <div className="banner-layer banner-layer-middle">
                              <h3>Vegetables</h3>
                              <span>2 Products </span>
                         </div>
                    </div>
                    {/* End .banner */}
                    <div className="banner banner-image font2">
                         <a href="demo40-shop.html">
                              <img
                                   src="assets/images/demoes/demo40/categories/category-2.jpg"
                                   width={374}
                                   height={200}
                                   alt="banner"
                                   style={{ backgroundColor: "#f4f4f4" }}
                              />
                         </a>
                         <div className="banner-layer banner-layer-middle">
                              <h3>Fruits</h3>
                              <span>10 Products </span>
                         </div>
                    </div>
                    {/* End .banner */}
                    <div className="banner banner-image font2">
                         <a href="demo40-product.html">
                              <img
                                   src="assets/images/demoes/demo40/categories/category-3.jpg"
                                   width={374}
                                   height={200}
                                   alt="banner"
                                   style={{ backgroundColor: "#f4f4f4" }}
                              />
                         </a>
                         <div className="banner-layer banner-layer-middle">
                              <h3>Cooking</h3>
                              <span>4 Products </span>
                         </div>
                    </div>
                    {/* End .banner */}
                    <div className="banner banner-image font2">
                         <a href="demo40-shop.html">
                              <img
                                   src="assets/images/demoes/demo40/categories/category-4.jpg"
                                   width={374}
                                   height={200}
                                   alt="banner"
                                   style={{ backgroundColor: "#f4f4f4" }}
                              />
                         </a>
                         <div className="banner-layer banner-layer-middle">
                              <h3>Breakfast</h3>
                              <span>8 Products </span>
                         </div>
                    </div>
                    {/* End .banner */}
               </div>
               {/* End .cat-carousel */}
          </section>
     );
};

export default PopularDepartments;
