import { templateImages } from "@/appProvider/templateImages";
import Slider from "react-slick";
import Image from "next/image";

const Banner = () => {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div>
            <div className="home-slider slide-animate show-nav-hover nav-big text-uppercase">
                <Slider {...settings}>
                    <div className="home-slide home-slide1 banner">
                        <Image width={400} height={400} className="slide-bg" src={templateImages.demo19.sliderImage.slide1}
                            style={{ backgroundColor: "#cfcfcf" }} alt="slider image" />
                        <div className="container d-flex align-items-center">
                            <div className="banner-layer">
                                <h4 className="text-transform-none mb-0 " data-animation-name="fadeInUpShorter"
                                    data-animation-delay="200">Find the Boundaries. Push Through!</h4>
                                <h2 className="text-transform-none line-height-1 m-b-1 "
                                    data-animation-name="fadeInUpShorter" data-animation-delay="400">Smartphones</h2>
                                <h3 className="line-height-1 m-b-3 " data-animation-name="fadeInUpShorter"
                                    data-animation-delay="600">70% Off</h3>
                                <a href="demo19-shop.html" className="btn btn-dark btn-xl ls-10 "
                                    data-animation-name="fadeInUpShorter" data-animation-delay="1000">Shop Now!</a>
                                <h5 className="float-right mb-0">
                                    <span className="d-inline-block align-top line-height-1 ls-n-20 m-b-4 "
                                        data-animation-name="fadeInUpShorter" data-animation-delay="1000">Starting At</span>
                                    <b className="coupon-sale-text d-inline-block ls-n-20 text-white bg-secondary m-b-1 "
                                        data-animation-name="fadeInUpShorter"
                                        data-animation-delay="800"><sup>$</sup>199<sup>99</sup></b>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="home-slide home-slide2 banner">
                        <Image width={400} height={400} className="owl-lazy slide-bg" src={templateImages.demo19.sliderImage.slide2} style={{ backgroundColor: "#cfcfcf" }}
                            alt="slider image" />
                        <div className="container d-flex align-items-center">
                            <div className="banner-layer">
                                <h4 className="" data-animation-name="fadeInUpShorter" data-animation-delay="200">
                                    {"It's the best time of the year!"}</h4>
                                <h2 className="text-transform-none line-height-1 m-b-1 "
                                    data-animation-name="fadeInUpShorter" data-animation-delay="400">Hot Collections</h2>
                                <h3 className="line-height-1 m-b-3 " data-animation-name="fadeInUpShorter"
                                    data-animation-delay="600">50% Off</h3>
                                <a href="demo19-shop.html" className="btn btn-dark btn-xl ls-10 "
                                    data-animation-name="fadeInUpShorter" data-animation-delay="1000">Shop Now!</a>
                                <h5 className="float-right mb-0">
                                    <span className="d-inline-block align-top line-height-1 ls-n-20 m-b-4 "
                                        data-animation-name="fadeInUpShorter" data-animation-delay="800">Starting At</span>
                                    <span className="d-inline-block  m-b-1" data-animation-name="fadeInUpShorter"
                                        data-animation-delay="1000">
                                        <b
                                            className="coupon-sale-text d-inline-block ls-n-20 text-white bg-secondary"><sup>$</sup>199<sup>99</sup></b>
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Banner