import Image from "next/image";
import product16 from "../../../../assets/images/demoes/demo5/products/product-16.jpg";
import { useState } from "react";
import Link from "next/link";

const Product = ({ setQuickView, products }) => {
     const [num, setNum] = useState(10);

     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "block";
               setQuickView(product);
          }
     };

     return (
          <div>
               <div className="container">
                    <div
                         style={{ padding: "20px" }}
                         className="products-container bg-white text-center mb-2"
                    >
                         <div className="row product-ajax-grid mb-2">
                              {products&&products.map((product, i) => (
                                   <div key={i} className="col-6 col-sm-4 col-md-3 col-xl-5col">
                                        <div className="product-default inner-quickview inner-icon">
                                             <figure>
                                                  <Link href={`/${product.id}`}>
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="212"
                                                            height="212"
                                                            alt="product"
                                                       />
                                                       <Image
                                                            src={product.productImageUrl}
                                                            width="212"
                                                            height="212"
                                                            alt="product"
                                                       />
                                                  </Link>
                                                  <div className="btn-icon-group">
                                                       <Link
                                                            href="#"
                                                            title="Add To Cart"
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                       </Link>
                                                  </div>
                                                  <a
                                                       onClick={() => showDiv(product)}
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
                                                                 href="demo5-shop.html"
                                                                 className="product-category"
                                                            >
                                                                 {product.productCategory}
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
                                                       <Link href="demo5-product.html">
                                                            {product.productTitle}
                                                       </Link>
                                                  </h3>
                                                  {/* <!-- <div className="ratings-container">
                                                  <div className="product-ratings">
                                                       <span className="ratings" style="width:100%"></span>
                                                       <span className="tooltiptext tooltip-top"></span>
                                                  </div>
                                             </div> --> */}
                                                  <div className="price-box">
                                                       <span className="old-price">
                                                            ${product.oldPrice}.00
                                                       </span>
                                                       <span className="product-price">
                                                            ${product.productPrice}.00
                                                       </span>
                                                  </div>
                                                  <div className="product-nav-filter product-nav-thumbs">
                                                       <Link href="#" className="active">
                                                            <Image
                                                                 src={product.productImageUrl}
                                                                 width="30"
                                                                 height="30"
                                                                 alt="prod-thumnail"
                                                            />
                                                       </Link>
                                                       <Link href="#">
                                                            <Image
                                                                 src={product.productImageUrl}
                                                                 width="30"
                                                                 height="30"
                                                                 alt="prod-thumnail"
                                                            />
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>

                         <a
                              onClick={() => setNum(num + 10)}
                              style={{ color: "white" }}
                              className="btn btn-dark btn-md font1 loadmore mb-1"
                         >
                              Load more...
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default Product