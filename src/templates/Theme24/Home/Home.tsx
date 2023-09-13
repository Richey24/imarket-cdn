import { bestSellingProducts, featuredProducts, testimonies } from "./data";
import Banner from "./components/Banner";
import FeatureBoxes from "./components/FeatureBoxes";
import FeaturedProducts from "./components/FeaturedProducts";
import BestSellingProducts from "./components/BestSellingProducts";
import Testimonials from "./components/Testimonials";

export const Home = () => {
     return (
          <main className="main">
               <Banner />
               <FeatureBoxes />
               <FeaturedProducts featuredProducts={featuredProducts} />
               <BestSellingProducts products={bestSellingProducts} />
               <Testimonials testimonials={testimonies} />
          </main>
     );
};
