const SideMenu = () => {
     return (
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
                    <a href="#" className="btn btn-block btn-dark btn-lg px-0 ls-10">
                         Huge Sale -<strong>70%</strong>
                         Off
                    </a>
               </figure>
               <div className="product-details">
                    <div className="category-wrap">
                         <div className="category-list">
                              <a href="demo2-shop.html" className="product-category">
                                   category
                              </a>
                         </div>
                         <a href="wishlist.html" title="Wishlist" className="btn-icon-wish">
                              <i className="icon-heart" />
                         </a>
                    </div>
                    <h3 className="product-title">
                         <a href="demo2-product.html">Brown Backpack</a>
                    </h3>
                    <div className="ratings-container">
                         <div className="product-ratings">
                              <span className="ratings" style={{ width: "100%" }} />
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
     );
};

export default SideMenu;
