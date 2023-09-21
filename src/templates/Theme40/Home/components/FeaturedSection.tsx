import Slider from "react-slick";
import { ProductProps } from "../types";
import { Product } from "./Product";
import { templateImages } from "@/appProvider/templateImages";
import { useState } from "react";
import { bestProducts, newProducts, onSaleProducts } from "../data";
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
const FeaturedSection = () => {
     const [tabToShow, setTabToShow] = useState("best");
     return (
          <section className="featured-section">
               <div className="heading d-flex align-items-center">
                    <h2 className="text-transform-none mb-0">Featured Items</h2>
                    <ul className="nav justify-content-center" id="myTab" role="tablist">
                         <li className="nav-item">
                              <a
                                   className={`nav-link ${
                                        tabToShow === "best" ? "text-primary" : null
                                   }`}
                                   id="best-products-tab"
                                   data-toggle="tab"
                                   href="#best-products"
                                   role="tab"
                                   aria-controls="best-products"
                                   aria-selected="true"
                                   onClick={(e) => {
                                        e.preventDefault();
                                        setTabToShow("best");
                                   }}
                              >
                                   Best Sellers
                              </a>
                         </li>
                         <li className="nav-item">
                              <a
                                   className={`nav-link ${
                                        tabToShow === "new" ? "text-primary" : null
                                   }`}
                                   id="new-products-tab"
                                   data-toggle="tab"
                                   href="#new-products"
                                   role="tab"
                                   aria-controls="new-products"
                                   aria-selected="false"
                                   onClick={(e) => {
                                        e.preventDefault();
                                        setTabToShow("new");
                                   }}
                              >
                                   New
                              </a>
                         </li>
                         <li className="nav-item">
                              <a
                                   className={`nav-link ${
                                        tabToShow === "onSale" ? "text-primary" : null
                                   }`}
                                   id="sale-products-tab"
                                   data-toggle="tab"
                                   href="#sale-products"
                                   role="tab"
                                   aria-controls="sale-products"
                                   aria-selected="false"
                                   onClick={(e) => {
                                        e.preventDefault();
                                        setTabToShow("onSale");
                                   }}
                              >
                                   On Sale
                              </a>
                         </li>
                    </ul>
               </div>
               <div className="tab-content">
                    <div
                         className={`tab-pane ${tabToShow === "best" ? "show active" : null}`}
                         id="best-products"
                         role="tabpanel"
                         aria-labelledby="best-products-tab"
                    >
                         <Slider {...settings}>
                              {bestProducts.length < slidesToShow
                                   ? [
                                          ...bestProducts,
                                          ...Array(slidesToShow - bestProducts.length).fill(null),
                                     ].map((product, index) =>
                                          product ? (
                                               <Product {...product} key={index} />
                                          ) : (
                                               <div key={index}></div>
                                          ),
                                     )
                                   : bestProducts.map((product, index) => (
                                          <Product {...product} key={index} />
                                     ))}
                         </Slider>
                    </div>
                    <div
                         className={`tab-pane ${tabToShow === "new" ? "show active" : null}`}
                         id="new-products"
                         role="tabpanel"
                         aria-labelledby="new-products-tab"
                    >
                         <Slider {...settings}>
                              {newProducts.length < slidesToShow
                                   ? [
                                          ...newProducts,
                                          ...Array(slidesToShow - newProducts.length).fill(null),
                                     ].map((product, index) =>
                                          product ? (
                                               <Product {...product} key={index} />
                                          ) : (
                                               <div key={index}></div>
                                          ),
                                     )
                                   : newProducts.map((product, index) => (
                                          <Product {...product} key={index} />
                                     ))}
                         </Slider>
                    </div>
                    <div
                         className={`tab-pane ${tabToShow === "onSale" ? "show active" : null}`}
                         id="sale-products"
                         role="tabpanel"
                         aria-labelledby="sale-products-tab"
                    >
                         <Slider {...settings}>
                              {onSaleProducts.length < slidesToShow
                                   ? [
                                          ...onSaleProducts,
                                          ...Array(slidesToShow - onSaleProducts.length).fill(null),
                                     ].map((product, index) =>
                                          product ? (
                                               <Product {...product} key={index} />
                                          ) : (
                                               <div key={index}></div>
                                          ),
                                     )
                                   : onSaleProducts.map((product, index) => (
                                          <Product {...product} key={index} />
                                     ))}
                         </Slider>
                    </div>
               </div>
          </section>
     );
};

export default FeaturedSection;
