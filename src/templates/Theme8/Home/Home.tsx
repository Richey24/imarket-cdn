import { useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import MiniCard from "./components/MiniCard";
import Product from "./components/Product";
import ProductWidget from "./components/ProductWidget";

const Home = () => {
     const [quickView, setQuick] = useState({});

     return (
          <div>
               <Banner />
               <Card />
               <Product setQuickView={setQuick} />
               <MiniCard />
               <ProductWidget quickView={quickView} />
          </div>
     );
};

export default Home;
