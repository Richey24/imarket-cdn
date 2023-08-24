import Product from "@/app/components/Product";
import { latestProducts } from "@/templates/Theme34/Home/data";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { templateImages } from "@/appProvider/templateImages";

const owlCarouselOptions = {
     dots: false,
     margin: 1,
     nav: true,
     loop: false,
     responsive: {
          "0": {
               items: 2,
          },
          "576": {
               items: 3,
          },
          "768": {
               items: 4,
          },
          "992": {
               items: 5,
          },
          "1200": {
               items: 6,
          },
     },
};

export default function RecentlyViewed() {
     return (
          <section className="recent-products-section tw-py-16">
               <div className="heading shop-list d-flex align-items-center flex-wrap bg-gray mb-0 pl-0 pr-0">
                    <h4 className="section-title text-transform-none mb-0 mr-0">
                         Recently Viewed Products
                    </h4>
                    <a className="view-all ml-auto" href="demo36-shop.html">
                         View All<i className="fas fa-long-arrow-alt-right"></i>
                    </a>
               </div>
               <OwlCarousel
                    className="products-slider owl-carousel owl-theme carousel-with-bg nav-circle "
                    {...owlCarouselOptions}
               >
                    {latestProducts.map((product, index) => {
                         return (
                              <Product
                                   key={product.title}
                                   imageSrc={
                                        templateImages.demo36.productImages[`product${index + 1}`]
                                   }
                                   productName={product.title}
                                   price={product.price}
                              />
                         );
                    })}
               </OwlCarousel>
          </section>
     );
}
