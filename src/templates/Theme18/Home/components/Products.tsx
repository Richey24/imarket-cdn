import React, { FC } from "react";
import { ProductItemProps, ProductsProps } from "../types";

export const ProductItem: React.FC<ProductItemProps> = ({
     imageUrl,
     category,
     productName,
     price,
}) => {
     return (
          <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
               <div
                    className="product-default inner-quickview inner-icon "
                    data-animation-name="fadeIn"
               >
                    <figure>
                         <a href="demo18-product.html">
                              <img src={imageUrl} width={205} height={205} alt="product" />
                         </a>
                         <div className="btn-icon-group">
                              <a href="#" className="btn-icon btn-add-cart product-type-simple">
                                   <i className="icon-shopping-cart" />
                              </a>
                         </div>
                         <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                         >
                              Quick View
                         </a>
                    </figure>
                    <div className="product-details">
                         <div className="category-wrap">
                              <div className="category-list">
                                   <a href="demo18-shop.html" className="product-category">
                                        {category}
                                   </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                   <i className="icon-heart" />
                              </a>
                         </div>
                         <h3 className="product-title">
                              <a href="demo18-product.html">{productName}</a>
                         </h3>
                         <div className="price-box">
                              <span className="product-price">${price}</span>
                         </div>
                    </div>
               </div>
          </div>
     );
};

const Products: FC<ProductsProps> = ({ products }) => {
     return (
          <div className="products-filter-container bg-gray">
               <div className="container-fluid">
                    <div className="row align-items-lg-stretch">
                         <div className="filter-sidebar col-lg-2">
                              <div className="sidebar-wrapper">
                                   <h3 className="ls-n-10 text-uppercase text-primary">Sort By</h3>
                                   <ul className="check-filter-list">
                                        <li>
                                             <a href="#" className="active">
                                                  All
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#">Accessories</a>
                                        </li>
                                        <li>
                                             <a href="#">Electronics</a>
                                        </li>
                                        <li>
                                             <a href="#">Men</a>
                                        </li>
                                        <li>
                                             <a href="#">Shoes</a>
                                        </li>
                                        <li>
                                             <a href="#">Women</a>
                                        </li>
                                   </ul>
                              </div>
                              {/* End .sidebar-wrapper */}
                         </div>
                         {/* End .col-lg-3 */}
                         <div className="col-lg-10">
                              <div className="row product-ajax-grid mb-2">
                                   {products.map((product, index) => (
                                        <ProductItem
                                             imageUrl={product.imageUrl}
                                             category={product.category}
                                             productName={product.productName}
                                             price={product.price}
                                             key={index}
                                        />
                                   ))}
                              </div>
                              {/* End .row */}
                              <div className="product-more-container d-flex justify-content-center">
                                   <a
                                        href="ajax/demo18-ajax-products.html"
                                        className="btn btn-outline-dark loadmore"
                                   >
                                        Load More...
                                   </a>
                              </div>
                              {/* End .product-more-container */}
                         </div>
                         {/* End .col-lg-9 */}
                    </div>
                    {/* End .row */}
               </div>
               {/* End .container-fluid */}
          </div>
     );
};

export default Products;
