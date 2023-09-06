import ProductWidget from "@/templates/Theme25/Home/components/ProductWidget"
import Banner from "./components/Banner"
import Product from "./components/Product"
import { useState } from "react"

const Home = () => {

    const [quickView, setQuick] = useState({})

    return (
        <div>
            <Banner />
            <Product setQuickView={setQuick} />
            <ProductWidget quickView={quickView} />
        </div>
    )
}

export default Home