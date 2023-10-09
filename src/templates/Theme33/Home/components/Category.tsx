import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import Link from "next/link";
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

const mainCategories = [
     {
          title: "Sunglasses",
          totalProducts: "22",
          imageSrc:
               "https://images.unsplash.com/photo-1628655206959-54a6c9689854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
     },
     {
          title: "Bags",
          totalProducts: "22",
          imageSrc:
               "https://images.unsplash.com/photo-1517612228538-cefdbc2c01e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
     },
     {
          title: "Shoes",
          totalProducts: "22",
          imageSrc:
               "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80",
     },
     {
          title: "Accessories",
          totalProducts: "22",
          imageSrc:
               "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
     },
     {
          title: "Sunglasses",
          totalProducts: "22",
          imageSrc:
               "https://images.unsplash.com/photo-1556306510-31ca015374b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
     },
];

function Category() {
     return (
          <div className="section shop-section mb-3 tw-py-24">
               <div className="">
                    <div className="banners-section bg-gray tw-mb-12">
                         <div className="container mb-2">
                              <OwlCarousel
                                   className="banners-slider owl-carousel owl-theme"
                                   {...owlCarouselOptions}
                              >
                                   <div className="banner banner-sm-vw-large">
                                        <figure>
                                             <img
                                                  src={templateImages.demo33.home.home8}
                                                  alt="banner"
                                                  width="380"
                                                  height="380"
                                             />
                                        </figure>

                                        <div className="banner-layer banner-layer-top">
                                             <h3>{"Women's"} Bags &amp; Purses</h3>
                                             <h4>
                                                  <del className="">20%</del>
                                                  <strong className="text-primary">30%</strong>
                                             </h4>
                                        </div>

                                        <div className="banner-layer banner-layer-bottom">
                                             <a
                                                  href="demo33-shop.html"
                                                  className="btn btn-dark btn-lg"
                                             >
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>

                                   <div className="banner banner-sm-vw-large text-center">
                                        <figure>
                                             <img
                                                  src={templateImages.demo33.home.home5}
                                                  alt="banner"
                                                  width="380"
                                                  height="380"
                                             />
                                        </figure>

                                        <div className="banner-layer banner-layer-top">
                                             <h3>{"Women's"} Shoes</h3>
                                        </div>

                                        <div className="banner-layer banner-layer-circle">
                                             <h4 className="banner-layer-circle-item bg-primary">
                                                  40
                                                  <sup>%</sup>
                                             </h4>
                                        </div>

                                        <div className="banner-layer banner-layer-bottom">
                                             <a
                                                  href="demo33-shop.html"
                                                  className="btn btn-dark btn-lg"
                                             >
                                                  Shop Now
                                             </a>
                                        </div>
                                   </div>

                                   <div className="banner banner-sm-vw-large text-right">
                                        <figure>
                                             <img
                                                  src={templateImages.demo33.home.home1}
                                                  alt="banner"
                                                  width="380"
                                                  height="380"
                                             />
                                        </figure>

                                        <div className="banner-layer banner-layer-top">
                                             <h3>{"Men's"} Leather Belt</h3>
                                             <h4 className="right-text">
                                                  <del>30%</del>
                                                  <strong className="text-primary">50%</strong>
                                             </h4>
                                        </div>

                                        <div className="banner-layer banner-layer-bottom">
                                             <a
                                                  href="demo33-shop.html"
                                                  className="btn btn-dark btn-lg"
                                             >
                                                  Shop Now
                                             </a>
                                        </div>

                                        <div className="banner-layer banner-layer-bottom banner-layer-left">
                                             <img
                                                  src="assets/images/demoes/demo33/banners/brand-3.jpg"
                                                  width="70"
                                                  height="18"
                                                  alt="brand"
                                                  className="banner-layer-vertical-item"
                                             />
                                        </div>
                                   </div>
                              </OwlCarousel>
                         </div>
                    </div>

                    <div className="container">
                         <h2 className="section-title ">Browse By Category</h2>

                         <OwlCarousel
                              className="owl-carousel owl-theme nav-thick show-nav-hover nav-outer pb-2 mb-3"
                              {...owlCarouselOptions}
                         >
                              {mainCategories.map((category) => {
                                   return (
                                        <div
                                             className="product-category content-center overlay-light tw-h-[300px]"
                                             key={category.title}
                                        >
                                             <Link href="demo33-shop.html">
                                                  <figure className="tw-w-full tw-h-full">
                                                       <Image
                                                            src={category.imageSrc}
                                                            alt="category"
                                                            fill
                                                       />
                                                  </figure>
                                                  <div className="category-content">
                                                       <h3>{category.title}</h3>
                                                       <span>
                                                            <mark className="count">
                                                                 {category.totalProducts}
                                                            </mark>{" "}
                                                            products
                                                       </span>
                                                  </div>
                                             </Link>
                                        </div>
                                   );
                              })}
                         </OwlCarousel>

                         <div className="">
                              <h2 className="section-title ">Featured Products Grid</h2>

                              <div className="row tw-h-[55rem] tw-w-full">
                                   <div className="col-6 tw-h-full">
                                        <div className="product-default  inner-quickview inner-icon inner-icon-inline tw-relative overlay-dark tw-w-full tw-h-full">
                                             <figure className="tw-h-full tw-w-full">
                                                  <a href="demo33-product.html">
                                                       <Image
                                                            src={templateImages.demo33.home.home12}
                                                            alt="product"
                                                            fill
                                                       />
                                                  </a>
                                                  <div className="label-group">
                                                       <span className="product-label label-sale">
                                                            27% Off
                                                       </span>
                                                  </div>
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
                                                       <a href="demo33-product.html">
                                                            Woman blouse
                                                       </a>{" "}
                                                  </h3>

                                                  <div className="price-box">
                                                       <span className="product-price">
                                                            $914.00
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-6 tw-h-full">
                                        <div className="row tw-h-full">
                                             <div className="col-6">
                                                  {" "}
                                                  <div className="product-default  inner-quickview inner-icon inner-icon-inline overlay-dark tw-w-full tw-h-full tw-relative">
                                                       <figure className="tw-h-full tw-w-full">
                                                            <a href="demo33-product.html">
                                                                 <Image
                                                                      src={
                                                                           templateImages.demo33
                                                                                .home.home6
                                                                      }
                                                                      alt="product"
                                                                      fill
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
                                             {/*  */}
                                             <div className="col-6">
                                                  {" "}
                                                  <div className="row tw-w-full tw-h-full tw-gap-3">
                                                       <div className="col-12 tw-h-1/2">
                                                            <div className="product-default  inner-quickview inner-icon inner-icon-inline overlay-dark tw-w-full tw-h-full tw-relative">
                                                                 <figure className="tw-h-full tw-w-full">
                                                                      <a href="demo33-product.html">
                                                                           <Image
                                                                                src={
                                                                                     templateImages
                                                                                          .demo33
                                                                                          .home
                                                                                          .home5
                                                                                }
                                                                                alt="product"
                                                                                fill
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
                                                                           <span className="product-price">
                                                                                $18.00
                                                                           </span>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="col-12 tw-h-1/2 ">
                                                            <div className="product-default  inner-quickview inner-icon inner-icon-inline overlay-dark tw-w-full tw-h-full tw-relative">
                                                                 <figure className="tw-h-full tw-w-full">
                                                                      <a href="demo33-product.html">
                                                                           <Image
                                                                                src={
                                                                                     templateImages
                                                                                          .demo33
                                                                                          .home
                                                                                          .home11
                                                                                }
                                                                                alt="product"
                                                                                fill
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
                                                                           <span className="product-price">
                                                                                $48.00
                                                                           </span>
                                                                      </div>
                                                                 </div>
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
               </div>
          </div>
     );
}

export default Category;
