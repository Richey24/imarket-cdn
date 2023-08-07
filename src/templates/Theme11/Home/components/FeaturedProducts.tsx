import Product1 from "../../../../assets/images/demoes/demo21/products/product-1.jpg";
import Product from "../../../../assets/images/demoes/demo21/products/product-1-2.jpg";
import Product2 from "../../../../assets/images/demoes/demo21/products/product-2.jpg";
import Product3 from "../../../../assets/images/demoes/demo21/products/product-3.jpg";
import Product4 from "../../../../assets/images/demoes/demo21/products/product-4.jpg";
import Product5 from "../../../../assets/images/demoes/demo21/products/product-5.jpg";
import Product6 from "../../../../assets/images/demoes/demo21/products/product-6.jpg";
import Subproduct from "../../../../assets/images/demoes/demo21/products/product-3-2.jpg";

export const FeaturedProducts = () => {
     return (
          <section
               className="featured-products-section appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={200}
          >
               <div className="container">
                    <h2 className="section-title ls-n-10 pb-3 m-b-4">Featured Products</h2>
                    <div className="row no-gutters">
                         <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo21-product.html">
                                             <img
                                                  src={Product1.src}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                             <img
                                                  src={Product.src}
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
                                             <a href="demo21-product.html">Digital Camera 16x</a>
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
                         </div>
                         <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo21-product.html">
                                             <img
                                                  src={Product3.src}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                        </a>
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
                                             <a href="demo21-product.html">Porto Extended Camera</a>
                                        </h3>
                                        {/* <div class="ratings-container">
               <div class="product-ratings">
                   <span class="ratings" style="width:100%"></span>
                   <span class="tooltiptext tooltip-top"></span>
               </div>
           </div> */}
                                        <div className="price-box">
                                             <span className="product-price">$599.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo21-product.html">
                                             <img
                                                  src={Product3.src}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                             <img
                                                  src={Subproduct.src}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                             <div className="product-label label-sale">-26%</div>
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
                                             <a href="demo21-product.html">Black Grey Headset</a>
                                        </h3>
                                        {/* <div class="ratings-container">
               <div class="product-ratings">
                   <span class="ratings" style="width:100%"></span>
                   <span class="tooltiptext tooltip-top"></span>
               </div>
           </div> */}
                                        <div className="price-box">
                                             <span className="product-price">$29.00 – $39.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo21-product.html">
                                             <img
                                                  src={Product4.src}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>
                                             <div className="product-label label-sale">-13%</div>
                                        </div>
                                        <div className="btn-icon-group">
                                             <a
                                                  href="#"
                                                  title="Add To Cart"
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
                                             <a href="demo21-product.html">Battery Charger</a>
                                        </h3>
                                        {/* <div class="ratings-container">
               <div class="product-ratings">
                   <span class="ratings" style="width:100%"></span>
                   <span class="tooltiptext tooltip-top"></span>
               </div>
           </div> */}
                                        <div className="price-box">
                                             <span className="old-price">$299.00</span>
                                             <span className="product-price">$259.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo21-product.html">
                                             <img
                                                  src={Product5.src}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="btn-icon-group">
                                             <a
                                                  href="#"
                                                  title="Add To Cart"
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
                                             <a href="demo21-product.html">Brown Bag</a>
                                        </h3>
                                        {/* <div class="ratings-container">
               <div class="product-ratings">
                   <span class="ratings" style="width:100%"></span>
                   <span class="tooltiptext tooltip-top"></span>
               </div>
           </div> */}
                                        <div className="price-box">
                                             <span className="product-price">$299.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                         <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                              <div className="product-default inner-quickview inner-icon">
                                   <figure>
                                        <a href="demo21-product.html">
                                             <img
                                                  src={Product6.src}
                                                  width={217}
                                                  height={217}
                                                  alt="product"
                                             />
                                        </a>
                                        <div className="btn-icon-group">
                                             <a
                                                  href="#"
                                                  title="Add To Cart"
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
                                             <a href="demo21-product.html">Casual Note Bag</a>
                                        </h3>
                                        {/* <div class="ratings-container">
               <div class="product-ratings">
                   <span class="ratings" style="width:100%"></span>
                   <span class="tooltiptext tooltip-top"></span>
               </div>
           </div> */}
                                        <div className="price-box">
                                             <span className="product-price">$299.00</span>
                                        </div>
                                        {/* End .price-box */}
                                   </div>
                                   {/* End .product-details */}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
