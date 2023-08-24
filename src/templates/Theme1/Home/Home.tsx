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
import ServiceBox from "./components/ServiceBox";
import SideMenu from "./components/SideMenu";
import NewsLetter from "./components/Newsletter";
import FeatureBoxes from "./components/FeatureBoxes";
import { templateImages } from "@/appProvider/templateImages";
export const Home = () => {
     return (
          <main className="main home">
               <div className="container mb-2">
                    <InfoBoxesContainer />

                    <div className="row">
                         <div className="col-lg-9 order-lg-2">
                              <Banner />

                              <div className="row gx-5 my-3">
                                   <div className="col-sm-6 col-md-4 ">
                                        <MiniBanner
                                             src={templateImages.allBannerImage.banner5}
                                             backgroundColor="#ccc"
                                             title="Porto Watches"
                                             subtitle="Starting at $99"
                                        />
                                   </div>
                                   <div className="col-sm-6 col-md-4 ">
                                        <MiniBanner
                                             src={templateImages.allBannerImage.banner1}
                                             backgroundColor="#fff"
                                             title="Deal Promos"
                                             subtitle="Starting at $99"
                                        />
                                   </div>
                                   <div className="col-sm-6 col-md-4 ">
                                        <MiniBanner
                                             src={templateImages.allBannerImage.banner3}
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
                              <FeatureBoxes />
                         </div>
                         {/* End .col-lg-9 */}
                         <div className="sidebar-overlay"></div>
                         <div className="sidebar-toggle custom-sidebar-toggle">
                              <i className="fas fa-sliders-h"></i>
                         </div>
                         <aside className="sidebar-home col-lg-3 order-lg-first mobile-sidebar">
                              <SideMenu />
                              <SideSlide />
                              <NewsLetter />

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
