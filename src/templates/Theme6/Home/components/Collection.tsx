import Image from "next/image";
import bg1 from "../../../../assets/images/demoes/demo6/bg-1.jpg";
import bg2 from "../../../../assets/images/demoes/demo6/bg-2.jpg";
import { templateImages } from "@/appProvider/templateImages";

const Collection = ({ setQuickView }) => {
     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               setQuickView(product);
               theDiv.style.display = "block";
          }
     };

     return (
          <div>
               <div className="half-section">
                    <div className="d-flex flex-wrap">
                         <div
                              className="col-md-6 col-12 order-md-last half-img banner banner-md-vw-small banner-5 bg-img d-flex align-items-center "
                              data-animation-duration="1200"
                              style={{ backgroundImage: `url(${bg1.src})` }}
                         >
                              <div className="banner-content">
                                   <h3 className="ls-n-10 m-b-3 text-left">
                                        {"WOMEN'S"}
                                        <br />
                                        COLLECTION
                                   </h3>
                                   <p className="line-height-1 m-b-4 text-left">
                                        Check out this {"week's"} hottest styles.
                                   </p>
                                   <div className="mb-0">
                                        <a
                                             href="demo6-shop.html"
                                             className="btn btn-borders btn-lg btn-outline-dark ls-10"
                                        >
                                             SHOP NOW
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-6 col-12 half-content d-flex align-items-center justify-content-center">
                              <div
                                   style={{ display: "flex", columnGap: "20px" }}
                                   className="products-slider"
                              >
                                   <div
                                        className="product-default inner-quickview inner-icon "
                                        data-animation-name="fadeInRightShorter"
                                   >
                                        <figure>
                                             <a href="demo6-product.html">
                                                  <Image
                                                       src={
                                                            templateImages.demo6.productImages
                                                                 .product1
                                                       }
                                                       alt="product"
                                                       width="400"
                                                       height="400"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="#"
                                                       title="Add To Cart"
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                  >
                                                       <i className="icon-shopping-cart"></i>
                                                  </a>
                                             </div>
                                             <a
                                                  onClick={() =>
                                                       showDiv({
                                                            productImageUrl:
                                                                 templateImages.demo6.productImages
                                                                      .product1,
                                                            productTitle: "Girl Black Blouse",
                                                            productPrice: "49",
                                                            productCategory:
                                                                 "Albums, shoe, watches",
                                                       })
                                                  }
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
                                                            Albums
                                                       </a>
                                                       ,
                                                       <a
                                                            href="demo6-shop.html"
                                                            className="product-category"
                                                       >
                                                            shoes
                                                       </a>
                                                       ,
                                                       <a
                                                            href="demo6-shop.html"
                                                            className="product-category"
                                                       >
                                                            watches
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
                                                  {" "}
                                                  <a href="demo6-product.html">
                                                       Girl Black Blouse
                                                  </a>{" "}
                                             </h3>
                                             <div className="price-box">
                                                  <span className="product-price">$49.00</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div
                                        className="product-default inner-quickview inner-icon "
                                        data-animation-delay="500"
                                        data-animation-name="fadeInRightShorter"
                                   >
                                        <figure>
                                             <a href="demo6-product.html">
                                                  <Image
                                                       src={
                                                            templateImages.demo6.productImages
                                                                 .product2
                                                       }
                                                       width="400"
                                                       height="400"
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="#"
                                                       title="Add To Cart"
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                  >
                                                       <i className="icon-shopping-cart"></i>
                                                  </a>
                                             </div>
                                             <a
                                                  onClick={() =>
                                                       showDiv({
                                                            productImageUrl:
                                                                 templateImages.demo6.productImages
                                                                      .product2,
                                                            productTitle: "Porto White Girl Shirt",
                                                            productPrice: "101",
                                                            productCategory:
                                                                 "Albums, shoe, watches",
                                                       })
                                                  }
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
                                                            Albums
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
                                                  {" "}
                                                  <a href="demo6-product.html">
                                                       Porto White Girl Shirt
                                                  </a>
                                             </h3>
                                             <div className="price-box">
                                                  <span className="product-price">$101.00</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="half-section">
                    <div className="d-flex flex-wrap">
                         <div
                              className="col-md-6 col-12 half-img banner banner-md-vw-small xbanner banner-5 bg-img d-flex align-items-center justify-content-end"
                              style={{ backgroundImage: `url(${bg2.src})` }}
                         >
                              <div className="banner-content">
                                   <h3 className="ls-n-10 m-b-3 text-right">
                                        {"MEN'S"}
                                        <br />
                                        COLLECTION
                                   </h3>
                                   <p className="line-height-1 m-b-4 text-right">
                                        Check out this {"week's"} hottest styles.
                                   </p>
                                   <div className="mb-0 text-right">
                                        <a
                                             href="demo6-shop.html"
                                             className="btn btn-borders btn-lg btn-outline-dark"
                                        >
                                             SHOP NOW
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-6 col-12 half-content d-flex align-items-center justify-content-center">
                              <div
                                   style={{ display: "flex", columnGap: "20px" }}
                                   className="products-slider"
                              >
                                   <div className="product-default inner-quickview inner-icon ">
                                        <figure>
                                             <a href="demo6-product.html">
                                                  <Image
                                                       src={
                                                            templateImages.demo6.productImages
                                                                 .product4
                                                       }
                                                       alt="product"
                                                       width="400"
                                                       height="400"
                                                  />
                                                  <Image
                                                       src={
                                                            templateImages.demo6.productImages
                                                                 .product5
                                                       }
                                                       alt="product"
                                                       width="400"
                                                       height="400"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="#"
                                                       title="Add To Cart"
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                  >
                                                       <i className="icon-shopping-cart"></i>
                                                  </a>
                                             </div>
                                             <a
                                                  onClick={() =>
                                                       showDiv({
                                                            productImageUrl:
                                                                 templateImages.demo6.productImages
                                                                      .product4,
                                                            productTitle: "Men White Shirt",
                                                            productPrice: "39",
                                                            productCategory:
                                                                 "Albums, shoe, watches",
                                                       })
                                                  }
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
                                                            Caps
                                                       </a>
                                                       ,
                                                       <a
                                                            href="demo6-shop.html"
                                                            className="product-category"
                                                       >
                                                            shoes
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
                                                  {" "}
                                                  <a href="demo6-product.html">
                                                       Men White Shirt
                                                  </a>{" "}
                                             </h3>
                                             <div className="price-box">
                                                  <span className="product-price">$39.00</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div
                                        className="product-default inner-quickview inner-icon "
                                        data-animation-delay="500"
                                   >
                                        <figure>
                                             <a href="demo6-product.html">
                                                  <Image
                                                       src={
                                                            templateImages.demo6.productImages
                                                                 .product3
                                                       }
                                                       width="400"
                                                       height="400"
                                                       alt="product"
                                                  />
                                                  <Image
                                                       src={
                                                            templateImages.demo6.productImages
                                                                 .product4
                                                       }
                                                       width="400"
                                                       height="400"
                                                       alt="product"
                                                  />
                                             </a>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="#"
                                                       title="Add To Cart"
                                                       className="btn-icon btn-add-cart product-type-simple"
                                                  >
                                                       <i className="icon-shopping-cart"></i>
                                                  </a>
                                             </div>
                                             <a
                                                  onClick={() =>
                                                       showDiv({
                                                            productImageUrl:
                                                                 templateImages.demo6.productImages
                                                                      .product3,
                                                            productTitle: "Porto Sports Shirts",
                                                            productPrice: "101",
                                                            productCategory:
                                                                 "Albums, shoe, watches",
                                                       })
                                                  }
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
                                                            caps
                                                       </a>
                                                       ,
                                                       <a
                                                            href="demo6-shop.html"
                                                            className="product-category"
                                                       >
                                                            shoes
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
                                                  {" "}
                                                  <a href="demo6-product.html">
                                                       Porto Sports Shirts
                                                  </a>
                                             </h3>
                                             <div className="price-box">
                                                  <span className="product-price">$101.00</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Collection;
