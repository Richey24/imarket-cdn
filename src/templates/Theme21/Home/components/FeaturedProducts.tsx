
import { useState } from "react";
import Slider from "react-slick";
import { featuredProducts } from "../data";
export const FeaturedProducts = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <section
               className="featured-products-section"
                
          >
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Featured Products</h2>
                    <div className="no-gutters">
                         <Slider {...settings}>
                              {featuredProducts.map((product) => (
                                   <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                             <a href="demo21-product.html">
                                                  <img
                                                       src={product.productImageUrl}
                                                       width={217}
                                                       height={217}
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="label-group">
                                                  <div className="product-label label-hot">HOT</div>
                                             </div>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo21-product.html"
                                                       className="btn-icon btn-add-cart"
                                                  >
                                                       <i className="fa fa-arrow-right" />
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
                                                       <a
                                                            href="demo21-shop.html"
                                                            className="product-category"
                                                       >
                                                            category
                                                       </a>
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Add to Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart" />
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo21-product.html">
                                                       Digital Camera 16x
                                                  </a>
                                             </h3>
                                             {/* <div class="ratings-container">
               <div class="product-ratings">
                   <span class="ratings" style="width:100%"></span>
                   <span class="tooltiptext tooltip-top"></span>
               </div>
           </div> */}
                                             <div className="price-box">
                                                  <span className="product-price">
                                                       $101.00 – $111.00
                                                  </span>
                                             </div>
                                             {/* End .price-box */}
                                        </div>
                                        {/* End .product-details */}
                                   </div>
                              ))}
                         </Slider>
                    </div>
               </div>
          </section>
     );
};
