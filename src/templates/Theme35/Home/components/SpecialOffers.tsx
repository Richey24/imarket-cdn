import Product from "@/app/components/Product";
import { latestProducts } from "@/templates/Theme34/Home/data";
import React from "react";
import { templateImages } from "@/appProvider/templateImages";

export default function WeekSpecials() {
     return (
          <section className="special-section tw-py-16">
               <h2 className="section-title">Special Offers</h2>
               <p className="section-info font2">
                    All our new arrivals in a exclusive brand selection
               </p>

               <div className="row offer-products">
                    <div
                         className="col-md-4 "
                         data-animation-name="fadeInRightShorter"
                         data-animation-delay="100"
                    >
                         <div className="count-deal bg-white rounded mb-md-0">
                              <div className="product-default">
                                   <figure>
                                        <a href="demo35-product.html">
                                             <img
                                                  src={
                                                       templateImages.demo35.productImages.product16
                                                  }
                                                  alt="product"
                                                  width="1200"
                                                  height="1200"
                                             />
                                        </a>
                                        <div className="product-countdown-container">
                                             <span className="product-countdown-title">
                                                  offer ends in:
                                             </span>
                                             <div
                                                  className="product-countdown countdown-compact"
                                                  data-until="2021, 10, 5"
                                                  data-compact="true"
                                             ></div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a
                                                  href="demo35-shop.html"
                                                  className="product-category"
                                             >
                                                  Category
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="demo35-product.html">Raw Meat</a>
                                        </h3>

                                        <div className="price-box">
                                             <del className="old-price">$59.00</del>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart"></i>
                                             </a>
                                             <a
                                                  href="product.html"
                                                  className="btn-icon btn-add-cart product-type-simple"
                                             >
                                                  <i className="icon-shopping-cart"></i>
                                                  <span>ADD TO CART</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt"></i>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="col-md-8">
                         <div className="custom-products bg-white rounded">
                              <div className="row">
                                   {latestProducts.map((product, index) => {
                                        return (
                                             <div
                                                  key={product.title}
                                                  className="col-6 col-sm-4 col-xl-3"
                                             >
                                                  <Product
                                                       imageSrc={
                                                            templateImages.demo35.productImages[
                                                                 `product${index + 1}`
                                                            ]
                                                       }
                                                       productName={product.title}
                                                       price={product.price}
                                                  />
                                             </div>
                                        );
                                   })}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
