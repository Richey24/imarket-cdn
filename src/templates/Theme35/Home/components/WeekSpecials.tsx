import Product from "@/app/components/Product";
import { latestProducts } from "@/templates/Theme34/Home/data";
import React from "react";
// import OwlCarousel from "react-owl-carousel";
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
               items: 6,
          },
     },
};

export default function WeekSpecials() {
     return (
          <section className="special-section tw-py-16">
               <h2 className="section-title">This {"Week's"} Specials</h2>
               <p className="section-info font2">
                    All our new arrivals in a exclusive brand selection
               </p>

               {/* <OwlCarousel
                    className="products-container bg-white mb-4 rounded"
                    {...owlCarouselOptions}
               >
                    {latestProducts.map((product, index) => {
                         return (
                              <Product
                                   key={product.title}
                                   imageSrc={
                                        templateImages.demo35.productImages[`product${index + 1}`]
                                   }
                                   productName={product.title}
                                   price={product.price}
                              />
                         );
                    })}
               </OwlCarousel> */}
          </section>
     );
}
