export const Home = () => {
     return;
     <main className="main home">
          <div className="container mt-2">
               <div className="row">
                    <div
                         className="col-lg-3 mb-2 appear-animate"
                         data-animation-name="fadeInRightShorter"
                         data-animation-delay={200}
                         data-animation-duration={1000}
                    >
                         <div className="side-menu-wrapper">
                              <h2 className="side-menu-title ls-10">Top Categories</h2>
                              <div className="side-menu-body mb-2 px-3 mx-3">
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
                              </div>
                         </div>
                    </div>

                    <div
                         className="col-lg-9 mb-2 appear-animate"
                         data-animation-name="fadeInLeftShorter"
                         data-animation-delay={400}
                         data-animation-duration={1000}
                    >
                         <div
                              className="home-slider owl-carousel owl-theme"
                              data-owl-options="{
                  'dots': true,
                  'nav': false
              }"
                         >
                              <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                                   <img
                                        className="slide-bg"
                                        style={{ backgroundColor: "#71b5da" }}
                                        src="assets/images/demoes/demo2/slider/slide-1.jpg"
                                        width={835}
                                        height={415}
                                        alt="slider image"
                                   />
                                   <div className="banner-layer">
                                        <h4 className="text-white">
                                             Find the Boundaries. Push Through!
                                        </h4>
                                        <h2 className="text-white mb-0">Summer Sale</h2>
                                        <h3 className="text-white text-uppercase">30% Off</h3>
                                        <h5 className="text-white text-uppercase d-inline-flex ls-n-20 mb-0">
                                             Starting At{" "}
                                             <b className="coupon-sale-text text-secondary bg-white">
                                                  $<em className="align-text-top">199</em>99
                                             </b>
                                        </h5>
                                        <a href="demo2-shop.html" className="btn btn-dark">
                                             Get Yours!
                                        </a>
                                   </div>
                              </div>

                              <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                                   <img
                                        className="slide-bg"
                                        style={{ backgroundColor: "#dadada" }}
                                        src="assets/images/demoes/demo2/slider/slide-2.jpg"
                                        width={835}
                                        height={415}
                                        alt="slider image"
                                   />
                                   <div className="banner-layer text-uppercase">
                                        <h4>Over 200 products with discounts</h4>
                                        <h2>Great Deals</h2>
                                        <h5 className="d-inline-block mb-0 align-top mr-4 pr-3">
                                             Starting At
                                             <b>
                                                  $<em>299</em>99
                                             </b>
                                        </h5>
                                        <a href="demo2-shop.html" className="btn btn-dark ls-10">
                                             Get Yours!
                                        </a>
                                   </div>
                              </div>

                              <div
                                   className=" home-slide home-slide3 banner banner-md-vw banner-sm-vw d-flex
                              align-items-center"
                              >
                                   <img
                                        className="slide-bg"
                                        src="assets/images/demoes/demo2/slider/slide-3.jpg"
                                        style={{ backgroundColor: "#ccc" }}
                                        width={835}
                                        height={415}
                                        alt="home slider"
                                   />
                                   <div className="banner-layer text-uppercase">
                                        <h4>Up to 70% off</h4>
                                        <h2>New Arrivals</h2>
                                        <h5 className="d-inline-block mb-0 align-top mr-4 pr-3">
                                             Starting At
                                             <b>
                                                  $<em>299</em>99
                                             </b>
                                        </h5>
                                        <a href="demo2-shop.html" className="btn btn-dark">
                                             Get Yours!
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div
                    className="info-boxes-container row row-joined mb-1 appear-animate"
                    data-animation-name="fadeInUpShorter"
                    data-animation-duration={1000}
               >
                    <div className="info-box info-box-icon-left col-lg-4">
                         <i className="icon-shipping" />
                         <div className="info-box-content">
                              <h4>FREE SHIPPING &amp; RETURN</h4>
                              <p className="text-body">Free shipping on all orders over $99.</p>
                         </div>
                    </div>
                    <div className="info-box info-box-icon-left col-lg-4">
                         <i className="icon-money" />
                         <div className="info-box-content">
                              <h4>MONEY BACK GUARANTEE</h4>
                              <p className="text-body">100% money back guarantee</p>
                         </div>
                    </div>
                    <div className="info-box info-box-icon-left col-lg-4">
                         <i className="icon-support" />
                         <div className="info-box-content">
                              <h4>ONLINE SUPPORT 24/7</h4>
                              <p className="text-body">Lorem ipsum dolor sit amet.</p>
                         </div>
                    </div>
               </div>
               <div
                    className="banners-grid text-uppercase grid"
                    data-grid-options="{
          'sortReorder': true
      }"
               >
                    <div
                         className="banner banner1 grid-item banner-md-vw w-25 w-md-100 text-transform-none w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={100}
                         data-animation-duration={1000}
                         data-md-order={1}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-1.jpg"
                                   style={{ backgroundColor: "#ccc" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-middle text-right">
                              <h4 className="banner-layer-circle-item ml-auto mb-2 ls-0">
                                   40
                                   <sup>
                                        %<small className="ls-0">OFF</small>
                                   </sup>
                              </h4>
                              <h5 className="m-b-3 ls-0">
                                   <del className="d-block m-b-2">$450</del>$270
                              </h5>
                              <h4 className="m-b-1 ls-n-0">Watches</h4>
                              <h3 className="mb-0 ls-0">Mega Sale</h3>
                         </div>
                    </div>
                    <div
                         className="banner banner7 grid-item banner-md-vw w-50 w-md-100 order-lg-0 w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                         data-animation-duration={1000}
                         data-md-order={3}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-7.jpg"
                                   style={{ backgroundColor: "#444" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                              <h3 className="m-b-3 text-white text-right ls-0">
                                   Electronic
                                   <br />
                                   Deals
                              </h3>
                              <div className="coupon-sale-content">
                                   <h4 className="mb-1 coupon-sale-text bg-white d-block ls-n-10 text-transform-none">
                                        Exclusive COUPON
                                   </h4>
                                   <h5 className="coupon-sale-text text-white ls-n-10 p-0">
                                        <i className="ls-0">UP TO</i>
                                        <b className="text-dark">$100</b> OFF
                                   </h5>
                                   <a
                                        href="demo2-shop.html"
                                        className="btn btn-block btn-dark btn-black"
                                   >
                                        Get Yours!
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div
                         className="banner banner4 grid-item banner-md-vw w-25 w-md-100 w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={300}
                         data-animation-duration={1000}
                         data-md-order={7}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-4.jpg"
                                   style={{ backgroundColor: "#444" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-middle text-right">
                              <h2 className="m-b-2 text-secondary ls-n-20">Flash Sale</h2>
                              <h3 className="m-b-1 ls-n-20">
                                   Top Brands
                                   <br />
                                   Summer Sunglasses
                              </h3>
                              <h4 className="text-white ls-n-20">
                                   Starting
                                   <br />
                                   AT <sup>$</sup>199<sup>99</sup>
                              </h4>
                              <a href="demo2-shop.html" className="btn btn-light ls-10">
                                   View Sale
                              </a>
                         </div>
                    </div>
                    <div
                         className="banner banner5 grid-item banner-md-vw text-center w-25 w-md-100 w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={400}
                         data-animation-duration={1000}
                         data-md-order={8}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-5.jpg"
                                   style={{ backgroundColor: "#ccc" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-top">
                              <h4 className="heading-border">Amazing</h4>
                              <h3 className="ls-0 mb-1">Collection</h3>
                              <hr className="mb-1 mt-1" />
                              <h5 className="pt-1">Check our discounts</h5>
                         </div>
                         <div className="banner-layer banner-layer-bottom">
                              <a href="demo2-shop.html" className="btn btn-dark">
                                   Shop Now!
                              </a>
                         </div>
                    </div>
                    <div
                         className="banner banner2 grid-item banner-md-vw w-25 w-md-100 w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={500}
                         data-animation-duration={1000}
                         data-md-order={2}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-2.jpg"
                                   style={{ backgroundColor: "#dce1e7" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-top text-right">
                              <h3 className="ls-0">Trending</h3>
                              <h2 className="m-b-3 ls-10 text-transform-none">Hot Sales</h2>
                              <h4 className="m-b-3 text-secondary ls-0">Starting at $99</h4>
                              <a href="demo2-shop.html" className="btn btn-dark ls-10">
                                   Buy Now!
                              </a>
                         </div>
                    </div>
                    <div
                         className="banner banner8 grid-item banner-md-vw w-50 w-md-100 w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={600}
                         data-animation-duration={1000}
                         data-md-order={4}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-8.jpg"
                                   style={{ backgroundColor: "#bd9c88" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-middle">
                              <h3 className="m-b-2 text-transform-none">Exclusive Shoes</h3>
                              <h4 className="m-b-3">50% Off</h4>
                              <a href="demo2-shop.html" className="btn btn-dark ls-10">
                                   Get Yours!
                              </a>
                         </div>
                    </div>
                    <div
                         className="banner banner9 grid-item banner-md-vw text-center w-50 w-md-100 w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={700}
                         data-animation-duration={1000}
                         data-md-order={5}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-9.jpg"
                                   style={{ backgroundColor: "#fff" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-middle banner-layer-left">
                              <h4 className="m-b-3 text-body">Check our discounts</h4>
                              <h3 className="text-nowrap">
                                   More than<span className="d-block mt-1 m-b-3">20 brands</span>
                              </h3>
                              <hr className="mt-0 mb-2" />
                              <h5 className="coupon-sale-text ls-n-10 p-0 mb-0">
                                   <i className="ls-0">UP TO</i>
                                   <b className="ls-n-0">$100</b> OFF
                              </h5>
                         </div>
                         <div className="banner-layer banner-layer-middle banner-layer-right text-center">
                              <a href="#" className="btn btn-dark">
                                   Check this sale!
                              </a>
                         </div>
                    </div>
                    <div
                         className="banner banner3 grid-item banner-md-vw w-25 w-md-100 w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={800}
                         data-animation-duration={1000}
                         data-md-order={9}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-3.jpg"
                                   style={{ backgroundColor: "#ccc" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-top text-center">
                              <h2 className="m-b-1">Top Brands</h2>
                              <h3 className="mb-1 pb-1">Smartphones</h3>
                              <h4 className="text-body">* limited time only</h4>
                         </div>
                         <div className="banner-layer banner-layer-bottom text-center">
                              <a href="demo2-shop.html" className="btn btn-secondary">
                                   Buy Now!
                              </a>
                         </div>
                    </div>
                    <div
                         className="banner banner6 grid-item banner-md-vw w-25 w-md-100 w-xxs-100 appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={900}
                         data-animation-duration={1000}
                         data-md-order={6}
                    >
                         <figure>
                              <img
                                   src="assets/images/demoes/demo2/banners/banner-6.jpg"
                                   style={{ backgroundColor: "#ccc" }}
                                   alt="banner"
                              />
                         </figure>
                         <div className="banner-layer banner-layer-middle text-center">
                              <h3 className="m-b-1 ls-0">Deal Promos</h3>
                              <h4 className="m-b-3 ls-0 text-body">Starting at $99</h4>
                              <a href="demo2-shop.html" className="btn btn-dark ls-10">
                                   Buy Now!
                              </a>
                         </div>
                    </div>
                    <div className="grid-col-sizer w-25" />
               </div>
          </div>
          <div className="mb-1" />
          <div className="products-section section-bg-gray">
               <div className="container">
                    <h2
                         className="section-title appear-animate"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                         data-animation-duration={1000}
                    >
                         Featured Products
                    </h2>
                    <div className="products-slider owl-carousel owl-theme dots-top dots-small">
                         <div
                              className="product-default inner-quickview inner-icon appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                              data-animation-duration={1000}
                         >
                              <figure className="img-effect">
                                   <a href="demo2-product.html">
                                        <img
                                             src="assets/images/demoes/demo2/products/product-1.jpg"
                                             width={265}
                                             height={265}
                                             alt="product"
                                        />
                                        <img
                                             src="assets/images/demoes/demo2/products/product-1-2.jpg"
                                             width={265}
                                             height={265}
                                             alt="product"
                                        />
                                   </a>
                                   <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                        <div className="product-label label-sale">27%</div>
                                   </div>
                                   <div className="btn-icon-group">
                                        <a
                                             href="#"
                                             className="btn-icon btn-add-cart product-type-simple"
                                        >
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
                                             <a href="demo2-shop.html" className="product-category">
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
                                        <a href="demo2-product.html">Blue High Hill</a>
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
                         <div
                              className="product-default inner-quickview inner-icon appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                              data-animation-duration={1000}
                         >
                              <figure className="img-effect">
                                   <a href="demo2-product.html">
                                        <img
                                             src="assets/images/demoes/demo2/products/product-2.jpg"
                                             width={265}
                                             height={265}
                                             alt="product"
                                        />
                                   </a>
                                   <div className="btn-icon-group">
                                        <a
                                             href="demo2-product.html"
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
                                             <a href="demo2-shop.html" className="product-category">
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
                         <div
                              className="product-default inner-quickview inner-icon appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                              data-animation-duration={1000}
                         >
                              <figure className="img-effect">
                                   <a href="demo2-product.html">
                                        <img
                                             src="assets/images/demoes/demo2/products/product-3.jpg"
                                             width={265}
                                             height={265}
                                             alt="product"
                                        />
                                   </a>
                                   <div className="btn-icon-group">
                                        <a
                                             href="#"
                                             className="btn-icon btn-add-cart product-type-simple"
                                        >
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
                                             <a href="demo2-shop.html" className="product-category">
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
                                        <a href="demo2-product.html">Black Belt</a>
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
                         <div
                              className="product-default inner-quickview inner-icon appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                              data-animation-duration={1000}
                         >
                              <figure className="img-effect">
                                   <a href="demo2-product.html">
                                        <img
                                             src="assets/images/demoes/demo2/products/product-4.jpg"
                                             width={265}
                                             height={265}
                                             alt="product"
                                        />
                                   </a>
                                   <div className="btn-icon-group">
                                        <a
                                             href="#"
                                             className="btn-icon btn-add-cart product-type-simple"
                                        >
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
                                             <a href="demo2-shop.html" className="product-category">
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
                                        <a href="demo2-product.html">High Hill Casual</a>
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
                         <div
                              className="product-default inner-quickview inner-icon appear-animate"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                              data-animation-duration={1000}
                         >
                              <figure className="img-effect">
                                   <a href="demo2-product.html">
                                        <img
                                             src="assets/images/demoes/demo2/products/product-5.jpg"
                                             width={265}
                                             height={265}
                                             alt="product"
                                        />
                                   </a>
                                   <div className="btn-icon-group">
                                        <a
                                             href="#"
                                             className="btn-icon btn-add-cart product-type-simple"
                                        >
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
                                             <a href="demo2-shop.html" className="product-category">
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
                                        <a href="demo2-product.html">Travel Bag</a>
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
                    </div>
               </div>
          </div>
          <div
               className="brands-section mt-5 mb-5 appear-animate"
               data-animation-delay={200}
               data-animation-name="fadeIn"
               data-animation-duration={1000}
          >
               <div className="container">
                    <div
                         className="brands-slider owl-carousel owl-theme images-center"
                         data-owl-options="{
              'margin': 0
          }"
                    >
                         <img
                              src="assets/images/brands/small/brand1.png"
                              width={140}
                              height={60}
                              alt="brand"
                         />
                         <img
                              src="assets/images/brands/small/brand2.png"
                              width={140}
                              height={60}
                              alt="brand"
                         />
                         <img
                              src="assets/images/brands/small/brand3.png"
                              width={140}
                              height={60}
                              alt="brand"
                         />
                         <img
                              src="assets/images/brands/small/brand4.png"
                              width={140}
                              height={60}
                              alt="brand"
                         />
                         <img
                              src="assets/images/brands/small/brand5.png"
                              width={140}
                              height={60}
                              alt="brand"
                         />
                         <img
                              src="assets/images/brands/small/brand6.png"
                              width={140}
                              height={60}
                              alt="brand"
                         />
                    </div>
               </div>
          </div>
     </main>;
};
