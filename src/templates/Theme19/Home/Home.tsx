import { useState } from "react"
import Banner from "./components/Banner"
import Info from "./components/Info"
import Product from "./components/Product"
import ProductWidget from "./components/ProductWidget"

const Home = () => {

    const [quickView, setQuick] = useState({})


    return (
        <div>
            <Banner />
            <Product setQuickView={setQuick} />
            <Info />
            <ProductWidget quickView={quickView} />
        </div>
    )
}

export default Home