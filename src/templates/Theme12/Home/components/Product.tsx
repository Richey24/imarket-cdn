import Image from "next/image";
import { bestSeller } from "../data";

const Product = ({ setQuickView, featuredProduct, latestProducts, products }) => {
     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "block";
               setQuickView(product);
          }
     };

     return (
          <div>
               <section className="section-4 top-collection">
                    <h2 className="section-title text-center">TOP BRANDS COLLECTION</h2>
                    <div className="container">
                         <div
                              style={{ display: "flex", columnGap: "3px" }}
                              className="products-slider"
                         >
                              {products.slice(0, 5).map((product, i) => (
                                   <div key={i} className="product-default">
                                        <figure>
                                             <a href="demo12-product.html">
                                                  <Image
                                                       width={200}
                                                       height={200}
                                                       src={product.productImageUrl}
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>

                                        <div className="product-details">
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo12-product.html">
                                                       {product.productTitle}
                                                  </a>
                                             </h3>

                                             <div className="price-box">
                                                  <span className="product-price">
                                                       ${product.productPrice}.00
                                                  </span>
                                             </div>

                                             <div className="product-action">
                                                  <a
                                                       href="wishlist.html"
                                                       title="Wishlist"
                                                       className="btn-icon-wish"
                                                  >
                                                       <i className="icon-heart"></i>
                                                  </a>
                                                  <a
                                                       href="demo12-product.html"
                                                       className="btn-icon btn-add-cart"
                                                  >
                                                       <i className="fa fa-arrow-right"></i>
                                                       <span>SELECT OPTIONS</span>
                                                  </a>
                                                  <a
                                                       style={{ cursor: "pointer" }}
                                                       onClick={() => showDiv(product)}
                                                       className="btn-quickview"
                                                       title="Quick View"
                                                  >
                                                       <i className="fas fa-external-link-alt"></i>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>
               <section className="section-4 top-collection">
                    <h2 className="section-title text-center">SUMMER SALE - UP TO 70%</h2>
                    <div className="container">
                         <div
                              style={{ display: "flex", columnGap: "3px" }}
                              className="products-slider"
                         >
                              {products
                                   .sort((a: any, b: any) => b.__last_update - a.__last_update)
                                   .slice(5, 10)
                                   .map((product, i) => (
                                        <div key={i} className="product-default">
                                             <figure>
                                                  <a href="demo12-product.html">
                                                       <Image
                                                            width={200}
                                                            height={200}
                                                            src={product.productImageUrl}
                                                            alt="product"
                                                       />
                                                  </a>
                                             </figure>

                                             <div className="product-details">
                                                  <h3 className="product-title">
                                                       {" "}
                                                       <a href="demo12-product.html">
                                                            {product.productTitle}
                                                       </a>
                                                  </h3>

                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            ${product.productPrice}.00
                                                       </span>
                                                  </div>

                                                  <div className="product-action">
                                                       <a
                                                            href="wishlist.html"
                                                            title="Wishlist"
                                                            className="btn-icon-wish"
                                                       >
                                                            <i className="icon-heart"></i>
                                                       </a>
                                                       <a
                                                            href="demo12-product.html"
                                                            className="btn-icon btn-add-cart"
                                                       >
                                                            <i className="fa fa-arrow-right"></i>
                                                            <span>SELECT OPTIONS</span>
                                                       </a>
                                                       <a
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => showDiv(product)}
                                                            className="btn-quickview"
                                                            title="Quick View"
                                                       >
                                                            <i className="fas fa-external-link-alt"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                         </div>
                    </div>
               </section>
               <section className="section-6 small-products-collection">
                    <div className="container">
                         <div className="product-widgets-container row mb-2 pb-2">
                              <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                                   <h4 className="section-sub-title m-b-3">Featured Products</h4>
                                   {featuredProduct
                                        .sort((a: any, b: any) => b.__last_update - a.__last_update)
                                        .slice(0, 3)
                                        .map((product, i) => (
                                             <div
                                                  key={i}
                                                  className="product-default left-details product-widget"
                                             >
                                                  <figure>
                                                       <a href="demo12-product.html">
                                                            <Image
                                                                 width={300}
                                                                 height={200}
                                                                 src={product.productImageUrl}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo12-product.html">
                                                                 {product.productTitle}
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

                              <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                                   <h4 className="section-sub-title m-b-3">
                                        Best Selling Products
                                   </h4>
                                   {bestSeller.slice(0, 3).map((product, i) => (
                                        <div
                                             key={i}
                                             className="product-default left-details product-widget"
                                        >
                                             <figure>
                                                  <a href="demo12-product.html">
                                                       <Image
                                                            width={300}
                                                            height={200}
                                                            src={product.productImageUrl}
                                                            alt="product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <h3 className="product-title">
                                                       {" "}
                                                       <a href="demo12-product.html">
                                                            {product.productTitle}
                                                       </a>{" "}
                                                  </h3>
                                                  <span className="product-price">
                                                       ${product.productPrice}.00
                                                  </span>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                                   <h4 className="section-sub-title m-b-3">Latest Products</h4>
                                   {latestProducts.slice(0, 3).map((product, i) => (
                                        <div
                                             key={i}
                                             className="product-default left-details product-widget"
                                        >
                                             <figure>
                                                  <a href="demo12-product.html">
                                                       <Image
                                                            width={300}
                                                            height={200}
                                                            src={product.productImageUrl}
                                                            alt="product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <h3 className="product-title">
                                                       {" "}
                                                       <a href="demo12-product.html">
                                                            {product.productTitle}
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
                              <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                                   <h4 className="section-sub-title m-b-3">Top Rated Products</h4>
                                   {featuredProduct
                                        .sort((a: any, b: any) => b.__last_update - a.__last_update)
                                        .slice(0, 3)
                                        .map((product, i) => (
                                             <div
                                                  key={i}
                                                  className="product-default left-details product-widget"
                                             >
                                                  <figure>
                                                       <a href="demo12-product.html">
                                                            <Image
                                                                 width={300}
                                                                 height={200}
                                                                 src={product.productImageUrl}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <h3 className="product-title">
                                                            {" "}
                                                            <a href="demo12-product.html">
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
               </section>
          </div>
     );
};

export default Product;
