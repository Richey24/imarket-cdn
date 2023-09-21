import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import "./Featured.css";

const Featured = ({ featuredProducts }) => {
     return (
          <section
               className="section-2 featured-collection mt-5"
               data-animation-name="fadeIn"
               data-animation-delay="100"
          >
               <div className="container">
                    <h2 className="section-title">Featured Products</h2>

                    <div className="">
                         <div style={{ display: "flex", gap: "20px" }}>
                              {featuredProducts.slice(0, 3).map((product, index) => (
                                   <div
                                        id="feat1"
                                        className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark"
                                        key={index}
                                   >
                                        <figure style={{ height: "533px" }}>
                                             <a href="demo10-product.html">
                                                  <Image
                                                       src={templateImages.demo10.grid.gridImage1}
                                                       className="h-100"
                                                       alt="desc"
                                                       height="720"
                                                       width="720"
                                                  />
                                             </a>

                                             <div className="btn-icon-group">
                                                  <a href="#" className="btn-icon btn-icon-wish">
                                                       <i className="icon-wishlist-2"></i>
                                                  </a>
                                                  <a
                                                       href="#"
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                  >
                                                       <i className="icon-shopping-cart"></i>
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
                                                            href="demo10-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.category}
                                                       </a>
                                                  </div>
                                             </div>
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo10-product.html">
                                                       {product.productTitle}
                                                  </a>{" "}
                                             </h3>
                                             <div className="price-box">
                                                  <span className="product-price">
                                                       ${product.productPrice}
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                              <div>
                                   {featuredProducts
                                        .slice(0, 2)
                                        .map((product: any, index: number) => (
                                             <div
                                                  className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark"
                                                  key={index}
                                             >
                                                  <figure>
                                                       <a href="demo10-product.html">
                                                            <Image
                                                                 src={product.productImageUrl}
                                                                 className="h-100"
                                                                 alt="desc"
                                                                 width="231"
                                                                 height="231"
                                                            />
                                                       </a>

                                                       <div className="btn-icon-group">
                                                            <a
                                                                 href="#"
                                                                 className="btn-icon btn-icon-wish"
                                                            >
                                                                 <i className="icon-wishlist-2"></i>
                                                            </a>
                                                            <a
                                                                 href="#"
                                                                 className="btn-icon btn-add-cart product-type-simple"
                                                            >
                                                                 <i className="icon-shopping-cart"></i>
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
                                                                      href="demo10-shop.html"
                                                                      className="product-category"
                                                                 >
                                                                      {product.category}
                                                                 </a>
                                                            </div>
                                                       </div>
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo10-product.html">
                                                                 {product.productTitle}
                                                            </a>{" "}
                                                       </h3>
                                                       <div className="price-box">
                                                            <span className="product-price">
                                                                 ${product.productPrice}
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                              </div>
                         </div>
                         <div style={{ display: "flex", gap: "20px" }}>
                              {featuredProducts.slice(0, 2).map((product, index) => (
                                   <div
                                        className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark"
                                        key={index}
                                   >
                                        <figure>
                                             <a href="demo10-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       className="h-100"
                                                       alt="desc"
                                                       width="231"
                                                       height="231"
                                                  />
                                             </a>

                                             <div className="btn-icon-group">
                                                  <a href="#" className="btn-icon btn-icon-wish">
                                                       <i className="icon-wishlist-2"></i>
                                                  </a>
                                                  <a
                                                       href="#"
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                  >
                                                       <i className="icon-shopping-cart"></i>
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
                                                            href="demo10-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.category}
                                                       </a>
                                                  </div>
                                             </div>
                                             <h3 className="product-title">
                                                  <a href="demo10-product.html">
                                                       {product.productTitle}
                                                  </a>
                                             </h3>
                                             <div className="price-box">
                                                  <span className="product-price">
                                                       ${product.productPrice}
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                         <div className="grid-col-sizer col-1"></div>
                    </div>
               </div>
          </section>
     );
};

export default Featured;
