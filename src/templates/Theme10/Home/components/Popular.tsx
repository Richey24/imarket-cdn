import Image from "next/image";
import { featuredProducts } from "../data";

const Popular = ({ setQuickView }) => {
     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "block";
               setQuickView(product);
          }
     };

     return (
          <div>
               <section className="section-3 product-collection">
                    <div className="container">
                         <h2 className="section-title">POPULAR PRODUCTS</h2>
                         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                              {featuredProducts.slice(0, 6).map((product, i) => (
                                   <div
                                        style={{ width: "230px" }}
                                        key={i}
                                        className="product-default inner-quickview inner-icon"
                                   >
                                        <figure>
                                             <a href="demo10-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       alt="product"
                                                       width="400"
                                                       height="400"
                                                  />
                                             </a>

                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo10-product.html"
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                  >
                                                       <i className="icon-shopping-cart"></i>
                                                  </a>
                                             </div>

                                             <div className="label-group">
                                                  <span className="product-label label-hot">
                                                       HOT
                                                  </span>
                                             </div>

                                             <a
                                                  style={{ cursor: "pointer" }}
                                                  onClick={() => showDiv(product)}
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
                                                  <a href="demo10-product.html">
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
                         <center>
                              <div className="load-more text-center d-inline-block">
                                   <a
                                        href="ajax/demo10-ajax-products.html"
                                        className="btn btn-xl loadmore"
                                        role="button"
                                   >
                                        LOAD MORE...
                                   </a>
                              </div>
                         </center>
                    </div>
               </section>
          </div>
     );
};

export default Popular;
