import React from "react";

interface ProductData {
     id: number;
     image1: string;
     image2: string;
     category: string;
     title: string;
     oldPrice?: string;
     price: string;
}

interface ProductGridProps {
     products: ProductData[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
     <div
          className="row product-ajax-grid "
          data-animation-name="fadeInUpShorter"
          data-animation-delay={400}
     >
          {products.map((product, index) => (
               <div key={index} className="col-sm-3 col-6">
                    <div className="product-default inner-quickview inner-icon">
                         <figure>
                              <a href={`demo11-product-${product.id}.html`}>
                                   <img
                                        src={product.image1}
                                        width={280}
                                        height={280}
                                        alt="product"
                                   />
                                   <img
                                        src={product.image2}
                                        width={280}
                                        height={280}
                                        alt="product"
                                   />
                              </a>
                              {product.oldPrice && (
                                   <div className="label-group">
                                        <div className="product-label label-sale">27%</div>
                                   </div>
                              )}
                              <div className="btn-icon-group">
                                   <a
                                        href={`demo11-product-${product.id}.html`}
                                        className="btn-icon btn-add-cart"
                                   >
                                        <i className="fa fa-arrow-right" />
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
                                        <a
                                             href={`demo11-shop-${product.id}.html`}
                                             className="product-category"
                                        >
                                             {product.category}
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
                                   <a href={`demo11-product-${product.id}.html`}>{product.title}</a>
                              </h3>
                              <div className="price-box">
                                   {product.oldPrice && (
                                        <span className="old-price">{product.oldPrice}</span>
                                   )}
                                   <span className="product-price">{product.price}</span>
                              </div>
                              {/* End .price-box */}
                         </div>
                         {/* End .product-details */}
                    </div>
               </div>
          ))}
     </div>
);

export default ProductGrid;
