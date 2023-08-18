import React from "react";
import OwlCarousel from "react-owl-carousel";
import { templateImages } from "@/appProvider/templateImages";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          576: {
               items: 2.5,
          },
          992: {
               items: 4,
          },
     },
};

export default function PopularDepartment() {
     return (
          <div className="tw-py-12">
               <h2 className="section-title">Popular Departments</h2>
               <p className="section-info font2">Products From These Categories Often Buy</p>

               <OwlCarousel className="categories-slider" {...owlCarouselOptions}>
                    <div className="product-category bg-white">
                         <a href="category.html">
                              <figure>
                                   <img
                                        src={templateImages.demo35.categoryImages.category3}
                                        alt="cat"
                                        width="341"
                                        height="200"
                                   />
                              </figure>
                              <div className="category-content">
                                   <h3 className="font2 ls-n-25">Cooking</h3>
                                   <span className="font2 ls-n-20">4 Products</span>
                              </div>
                         </a>
                    </div>
                    <div className="product-category bg-white">
                         <a href="category.html">
                              <figure>
                                   <img
                                        src={templateImages.demo35.categoryImages.category2}
                                        alt="cat"
                                        width="341"
                                        height="200"
                                   />
                              </figure>
                              <div className="category-content">
                                   <h3 className="font2 ls-n-25">Fruits</h3>
                                   <span className="font2 ls-n-20">10 Products</span>
                              </div>
                         </a>
                    </div>
                    <div className="product-category bg-white">
                         <a href="category.html">
                              <figure>
                                   <img
                                        src={templateImages.demo35.categoryImages.category1}
                                        alt="cat"
                                        width="341"
                                        height="200"
                                   />
                              </figure>
                              <div className="category-content">
                                   <h3 className="font2 ls-n-25">Vegetables</h3>
                                   <span className="font2 ls-n-20">1 Products</span>
                              </div>
                         </a>
                    </div>
                    <div className="product-category bg-white">
                         <a href="category.html">
                              <figure>
                                   <img
                                        src={templateImages.demo35.categoryImages.category4}
                                        alt="cat"
                                        width="341"
                                        height="200"
                                   />
                              </figure>
                              <div className="category-content">
                                   <h3 className="font2 ls-n-25">Breakfast</h3>
                                   <span className="font2 ls-n-20">8 Products</span>
                              </div>
                         </a>
                    </div>
               </OwlCarousel>
          </div>
     );
}
