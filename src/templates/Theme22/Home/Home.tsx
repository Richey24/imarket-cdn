import { useState } from "react"
import Banner from "./components/Banner"
 

const Home = () => {
     const [quickView, setQuick] = useState({});
    return (
        <div>
            <Banner/>
        </div>
    )
}


export default Home
