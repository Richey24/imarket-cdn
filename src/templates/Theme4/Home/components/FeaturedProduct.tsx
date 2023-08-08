import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import slide2 from "../../../../assets/images/demoes/demo13/slider/slide-2.jpg";
import Slider from "react-slick";

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
     section: string;
}

const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ products, section }) => {
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
          <section className="featured-products-section">
               <div className="container">
                    <h2 className="section-title heading-border ls-20 border-0 color-black">
                         {section}
                    </h2>

                    <Slider {...settings} style={{ marginRight: "20px" }}>
                         {products.map((product, index) => (
                              <div
                                   className="product-default "
                                   key={index}
                                   style={{
                                        marginRight: "30px !important",
                                        marginLeft: "30px !important",
                                        padding: "20px !important",
                                   }}
                              >
                                   <figure style={{ marginRight: "20px", height: 280 }}>
                                        <a href="product.html">
                                             <img
                                                  src={product.imageUrl1}
                                                  width="280"
                                                  height="280"
                                                  alt="product"
                                             />
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
                    </Slider>
               </div>
          </section>
     );
};

export default FeaturedProductsSection;
