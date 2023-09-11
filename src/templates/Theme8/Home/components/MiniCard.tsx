import Image from "next/image";
import product1 from "../../../../assets/images/demoes/demo8/products/product-1.jpg";
import product5 from "../../../../assets/images/demoes/demo8/products/product-5.jpg";
import product9 from "../../../../assets/images/demoes/demo8/products/product-9.jpg";
import instagram1 from "../../../../assets/images/demoes/demo8/instagram/1.jpg";
import instagram2 from "../../../../assets/images/demoes/demo8/instagram/2.jpg";
import instagram3 from "../../../../assets/images/demoes/demo8/instagram/3.jpg";
import instagram4 from "../../../../assets/images/demoes/demo8/instagram/4.jpg";
import instagram5 from "../../../../assets/images/demoes/demo8/instagram/5.jpg";
import instagram6 from "../../../../assets/images/demoes/demo8/instagram/6.jpg";
import instagram7 from "../../../../assets/images/demoes/demo8/instagram/7.jpg";
import instagram8 from "../../../../assets/images/demoes/demo8/instagram/8.jpg";
import instagram9 from "../../../../assets/images/demoes/demo8/instagram/9.jpg";
import instagram10 from "../../../../assets/images/demoes/demo8/instagram/10.jpg";
import { bestSeller, featuredProduct, latestProducts } from "../data";
import ProductWidget from "@/app/components/Product/ProductWidget";

const MiniCard = (props) => {
     return (
          <div>
               <div className="container">
                    <div className="product-widgets row pt-1">
                         <div className="col-md-4 col-sm-6 pb-5">
                              <h4
                                   style={{ fontSize: "15px" }}
                                   className="subtitle text-left text-uppercase"
                              >
                                   Top Rated Products
                              </h4>
                              <div className="heading-spacer"></div>
                              {props.featuredProduct.slice(0, 3).map((product, i) => (
                                   <div
                                        key={i}
                                        className="product-default left-details product-widget mb-2"
                                   >
                                        <figure>
                                             <a href="demo8-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       width="175"
                                                       height="175"
                                                       alt="product"
                                                  />
                                                  <Image
                                                       src={product1}
                                                       width="175"
                                                       height="175"
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <div className="category-list">
                                                  <a
                                                       href="demo8-shop.html"
                                                       className="product-category"
                                                  >
                                                       {product.productCategory}
                                                  </a>
                                                  ,
                                             </div>
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo8-product.html">
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
                         <div className="col-md-4 col-sm-6 pb-5">
                              <h4
                                   style={{ fontSize: "15px" }}
                                   className="subtitle text-left text-uppercase"
                              >
                                   Best Selling Products
                              </h4>
                              <div className="heading-spacer"></div>
                              {props.bestSeller.slice(0, 3).map((product, i) => (
                                   <div
                                        key={i}
                                        className="product-default left-details product-widget mb-2"
                                   >
                                        <figure>
                                             <a href="demo8-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       width="175"
                                                       height="175"
                                                       alt="product"
                                                  />
                                                  <Image
                                                       src={product9}
                                                       width="175"
                                                       height="175"
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <div className="category-list">
                                                  <a
                                                       href="demo8-shop.html"
                                                       className="product-category"
                                                  >
                                                       {product.productCategory}
                                                  </a>
                                             </div>
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo8-product.html">
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
                         <div className="col-md-4 col-sm-6 pb-5">
                              <h4
                                   style={{ fontSize: "15px" }}
                                   className="subtitle text-left text-uppercase"
                              >
                                   Latest Products
                              </h4>
                              <div className="heading-spacer"></div>
                              {props.latestProducts.slice(0, 3).map((product, i) => (
                                   <div
                                        key={i}
                                        className="product-default left-details product-widget mb-2"
                                   >
                                        <figure>
                                             <a href="demo8-product.html">
                                                  <Image
                                                       src={product.productImageUrl}
                                                       width="175"
                                                       height="175"
                                                       alt="banner"
                                                  />
                                                  <Image
                                                       src={product5}
                                                       width="175"
                                                       height="175"
                                                       alt="product"
                                                  />
                                             </a>
                                        </figure>
                                        <div className="product-details">
                                             <div className="category-list">
                                                  <a
                                                       href="demo8-shop.html"
                                                       className="product-category"
                                                  >
                                                       {product.productCategory}
                                                  </a>
                                                  ,
                                             </div>
                                             <h3 className="product-title">
                                                  {" "}
                                                  <a href="demo8-product.html">
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
               <div className="instagram-section">
                    <h3 className="subtitle text-uppercase">Follow On Instagram</h3>
                    <div className="heading-spacer"></div>
                    <div
                         style={{ display: "flex" }}
                         className="instagram-feed-carousel instagram-feed-list"
                    >
                         <a href="#">
                              <Image src={instagram1} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram2} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram3} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram4} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram5} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram6} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram7} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram8} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram9} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram10} width="197" height="150" alt="Feed" />
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default MiniCard;
