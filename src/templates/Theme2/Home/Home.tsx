import Image from "next/image";

import Slider from "react-slick";

import Banner from "./components/Banner";
import { InfoBoxesContainer } from "./components/Info";
import { Product } from "./components/Product";
import { featuredProducts, promotions } from "./data";
import { Promotion } from "./components/Promotion";
import SideMenu from "./components/SideMenu";
import Promotions from "./components/Promotions";
export const Home = () => {
     let settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
     };
     return (
          <main className="main home">
               <div className="container mt-2">
                    <div className="row">
                         <SideMenu />

                         <div className="col-lg-9">
                              <Banner />
                         </div>
                    </div>
                    <InfoBoxesContainer />

                    {/* <div className="row g-3 align-items-center">
                         {promotions.map((promotion, index) => (
                              <Promotion key={index} {...promotion} />
                         ))}
                    </div> */}
                    <Promotions />
               </div>

               <div className="container my-5">
                    <h3 className="fw-bold fs-2 mb-4 pb-2 mt-3 border-bottom">Featured Products</h3>
                    <div className="row"></div>
                    <Slider {...settings} className="row">
                         {featuredProducts.map((product, index) => (
                              <Product key={`featured-product-${index}`} {...product} />
                         ))}
                    </Slider>
               </div>
          </main>
     );
};
