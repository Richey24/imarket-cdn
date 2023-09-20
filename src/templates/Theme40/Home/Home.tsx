import {
     bestProducts,
     freshFruits,
     meatSeaFoods,
     milkCheese,
     newProducts,
     onSaleProducts,
     popularDepartments,
     promotions,
     specialOffer,
     topRatedProducts,
     trendingAccessories,
} from "./data";
import Banner from "./components/Banner";
import FeatureBoxes from "./components/FeatureBoxes";
import FeaturedProducts from "./components/FeaturedSection";
import BestSellingProducts from "./components/FeaturedSection";
import Testimonials from "./components/Testimonials";
import MostPopularProducts from "./components/MostPopularProducts";
import BannersSection from "./components/BannersSection";
import TrendingAccessories from "./components/TrendingAccessories";
import Promotions from "./components/Promotions";
import NewArrivals from "./components/NewArrivals";
import { ProductWidget } from "./components/ProductWidget";
import Footer from "./components/Footer";
import Sidebar from "../components/Sidebar";
import { InfoBoxesContainer } from "./components/Info";
import Slider from "react-slick";
import { Product } from "./components/Product";
import { useState } from "react";
import FeaturedSection from "./components/FeaturedSection";
import PopularDepartments from "./components/PopularDepartments";
import ProductContainer from "./components/ProductContainer";
import MiniBanner from "./components/MiniBanner";
import NewsLetter from "./components/Newsletter";

const slidesToShow = 4;
let settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: slidesToShow,
     slidesToScroll: 1,
     autoplay: true,
     swipeToSlide: true,
     arrows: true,
     accessibility: true,
     className: "",
};
export const Home = (props: any) => {
     const [tabToShow, setTabToShow] = useState("best");
     return (
          <main className="main home">
               <div className="container-fluid p-0">
                    <div className="row m-0">
                         <div className="sidebar-overlay" />
                         <div className="sidebar-toggle custom-sidebar-toggle">
                              <i className="fas fa-sliders-h" />
                         </div>
                         <aside className="col-lg-3 order-lg-first sidebar-home mobile-sidebar">
                              <Sidebar />
                         </aside>
                         <div className="col-lg-9">
                              <div className="main-content">
                                   <Banner />
                                   <InfoBoxesContainer />
                                   <FeaturedSection />
                                   <PopularDepartments popularDepartments={popularDepartments} />
                                   <ProductContainer title="Milk & Cheese" products={milkCheese} />
                                   <ProductContainer title="Fresh Fruit" products={freshFruits} />
                                   <ProductContainer
                                        title="Meat & Seafood"
                                        products={meatSeaFoods}
                                   />

                                   <MiniBanner />
                                   <ProductContainer
                                        title="Special Offers"
                                        products={specialOffer}
                                        withBorder
                                   />
                                   <NewsLetter />

                                   <Footer static={props.static} company={props.company} />
                              </div>
                         </div>
                    </div>
               </div>
          </main>
     );
};
