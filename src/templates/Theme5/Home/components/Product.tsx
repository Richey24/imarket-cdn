import Image from "next/image";
import product16 from "../../../../assets/images/demoes/demo5/products/product-16.jpg"
import { products } from "../data";
import { useState } from "react";

const Product = ({ setQuickView }) => {
     const [num, setNum] = useState(10)

     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv")
          if (theDiv) {
               theDiv.style.display = "block"
               setQuickView(product)
          }
     }

     return (
          <div>
               <div className="container">
                    <div style={{ padding: "20px" }} className="products-container bg-white text-center mb-2">
                         <div className="row product-ajax-grid mb-2">
                              {
                                   products.slice(0, num).map((product, i) => (
                                        <div key={i} className="col-6 col-sm-4 col-md-3 col-xl-5col">
                                             <div className="product-default inner-quickview inner-icon">
                                                  <figure>
                                                       <a href="demo5-product.html">
                                                            <Image src={product.productImageUrl} width="212"
                                                                 height="212" alt="product" />
                                                            <Image src={product16} width="212"
                                                                 height="212" alt="product" />
                                                       </a>
                                                       <div className="btn-icon-group">
                                                            <a href="#" title="Add To Cart"
                                                                 className="btn-icon btn-add-cart product-type-simple"><i
                                                                      className="icon-shopping-cart"></i></a>
                                                       </div>
                                                       <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                            title="Quick View">Quick View</a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <div className="category-wrap">
                                                            <div className="category-list">
                                                                 <a href="demo5-shop.html" className="product-category">{product.productCategory}</a>
                                                            </div>
                                                            <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i
                                                                 className="icon-heart"></i></a>
                                                       </div>
                                                       <h3 className="product-title">
                                                            <a href="demo5-product.html">{product.productTitle}</a>
                                                       </h3>
                                                       {/* <!-- <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span className="ratings" style="width:100%"></span>
                                                       <span className="tooltiptext tooltip-top"></span>
                                                  </div>
                                             </div> --> */}
                                                       <div className="price-box">
                                                            <span className="old-price">${product.oldPrice}.00</span>
                                                            <span className="product-price">${product.productPrice}.00</span>
                                                       </div>
                                                       <div className="product-nav-filter product-nav-thumbs">
                                                            <a href="#" className="active">
                                                                 <Image src={product.productImageUrl} width="30"
                                                                      height="30" alt="prod-thumnail" />
                                                            </a>
                                                            <a href="#">
                                                                 <Image src={product16} width="30"
                                                                      height="30" alt="prod-thumnail" />
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   ))
                              }
                         </div>

                         <a onClick={() => setNum(num + 10)} style={{ color: "white" }} className="btn btn-dark btn-md font1 loadmore mb-1">Load
                              more...</a>
                    </div>
               </div>
          </div>
     )
}

export default Product