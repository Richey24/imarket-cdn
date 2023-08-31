import Banner from "./components/Banner"
import Product from "./components/Product"
import Testimonial from "./components/Testimonial"
import Tour from "./components/Tour"

const Home = () => {
    return (
        <div>
            <Banner />
            <Tour />
            <Testimonial />
            <Product />
        </div>
    )
}

export default Home