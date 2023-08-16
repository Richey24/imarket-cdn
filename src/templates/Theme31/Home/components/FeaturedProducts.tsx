import React from "react";
import { StaticImageData } from "next/image";
import OwlCarousel from "react-owl-carousel";
import Product from "@/app/components/Product";

interface Iproduct {
     imageUrl: StaticImageData | string;
     category: string;
     title: string;
     price: string;
}
[];

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     items: 1,
};

function FeaturedProduct({ products }: { products: Iproduct[] }) {
     return (
          <section className="product-panel bar-bottom">
               <div className="row ">
                    <div className="col-12 col-sm-6 col-lg-4 height-xxl mb-0 mb-lg-0">
                         <OwlCarousel className="product-slider" {...owlCarouselOptions}>
                              <div className="product-default inner-quickview inner-icon center-details">
                                   <figure>
                                        <a href="demo31-product.html">
                                             <img
                                                  src="assets/images/demoes/demo31/products/zoom/product-2-big.jpg"
                                                  width="340"
                                                  height="481"
                                                  alt="Product"
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
                                             href="ajax/demo31-product-quick-view.html"
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
                                                       href="demo31-shop.html"
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
                                                  <i className="icon-heart"></i>
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo31-product.html">Call of War 3</a>{" "}
                                        </h3>

                                        <div className="price-box">
                                             <span className="old-price">$59.00</span>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="product-default inner-quickview inner-icon center-details">
                                   <figure>
                                        <a href="demo31-product.html">
                                             <img
                                                  src="assets/images/demoes/demo31/products/zoom/product-1-big.jpg"
                                                  width="340"
                                                  height="481"
                                                  alt="Product"
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
                                             href="ajax/demo31-product-quick-view.html"
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
                                                       href="demo31-shop.html"
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
                                                  <i className="icon-heart"></i>
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo31-product.html">Call of War 2</a>{" "}
                                        </h3>

                                        <div className="price-box">
                                             <span className="old-price">$59.00</span>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="product-default inner-quickview inner-icon center-details">
                                   <figure>
                                        <a href="demo31-product.html">
                                             <img
                                                  src="assets/images/demoes/demo31/products/zoom/product-3-big.jpg"
                                                  width="340"
                                                  height="481"
                                                  alt="Product"
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
                                             href="ajax/demo31-product-quick-view.html"
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
                                                       href="demo31-shop.html"
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
                                                  <i className="icon-heart"></i>
                                             </a>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo31-product.html">Need For Race</a>{" "}
                                        </h3>

                                        <div className="price-box">
                                             <span className="old-price">$59.00</span>
                                             <span className="product-price">$49.00</span>
                                        </div>
                                   </div>
                              </div>
                         </OwlCarousel>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-8">
                         <div className="row">
                              {products.map((product: Iproduct) => {
                                   return (
                                        <div className="col-6 col-sm-6 col-md-3  height-xl">
                                             <Product
                                                  imageSrc={product.imageUrl as string}
                                                  productName={product.title}
                                                  price={product.price}
                                             />
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default FeaturedProduct;
