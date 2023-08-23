import Image from "next/image";
import Banner from "./components/Banner";
import { InfoBoxesContainer } from "../../components/Info";
import { Product } from "./components/Product";
import { featuredProducts } from "./data";
import SideMenu from "./components/SideMenu";
import Promotions from "./components/Promotions";

export const Home = () => {
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
                    <Promotions />
               </div>

               <div className="container my-5">
                    <h3 className="fw-bold fs-2 mb-4 pb-2 mt-3 border-bottom">Featured Products</h3>
                    <div className="row">
                         {featuredProducts.map((product, index) => (
                              <Product key={`featured-product-${index}`} {...product} />
                         ))}
                    </div>
               </div>
          </main>
     );
};
