import Image from "next/image";
import banner1 from "../../../assets/images/demoes/demo1/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo1/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo1/banners/banner-3.jpg";
import banner4 from "../../../assets/images/demoes/demo1/banners/banner-4.jpg";
import Banner from "./components/Banner";
import SideSlide from "./components/SideSlide";
import { MiniBanner } from "./components/MiniBanner";
import { Product } from "./components/Product";
import { featuredProducts, testimonies } from "./data";
import { Testimonial } from "./components/Testimonial";
import Carousel from "react-bootstrap/esm/Carousel";
import { InfoBoxesContainer } from "./components/Info";

export const Home = () => {
     return (
          <main className="main home">
               <div className="container mb-2">
                    <div className="info-boxes-container row row-joined mb-2 font2">
                         <InfoBoxesContainer />
                    </div>

                    <div className="row">
                         <div className="col-lg-9 order-lg-2">
                              <Banner />

                              <div className="row gx-5 my-3">
                                   <div className="col-sm-6 col-md-4 ">
                                        <MiniBanner
                                             src={banner1}
                                             backgroundColor="#ccc"
                                             title="Porto Watches"
                                             subtitle="Starting at $99"
                                        />
                                   </div>
                                   <div className="col-sm-6 col-md-4 ">
                                        <MiniBanner
                                             src={banner2}
                                             backgroundColor="#fff"
                                             title="Deal Promos"
                                             subtitle="Starting at $99"
                                        />
                                   </div>
                                   <div className="col-sm-6 col-md-4 ">
                                        <MiniBanner
                                             src={banner3}
                                             backgroundColor="#b8c1d0"
                                             title="Handbags"
                                             subtitle="Starting at $99"
                                        />
                                   </div>
                              </div>
                              <div>
                                   <h3 className="fw-bold fs-2 mb-4 pb-2 mt-3 border-bottom">
                                        Featured Products
                                   </h3>

                                   <div className="row">
                                        {featuredProducts.map((product, index) => (
                                             <Product
                                                  key={`featured-product-${index}`}
                                                  {...product}
                                             />
                                        ))}
                                   </div>
                              </div>

                              <hr className="mt-1 mb-3 pb-2" />

                              <div className="feature-boxes-container">
                                   <div className="row">
                                        <div
                                             className="col-md-4 "
                                             data-animation-name="fadeInRightShorter"
                                             data-animation-delay="200"
                                        >
                                             <div className="feature-box  feature-box-simple text-center">
                                                  <i className="icon-earphones-alt"></i>

                                                  <div className="feature-box-content p-0">
                                                       <h3 className="mb-0 pb-1">
                                                            Customer Support
                                                       </h3>
                                                       <h5 className="mb-1 pb-1">
                                                            Need Assistance?
                                                       </h5>

                                                       <p>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Duis nec vestibulum
                                                            magna, et dapib.
                                                       </p>
                                                  </div>
                                                  {/* End .feature-box-content */}
                                             </div>
                                             {/* End .feature-box */}
                                        </div>
                                        {/* End .col-md-4 */}

                                        <div
                                             className="col-md-4 "
                                             data-animation-name="fadeInRightShorter"
                                             data-animation-delay="400"
                                        >
                                             <div className="feature-box feature-box-simple text-center">
                                                  <i className="icon-credit-card"></i>

                                                  <div className="feature-box-content p-0">
                                                       <h3 className="mb-0 pb-1">
                                                            Secured Payment
                                                       </h3>
                                                       <h5 className="mb-1 pb-1">Safe & Fast</h5>

                                                       <p>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Duis nec vestibulum
                                                            magna, et dapib.
                                                       </p>
                                                  </div>
                                                  {/* End .feature-box-content */}
                                             </div>
                                             {/* End .feature-box */}
                                        </div>
                                        {/* End .col-md-4 */}

                                        <div
                                             className="col-md-4 "
                                             data-animation-name="fadeInRightShorter"
                                             data-animation-delay="600"
                                        >
                                             <div className="feature-box feature-box-simple text-center">
                                                  <i className="icon-action-undo"></i>

                                                  <div className="feature-box-content p-0">
                                                       <h3 className="mb-0 pb-1">Returns</h3>
                                                       <h5 className="mb-1 pb-1">Easy & Free</h5>

                                                       <p>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Duis nec vestibulum
                                                            magna, et dapib.
                                                       </p>
                                                  </div>
                                                  {/* End .feature-box-content */}
                                             </div>
                                             {/* End .feature-box */}
                                        </div>
                                        {/* End .col-md-4 */}
                                   </div>
                                   {/* End .row */}
                              </div>
                              {/* End .feature-boxes-container */}
                         </div>
                         {/* End .col-lg-9 */}

                         <aside className="col-lg-3 order-lg-1 mobile-sideba">
                              <SideSlide />

                              <div className="widget widget-newsletters bg-gray text-center">
                                   <h3 className="widget-title text-uppercase m-b-3">
                                        Subscribe Newsletter
                                   </h3>
                                   <p className="mb-2">
                                        Get all the latest information on Events, Sales and Offers.{" "}
                                   </p>
                                   <form action="#">
                                        <div className="form-group position-relative sicon-envolope-letter">
                                             <input
                                                  type="email"
                                                  className="form-control"
                                                  name="newsletter-email"
                                                  placeholder="Email address"
                                             />
                                        </div>
                                        {/* Endd .form-group */}
                                        <input
                                             type="submit"
                                             className="btn btn-primary text-dark btn-md"
                                             value="Subscribe"
                                        />
                                   </form>
                              </div>
                              {/* End .widget */}

                              <div className="widget widget-testimonials">
                                   <div className=" owl-theme dots-left dots-small">
                                        <Carousel fade controls={false}>
                                             {testimonies.map((testimony, index) => (
                                                  <Carousel.Item key={index}>
                                                       <Testimonial {...testimony} />
                                                  </Carousel.Item>
                                             ))}
                                        </Carousel>
                                   </div>
                                   {/* End .testimonials-slider */}
                              </div>
                              {/* End .widget */}
                         </aside>
                         {/* End .col-lg-3 */}
                    </div>
                    {/* End .row */}
               </div>
               {/* End .container */}
          </main>
     );
};
