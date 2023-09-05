import ProductWidget from "@/templates/Theme6/Home/components/ProductWidget"
import Arrived from "./components/Arrived"
import Banner from "./components/Banner"
import Featured from "./components/Featured"
import Popular from "./components/Popular"
import { useState } from "react"

const Home = () => {

    const [quickView, setQuick] = useState({})


    return (
        <main className="main">
            <Banner />
            <Featured />
            <Arrived setQuickView={setQuick} />
            <Popular setQuickView={setQuick} />
            <ProductWidget quickView={quickView} />
        </main>
    )
}

export default Home