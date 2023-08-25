import { useState } from "react";
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import Featured from "./components/Featured";
import Recent from "./components/Recent";
import ProductWidget from "./components/ProductWidget";

const Home = () => {
     const [quickView, setQuick] = useState({});

     return (
          <div>
               <Banner />
               <BestSeller />
               <Featured setQuickView={setQuick} />
               <Recent setQuickView={setQuick} />
               <ProductWidget quickView={quickView} />
          </div>
     );
};

export default Home;
