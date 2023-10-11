import Image from "next/image";
import { products } from "../data";
import { templateImages } from "@/appProvider/templateImages";
import { useState } from "react";

const Product = ({ setQuickView, productDatas, section1, section }) => {
     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "block";
               setQuickView(product);
          }
     };

     const [active, setActive] = useState("kitchen");

     return (
          <div>
               <section
                    className="featured-section product-slider-tab container"
                    data-animation-name="fadeIn"
                    data-animation-delay="100"
               >
                    <div className="heading d-flex align-items-center flex-column flex-lg-row">
                         <div className="section-title">
                              <h2 className="mt-1 mb-1">{section1}</h2>
                         </div>
                         <ul
                              className="nav product-filter-items ml-lg-auto justify-content-center mb-0"
                              id="myTab"
                              role="tablist"
                         >
                              <li
                                   onClick={() => setActive("kitchen")}
                                   className="nav-item product-filter-item"
                              >
                                   <a
                                        className={
                                             active === "kitchen" ? `nav-link active` : `nav-link`
                                        }
                                        id="kitchen-tab"
                                        data-toggle="tab"
                                        style={{ cursor: "pointer" }}
                                        role="tab"
                                        aria-controls="kitchen"
                                        aria-selected="true"
                                   >
                                        kitchen
                                   </a>
                              </li>
                              <li
                                   onClick={() => setActive("dining")}
                                   className="nav-item product-filter-item"
                              >
                                   <a
                                        className={
                                             active === "dining" ? `nav-link active` : `nav-link`
                                        }
                                        id="dining-tab"
                                        data-toggle="tab"
                                        style={{ cursor: "pointer" }}
                                        role="tab"
                                        aria-controls="dining"
                                        aria-selected="false"
                                   >
                                        dining
                                   </a>
                              </li>
                              <li
                                   onClick={() => setActive("bedroom")}
                                   className="nav-item product-filter-item"
                              >
                                   <a
                                        className={
                                             active === "bedroom" ? `nav-link active` : `nav-link`
                                        }
                                        id="bedroom-tab"
                                        data-toggle="tab"
                                        style={{ cursor: "pointer" }}
                                        role="tab"
                                        aria-controls="bedroom"
                                        aria-selected="false"
                                   >
                                        bedroom
                                   </a>
                              </li>
                              <li
                                   onClick={() => setActive("living")}
                                   className="nav-item product-filter-item"
                              >
                                   <a
                                        className={
                                             active === "living" ? `nav-link active` : `nav-link`
                                        }
                                        id="living-tab"
                                        data-toggle="tab"
                                        style={{ cursor: "pointer" }}
                                        role="tab"
                                        aria-controls="living"
                                        aria-selected="false"
                                   >
                                        living
                                   </a>
                              </li>
                              <li
                                   onClick={() => setActive("office")}
                                   className="nav-item product-filter-item"
                              >
                                   <a
                                        className={
                                             active === "office" ? `nav-link active` : `nav-link`
                                        }
                                        id="office-tab"
                                        data-toggle="tab"
                                        style={{ cursor: "pointer" }}
                                        role="tab"
                                        aria-controls="office"
                                        aria-selected="false"
                                   >
                                        Office
                                   </a>
                              </li>
                              <li
                                   onClick={() => setActive("outdoor")}
                                   className="nav-item product-filter-item"
                              >
                                   <a
                                        className={
                                             active === "outdoor" ? `nav-link active` : `nav-link`
                                        }
                                        id="outdoor-tab"
                                        data-toggle="tab"
                                        style={{ cursor: "pointer" }}
                                        role="tab"
                                        aria-controls="outdoor"
                                        aria-selected="false"
                                   >
                                        outdoor
                                   </a>
                              </li>
                         </ul>
                    </div>

                    <div className="tab-content">
                         <div
                              className={
                                   active === `kitchen`
                                        ? `tab-pane fade show active`
                                        : `tab-pane fade`
                              }
                              id="kitchen"
                              role="tabpanel"
                              aria-labelledby="kitchen-tab"
                         >
                              <div
                                   style={{ display: "flex", flexWrap: "wrap" }}
                                   className="products-slider"
                              >
                                   {products.slice(0, 5).map((product, i) => (
                                        <div
                                             style={{ width: "20%", minWidth: "230px" }}
                                             key={i}
                                             className="product-default"
                                        >
                                             <figure>
                                                  <a href="demo29-product.html">
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="327"
                                                            height="327"
                                                            alt="Product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <div className="category-list">
                                                       <a
                                                            href="demo29-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.productCategory}
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       <a href="demo29-product.html">
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
                                                            href="#"
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                       </a>
                                                       <a
                                                            onClick={() => showDiv(product)}
                                                            style={{ cursor: "pointer" }}
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
                         <div
                              className={
                                   active === `dining`
                                        ? `tab-pane fade show active`
                                        : `tab-pane fade`
                              }
                              id="dining"
                              role="tabpanel"
                              aria-labelledby="dining-tab"
                         >
                              <div style={{ display: "flex" }} className="products-slider">
                                   {products.slice(5, 10).map((product, i) => (
                                        <div key={i} className="product-default">
                                             <figure>
                                                  <a href="demo29-product.html">
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="327"
                                                            height="327"
                                                            alt="Product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <div className="category-list">
                                                       <a
                                                            href="demo29-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.productCategory}
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       <a href="demo29-product.html">
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
                                                            href="#"
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                       </a>
                                                       <a
                                                            onClick={() => showDiv(product)}
                                                            style={{ cursor: "pointer" }}
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
                         <div
                              className={
                                   active === `bedroom`
                                        ? `tab-pane fade show active`
                                        : `tab-pane fade`
                              }
                              id="bedroom"
                              role="tabpanel"
                              aria-labelledby="bedroom-tab"
                         >
                              <div style={{ display: "flex" }} className="products-slider">
                                   {products.slice(0, 2).map((product, i) => (
                                        <div key={i} className="product-default">
                                             <figure>
                                                  <a href="demo29-product.html">
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="327"
                                                            height="327"
                                                            alt="Product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <div className="category-list">
                                                       <a
                                                            href="demo29-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.productCategory}
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       <a href="demo29-product.html">
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
                                                            href="#"
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                       </a>
                                                       <a
                                                            onClick={() => showDiv(product)}
                                                            style={{ cursor: "pointer" }}
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
                         <div
                              className={
                                   active === `living`
                                        ? `tab-pane fade show active`
                                        : `tab-pane fade`
                              }
                              id="living"
                              role="tabpanel"
                              aria-labelledby="living-tab"
                         >
                              <div style={{ display: "flex" }} className="products-slider">
                                   {products.slice(2, 4).map((product, i) => (
                                        <div key={i} className="product-default">
                                             <figure>
                                                  <a href="demo29-product.html">
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="327"
                                                            height="327"
                                                            alt="Product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <div className="category-list">
                                                       <a
                                                            href="demo29-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.productCategory}
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       <a href="demo29-product.html">
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
                                                            href="#"
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                       </a>
                                                       <a
                                                            onClick={() => showDiv(product)}
                                                            style={{ cursor: "pointer" }}
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
                         <div
                              className={
                                   active === `office`
                                        ? `tab-pane fade show active`
                                        : `tab-pane fade`
                              }
                              id="office"
                              role="tabpanel"
                              aria-labelledby="office-tab"
                         >
                              <div style={{ display: "flex" }} className="products-slider">
                                   {products.slice(4, 6).map((product, i) => (
                                        <div key={i} className="product-default">
                                             <figure>
                                                  <a href="demo29-product.html">
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="327"
                                                            height="327"
                                                            alt="Product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <div className="category-list">
                                                       <a
                                                            href="demo29-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.productCategory}
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       <a href="demo29-product.html">
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
                                                            href="#"
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                       </a>
                                                       <a
                                                            onClick={() => showDiv(product)}
                                                            style={{ cursor: "pointer" }}
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
                         <div
                              className={
                                   active === `outdoor`
                                        ? `tab-pane fade show active`
                                        : `tab-pane fade`
                              }
                              id="outdoor"
                              role="tabpanel"
                              aria-labelledby="outdoor-tab"
                         >
                              <div style={{ display: "flex" }} className="products-slider">
                                   {products.slice(6, 8).map((product, i) => (
                                        <div key={i} className="product-default">
                                             <figure>
                                                  <a href="demo29-product.html">
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="327"
                                                            height="327"
                                                            alt="Product"
                                                       />
                                                  </a>
                                             </figure>
                                             <div className="product-details">
                                                  <div className="category-list">
                                                       <a
                                                            href="demo29-shop.html"
                                                            className="product-category"
                                                       >
                                                            {product.productCategory}
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       <a href="demo29-product.html">
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
                                                            href="#"
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                       </a>
                                                       <a
                                                            onClick={() => showDiv(product)}
                                                            style={{ cursor: "pointer" }}
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
                    </div>
               </section>
               <section
                    style={{ backgroundImage: `url(${templateImages.demo29.bannerImage.banner3})` }}
                    className="banner-section home-banner mb-6"
                    data-animation-name="fadeIn"
                    data-animation-delay="100"
                    data-parallax="{'speed': 1.8, 'enableOnMobile': true}"
                    data-image-src={templateImages.demo29.bannerImage.banner3}
               >
                    <div className="banner-content full-content d-flex flex-lg-row flex-column align-items-center mt-1 mt-lg-0">
                         <div className="left-content">
                              <div>
                                   <span className="font1">it is time for a</span>
                                   <h4>Modern Bathroom</h4>
                              </div>
                              <a href="demo29-shop.html" className="btn">
                                   Show Now <i className="fas fa-long-arrow-alt-right"></i>
                              </a>
                         </div>
                         <div className="right-content banner-info">
                              <a href="#" className="btn skew-box bg-white">
                                   Exclusive COUPON
                              </a>
                              <h3 className="sale-off skew-box">
                                   <span className="text-white">$200</span>off
                              </h3>
                         </div>
                    </div>
               </section>
               <section className="container">
                    <div className="featured-section bg-white">
                         <div className="section-title">
                              <h2 className="mt-1 mb-1">{section}</h2>
                         </div>
                         <div className="row">
                              {productDatas.slice(0, 12).map((product, i) => (
                                   <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2">
                                        <div className="product-default inner-quickview left-details inner-icon">
                                             <figure>
                                                  <div
                                                       style={{
                                                            width: "200px",
                                                            height: "200px",
                                                            overflow: "hidden",
                                                       }}
                                                  >
                                                       <a href="demo21-product.html">
                                                            <Image
                                                                 style={{
                                                                      width: "100%",
                                                                      height: "100%",
                                                                 }}
                                                                 src={product.productImageUrl}
                                                                 width={217}
                                                                 height={217}
                                                                 alt="product"
                                                            />
                                                       </a>
                                                  </div>
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
                                                                 href="demo29-shop.html"
                                                                 className="product-category"
                                                            >
                                                                 {product.productCategory}
                                                            </a>
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
                                                       <a href="demo29-product.html">
                                                            {product.productCategory}
                                                       </a>
                                                  </h3>
                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            ${product.productPrice}.00
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

export default Product;
