import Product from "@/app/components/Product";
import React from "react";
import OwlCarousel from "react-owl-carousel";

const ProductSlider = ({ products }): JSX.Element => {
     const owlCarouselOptions = {
          dots: true,
          margin: 20,
          nav: false,
          loop: false,
          responsive: {
               "0": {
                    items: 2,
               },
               "768": {
                    items: 3,
               },
               "991": {
                    items: 4,
               },
          },
     };

     return (
          <OwlCarousel
               className="owl-carousel owl-theme dots-top dots-small"
               {...owlCarouselOptions}
          >
               {products &&
                    products.length > 0 &&
                    products.map((item, index) => (
                         <Product
                              key={item.id}
                              imageSrc={item.productImageUrl}
                              productName={item.productTitle}
                              price={item.productPrice}
                         />
                    ))}
          </OwlCarousel>
     );
};

export default ProductSlider;
