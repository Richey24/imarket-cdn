import React, { useState } from "react";
import Slider from "react-slick";

interface Category {
     name: string;
     link: string;
     image: string;
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
          <div className="categories-slider owl-carousel owl-theme show-nav-hover nav-outer">
               <Slider {...settings}>
                    {categories.map((category, index) => (
                         <div
                              className="product-category"
                              data-animation-name="fadeInUpShorter"
                              key={index}
                         >
                              <a href={category.link}>
                                   <figure>
                                        <img
                                             src={category.image}
                                             alt={category.name}
                                             width={280}
                                             height={240}
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>{category.name}</h3>
                                        <span>
                                             <mark className="count">{category.productsCount}</mark>{" "}
                                             products
                                        </span>
                                   </div>
                              </a>
                         </div>
                    ))}
               </Slider>
          </div>
     );
};

export default CategoriesSlider;
