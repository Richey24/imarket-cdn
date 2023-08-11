import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

interface Product {
     image1: string;
     image2: string;
     alt: string;
     label?: string;
     name: string;
     price: number;
}

interface TopRatedCardProps {
     products: Product[];
}

const TopRatedCard: React.FC<TopRatedCardProps> = ({ products }) => {
     const owlCarouselOptions = {
          dots: false,
          margin: 0,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 3,
               },
          },
     };
     return (
          <OwlCarousel className="owl-carousel owl-theme pb-2 mb-2" {...owlCarouselOptions}>
               {products.map((product, index) => (
                    <div className="product-default inner-quickview inner-icon" key={index}>
                         <figure>
                              <a href="demo11-product.html">
                                   <img
                                        src={product.image1}
                                        width={380}
                                        height={380}
                                        alt={product.alt}
                                   />
                                   <img
                                        src={product.image2}
                                        width={380}
                                        height={380}
                                        alt={product.alt}
                                   />
                              </a>
                              {product.label && (
                                   <div className="label-group">
                                        <div className="product-label label-hot">
                                             {product.label}
                                        </div>
                                   </div>
                              )}
                              <div className="btn-icon-group">
                                   <a
                                        href="#"
                                        className="btn-icon btn-add-cart product-type-simple"
                                   >
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
                                        <a href="demo11-shop.html" className="product-category">
                                             category
                                        </a>
                                   </div>
                                   <a
                                        href="wishlist.html"
                                        title="Wishlist"
                                        className="btn-icon-wish"
                                   >
                                        <i className="icon-heart" />
                                   </a>
                              </div>
                              <h3 className="product-title">
                                   <a href="demo11-product.html">{product.name}</a>
                              </h3>
                              <div className="price-box">
                                   <span className="old-price">$90.00</span>
                                   <span className="product-price">
                                        ${product.price.toFixed(2)}
                                   </span>
                              </div>
                              {/* End .price-box */}
                         </div>
                         {/* End .product-details */}
                    </div>
               ))}
          </OwlCarousel>
     );
};

export default TopRatedCard;
