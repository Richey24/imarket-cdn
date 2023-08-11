import Image from "next/image";
import banner1 from "../../../assets/images/demoes/demo2/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo2/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo2/banners/banner-3.jpg";
import banner4 from "../../../assets/images/demoes/demo2/banners/banner-4.jpg";
import banner5 from "../../../assets/images/demoes/demo2/banners/banner-5.jpg";
import banner6 from "../../../assets/images/demoes/demo2/banners/banner-6.jpg";
import banner7 from "../../../assets/images/demoes/demo2/banners/banner-7.jpg";
import banner8 from "../../../assets/images/demoes/demo2/banners/banner-8.jpg";
import banner9 from "../../../assets/images/demoes/demo2/banners/banner-9.jpg";

import Banner from "./components/Banner";
import { InfoBoxesContainer } from "./components/Info";
import { Product } from "./components/Product";
import { featuredProducts, promotions } from "./data";
import { Promotion } from "./components/Promotion";
export const Home = () => {
     return (
          <main className="main home">
               <div className="container mt-2">
                    <div className="row">
                         <div className="col-lg-3 mb-2">
                              <div className="side-menu-wrapper fs-4">
                                   <h2 className="side-menu-title ls-10 fw-bold">Top Categories</h2>
                                   <figure className="side-menu-body mb-2 px-3 mx-3">
                                        <ul className="side-menu pb-1">
                                             <li>
                                                  <a href="demo2-shop.html">
                                                       <i className="icon-category-fashion" />
                                                       Fashion
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="demo2-shop.html">
                                                       <i className="icon-category-electronics" />
                                                       Electronics
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="demo2-shop.html">
                                                       <i className="icon-category-gifts" />
                                                       Gifts
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="demo2-shop.html">
                                                       <i className="icon-category-garden" />
                                                       Home &amp; Garden
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="demo2-shop.html">
                                                       <i className="icon-category-music" />
                                                       Music
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="demo2-shop.html">
                                                       <i className="icon-cat-sport" />
                                                       Sports
                                                  </a>
                                             </li>
                                        </ul>
                                        <a
                                             href="#"
                                             className="btn btn-block btn-dark btn-lg px-0 ls-10"
                                        >
                                             Huge Sale -<strong>70%</strong>
                                             Off
                                        </a>
                                   </figure>
                                   <div className="product-details">
                                        <div className="category-wrap">
                                             <div className="category-list">
                                                  <a
                                                       href="demo2-shop.html"
                                                       className="product-category"
                                                  >
                                                       category
                                                  </a>
                                             </div>
                                             <a
                                                  href="wishlist.html"
                                                  title="Wishlist"
                                                  className="btn-icon-wish"
                                             >
                                                  <i className="icon-heart" />
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             <a href="demo2-product.html">Brown Backpack</a>
                                        </h3>
                                        <div className="ratings-container">
                                             <div className="product-ratings">
                                                  <span
                                                       className="ratings"
                                                       style={{ width: "100%" }}
                                                  />
                                                  <span className="tooltiptext tooltip-top" />
                                             </div>
                                        </div>{" "}
                                        */{"}"}
                                        <div className="price-box">
                                             <span className="old-price">$59.00</span>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div
                              className="col-lg-9 mb-2 appear-animat"
                              data-animation-name="fadeInLeftShorter"
                              data-animation-delay={400}
                              data-animation-duration={1000}
                         >
                              <Banner />
                         </div>
                    </div>
                    <InfoBoxesContainer />

                    <div className="row g-3 align-items-center">
                         {promotions.map((promotion, index) => (
                              <Promotion key={index} {...promotion} />
                         ))}
                    </div>
               </div>

               <div className="container my-5">
                    <h3 className="fw-bold fs-2 mb-4 pb-2 mt-3 border-bottom">Featured Products</h3>
                    <div className="row">
                         {featuredProducts.map((product, index) => (
                              <Product key={`featured-product-${index}`} {...product} />
                         ))}
                    </div>
               </div>
          </main>
     );
};
