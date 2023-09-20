import Image from "next/image";
import { featuredProducts } from "../data";

export const Product = ({ setQuickView }) => {
     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "block";
               setQuickView(product);
          }
     };

     return (
          <div>
               <div className="container-fluid m-b-5 p-b-3">
                    <div className="feature-boxes-container pb-3">
                         <div className="row mt-7 mb-1">
                              <div className="col-xl-3 col-sm-6">
                                   <div className="feature-box px-sm-5 px-md-5 mx-sm-5 mx-md-3 feature-box-simple feature-rounded text-center">
                                        <i className="icon-earphones-alt bg-secondary text-white m-b-3"></i>

                                        <div className="feature-box-content p-0">
                                             <h3 className="m-b-1">Customer Support</h3>
                                             <h5 className="font-weight-normal line-height-1 m-b-3">
                                                  Need Assistance?
                                             </h5>

                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Duis nec vestibulum magna, et dapib.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                              <div
                                   className="col-xl-3 col-sm-6 "
                                   data-animation-name="fadeInRightShorter"
                              >
                                   <div className="feature-box px-sm-5 px-md-5 mx-sm-5 mx-md-3 feature-box-simple feature-rounded text-center">
                                        <i className="icon-credit-card  bg-secondary text-white m-b-3"></i>

                                        <div className="feature-box-content p-0">
                                             <h3 className="m-b-1">Secured Payment</h3>
                                             <h5 className="font-weight-normal line-height-1 m-b-3">
                                                  Safe &amp; Fast
                                             </h5>

                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Duis nec vestibulum magna, et dapibus lacus.
                                                  Lorem ipsum dolor sit amet.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                              <div
                                   className="col-xl-3 col-sm-6 "
                                   data-animation-name="fadeInLeftShorter"
                              >
                                   <div className="feature-box px-sm-5 px-md-5 mx-sm-5 mx-md-3 feature-box-simple feature-rounded text-center">
                                        <i className="icon-action-undo  bg-secondary text-white m-b-3"></i>

                                        <div className="feature-box-content p-0">
                                             <h3 className="m-b-1">FREE RETURNS</h3>
                                             <h5 className="font-weight-normal line-height-1 m-b-3">
                                                  Easy &amp; Free
                                             </h5>

                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Duis nec vestibulum magna, et dapib.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                              <div
                                   className="col-xl-3 col-sm-6 "
                                   data-animation-delay="500"
                                   data-animation-name="fadeInLeftShorter"
                              >
                                   <div className="feature-box px-sm-5 px-md-5 mx-sm-5 mx-md-3 feature-box-simple feature-rounded text-center">
                                        <i className="icon-shipping bg-secondary text-white m-b-3"></i>

                                        <div className="feature-box-content p-0">
                                             <h3 className="m-b-1">FREE SHIPPING</h3>
                                             <h5 className="font-weight-normal line-height-1 m-b-3">
                                                  Orders Over $99
                                             </h5>

                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Duis nec vestibulum magna, et dapib.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="products-bottom ">
                         <div className="title-group text-center mb-2 mt-4 p-t-3">
                              <h2 className="section-title text-uppercase ls-n-10">
                                   Featured Products
                              </h2>
                         </div>
                         <div
                              style={{ display: "flex", gap: "20px" }}
                              className="featured-products nav-outer show-nav-hover"
                         >
                              {featuredProducts.slice(0, 5).map((product, i) => (
                                   <div
                                        key={i}
                                        className="product-default inner-quickview inner-icon"
                                   >
                                        <figure>
                                             <a href="demo6-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       width="400"
                                                       height="400"
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="#"
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                  >
                                                       <i className="icon-shopping-cart"></i>
                                                  </a>
                                             </div>
                                             <a
                                                  onClick={() => showDiv(product)}
                                                  style={{ cursor: "pointer" }}
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
                                                            href="demo6-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.productCategory}
                                                       </a>
                                                       ,
                                                  </div>
                                                  <a
                                                       href="wishlist.html"
                                                       title="Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart"></i>
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo6-product.html">
                                                       {product.productTitle}
                                                  </a>{" "}
                                             </h3>
                                             <div className="price-box">
                                                  <span className="product-price">
                                                       ${product.productPrice}.00
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};
