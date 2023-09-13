import {
     browseCategories,
     featuredProducts,
     topRatedProducts,
} from "./data";
import Banner from "./components/Banner";
import FeatureBoxes from "./components/FeatureBoxes";
import FeaturedProducts from "./components/FeaturedProducts";
import NewArrivals from "./components/NewArrivals";
import BrowseOurCategories from "./components/BrowseOurCategories";
import { ProductWidget } from "./components/ProductWidget";

export const Home = () => {
     return (
          <main className="main">
               <Banner />
               <FeatureBoxes />
               <FeaturedProducts featuredProducts={featuredProducts} />
               <NewArrivals newArrivalProducts={featuredProducts} />
               <BrowseOurCategories browseCategories={browseCategories} />

               <div className="container">
                    <div className="product-widgets-container row pb-2">
                         <div className="col-lg-3 col-sm-6 pb-5 pb-md-0 ">
                              <h4 className="section-sub-title">Featured</h4>
                              {topRatedProducts.map((product, index) => (
                                   <ProductWidget {...product} key={index} />
                              ))}
                         </div>
                         <div className="col-lg-3 col-sm-6 pb-5 pb-md-0 ">
                              <h4 className="section-sub-title">Best Selling</h4>
                              {topRatedProducts.map((product, index) => (
                                   <ProductWidget {...product} key={index} />
                              ))}
                         </div>
                         <div className="col-lg-3 col-sm-6 pb-5 pb-md-0 ">
                              <h4 className="section-sub-title">Latest</h4>
                              {topRatedProducts.map((product, index) => (
                                   <ProductWidget {...product} key={index} />
                              ))}
                         </div>
                         <div className="col-lg-3 col-sm-6 pb-5 pb-md-0 ">
                              <h4 className="section-sub-title">Top Rated</h4>
                              {topRatedProducts.map((product, index) => (
                                   <ProductWidget {...product} key={index} />
                              ))}
                         </div>
                    </div>
               </div>
          </main>
     );
};
