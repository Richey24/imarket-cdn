import { templateImages } from "@/appProvider/templateImages"
import Image from "next/image"
import Slider from "react-slick";
import "./Banner.css"


const Banner = () => {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <div className="intro-section">
                <div className="home-slider">
                    <Slider {...settings}>
                        <div className="theBanner25">
                            <div className="home-slide">
                                <a href="demo25-shop.html">
                                    <Image src={templateImages.demo25.sliderImage.slide1} alt="slider" width="545"
                                        height="398" />
                                    <div className="home-slide-content text-center">
                                        <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                        <span className="product-count d-block font2 ls-10 text-uppercase">2 Products</span>
                                        <span className="btn text-white">View All Products <i
                                            className="fas fa-long-arrow-alt-right"></i></span>
                                    </div>
                                </a>

                                <div className="product-default">
                                    <figure>
                                        <Image src={templateImages.demo25.productImages.product1} alt="product" width="250"
                                            height="375" />
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title"><a href="demo25-product.html">The Night Before</a></h3>
                                        <div className="price-box">
                                            <span className="product-price">$299.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-slide">
                                <a href="demo25-shop.html">
                                    <Image src={templateImages.demo25.sliderImage.slide2} alt="slider"
                                        width="545" height="398" />
                                    <div className="home-slide-content text-center">
                                        <h3 className="ls-n-10 text-white mb-0">Business &amp; Investing</h3>
                                        <span className="product-count d-block font2 ls-10 text-uppercase">3 Products</span>
                                        <span className="btn text-white">View All Products <i
                                            className="fas fa-long-arrow-alt-right"></i></span>
                                    </div>
                                </a>

                                <div className="product-default">
                                    <figure>
                                        <Image src={templateImages.demo25.productImages.product2} alt="product" width="250"
                                            height="375" />
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title"><a href="demo25-product.html">Call an Audible</a></h3>
                                        <div className="price-box">
                                            <span className="product-price">$299.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-slide">
                                <a href="demo25-shop.html">
                                    <Image src={templateImages.demo25.sliderImage.slide3} alt="slider"
                                        width="545" height="398" />
                                    <div className="home-slide-content text-center">
                                        <h3 className="ls-n-10 text-white mb-0">Literature &amp; Fiction</h3>
                                        <span className="product-count d-block font2 ls-10 text-uppercase">4 Products</span>
                                        <span className="btn text-white">View All Products <i
                                            className="fas fa-long-arrow-alt-right"></i></span>
                                    </div>
                                </a>

                                <div className="product-default">
                                    <figure>
                                        <Image src={templateImages.demo25.productImages.product3} alt="product" width="250"
                                            height="375" />
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title"><a href="demo25-product.html">Ask Again Yes</a></h3>
                                        <div className="price-box">
                                            <span className="old-price">$299.0</span>
                                            <span className="product-price">$259.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="theBanner25">
                            <div className="home-slide">
                                <a href="demo25-shop.html">
                                    <Image src={templateImages.demo25.sliderImage.slide4} alt="slider" width="545"
                                        height="398" />
                                    <div className="home-slide-content text-center">
                                        <h3 className="ls-n-10 text-white mb-0">Mystery Suspense</h3>
                                        <span className="product-count d-block font2 ls-10 text-uppercase">4 Products</span>
                                        <span className="btn text-white">View All Products <i
                                            className="fas fa-long-arrow-alt-right"></i></span>
                                    </div>
                                </a>

                                <div className="product-default">
                                    <figure>
                                        <Image src={templateImages.demo25.productImages.product5} alt="product" width="250"
                                            height="375" />
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title"><a href="demo25-product.html">The Butterfly Garden</a></h3>
                                        <div className="price-box">
                                            <span className="product-price">$39.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-slide">
                                <a href="demo25-shop.html">
                                    <Image src={templateImages.demo25.sliderImage.slide5} alt="slider" width="545"
                                        height="398" />
                                    <div className="home-slide-content text-center">
                                        <h3 className="ls-n-10 text-white mb-0">Scifi Fantasy</h3>
                                        <span className="product-count d-block font2 ls-10 text-uppercase">3 Products</span>
                                        <span className="btn text-white">View All Products <i
                                            className="fas fa-long-arrow-alt-right"></i></span>
                                    </div>
                                </a>

                                <div className="product-default">
                                    <figure>
                                        <Image src={templateImages.demo25.productImages.product5} alt="product" width="250"
                                            height="375" />
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title"><a href="demo25-product.html">Sorcery of Thorns</a></h3>
                                        <div className="price-box">
                                            <span className="product-price">$599.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-slide">
                                <a href="demo25-shop.html">
                                    <Image src={templateImages.demo25.sliderImage.slide1} alt="slider" width="545"
                                        height="398" />
                                    <div className="home-slide-content text-center">
                                        <h3 className="ls-n-10 text-white mb-0">Arts &amp; Photography</h3>
                                        <span className="product-count d-block font2 ls-10 text-uppercase">2 Products</span>
                                        <span className="btn text-white">View All Products <i
                                            className="fas fa-long-arrow-alt-right"></i></span>
                                    </div>
                                </a>

                                <div className="product-default">
                                    <figure>
                                        <Image src={templateImages.demo25.productImages.product1} alt="product" width="250"
                                            height="375" />
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title"><a href="demo25-product.html">The Night Before</a></h3>
                                        <div className="price-box">
                                            <span className="product-price">$299.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Banner