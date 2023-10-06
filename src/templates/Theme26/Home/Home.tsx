import React, { useEffect, useState } from "react";

import { Banner } from "./components/Banner";
import { PopularProducts } from "./components/PopularProducts";
import { Products } from "./components/Products";
import { TopSeller } from "./components/TopSeller";
import { Info } from "./components/Info";

export const Home = (props) => {
          const {
          static: statiProps,
          products,
          categories,
          featuredProducts: featuredProductData,
     } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);
     const [featuredProductsState, setFeaturedProducts] = useState<any>(null);

     useEffect(() => {
          if (products && !latestProductsState) {
               const latestProductsMap = products.map((product) => {
                    return {
                         productImageAlt: "product",
                         productCategory: "Fashion",
                         productImageUrl: "data:image/jpeg;base64," + product?.image_1920,
                         productImageUrlTwo: "data:image/jpeg;base64," + product?.image_1024,
                         productTitle: product.display_name,
                         productPrice: product.standard_price,
                         id: product.id,
                         slug: product.website_url,
                         tooltip: product.product_tooltip,
                         productImage: "data:image/jpeg;base64," + product?.image_1920,
                         productImageTwo: "data:image/jpeg;base64," + product?.image_1024,
                         __last_update: new Date(product.__last_update),
                    };
               });
               setLatestProducts(latestProductsMap);
          }
          if (featuredProductData && !featuredProductsState) {
               const featuredProductsMap = featuredProductData.map((product) => {
                    return {
                         productImageAlt: "product",
                         productCategory: "SHOES, TOYS",
                         productImageUrl: "data:image/jpeg;base64," + product?.image_1920,
                         productImageUrlTwo: "data:image/jpeg;base64," + product?.image_1024,
                         productTitle: product.display_name,
                         productPrice: product.standard_price,
                         id: product.id,
                         slug: product.website_url,
                         tooltip: product.product_tooltip,
                         productImage: "data:image/jpeg;base64," + product?.image_1920,
                         productImageTwo: "data:image/jpeg;base64," + product?.image_1024,
                         __last_update: new Date(product.__last_update),
                    };
               });
               setFeaturedProducts(featuredProductsMap);
          }
     }, [products, featuredProductData]);
     return (
          <main className="main">
               <Banner  slides={statiProps?.banner ?? []}/>
               <Info />
               <section
                    className="newsletter-section appear-animate"
                    data-animation-name="fadeInUpShorter"
                    data-animation-delay={200}
               >
                    <div className="container">
                         <div className="widget-newsletter">
                              <div className="row no-gutters m-0">
                                   <div className="col-md-5">
                                        <div className="info-box info-box-icon-left justify-content-start align-itmes-center">
                                             <i className="far fa-envelope line-height-1 text-primary" />
                                             <div className="info-content">
                                                  <h4 className="line-height-1 text-dark">
                                                       Get Special Offers and Savings
                                                  </h4>
                                                  <p className="font2 text-body">
                                                       Get all the latest information on Events,
                                                       Sales and Offers.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-md-7">
                                        <form className="newsletter-form" action="#" method="get">
                                             <input
                                                  type="email"
                                                  className="form-control font2 mb-0"
                                                  placeholder="Enter Your E-mail Address..."
                                             />
                                             <button
                                                  type="submit"
                                                  className="btn btn-submit text-white"
                                             >
                                                  Sign Up
                                             </button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <PopularProducts section="Featured Products"  products={featuredProductsState ?? []} />
               {/* <Products /> */}
               <TopSeller section="Latest Products" products={latestProductsState ?? []} />
               
          
          </main>
     );
};
