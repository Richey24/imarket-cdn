import { templateImages } from '@/appProvider/templateImages'
import Image from 'next/image'
import React from 'react'

const Header = () => {

    const showCanvas = () => {
        document.getElementById("cartCanvas").classList.toggle("showCanvas")
    }

    return (
        <div>
            <header className="header" id="top">
                <div className="header-middle sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <a href="demo28.html" className="logo">
                                <Image src={templateImages.logoImage.logo2} className="black-logo" alt="Porto Logo" width="202"
                                    height="80" />
                            </a>
                            <ul className="header-links scrolling-box" id="caty-list">
                                <li>
                                    <a href="#intro" className="nav-link active">intro</a>
                                </li>
                                <li>
                                    <a href="#feature" className="nav-link">features</a>
                                </li>
                                <li>
                                    <a href="#tour" className="nav-link">tour</a>
                                </li>
                                <li>
                                    <a href="#specific" className="nav-link">specifications</a>
                                </li>
                                <li>
                                    <a href="#testimonial" className="nav-link">testimonials</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-right header-dropdowns">
                            <div className="header-dropdown">
                                <a href="#">USD</a>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <a href="#">EUR</a>
                                        </li>
                                        <li>
                                            <a href="#">USD</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="header-dropdown lang-menu">
                                <a href="#">
                                    <i className="flag-us flag"></i>ENG</a>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="flag-us flag mr-2"></i>ENG</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="flag-fr flag mr-2"></i>FRA</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="dropdown cart-dropdown">
                                <a onClick={showCanvas} href="#" title="Cart"
                                    className="dropdown-toggle dropdown-arrow cart-toggle d-flex align-items-center"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    data-display="static">
                                    <i className="minicart-icon"></i>
                                    <span className="cart-count badge-circle">3</span>
                                </a>

                                {/* <div className="cart-overlay"></div> */}

                                <div id="cartCanvas" className="cartCanvas" style={{ position: "fixed", top: "0px", right: "0px", zIndex: "10", alignItems: "flex-start", gap: "10px" }}>
                                    <a style={{ fontSize: "40px", color: "black" }} onClick={showCanvas} href="#" title="Close (Esc)" className="btn-close">×</a>

                                    <div className="dropdownmenu-wrapper custom-scrollbar">
                                        <div className="dropdown-cart-header">Shopping Cart</div>

                                        <div className="dropdown-cart-products">
                                            <div className="product">
                                                <div className="product-details">
                                                    <h4 className="product-title">
                                                        <a href="demo13-product.html">Ultimate 3D Bluetooth Speaker</a>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span> × $99.00
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <a href="demo13-product.html" className="product-image">
                                                        <Image src={templateImages.allTemplateImage.product.product1} alt="product"
                                                            width="80" height="80" />
                                                    </a>

                                                    <a href="#" className="btn-remove" title="Remove Product">
                                                        <span>×</span>
                                                    </a>
                                                </figure>
                                            </div>

                                            <div className="product">
                                                <div className="product-details">
                                                    <h4 className="product-title">
                                                        <a href="demo13-product.html">Brown Women Casual HandBag</a>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span> × $35.00
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <a href="demo13-product.html" className="product-image">
                                                        <Image src={templateImages.allTemplateImage.product.product2} alt="product"
                                                            width="80" height="80" />
                                                    </a>

                                                    <a href="#" className="btn-remove" title="Remove Product">
                                                        <span>×</span>
                                                    </a>
                                                </figure>
                                            </div>

                                            <div className="product">
                                                <div className="product-details">
                                                    <h4 className="product-title">
                                                        <a href="demo13-product.html">Circled Ultimate 3D Speaker</a>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span> × $35.00
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <a href="demo13-product.html" className="product-image">
                                                        <Image src={templateImages.allTemplateImage.product.product3} alt="product"
                                                            width="80" height="80" />
                                                    </a>
                                                    <a href="#" className="btn-remove" title="Remove Product">
                                                        <span>×</span>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>

                                        <div className="dropdown-cart-total">
                                            <span>SUBTOTAL:</span>

                                            <span className="cart-total-price float-right">$134.00</span>
                                        </div>

                                        <div className="dropdown-cart-action">
                                            <a href="cart.html" className="btn btn-gray btn-block view-cart">View Cart
                                            </a>
                                            <a href="checkout.html" className="btn btn-dark btn-block">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#widget-mobile" className="mobile-btn text-white" data-toggle="collapse">
                                <i className="fas fa-bars"></i>
                            </a>
                            <div className="mobile-slide d-lg-none">
                                <ul className="mobile-body scrolling-box bg-white collapse" id="widget-mobile">
                                    <li>
                                        <a href="#intro" className="active">intro</a>
                                    </li>
                                    <li>
                                        <a href="#feature">features</a>
                                    </li>
                                    <li>
                                        <a href="#tour">tour</a>
                                    </li>
                                    <li>
                                        <a href="#specific">specifications</a>
                                    </li>
                                    <li>
                                        <a href="#testimonial">testimonials</a>
                                    </li>

                                    <li>
                                        <a href="#widget-link-2" data-toggle="collapse" role="button" aria-expanded="true"
                                            aria-controls="widget-link-2">USD
                                            <span className="toggle"></span>
                                        </a>
                                        <div className="collapse" id="widget-link-2">
                                            <ul className="sub-link">
                                                <li>
                                                    <a href="#">EUR</a>
                                                </li>
                                                <li>
                                                    <a href="#">USD</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#widget-link-3" data-toggle="collapse" role="button" aria-expanded="true"
                                            aria-controls="widget-link-3">
                                            <i className="flag-us flag"></i>ENG
                                            <span className="toggle"></span>
                                        </a>
                                        <div className="collapse" id="widget-link-3">
                                            <ul className="sub-link">
                                                <li>
                                                    <a href="#">
                                                        <i className="flag-us flag mr-2"></i>ENG</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="flag-fr flag mr-2"></i>ENG</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header