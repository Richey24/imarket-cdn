import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import { Product } from "./components/Product";
import { Promotion } from "./components/Promotion";
import { featuredProducts, promotions, shopByCategories } from "./data";
import Image from "next/image";
import slide1 from "../../../assets/images/demoes/demo3/slider/slide1.jpg";
import slide2 from "../../../assets/images/demoes/demo3/slider/slide2.jpg";
import Banner from "./components/Banner";
import ShopByCategory from "./components/ShopByCategory";
import { InfoBox } from "@react-google-maps/api";
import { InfoBoxesContainer } from "./components/Info";

export const Home = (props: any) => {
     let settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
     };

     const [activeTab, setActiveTab] = useState("featured-products");
     const { static: statiProps, products, categories } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);

     useEffect(() => {
          if (products && !latestProductsState) {
               const latestProductsMap = products.map((product) => {
                    return {
                         productImageAlt: product.display_name,
                         productCategory: "SHOES, TOYS",
                         productImageUrl: "data:image/jpeg;base64," + product?.image_1920,
                         productImageUrlTwo: "data:image/jpeg;base64," + product?.image_1024,
                         productTitle: product.display_name,
                         productPrice: product.standard_price,
                         id: product.id,
                         slug: product.website_url,
                         tooltip: product.product_tooltip,
                         productImage: "data:image/jpeg;base64," + product?.image_1920,
                         productImageTwo: "data:image/jpeg;base64," + product?.image_1024,
                         __last_update: new Date(product.__last_update),
                    };
               });
               setLatestProducts(latestProductsMap);
          }
     }, [products]);

     return (
          <main className="main">
               <Banner slides={statiProps?.banner ?? []} />

               <section className="container">
                    <h2 className="section-title ls-n-15 text-center pt-2 m-b-4 fw-bold">
                         Shop By Category
                    </h2>
                    <Slider {...settings} className="row">
                         {shopByCategories.map((category, index) => (
                              <ShopByCategory {...category} key={index} />
                         ))}
                    </Slider>
               </section>

               <section className="bg-gray banners-section text-center">
                    <div className="container py-2">
                         <div className="row">
                              {promotions.map((promotion, index) => (
                                   <Promotion key={index} {...promotion} />
                              ))}
                         </div>
                    </div>
               </section>

               <section className="container pb-3 mb-1">
                    <h2 className="section-title ls-n-15 text-center pb-2 m-b-4 fw-bold">
                         Popular Products
                    </h2>
                    <div className="row py-4">
                         {latestProductsState &&
                              latestProductsState.map((product, index) => (
                                   <Product key={`featured-product-${index}`} {...product} />
                              ))}
                    </div>
                    <hr className="mt-3 mb-6" />

                    <div className="row feature-boxes-container pt-2">
                         <div
                              className="col-sm-6 col-lg-3 "
                              data-animation-name="fadeInRightShorter"
                              data-animation-delay={300}
                              data-animation-duration={1000}
                         >
                              <div className="feature-box feature-box-simple text-center">
                                   <i className="sicon-earphones-alt" />
                                   <div className="feature-box-content p-0">
                                        <h3 className="text-uppercase">Customer Support</h3>
                                        <h5>Need Assistence?</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus.
                                             Lorem ipsum dolor sit amet.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-lg-3 */}
                         <div
                              className="col-sm-6 col-lg-3 "
                              data-animation-name="fadeInRightShorter"
                              data-animation-delay={100}
                              data-animation-duration={1000}
                         >
                              <div className="feature-box feature-box-simple text-center">
                                   <i className="sicon-credit-card" />
                                   <div className="feature-box-content p-0">
                                        <h3 className="text-uppercase">Secured Payment</h3>
                                        <h5>Safe &amp; Fast</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus.
                                             Lorem ipsum dolor sit amet.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-lg-3 */}
                         <div
                              className="col-sm-6 col-lg-3 "
                              data-animation-name="fadeInLeftShorter"
                              data-animation-delay={100}
                              data-animation-duration={1000}
                         >
                              <div className="feature-box feature-box-simple text-center">
                                   <i className="sicon-action-undo" />
                                   <div className="feature-box-content p-0">
                                        <h3 className="text-uppercase">Free Returns</h3>
                                        <h5>Easy &amp; Free</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus.
                                             Lorem ipsum dolor sit amet.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-lg-3 */}
                         <div
                              className="col-sm-6 col-lg-3 "
                              data-animation-name="fadeInLeftShorter"
                              data-animation-delay={300}
                              data-animation-duration={1000}
                         >
                              <div className="feature-box feature-box-simple text-center">
                                   <i className="icon-shipping" />
                                   <div className="feature-box-content p-0">
                                        <h3 className="text-uppercase">Free Shipping</h3>
                                        <h5>Orders Over $99</h5>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Duis nec vestibulum magna, et dapibus lacus.
                                             Lorem ipsum dolor sit amet.
                                        </p>
                                   </div>
                                   {/* End .feature-box-content */}
                              </div>
                              {/* End .feature-box */}
                         </div>
                         {/* End .col-lg-3 */}
                    </div>
                    {/* End .row .feature-boxes-container*/}
               </section>
          </main>
     );
};
