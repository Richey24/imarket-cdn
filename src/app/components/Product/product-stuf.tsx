"use client";
import React, { useContext } from "react";
import OwlCarouselComponent from "@/app/components/OWlCarousel";
import ProductWidget from "./ProductWidget";
import Product from ".";
import { AppContext } from "@/appProvider";

export default function ProductStuf() {
     const { site, products, categories, featuredProducts } = useContext(AppContext);

     console.log({ products });
     const img =
          "https://images.unsplash.com/photo-1695686331766-16a2c3c2c382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80";
     function shuffleArray(array) {
          if (array) {
               const shuffledArray = array.slice(); // Create a copy of the original array

               for (let i = shuffledArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
               }

               return shuffledArray;
          }
          return [];
     }
     const obj = {
          "FEATURED PRODUCTS": shuffleArray(
               featuredProducts && featuredProducts.length > 0 ? featuredProducts : products,
          ).slice(0, 5),
          "BEST SELLING PRODUCTS": shuffleArray(products).slice(0, 5),
          "LATEST PRODUCTS": shuffleArray(products).slice(0, 5),
          "TOP RATED PRODUCTS": shuffleArray(products).slice(0, 5),
     };
     return (
          <div>
               <div className="products-section pt-0">
                    <h2 className="section-title">Related Products</h2>

                    <OwlCarouselComponent
                         className={"products-slider"}
                         isResponsive={true}
                         responsive={{
                              "480": {
                                   items: 2,
                              },
                              "768": {
                                   items: 3,
                              },
                              "992": {
                                   items: 4,
                              },
                         }}
                    >
                         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((product, idx) => {
                              return (
                                   <Product
                                        key={idx}
                                        imageSrc={img}
                                        productName="Product title"
                                        price={"$299.00"}
                                   />
                              );
                         })}
                    </OwlCarouselComponent>
               </div>
               <div className="product-widgets-container row tw-pb-2 tw-mt-24">
                    {Object.keys(obj).map((label) => {
                         return (
                              <div key={label} className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                                   <h4 className=" tw-font-semibold tw-text-xl md:tw-text-2xl tw-mb-4">
                                        {label}
                                   </h4>
                                   {obj[label] &&
                                        obj[label].length > 0 &&
                                        obj[label].map((prod) => {
                                             return (
                                                  <ProductWidget
                                                       key={prod.id}
                                                       id={prod.id}
                                                       imageSrc={
                                                            "data:image/jpeg;base64," +
                                                            prod.image_256
                                                       }
                                                       productName={prod.display_name}
                                                       category={"SHOES, TOYS"}
                                                       price={prod.standard_price}
                                                       showCategory={false}
                                                  />
                                             );
                                        })}
                              </div>
                         );
                    })}
               </div>
          </div>
     );
}
