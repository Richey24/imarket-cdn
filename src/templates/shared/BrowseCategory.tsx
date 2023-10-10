import React from "react";
// import OwlCarousel from "react-owl-carousel";
import ShopByCategory from "./ShopByCategory";

const BrowseCategory = ({ categories }): JSX.Element => {
     const owlCarouselOptions = {
          infinite: true,
          speed: 500,
          items: 6,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
     };

     return (
          // <OwlCarousel className="info-boxes-slider owl-carousel owl-theme" {...owlCarouselOptions}>
          //      {categories &&
          //           categories.length > 0 &&
          //           categories.map((item, index) => <ShopByCategory key={index} {...item} />)}
          // </OwlCarousel>
          <div>hello</div>
     );
};

export default BrowseCategory;
