import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import { products } from "../data";

const Recent = ({ setQuickView }) => {
     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "block";
               setQuickView(product);
          }
     };

     return (
          <div>
               <section
                    className="promo-section bg-primary"
                    style={{ backgroundImage: `url(${templateImages.demo25.bannerImage.banner6})` }}
               >
                    <div className="container">
                         <div className="row align-items-center">
                              <div className="col-10 col-sm-7 col-lg-5 mb-2 mb-lg-0">
                                   <h5 className="font-weight-normal text-uppercase mb-0">
                                        <i>Available Once a year</i>
                                   </h5>
                                   <div className="d-inline-block">
                                        <h2 className="ls-n-10 text-white mb-0">
                                             Get 30% off on orders over $299
                                        </h2>
                                        <p className="font2 text-right text-uppercase text-white mb-0">
                                             * Selected books
                                        </p>
                                   </div>
                              </div>
                              <div
                                   className="col-7 col-lg-3"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay="500"
                              >
                                   <a href="demo25-shop.html" className="btn btn-quaternary">
                                        Explore Books{" "}
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                   </a>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="recent-section">
                    <div className="container">
                         <h2 className="section-title pb-3 mb-2">Recent Books</h2>

                         <div className="row">
                              {products.slice(0, 6).map((product, i) => (
                                   <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2">
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <a href="demo25-product.html">
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="217"
                                                            height="217"
                                                            alt="product"
                                                       />
                                                  </a>
                                                  <div className="label-group">
                                                       <div className="product-label label-hot">
                                                            HOT
                                                       </div>
                                                  </div>
                                                  <div className="btn-icon-group">
                                                       <a
                                                            href="demo25-product.html"
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
                                                                 href="demo25-shop.html"
                                                                 className="product-category"
                                                            >
                                                                 {product.productCategory}
                                                            </a>
                                                       </div>
                                                       <a
                                                            href="wishlist.html"
                                                            title="Add to Wishlist"
                                                            className="btn-icon-wish"
                                                       >
                                                            <i className="icon-heart"></i>
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       <a href="demo25-product.html">
                                                            {product.productTitle}
                                                       </a>
                                                  </h3>
                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            $2{product.productPrice}.0
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Recent;
