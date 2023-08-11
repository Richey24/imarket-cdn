import OwlCarousel from "react-owl-carousel";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          576: {
               items: 2,
          },
          992: {
               items: 3,
          },
     },
};

function Category() {
     return (
          <div className="section shop-section mb-3">
               <div className="container">
                    <h2
                         className="section-title "
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay="200"
                    >
                         Browse By Category
                    </h2>

                    <OwlCarousel
                         className="owl-carousel owl-theme nav-thick show-nav-hover nav-outer pb-2 mb-3"
                         {...owlCarouselOptions}
                    >
                         <div
                              className="product-category content-center overlay-light "
                              data-animation-name="fadeInUpShorter"
                         >
                              <a href="demo33-shop.html">
                                   <figure>
                                        <img
                                             src="https://images.unsplash.com/photo-1628655206959-54a6c9689854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                                             alt="category"
                                             width="300"
                                             height="300"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Sunglasses</h3>
                                        <span>
                                             <mark className="count">22</mark> products
                                        </span>
                                   </div>
                              </a>
                         </div>

                         <div
                              className="product-category content-center overlay-light "
                              data-animation-name="fadeInUpShorter"
                         >
                              <a href="demo33-shop.html">
                                   <figure>
                                        <img
                                             src="https://images.unsplash.com/photo-1517612228538-cefdbc2c01e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                             alt="category"
                                             width="300"
                                             height="300"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Bags</h3>
                                        <span>
                                             <mark className="count">22</mark> products
                                        </span>
                                   </div>
                              </a>
                         </div>

                         <div
                              className="product-category content-center overlay-light "
                              data-animation-name="fadeInUpShorter"
                         >
                              <a href="demo33-shop.html">
                                   <figure>
                                        <img
                                             src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80"
                                             alt="category"
                                             width="300"
                                             height="300"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Shoes</h3>
                                        <span>
                                             <mark className="count">22</mark> products
                                        </span>
                                   </div>
                              </a>
                         </div>
                         <div
                              className="product-category content-center overlay-light "
                              data-animation-name="fadeInUpShorter"
                         >
                              <a href="demo33-shop.html">
                                   <figure>
                                        <img
                                             src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                                             alt="category"
                                             width="300"
                                             height="300"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Accessories</h3>
                                        <span>
                                             <mark className="count">22</mark> products
                                        </span>
                                   </div>
                              </a>
                         </div>
                         <div
                              className="product-category content-center overlay-light "
                              data-animation-name="fadeInUpShorter"
                         >
                              <a href="demo33-shop.html">
                                   <figure>
                                        <img
                                             src="https://images.unsplash.com/photo-1556306510-31ca015374b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                             alt="category"
                                             width="300"
                                             height="300"
                                        />
                                   </figure>
                                   <div className="category-content">
                                        <h3>Sunglasses</h3>
                                        <span>
                                             <mark className="count">22</mark> products
                                        </span>
                                   </div>
                              </a>
                         </div>
                    </OwlCarousel>

                    <h2 className="section-title ">Featured Products Grid</h2>

                    <div className="row">
                         <div className="col-6">
                              <div className="product-default  inner-quickview inner-icon inner-icon-inline overlay-dark w-full grid-height-1 w-md-100 ">
                                   <figure>
                                        <a href="demo33-product.html">
                                             <img
                                                  src="assets/images/demoes/demo33/products/grid/product-1.jpg"
                                                  alt="product"
                                                  width="576"
                                                  height="576"
                                             />
                                        </a>
                                        <div className="label-group">
                                             <span className="product-label label-sale">
                                                  27% Off
                                             </span>
                                        </div>
                                        <div className="btn-icon-group">
                                             <a href="#" className="btn-icon btn-icon-wish">
                                                  <i className="icon-heart"></i>
                                             </a>
                                             <button
                                                  className="btn-icon btn-add-cart product-type-simple"
                                                  data-toggle="modal"
                                                  data-target="#addCartModal"
                                             >
                                                  <i className="icon-shopping-cart"></i>
                                             </button>
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
                                                       href="demo33-shop.html"
                                                       className="product-category"
                                                  >
                                                       men
                                                  </a>
                                             </div>
                                        </div>
                                        <h3 className="product-title">
                                             {" "}
                                             <a href="demo33-product.html">Woman blouse</a>{" "}
                                        </h3>

                                        <div className="price-box">
                                             <span className="product-price">$914.00</span>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="col-6">
                              <div className="row">
                                   <div className="col-6">
                                        {" "}
                                        <div className="product-default  inner-quickview inner-icon inner-icon-inline overlay-dark w-full grid-height-1">
                                             <figure>
                                                  <a href="demo33-product.html">
                                                       <img
                                                            src="assets/images/demoes/demo33/products/grid/product-2.jpg"
                                                            alt="product"
                                                            width="300"
                                                            height="600"
                                                       />
                                                  </a>
                                                  <div className="btn-icon-group">
                                                       <a
                                                            href="#"
                                                            className="btn-icon btn-icon-wish"
                                                       >
                                                            <i className="icon-heart"></i>
                                                       </a>
                                                       <button
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                            data-toggle="modal"
                                                            data-target="#addCartModal"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                       </button>
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
                                                  <div className="category-list">
                                                       <a
                                                            href="demo33-shop.html"
                                                            className="product-category"
                                                       >
                                                            men
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       {" "}
                                                       <a href="demo33-product.html">
                                                            Man Cloths
                                                       </a>{" "}
                                                  </h3>

                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            $188.00
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-6">
                                        {" "}
                                        <div className="product-default  inner-quickview inner-icon inner-icon-inline overlay-dark w-full grid-height-1-2">
                                             <figure>
                                                  <a href="demo33-product.html">
                                                       <img
                                                            src="assets/images/demoes/demo33/products/grid/product-3.jpg"
                                                            alt="product"
                                                            width="300"
                                                            height="300"
                                                       />
                                                       <img
                                                            src="assets/images/demoes/demo33/products/grid/product-3-2.jpg"
                                                            alt="product"
                                                            width="300"
                                                            height="300"
                                                       />
                                                  </a>
                                                  <div className="btn-icon-group">
                                                       <a
                                                            href="#"
                                                            className="btn-icon btn-icon-wish"
                                                       >
                                                            <i className="icon-heart"></i>
                                                       </a>
                                                       <button
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                            data-toggle="modal"
                                                            data-target="#addCartModal"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                       </button>
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
                                                  <div className="category-list">
                                                       <a
                                                            href="demo33-shop.html"
                                                            className="product-category"
                                                       >
                                                            men
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       {" "}
                                                       <a href="demo33-product.html">
                                                            Man Belt
                                                       </a>{" "}
                                                  </h3>

                                                  <div className="price-box">
                                                       <span className="product-price">$18.00</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="product-default  inner-quickview inner-icon inner-icon-inline overlay-dark w-full grid-height-1-2">
                                             <figure>
                                                  <a href="demo33-product.html">
                                                       <img
                                                            src="assets/images/demoes/demo33/products/grid/product-4.jpg"
                                                            alt="product"
                                                            width="300"
                                                            height="300"
                                                       />
                                                  </a>
                                                  <div className="btn-icon-group">
                                                       <a
                                                            href="#"
                                                            className="btn-icon btn-icon-wish"
                                                       >
                                                            <i className="icon-heart"></i>
                                                       </a>
                                                       <button
                                                            className="btn-icon btn-add-cart product-type-simple"
                                                            data-toggle="modal"
                                                            data-target="#addCartModal"
                                                       >
                                                            <i className="icon-shopping-cart"></i>
                                                       </button>
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
                                                  <div className="category-list">
                                                       <a
                                                            href="demo33-shop.html"
                                                            className="product-category"
                                                       >
                                                            men
                                                       </a>
                                                  </div>
                                                  <h3 className="product-title">
                                                       {" "}
                                                       <a href="demo33-product.html">
                                                            Woman Bag
                                                       </a>{" "}
                                                  </h3>

                                                  <div className="price-box">
                                                       <span className="product-price">$48.00</span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="grid-col-sizer"></div>
                    </div>
               </div>
          </div>
     );
}

export default Category;
