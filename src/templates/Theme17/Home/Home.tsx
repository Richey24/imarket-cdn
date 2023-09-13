import { useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Cat from "./components/Cat";
import MiniProduct from "./components/MiniProduct";
import Product from "./components/Product";
import ProductWidget from "./components/ProductWidget";

const Home = () => {
     const [quickView, setQuick] = useState({});

     return (
          <div>
               <Banner />
               <Product setQuickView={setQuick} />
               <Card />
               <MiniProduct setQuickView={setQuick} />
               <Cat />
               <ProductWidget quickView={quickView} />
          </div>
     );
};

export default Home;
