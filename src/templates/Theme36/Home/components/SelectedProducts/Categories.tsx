import React from "react";
import OwlCarousel from "react-owl-carousel";
import { templateImages } from "@/appProvider/templateImages";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          "0": {
               items: 2,
          },
          "480": {
               items: 3,
          },
          "576": {
               items: 4,
          },
          "768": {
               items: 5,
          },
          "992": {
               items: 7,
          },
          "1200": {
               items: 8,
          },
     },
};
const data = [
     { title: "Fashion", totalProducts: 7 },
     { title: "Furniture", totalProducts: 1 },
     { title: "Sports", totalProducts: 2 },
     { title: "Toys", totalProducts: 2 },
     { title: "Cameras", totalProducts: 1 },
     { title: "Gaming", totalProducts: 1 },
     { title: "Headphones", totalProducts: 1 },
     { title: "Smartphones", totalProducts: 1 },
];
export default function PopularDepartment() {
     return (
          <div className="categories-section tw-py-12">
               <OwlCarousel
                    className="categories-slider owl-carousel owl-theme show-nav-hover nav-outer"
                    {...owlCarouselOptions}
               >
                    {data.map((category, index) => {
                         return (
                              <div key={category.title} className="product-category ">
                                   <a href={`/category/${category.title}`}>
                                        <figure>
                                             <img
                                                  src={
                                                       templateImages.demo36.categoryImages[
                                                            `category${index + 1}`
                                                       ]
                                                  }
                                                  alt="cat"
                                                  width="341"
                                                  height="200"
                                             />
                                        </figure>
                                        <div className="category-content">
                                             <h3 className="font2 ls-n-25">{category.title}</h3>
                                             <span className="font2 ls-n-20">
                                                  {category.totalProducts} Products
                                             </span>
                                        </div>
                                   </a>
                              </div>
                         );
                    })}
               </OwlCarousel>
          </div>
     );
}
