import React, { useState } from "react";
import Slider from "react-slick";
import BrowseByCategory from "./BrowseByCategories";
import { StaticImageData } from "next/image";

interface Category {
     name: string;
     link: string;
     productsCount: number;
}

interface Props {
     categories: Category[];
}

const CategoriesSlider: React.FC<Props> = ({ categories }) => {
     const [currentSlide, setCurrentSlide] = useState(0);

     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 2,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <div className="categories-slider owl-theme show-nav-hover nav-outer">
               <Slider {...settings} style={{ marginRight: "20px" }}>
                    {categories.map((category, index) => (
                         <BrowseByCategory
                              categoryName={category.name}
                              count={category.productsCount}
                              key={index}
                         />
                    ))}
               </Slider>
          </div>
     );
};

export default CategoriesSlider;
