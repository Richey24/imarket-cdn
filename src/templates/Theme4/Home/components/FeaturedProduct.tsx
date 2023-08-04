import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

interface ProductData {
     imageUrl1: string;
     imageUrl2: string;
     altText: string;
     category: string;
     productName: string;
     ratings: number;
     oldPrice: number;
     productPrice: number;
}

interface FeaturedProductsSectionProps {
     products: ProductData[];
}

const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ products }) => {
     const [imageWidths, setImageWidths] = useState<number[]>([]);
     const owlCarouselOptions = {
          dots: false,
          margin: 20,
          nav: true,
     };

     return (
          <section className="featured-products-section">
               <div className="container">
                    <h2 className="section-title heading-border ls-20 border-0">
                         Featured Products
                    </h2>
                    <OwlCarousel
                         className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center"
                         {...owlCarouselOptions}
                    >
                         {products.map((product, index) => (
                              <div className="product-default" key={index}>
                                   <figure>
                                        <a href="product.html">
                                        <img src={product.imageUrl1} width="280" height="280" alt="product" />
                                    {/* <img src="assets/images/products/product-2-2.jpg" width="280" height="280" alt="product"> */}
                                             {/* <NextImage
                                                  src={product.imageUrl1}
                                                  width={imageWidths[index] || 280}
                                                  height={280}
                                                  alt={product.altText}
                                                  layout="fixed"
                                             /> */}
                                             {/* <NextImage
                                                  src={product.imageUrl2}
                                                  width={imageWidths[index] || 280}
                                                  height={280}
                                                  alt={product.altText}
                                             /> */}
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                             <div className="product-label label-sale">-20%</div>
                                        </div>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-list">
                                             <a href="category.html" className="product-category">
                                                  {product.category}
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="product.html">{product.productName}</a>
                                        </h3>
                                        <div className="ratings-container">
                                             <div className="product-ratings">
                                                  <span
                                                       className="ratings"
                                                       style={{ width: product.ratings + "%" }}
                                                  />
                                                  <span className="tooltiptext tooltip-top" />
                                             </div>
                                        </div>
                                        <div className="price-box">
                                             <del className="old-price">
                                                  ${product.oldPrice.toFixed(2)}
                                             </del>
                                             <span className="product-price">
                                                  ${product.productPrice.toFixed(2)}
                                             </span>
                                        </div>
                                        <div className="product-action">
                                             <a
                                                  href="wishlist.html"
                                                  className="btn-icon-wish"
                                                  title="wishlist"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                             <a
                                                  href="product.html"
                                                  className="btn-icon btn-add-cart"
                                             >
                                                  <i className="fa fa-arrow-right" />
                                                  <span>SELECT OPTIONS</span>
                                             </a>
                                             <a
                                                  href="ajax/product-quick-view.html"
                                                  className="btn-quickview"
                                                  title="Quick View"
                                             >
                                                  <i className="fas fa-external-link-alt" />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </OwlCarousel>
               </div>
          </section>
     );
};

export default FeaturedProductsSection;
