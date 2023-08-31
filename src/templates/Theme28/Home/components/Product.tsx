import { templateImages } from "@/appProvider/templateImages"
import bg from "../../../../assets/images/demoes/demo28/bg.jpg"
import Image from "next/image"
import { useState } from "react"

const Product = () => {

    const [qty, setQty] = useState(1)

    return (
        <div>
            <section className="product-section">
                <div className="container">
                    <div className="product-default product-extend product-row">
                        <figure>
                            <Image src={templateImages.demo28.bannerImage.banner5} alt="banner" width="640" height="479" />
                        </figure>
                        <div className="product-details">
                            <h3 className="product-title">
                                <b>PORTO HEADPHONE</b>
                            </h3>
                            <p className="product-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elimttis
                                adipiscing. Fusce in hendrerit purus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed tempus nibh…
                            </p>
                            <div className="price-box">
                                <span className="product-price">$350.00</span>
                            </div>
                            <div style={{ display: "flex", columnGap: "100px" }} className="product-action">
                                <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "baseline" }} className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                                    <span onClick={() => setQty(qty - 1)} style={{ height: "42px", display: "flex", justifyContent: "center", alignItems: "center" }} className="input-group-btn input-group-prepend">
                                        <button style={{ color: "black" }} className="btn btn-outline btn-down-icon bootstrap-touchspin-down" type="button">-</button>
                                    </span>
                                    <input onChange={(e) => setQty(Number(e.target.value))} value={qty} style={{ paddingTop: "13px", paddingBottom: "10px", paddingLeft: "14px", width: "40px", borderTop: "0.5px solid #F1F1F1", borderBottom: "0.5px solid #F1F1F1", outline: "none" }} type="text" />
                                    <span onClick={() => setQty(qty + 1)} className="input-group-btn input-group-append">
                                        <button style={{ color: "black" }} className="btn btn-outline btn-up-icon bootstrap-touchspin-up" type="button">+</button>
                                    </span>
                                </div>
                                <a href="#" className="btn btn-rounded with-bg btn-add-cart product-type-simple">add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-section"
                style={{ backgroundImage: `url(${bg.src})`, backgroundColor: "#bb3a1b" }}
                data-animation-name="fadeIn" data-animation-delay="200">
                <div className="section-body d-flex flex-column align-items-center justify-content-center">
                    <h3 className="product-title text-white">EXPLORE THE BEST FOR YOU</h3>
                    <a href="https://www.youtube.com/watch?v=YbJOTdZBX1g" className="btn play-btn btn-iframe">
                        <i className="fas fa-play"></i>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Product