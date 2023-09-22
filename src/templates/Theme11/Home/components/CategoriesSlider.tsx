import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { CategoryIconComponent } from "@/utils/Categoryicon";

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
          margin: 16,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 5,
               },
          },
     };
     return (
          <OwlCarousel
               className="owl-theme categories-slider content-center-bottom nav-outer"
               data-animation-name="fadeIn"
               data-animation-delay={100}
               {...owlCarouselOptions}
          >
               {categories.map((category, index) => (
                    <div className="product-category" key={index}>
                         <a href={category.link}>
                              <CategoryIconComponent categoryName={category.name} fontSize={70} />
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
