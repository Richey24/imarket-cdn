import Image from "next/image";
import Slider from "react-slick";

import product2 from "../../../../assets/images/products/zoom/product-2.jpg";
import product3 from "../../../../assets/images/products/zoom/product-3.jpg";
import product4 from "../../../../assets/images/products/zoom/product-4.jpg";
import { useState } from "react";

const ProductWidget = ({ quickView }) => {
     const [selected, setSelected] = useState("");
     const [qty, setQty] = useState(1);

     const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     const hideView = () => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "none";
          }
     };

     return (
          <div>
               <div
                    id="quickViewDiv"
                    style={{
                         position: "fixed",
                         top: "1%",
                         left: "20%",
                         zIndex: "9",
                         height: "580px",
                         display: "none",
                    }}
                    className="product-single-container product-single-default product-quick-view mb-0 custom-scrollbar"
               >
                    <div className="row">
                         <div className="col-md-6 product-single-gallery mb-md-0">
                              <div className="product-slider-container">
                                   <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                        <div className="product-label label-sale">-16%</div>
                                   </div>

                                   <div
                                        style={{ width: "800px", height: "400px" }}
                                        className="product-single-carousel show-nav-hover"
                                   >
                                        <Slider {...settings}>
                                             <div style={{ width: "400px", height: "400px" }}>
                                                  <Image
                                                       width={200}
                                                       height={200}
                                                       className="product-single-image"
                                                       style={{ width: "400px", height: "400px" }}
                                                       alt="product"
                                                       src={quickView.productImageUrl}
                                                       data-zoom-image="assets/images/products/zoom/product-1-big.jpg"
                                                  />
                                             </div>
                                             {/* <div className="product-item" style={{ width: "400px", height: "400px" }}>
                                                  <Image className="product-single-image" style={{ width: "400px", height: "400px" }} alt="product" src={productBig2}
                                                       data-zoom-image="assets/images/products/zoom/product-2-big.jpg" />
                                             </div>
                                             <div className="product-item" style={{ width: "400px", height: "400px" }}>
                                                  <Image className="product-single-image" style={{ width: "400px", height: "400px" }} alt="product" src={productBig3}
                                                       data-zoom-image="assets/images/products/zoom/product-3-big.jpg" />
                                             </div>
                                             <div className="product-item" style={{ width: "400px", height: "400px" }}>
                                                  <Image className="product-single-image" style={{ width: "400px", height: "400px" }} alt="product" src={productBig4}
                                                       data-zoom-image="assets/images/products/zoom/product-4-big.jpg" />
                                             </div>
                                             <div className="product-item" style={{ width: "400px", height: "400px" }}>
                                                  <Image className="product-single-image" style={{ width: "400px", height: "400px" }} alt="product" src={productBig5}
                                                       data-zoom-image="assets/images/products/zoom/product-5-big.jpg" />
                                             </div> */}
                                        </Slider>
                                   </div>
                              </div>
                              <div className="prod-thumbnail owl-dots">
                                   <div className="owl-dot">
                                        <Image
                                             style={{ height: "90px" }}
                                             width={200}
                                             height={200}
                                             alt="product"
                                             src={quickView.productImageUrl}
                                        />
                                   </div>
                                   <div className="owl-dot">
                                        <Image
                                             width={200}
                                             height={200}
                                             alt="product"
                                             src={product2}
                                        />
                                   </div>
                                   <div className="owl-dot">
                                        <Image
                                             width={200}
                                             height={200}
                                             alt="product"
                                             src={product3}
                                        />
                                   </div>
                                   <div className="owl-dot">
                                        <Image
                                             width={200}
                                             height={200}
                                             alt="product"
                                             src={product4}
                                        />
                                   </div>
                                   {/* <div className="owl-dot">
                                        <Image alt="product" src={product5} />
                                   </div> */}
                              </div>
                         </div>

                         <div className="col-md-6">
                              <div className="product-single-details mb-0 ml-md-4">
                                   <h1 className="product-title">{quickView.productTitle}</h1>

                                   <hr className="short-divider" />

                                   <div className="price-box">
                                        <span className="product-price">
                                             {" "}
                                             ${quickView.productPrice}.00
                                        </span>
                                   </div>

                                   <div className="product-desc">
                                        <p>
                                             Duis aute irure dolor in reprehenderit in voluptate
                                             velit esse cillum dolore eu fugiat nulla pariatur.
                                             Excepteur sint occaecat cupidatat non.
                                        </p>
                                   </div>

                                   <ul className="single-info-list">
                                        <li>
                                             SKU:
                                             <strong>654613612</strong>
                                        </li>

                                        <li>
                                             CATEGORY:
                                             <strong>
                                                  <a href="#" className="product-category">
                                                       {quickView.productCategory}
                                                  </a>
                                             </strong>
                                        </li>
                                   </ul>

                                   <div className="product-filters-container">
                                        <div
                                             style={{ alignItems: "baseline", display: "block" }}
                                             className="product-single-filter"
                                        >
                                             <label>Size:</label>
                                             <ul className="config-size-list">
                                                  <li>
                                                       <a
                                                            href="javascript:;"
                                                            onClick={() => setSelected("XL")}
                                                            style={
                                                                 selected === "XL"
                                                                      ? {
                                                                             backgroundColor:
                                                                                  "#FF7272",
                                                                             color: "white",
                                                                        }
                                                                      : {}
                                                            }
                                                            className="d-flex align-items-center justify-content-center"
                                                       >
                                                            XL
                                                       </a>
                                                  </li>
                                                  <li className="">
                                                       <a
                                                            onClick={() => setSelected("L")}
                                                            style={
                                                                 selected === "L"
                                                                      ? {
                                                                             backgroundColor:
                                                                                  "#FF7272",
                                                                             color: "white",
                                                                        }
                                                                      : {}
                                                            }
                                                            href="javascript:;"
                                                            className="d-flex align-items-center justify-content-center"
                                                       >
                                                            L
                                                       </a>
                                                  </li>
                                                  <li className="">
                                                       <a
                                                            onClick={() => setSelected("M")}
                                                            style={
                                                                 selected === "M"
                                                                      ? {
                                                                             backgroundColor:
                                                                                  "#FF7272",
                                                                             color: "white",
                                                                        }
                                                                      : {}
                                                            }
                                                            href="javascript:;"
                                                            className="d-flex align-items-center justify-content-center"
                                                       >
                                                            M
                                                       </a>
                                                  </li>
                                                  <li className="">
                                                       <a
                                                            onClick={() => setSelected("S")}
                                                            style={
                                                                 selected === "S"
                                                                      ? {
                                                                             backgroundColor:
                                                                                  "#FF7272",
                                                                             color: "white",
                                                                        }
                                                                      : {}
                                                            }
                                                            href="javascript:;"
                                                            className="d-flex align-items-center justify-content-center"
                                                       >
                                                            S
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>

                                        {selected !== "" && (
                                             <div
                                                  style={{ display: "block" }}
                                                  className="product-single-filter"
                                             >
                                                  <label></label>
                                                  <a
                                                       style={{
                                                            color: "white",
                                                            backgroundColor: "#FF7272",
                                                            cursor: "pointer",
                                                       }}
                                                       onClick={() => setSelected("")}
                                                       className="font1 text-uppercase clear-btn"
                                                  >
                                                       Clear
                                                  </a>
                                             </div>
                                        )}
                                   </div>

                                   <div
                                        style={{
                                             display: "flex",
                                             columnGap: "95px",
                                             alignItems: "baseline",
                                        }}
                                        className="product-action"
                                   >
                                        {/* <div className="price-box product-filtered-price">
                                             <del className="old-price"><span>$286.00</span></del>
                                             <span className="product-price">$245.00</span>
                                        </div> */}

                                        <div
                                             style={{
                                                  display: "flex",
                                                  flexWrap: "nowrap",
                                                  alignItems: "baseline",
                                             }}
                                             className="input-group bootstrap-touchspin bootstrap-touchspin-injected"
                                        >
                                             <span
                                                  onClick={() => setQty(qty - 1)}
                                                  style={{
                                                       height: "42px",
                                                       display: "flex",
                                                       justifyContent: "center",
                                                       alignItems: "center",
                                                  }}
                                                  className="input-group-btn input-group-prepend"
                                             >
                                                  <button
                                                       style={{ color: "black" }}
                                                       className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                                                       type="button"
                                                  >
                                                       -
                                                  </button>
                                             </span>
                                             <input
                                                  onChange={(e) => setQty(Number(e.target.value))}
                                                  value={qty}
                                                  style={{
                                                       paddingTop: "13px",
                                                       paddingBottom: "14px",
                                                       paddingLeft: "14px",
                                                       width: "40px",
                                                       borderTop: "0.5px solid #6F7174",
                                                       borderBottom: "0.5px solid #6F7174",
                                                       outline: "none",
                                                  }}
                                                  type="text"
                                             />
                                             <span
                                                  onClick={() => setQty(qty + 1)}
                                                  className="input-group-btn input-group-append"
                                             >
                                                  <button
                                                       style={{ color: "black" }}
                                                       className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                                                       type="button"
                                                  >
                                                       +
                                                  </button>
                                             </span>
                                        </div>

                                        <a
                                             style={{
                                                  height: "49px",
                                                  backgroundColor: "#6F7174",
                                                  border: "none",
                                                  outline: "none",
                                             }}
                                             href="javascript:;"
                                             className="btn btn-dark add-cart mr-2"
                                             title="Add to Cart"
                                        >
                                             Add to Cart
                                        </a>

                                        <a href="cart.html" className="btn view-cart d-none">
                                             View cart
                                        </a>
                                   </div>

                                   <hr className="divider mb-0 mt-0" />

                                   <div className="product-single-share mb-0">
                                        <label className="sr-only">Share:</label>

                                        <div className="social-icons mr-2">
                                             <a
                                                  href="#"
                                                  className="social-icon social-facebook icon-facebook"
                                                  target="_blank"
                                                  title="Facebook"
                                             ></a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-twitter icon-twitter"
                                                  target="_blank"
                                                  title="Twitter"
                                             ></a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-linkedin fab fa-linkedin-in"
                                                  target="_blank"
                                                  title="Linkedin"
                                             ></a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-gplus fab fa-google-plus-g"
                                                  target="_blank"
                                                  title="Google +"
                                             ></a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-mail icon-mail-alt"
                                                  target="_blank"
                                                  title="Mail"
                                             ></a>
                                        </div>

                                        <a
                                             href="wishlist.html"
                                             className="btn-icon-wish add-wishlist"
                                             title="Add to Wishlist"
                                        >
                                             <i className="icon-wishlist-2"></i>
                                             <span>Add to Wishlist</span>
                                        </a>
                                   </div>
                              </div>
                         </div>

                         <button
                              onClick={hideView}
                              title="Close (Esc)"
                              type="button"
                              className="mfp-close"
                         >
                              ×
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default ProductWidget;
