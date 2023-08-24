import React from "react";
import { Banner } from "./components/Banners/Banner";
import { Banner2 } from "./components/Banners/Banner2";
import { Category } from "./components/Category";
import { Product } from "./components/Products/Product";
import { MiniBanner } from "./components/MiniBanners/MiniBanner";
import { MiniBanner2 } from "./components/MiniBanners/MiniBanner2";
import { Banner3 } from "./components/Banners/Banner3";
import { Product2 } from "./components/Products/Product2";
import { NewsLetter } from "./components/NewsLetter";

const Home = () => {
     return (
          <main className="main">
               <Banner />
               <Banner2 />
               <Category />
               <Product />
               <MiniBanner />
               <MiniBanner2 />
               <NewsLetter/>
               <Banner3 />
               <Product2 />
          </main>
     );
};

export default Home;
