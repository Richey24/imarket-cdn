import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

interface Category {
     name: string;
     image: string;
     link: string;
}

interface CategoriesSliderProps {
     categories: Category[];
}

const CategoriesSlider: React.FC<CategoriesSliderProps> = ({ categories }) => {
     const owlCarouselOptions = {
          dots: false,
          margin: 0,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 3,
               },
          },
     };
     return (
          <OwlCarousel
               className=" owl-theme categories-slider content-center-bottom nav-outer"
               data-animation-name="fadeIn"
               data-animation-delay={100}
               {...owlCarouselOptions}
          >
               {categories.map((category, index) => (
                    <div className="product-category" key={index}>
                         <a href={category.link}>
                              <figure>
                                   <img
                                        src={category.image}
                                        width={220}
                                        height={220}
                                        alt="Category"
                                   />
                              </figure>
                              <div className="category-content">
                                   <h3>{category.name}</h3>
                              </div>
                         </a>
                    </div>
               ))}
          </OwlCarousel>
     );
};

export default CategoriesSlider;
