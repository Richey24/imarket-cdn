import React, { FC, useState } from "react";
import Slider from "react-slick";
import { ProductItemProps, ProductsProps } from "../types";
import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";

const ProductItem: React.FC<ProductItemProps> = ({
     productImageUrl,
     productName,
     productPrice,
     productCategory,
}) => {
     return (
          <div className="product-default inner-quickview inner-icon mx-2">
               <figure>
                    <div style={{ width: "300px", height: "300px", overflow: "hidden" }}>
                         <Image
                              style={{ width: "100%", height: "100%" }}
                              src={productImageUrl}
                              width={300}
                              height={300}
                              alt="product"
                         />
                    </div>

                    <div className="btn-icon-group">
                         <a href="#" className="btn-icon btn-add-cart product-type-simple">
                              <i className="icon-shopping-cart" />
                         </a>
                    </div>
                    <a
                         href="ajax/product-quick-view.html"
                         className="btn-quickview"
                         title="Quick View"
                    >
                         Quick View
                    </a>
               </figure>
               <div className="product-details">
                    <div className="category-wrap">
                         <div className="category-list">
                              <a href="demo18-shop.html" className="product-category">
                                   {productCategory}
                              </a>
                         </div>
                         <a href="wishlist.html" title="Wishlist" className="btn-icon-wish">
                              <i className="icon-heart" />
                         </a>
                    </div>
                    <h3 className="product-title">
                         <a href="demo18-product.html">{productName}</a>
                    </h3>
                    <div className="price-box">
                         <span className="product-price">${productPrice}</span>
                    </div>
               </div>
          </div>
     );
};

const FeaturedProducts: FC<ProductsProps> = ({ products }) => {
     const [currentSlide, setCurrentSlide] = useState(0);

     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };

     return (
          <section className="product-slider-section bg-gray">
               <div className="container-fluid">
                    <h2
                         className="subtitle text-center text-uppercase mb-2 "
                         data-animation-name="fadeIn"
                    >
                         Featured products
                    </h2>
                    <div
                         className="featured-products  owl-theme show-nav-hover nav-outer nav-image-center mb-3 "
                         data-animation-name="fadeIn"
                    >
                         <Slider {...settings}>
                              {products.map((product, index) => (
                                   <ProductItem
                                        productImageUrl={product.productImageUrl}
                                        productCategory={product.productCategory}
                                        productName={product.productName}
                                        productPrice={product.productPrice}
                                        key={index}
                                   />
                              ))}
                         </Slider>
                    </div>
                    {/* End .featured-produts */}
                    <div className="row">
                         <div className="col-lg-6">
                              <div
                                   className="banner "
                                   data-animation-name="fadeInLeftShorter"
                                   style={{ backgroundColor: "#fff" }}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo18.bannerImage.banner3}
                                             alt="banner"
                                             width={873}
                                             height={151}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle d-flex align-items-center justify-content-between">
                                        <div className="">
                                             <h4 className="mb-0">Summer Sale</h4>
                                             <h5 className="text-uppercase mb-0">20% off</h5>
                                        </div>
                                        <a href="demo18-shop.html" className="btn btn-dark">
                                             Shop now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-lg-6">
                              <div
                                   className="banner "
                                   data-animation-name="fadeInRightShorter"
                                   data-animation-delay={400}
                                   style={{ backgroundColor: "#111" }}
                              >
                                   <figure>
                                        <img
                                             src={templateImages.demo18.bannerImage.banner4}
                                             alt="banner"
                                             width={873}
                                             height={151}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle d-flex align-items-center justify-content-between">
                                        <div className="">
                                             <h4 className="text-white mb-0">Flash Sale</h4>
                                             <h5 className="text-uppercase text-white mb-0">
                                                  30% off
                                             </h5>
                                        </div>
                                        <a href="demo18-shop.html" className="btn btn-light">
                                             Shop now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* End .container-fluid */}
          </section>
     );
};

export default FeaturedProducts;
