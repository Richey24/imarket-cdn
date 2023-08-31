import { useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Info from "./components/Info";
import MiniBanner from "./components/MiniBanner";
import Product from "./components/Product";
import ProductWidget from "./components/ProductWidget";

export const Home = () => {
     const [quickView, setQuick] = useState({});

     return (
          <main style={{ backgroundColor: "#F6F7F9", paddingBottom: "10px" }} className="main home">
               <Banner />
               <Card />
               <MiniBanner />
               <Product setQuickView={setQuick} />
               <Info />
               <ProductWidget quickView={quickView} />
          </main>
     );
};
