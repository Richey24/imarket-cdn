import Image from "next/image";
import banner1 from "../../../assets/images/demoes/demo2/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo2/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo2/banners/banner-3.jpg";
import banner4 from "../../../assets/images/demoes/demo2/banners/banner-4.jpg";
import banner5 from "../../../assets/images/demoes/demo2/banners/banner-5.jpg";
import banner6 from "../../../assets/images/demoes/demo2/banners/banner-6.jpg";
import banner7 from "../../../assets/images/demoes/demo2/banners/banner-7.jpg";
import banner8 from "../../../assets/images/demoes/demo2/banners/banner-8.jpg";
import banner9 from "../../../assets/images/demoes/demo2/banners/banner-9.jpg";

import Banner from "./components/Banner";
import { InfoBoxesContainer } from "./components/Info";
import { Product } from "./components/Product";
import { featuredProducts, promotions } from "./data";
import { Promotion } from "./components/Promotion";
import SideMenu from "./components/SideMenu";
export const Home = () => {
     return (
          <main className="main home">
               <div className="container mt-2">
                    <div className="row">
                         <div className="col-lg-3 mb-2">
                              <SideMenu />
                         </div>
                         <div className="col-lg-9">
                              <Banner />
                         </div>
                    </div>
                    <InfoBoxesContainer />

                    <div className="row g-3 align-items-center">
                         {promotions.map((promotion, index) => (
                              <Promotion key={index} {...promotion} />
                         ))}
                    </div>
               </div>

               <div className="products-section section-bg-gray">
                    <div className="container my-5">
                         <h3 className="fw-bold fs-2 mb-4 pb-2 mt-3 border-bottom">
                              Featured Products
                         </h3>
                         <div className="row">
                              {featuredProducts.map((product, index) => (
                                   <Product key={`featured-product-${index}`} {...product} />
                              ))}
                         </div>
                    </div>
               </div>
          </main>
     );
};
