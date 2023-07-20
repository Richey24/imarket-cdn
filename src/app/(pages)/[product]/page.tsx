"use client";
import OwlCarouselComponent from "@/app/components/OWlCarousel";
import Product from "@/app/components/Product";
import ProductWidget from "@/app/components/Product/ProductWidget";
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

export default function ProductPage() {
     const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
          step: 0.01,
          defaultValue: 1.53,
          min: 1,
          max: 6,
          precision: 2,
     });

     const inc = getIncrementButtonProps();
     const dec = getDecrementButtonProps();
     const input = getInputProps();

     const img =
          "https://images.unsplash.com/photo-1689598843935-1aba53dd1277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
     return (
          <div>
               <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                         <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                                   <a href="demo13.html">Home</a>
                              </li>
                              <li className="breadcrumb-item" aria-current="page">
                                   Shop
                              </li>
                              <li className="breadcrumb-item" aria-current="page">
                                   shoes,&nbsp;&nbsp;toys
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                   sports shoes
                              </li>
                         </ol>
                    </div>
               </nav>
               <div className="container">
                    <div className="product-single-container product-single-default">
                         <div className="cart-message d-none">
                              <strong className="single-cart-notice">“Sports Shoes”</strong>
                              <span>has been added to your cart.</span>
                         </div>

                         <div className="row">
                              <div className="col-lg-5 col-md-6 product-single-gallery">
                                   <div className="product-slider-container">
                                        <div className="label-group">
                                             <div className="product-label label-hot">HOT</div>

                                             <div className="product-label label-sale">-16%</div>
                                        </div>
                                        <OwlCarouselComponent
                                             className="product-single-carousel"
                                             isResponsive={true}
                                             responsive={{
                                                  "0": {
                                                       items: 1,
                                                  },
                                             }}
                                        >
                                             <div className="product-item">
                                                  <img
                                                       className="h-96 w-96 product-single-image"
                                                       src={img}
                                                       data-zoom-image={img}
                                                       alt="product"
                                                  />
                                             </div>
                                             <div className="product-item">
                                                  <img
                                                       className="h-96 w-96 product-single-image"
                                                       src={img}
                                                       data-zoom-image={img}
                                                       alt="product"
                                                  />
                                             </div>
                                             <div className="product-item">
                                                  <img
                                                       className="h-96 w-96 product-single-image"
                                                       src={img}
                                                       data-zoom-image={img}
                                                       alt="product"
                                                  />
                                             </div>
                                             <div className="product-item">
                                                  <img
                                                       className="h-96 w-96 product-single-image"
                                                       src={img}
                                                       data-zoom-image={img}
                                                       alt="product"
                                                  />
                                             </div>
                                             <div className="product-item">
                                                  <img
                                                       className="h-96 w-96 product-single-image"
                                                       src={img}
                                                       data-zoom-image={img}
                                                       alt="product"
                                                  />
                                             </div>
                                        </OwlCarouselComponent>

                                        <span className="prod-full-screen">
                                             <i className="icon-plus"></i>
                                        </span>
                                   </div>

                                   <OwlCarouselComponent className="prod-thumbnail owl-dots">
                                        <div className="owl-dot">
                                             <img
                                                  src={img}
                                                  width="110"
                                                  className="h-40 w-40 product-single-image"
                                                  height="110"
                                                  alt="product-thumbnail"
                                             />
                                        </div>
                                        <div className="owl-dot">
                                             <img
                                                  src={img}
                                                  width="110"
                                                  height="110"
                                                  alt="product-thumbnail"
                                                  className="h-40 w-40 product-single-image"
                                             />
                                        </div>
                                        <div className="owl-dot">
                                             <img
                                                  src={img}
                                                  width="110"
                                                  height="110"
                                                  alt="product-thumbnail"
                                                  className="h-40 w-40 product-single-image"
                                             />
                                        </div>
                                        <div className="owl-dot">
                                             <img
                                                  src={img}
                                                  width="110"
                                                  height="110"
                                                  alt="product-thumbnail"
                                                  className="h-40 w-40 product-single-image"
                                             />
                                        </div>
                                        <div className="owl-dot">
                                             <img
                                                  src={img}
                                                  width="110"
                                                  height="110"
                                                  alt="product-thumbnail"
                                                  className="h-40 w-40 product-single-image"
                                             />
                                        </div>
                                   </OwlCarouselComponent>
                              </div>

                              <div className="col-lg-7 col-md-6 product-single-details">
                                   <h1 className="product-title">Sports Shoes</h1>

                                   <div className="product-nav">
                                        <div className="product-prev">
                                             <a href="#">
                                                  <span className="product-link"></span>

                                                  <span className="product-popup">
                                                       <span className="box-content">
                                                            <img
                                                                 alt="product"
                                                                 width="150"
                                                                 height="150"
                                                                 src={img}
                                                                 style={{ paddingTop: "0" }}
                                                            />

                                                            <span>Circled Ultimate 3D Speaker</span>
                                                       </span>
                                                  </span>
                                             </a>
                                        </div>

                                        <div className="product-next">
                                             <a href="#">
                                                  <span className="product-link"></span>

                                                  <span className="product-popup">
                                                       <span className="box-content">
                                                            <img
                                                                 alt="product"
                                                                 width="150"
                                                                 height="150"
                                                                 src={img}
                                                                 style={{ paddingTop: "0" }}
                                                            />

                                                            <span>Blue Backpack for the Young</span>
                                                       </span>
                                                  </span>
                                             </a>
                                        </div>
                                   </div>

                                   <div className="ratings-container">
                                        <div className="product-ratings">
                                             <span
                                                  className="ratings"
                                                  style={{ width: "0" }}
                                             ></span>
                                             <span className="tooltiptext tooltip-top"></span>
                                        </div>

                                        <a href="#" className="rating-link">
                                             ( There are no reviews yet. )
                                        </a>
                                   </div>

                                   <hr className="short-divider" />

                                   <div className="price-box">
                                        <span className="product-price">$239.00 – $259.00</span>
                                   </div>

                                   <div className="product-desc">
                                        <p>
                                             Pellentesque habitant morbi tristique senectus et netus
                                             et malesuada fames ac turpis egestas. Vestibulum tortor
                                             quam, feugiat vitae, ultricies eget, tempor sit amet,
                                             ante. Donec eu libero sit amet quam egestas semper.
                                             Aenean ultricies mi vitae est. Mauris placerat eleifend
                                             leo.
                                        </p>
                                   </div>

                                   <ul className="single-info-list">
                                        <li>
                                             SKU:
                                             <strong>654111995-1-2</strong>
                                        </li>

                                        <li>
                                             Categories:
                                             <strong>
                                                  <a href="#" className="product-category">
                                                       SHOES, TOYS
                                                  </a>
                                             </strong>
                                        </li>

                                        <li>
                                             TAGs:
                                             <strong>
                                                  <a href="#" className="product-category">
                                                       CLOTHES
                                                  </a>
                                             </strong>
                                             ,
                                             <strong>
                                                  <a href="#" className="product-category">
                                                       Fashion
                                                  </a>
                                             </strong>
                                        </li>
                                   </ul>
                                   <div className="product-filters-container">
                                        <div className="product-single-filter">
                                             <label>Color:</label>
                                             <ul className="config-size-list config-color-list config-filter-list">
                                                  <li className="">
                                                       <a
                                                            href="javascript:;"
                                                            className="filter-color border-0"
                                                            style={{ backgroundColor: "#81d742" }}
                                                       ></a>
                                                  </li>
                                                  <li className="">
                                                       <a
                                                            href="javascript:;"
                                                            className="filter-color border-0"
                                                            style={{ backgroundColor: "#6085a5" }}
                                                       ></a>
                                                  </li>
                                             </ul>
                                        </div>

                                        <div className="product-single-filter m-b-4">
                                             <label>Size:</label>
                                             <ul className="config-size-list text-transform-none">
                                                  <li className="">
                                                       <a
                                                            href="javascript:;"
                                                            className="d-flex align-items-center justify-content-center"
                                                       >
                                                            Extra Small
                                                       </a>
                                                  </li>
                                                  <li className="">
                                                       <a
                                                            href="javascript:;"
                                                            className="d-flex align-items-center justify-content-center"
                                                       >
                                                            Large
                                                       </a>
                                                  </li>
                                                  <li className="">
                                                       <a
                                                            href="javascript:;"
                                                            className="d-flex align-items-center justify-content-center"
                                                       >
                                                            Medium
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>

                                        <div className="product-single-filter">
                                             <label></label>
                                             <a className="font1 text-uppercase clear-btn" href="#">
                                                  Clear
                                             </a>
                                        </div>
                                   </div>

                                   <div className="product-action">
                                        <div className="flex gap-12">
                                             <HStack
                                                  maxW="10rem"
                                                  gap="0"
                                                  className="border border-gray-600 rounded-md px-1"
                                             >
                                                  <Button bg="white" {...inc}>
                                                       +
                                                  </Button>
                                                  <Input {...input} className="border-none" />
                                                  <Button bg="white" {...dec}>
                                                       -
                                                  </Button>
                                             </HStack>

                                             <button
                                                  className="btn bg-gray-800 rounded-sm text-base text-white add-cart mr-2"
                                                  title="Add to Cart"
                                             >
                                                  Add to Cart
                                             </button>
                                        </div>
                                        <a
                                             href="cart.html"
                                             className="btn btn-gray view-cart d-none"
                                        >
                                             View cart
                                        </a>
                                   </div>

                                   <hr className="divider mb-0 mt-0" />

                                   <div className="product-single-share mb-3">
                                        <label className="sr-only">Share:</label>

                                        <div className="social-icons mr-2">
                                             <a
                                                  href="#"
                                                  className="social-icon social-facebook icon-facebook"
                                                  target="_blank"
                                                  title="Facebook"
                                             ></a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-twitter icon-twitter"
                                                  target="_blank"
                                                  title="Twitter"
                                             ></a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-linkedin fab fa-linkedin-in"
                                                  target="_blank"
                                                  title="Linkedin"
                                             ></a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-gplus fab fa-google-plus-g"
                                                  target="_blank"
                                                  title="Google +"
                                             ></a>
                                             <a
                                                  href="#"
                                                  className="social-icon social-mail icon-mail-alt"
                                                  target="_blank"
                                                  title="Mail"
                                             ></a>
                                        </div>

                                        <a
                                             href="wishlist.html"
                                             className="btn-icon-wish add-wishlist"
                                             title="Add to Wishlist"
                                        >
                                             <i className="icon-wishlist-2"></i>
                                             <span>Add to Wishlist</span>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="products-section pt-0">
                         <h2 className="section-title">Related Products</h2>

                         <OwlCarouselComponent
                              className={"products-slider"}
                              isResponsive={true}
                              responsive={{
                                   "480": {
                                        items: 2,
                                   },
                                   "768": {
                                        items: 3,
                                   },
                                   "992": {
                                        items: 4,
                                   },
                              }}
                         >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((product) => {
                                   return (
                                        <Product
                                             imageSrc={img}
                                             productName="Product title"
                                             price={"$299.00"}
                                        />
                                   );
                              })}
                         </OwlCarouselComponent>
                    </div>
                    <div className="product-widgets-container row pb-2 mt-24">
                         {[
                              "FEATURED PRODUCTS",
                              "BEST SELLING PRODUCTS",
                              "LATEST PRODUCTS",
                              "TOP RATED PRODUCTS",
                         ].map((label) => {
                              return (
                                   <div key={label} className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                                        <h4 className="font-bold text-sm mb-1">{label}</h4>
                                        <ProductWidget />
                                        <ProductWidget />
                                        <ProductWidget />
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </div>
     );
}
