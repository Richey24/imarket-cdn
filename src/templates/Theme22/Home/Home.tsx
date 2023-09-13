import { useState } from "react";
import Banner from "./components/Banner";
import MiniiBanners from "./components/MiniiBanners";
import Product from "./components/Product";
import ProductWidget from "./components/ProductWidget";

const Home = () => {
     const [quickView, setQuick] = useState({});

     return (
          <div>
               <Banner />
               <MiniiBanners />
               <Product setQuickView={setQuick} />
               <ProductWidget quickView={quickView} />
          </div>
     );
};

export default Home;
