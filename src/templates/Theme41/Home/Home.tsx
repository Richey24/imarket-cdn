import React, { useState } from "react";
import { Banner } from "./components/Banner";
import { Product } from "./components/Product";
import ProductWidget from "@/templates/Theme6/Home/components/ProductWidget";

export const Home = () => {

     const [quickView, setQuick] = useState({})

     return (
          <main className="main home px-0 !block ">
               <Banner />
               <Product setQuickView={setQuick} />
               <ProductWidget quickView={quickView} />
          </main>
     );
};
