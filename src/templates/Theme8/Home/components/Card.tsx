import Image from "next/image";
import living from "../../../../assets/images/demoes/demo8/banners/banner-living.jpg"
import dining from "../../../../assets/images/demoes/demo8/banners/banner-dining.jpg"
import bedroom from "../../../../assets/images/demoes/demo8/banners/banner-bedroom.jpg"

const Card = () => {
    return (
        <div>
            <div className="container banner-container">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                        <h3 className="subtitle">SHOP LIVING ROOM</h3>
                        <div className="heading-spacer"></div>
                        <div className="banner banner-image">
                            <a href="#">
                                <Image src={living}
                                    style={{ backgroundColor: "#e4ddd7" }} width="360" height="270" alt="banner" />
                            </a>
                            <div className="banner-meta">
                                <a href="#">LIVING ROOM </a>

                                <span className="banner-price">Starting at <strong>$999</strong></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                        <h3 className="subtitle">SHOP DINNING ROOM</h3>
                        <div className="heading-spacer"></div>
                        <div className="banner banner-image">
                            <a href="#">
                                <Image src={dining}
                                    style={{ backgroundColor: "#e4ddd7" }} alt="banner" width="360" height="270" />
                            </a>
                            <div className="banner-meta">
                                <a href="#" className="white-nowrap">DINNING ROOM </a>

                                <span className="banner-price white-nowrap">Starting at <strong>$899</strong></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 mt-3 mt-md-0">
                        <h3 className="subtitle">SHOP BEDROOM</h3>
                        <div className="heading-spacer"></div>
                        <div className="banner banner-image">
                            <a href="#">
                                <Image src={bedroom}
                                    style={{ backgroundColor: "#e4ddd7" }} alt="banner" width="360" height="270" />
                            </a>
                            <div className="banner-meta">
                                <a href="#">BEDROOM</a>

                                <span className="banner-price">Starting at <strong>$799</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card