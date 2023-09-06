import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";

interface ProductData {
     imageUrl1: string | StaticImageData;
     imageUrl2: string | StaticImageData;
     altText?: string;
     category: string;
     productName: string;
     oldPrice?: number;
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

                    <Slider {...settings}>
                         {products &&
                              products.map((product, index) => (
                                   <div className="product-default mx-2" key={index}>
                                        <figure style={{ marginRight: "20px", height: 280 }}>
                                             <a href="product.html">
                                                  <Image
                                                       src={product.imageUrl1}
                                                       width="280"
                                                       height="280"
                                                       alt="product"
                                                  />
                                                  <Image
                                                       src={product.imageUrl2}
                                                       width="280"
                                                       height="280"
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="label-group">
                                                  <div className="product-label label-hot">HOT</div>
                                                  <div className="product-label label-sale">
                                                       -20%
                                                  </div>
                                             </div>
                                        </figure>
                                        <div className="product-details">
                                             <div className="category-list">
                                                  <a
                                                       href="category.html"
                                                       className="product-category"
                                                  >
                                                       {product.category}
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="product.html">{product.productName}</a>
                                             </h3>

                                             <div className="price-box">
                                                  <del className="old-price">
                                                       {product.oldPrice}
                                                  </del>
                                                  <span className="product-price">
                                                       ${product.productPrice}
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
