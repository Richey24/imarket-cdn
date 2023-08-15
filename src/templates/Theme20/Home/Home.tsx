
import { Banner } from "./components/Banner";
import { FeaturedCategories } from "./components/FeaturedCategories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { MiniBanner } from "./components/MiniBanner";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <FeaturedCategories />
               <FeaturedProducts />
               <MiniBanner />
          </main>
     );
};

export default Home;
