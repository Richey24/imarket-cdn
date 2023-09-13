"use client";

import { Banner } from "./components/Banner";
import Collection from "./components/Collection";
import { Product } from "./components/Product";
import { useState } from "react";
import ProductWidget from "./components/ProductWidget";

const Home = () => {

     const [quickView, setQuick] = useState({})

     return (
          <main className="main">
               <Banner />
               <Collection setQuickView={setQuick} />
               <Product setQuickView={setQuick} />
               <ProductWidget quickView={quickView} />
          </main>
     );
};

export default Home;
