import { mostPopularProducts, promotions, trendingAccessories } from "./data";
import Banner from "./components/Banner";
import FeatureBoxes from "./components/FeatureBoxes";
import FeaturedProducts from "./components/MostPopularProducts";
import BestSellingProducts from "./components/BestSellingProducts";
import Testimonials from "./components/Testimonials";
import MostPopularProducts from "./components/MostPopularProducts";
import BannersSection from "./components/BannersSection";
import TrendingAccessories from "./components/TrendingAccessories";
import Promotions from "./components/Promotions";

export const Home = () => {
     return (
          <main className="main">
               <Banner />
               <MostPopularProducts mostPopularProducts={mostPopularProducts} />
               <BannersSection />
               <TrendingAccessories trendingAccessories={trendingAccessories} />
               <Promotions promotions={promotions} />
          </main>
     );
};
