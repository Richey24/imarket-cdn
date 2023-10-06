import Image from "next/image";
import { featuredProducts } from "../data";
import newsletter from "../../../../assets/images/demoes/demo10/newsletter_bg.jpg";

const Arrived = ({ setQuickView, arrivedProduct }) => {
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
                         <h2 className="section-title">JUST ARRIVED</h2>
                         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                              {arrivedProduct.slice(0, 5).map((product, i) => (
                                   <div
                                        style={{ width: "190px" }}
                                        key={i}
                                        className="product-default inner-quickview inner-icon"
                                   >
                                        <figure>
                                             <a href="demo10-product.html">
                                                  <Image
                                                       src={product.imageUrl1}
                                                       alt="product"
                                                       width="400"
                                                       height="400"
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
                                                            {product.category}
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
                                                       {product.productName}
                                                  </a>
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
               </section>
               <section className="section-4 container">
                    <div className="newsletter-section bg-img">
                         <div className="banner">
                              <Image src={newsletter} alt="desc" width="1000" height="400" />

                              <div className="banner-layer banner-layer-middle text-right">
                                   <h4>Sunglasses, Bags, Dresses and much more...</h4>
                                   <h3>
                                        <b className="text-white position-relative">BIG SALE</b> ALL
                                        NEW FASHION BRANDS ITEMS UP TO 70% OFF
                                   </h3>
                                   <a href="demo10-shop.html" className="btn btn-xl" role="button">
                                        Shop Now<i className="fas fa-chevron-right"></i>
                                   </a>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Arrived;
