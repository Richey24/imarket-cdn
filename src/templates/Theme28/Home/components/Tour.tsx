import React from 'react'
import rotate from "../../../../assets/images/demoes/demo28/rotate.jpg"
import product360 from "../../../../assets/images/demoes/demo28/product-360-sprite.jpg"
import Image from 'next/image'

const Tour = () => {
    return (
        <div>
            <section className="rotating-section" id="tour">
                <div className="heading-wrapper text-center">
                    <h3 className="product-title " data-animation-name="fadeInUpShorter"
                        data-animation-delay="200">TOUR</h3>
                    <h4 className="section-subtitle line-height-1 " data-animation-name="fadeInUpShoretr"
                        data-animation-delay="400">
                        <i className="left-angle"></i>360º VIRTUAL TOUR
                        <i className="right-angle"></i>
                    </h4>
                </div>
                <svg className="position-absolute w-100 h-100 z-index-2 p-events-none" viewBox="0 0 120 120" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" style={{ bottom: "-80px", left: "0px" }}>
                    <circle cx="60" cy="120" r="100" stroke="#edeeee" stroke-width="0.3" fill="transparent"
                        data-animation-name="customSVGLineAnimTwo" data-animation-delay="200">
                    </circle>
                </svg>
                <div className="cd-product-viewer-wrapper loaded" data-frame="16" data-friction="0.33">
                    <div>
                        <figure className="product-viewer  fadeInUp" data-appear-animation="fadeInUpShorter"
                            data-appear-animation-delay="300">
                            <Image src={rotate} width="1133" height="560"
                                alt="rotating-image" />
                            <div className="product-sprite"
                                style={{ backgroundImage: `url(${product360.src})` }}
                                data-image="./assets/images/demoes/demo28/product-360-sprite.jpg">
                            </div>
                        </figure>
                        <div className="cd-product-viewer-handle">
                            <span className="fill"></span>
                            <span className="handle" style={{ left: "66.7%" }}>Handle
                                <span className="bars">
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="specification" id="specific">
                <div className="container">
                    <div className="product-row row">
                        <div className="heading col-lg-8">
                            <h3 className="product-title text-white">PORTO HEADPHONE SPECIFICATIONS</h3>
                            <p className="section-text text-white ls-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae scelerisque elit.
                                Vestibulum vulputate felis dolor. Nulla facilisi. Mauris mattis, sem non egestas
                                euismod.
                            </p>
                        </div>
                        <div className="price-box col-lg-4 mb-3">
                            <span className="product-price text-white">
                                <b>$350.00</b>
                            </span>
                            <a href="#" className="btn btn-rounded with-bg btn-add-cart product-type-simple">add to cart</a>
                        </div>
                    </div>
                    <h3 className="widget-heading text-white text-uppercase">General</h3>
                    <div className="row">
                        <div className="widget col-md-4">
                            <ul>
                                <li>
                                    <span className="dark">Designed For</span>
                                    <span className="text-white">Smartphones</span>
                                </li>
                                <li>
                                    <span className="dark">Circumaural</span>
                                    <span className="text-white">Supra-aural</span>
                                </li>
                                <li>
                                    <span className="dark">Magnet Type</span>
                                    <span className="text-white">Neodymium</span>
                                </li>
                                <li>
                                    <span className="dark">With Microphone</span>
                                    <span className="text-white">Yes</span>
                                </li>
                            </ul>
                        </div>
                        <div className="widget col-md-4 with-bar">
                            <ul>
                                <li>
                                    <span className="dark">Glass Type</span>
                                    <span className="text-white">Monocle</span>
                                </li>
                                <li>
                                    <span className="dark">Lens Type</span>
                                    <span className="text-white">Bi Convex</span>
                                </li>
                                <li>
                                    <span className="dark">Suitable For</span>
                                    <span className="text-white">Entertainment</span>
                                </li>
                                <li>
                                    <span className="dark">Functions</span>
                                    <span className="text-white">Graphical Display</span>
                                </li>
                            </ul>
                        </div>
                        <div className="widget col-md-4 with-bar">
                            <ul>
                                <li>
                                    <span className="dark">Compatible OS</span>
                                    <span className="text-white">Android</span>
                                </li>
                                <li>
                                    <span className="dark">Compatible Eye</span>
                                    <span className="text-white">Both</span>
                                </li>
                                <li>
                                    <span className="dark">Control Type</span>
                                    <span className="text-white">Manual</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tour