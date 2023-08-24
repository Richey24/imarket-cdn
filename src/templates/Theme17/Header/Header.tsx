import { templateImages } from "@/appProvider/templateImages";
import "./Header.css"
import Image from "next/image";


const Header = () => {

    const showSearch = () => {
        document.getElementById("searchDiv").classList.toggle("showSearch")
    }
    const showCanvas = () => {
        document.getElementById("cartCanvas").classList.toggle("showCanvas")
    }

    const showDrop = (id: string) => {
        document.getElementById(id)?.classList.toggle("showDrop")
    }

    return (
        <div>
            <div className="top-notice">
                <div className="container">
                    <div className="notify-left flex-wrap d-flex align-items-center">
                        <h5 className="text-white">
                            <strong>10% OFF</strong>
                        </h5>

                        <div className="main-heading">
                            <h5>Use
                                <b className="text-dark">PORTO10</b> Coupon Code
                            </h5>
                            <h6>
                                <small>* Minimal Purchase Price</small>
                            </h6>
                        </div>
                    </div>

                    <div className="notify-right d-block">
                        <h4>
                            <b className="text-dark">FREE NEXT DAY DELIVERY*</b>
                        </h4>
                        <h6>
                            <small>* On Business Days - On Orders Over $25</small>
                        </h6>
                    </div>
                </div>

            </div>
            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left header-dropdowns">
                            <div className="header-dropdown">
                                <a href="#">
                                    <i className="flag-us flag"></i>Eng</a>
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


                            <div className="header-dropdown ml-4">
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


                            <span className="separator"></span>

                            <div className="header-menu">
                                <ul className="mb-0 d-none d-lg-flex">
                                    <li><a href="dashboard.html">Dashboard</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="cart.html">Checkout</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="blog.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                <a href="#">Order</a>
                                <div className="header-menu">
                                    <ul>
                                        <li><a href="#">Order Tracking</a></li>
                                        <li><a href="#">Order History</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="header-right w-lg-max ml-0 ml-lg-auto">
                            <div className="header-contact d-none d-sm-flex align-items-center ml-auto">
                                <i className="icon-phone-2"></i>
                                <h6>
                                    <a href="tel:#" className="d-block">+123 5678 890</a>
                                </h6>
                            </div>

                            <span className="separator d-sm-block d-none"></span>

                            <div className="header-search header-search-popup header-search-category header-icon text-dark">
                                <a onClick={showSearch} href="#" className="search-toggle btn p-0 icon-magnifier" role="button">
                                </a>

                                <form action="#" method="get">
                                    <div id="searchDiv" className="header-search-wrapper">
                                        <input type="search" className="form-control bg-white" name="q" id="q"
                                            placeholder="Search..." required />
                                        <button className="btn fas fa-search bg-transparent p-0 border-0"
                                            type="submit"></button>
                                    </div>
                                </form>
                            </div>

                            <a href="login.html" className="header-icon login-link text-dark">
                                <i className="icon-user-2"></i>
                            </a>

                            <a href="#" className="header-icon position-relative">
                                <i className="icon-wishlist-2 text-dark"></i>
                                <span className="badge-circle">0</span>
                            </a>

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
                                    <a style={{ fontSize: "40px", color: "white" }} onClick={showCanvas} href="#" title="Close (Esc)" className="btn-close">×</a>

                                    <div className="dropdownmenu-wrapper custom-scrollbar">
                                        <div className="dropdown-cart-header">Shopping Cart</div>

                                        <div className="dropdown-cart-products">
                                            <div className="product">
                                                <div className="product-details">
                                                    <h4 className="product-title">
                                                        <a href="demo17-product.html">Ultimate 3D Bluetooth Speaker</a>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                                                        × $99.00
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <a href="demo17-product.html" className="product-image">
                                                        <Image src={templateImages.demo17.productImages.product1}
                                                            alt="product" width="80" height="80" />
                                                    </a>

                                                    <a href="#" className="btn-remove" title="Remove Product">
                                                        <span>×</span>
                                                    </a>
                                                </figure>
                                            </div>

                                            <div className="product">
                                                <div className="product-details">
                                                    <h4 className="product-title">
                                                        <a href="demo17-product.html">Brown Women Casual HandBag</a>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                                                        × $35.00
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <a href="demo17-product.html" className="product-image">
                                                        <Image src={templateImages.demo17.productImages.product2}
                                                            alt="product" width="80" height="80" />
                                                    </a>

                                                    <a href="#" className="btn-remove" title="Remove Product">
                                                        <span>×</span>
                                                    </a>
                                                </figure>
                                            </div>

                                            <div className="product">
                                                <div className="product-details">
                                                    <h4 className="product-title">
                                                        <a href="demo17-product.html">Circled Ultimate 3D Speaker</a>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                                                        × $35.00
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <a href="demo17-product.html" className="product-image">
                                                        <Image src={templateImages.demo17.productImages.product3}
                                                            alt="product" width="80" height="80" />
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
                        </div>
                    </div>

                </div>

                <div className="header-middle sticky-header">
                    <div className="container">
                        <div className="header-left d-none d-lg-flex">
                            <div className="main-nav d-flex w-lg-max">
                                <ul className="menu">
                                    <li className="active">
                                        <a href="demo17.html">Home</a>
                                    </li>

                                    <li>
                                        <a className="themeEightDrop" onMouseEnter={() => showDrop("theCategory")} onMouseLeave={() => showDrop("theCategory")} href="demo17-shop.html">Shop</a>
                                        <div onMouseEnter={() => showDrop("theCategory")} onMouseLeave={() => showDrop("theCategory")} id="theCategory" className="megamenu megamenu-fixed-width megamenu-3cols">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <a href="#" className="nolink">VARIATION 1</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="demo17-shop.html">Fullwidth Banner</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-banner-boxed-slider.html">Boxed Slider Banner
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="category-banner-boxed-image.html">Boxed Image Banner
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="category.html">Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-sidebar-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-off-canvas.html">Off Canvas Filter</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-horizontal-filter1.html">Horizontal Filter1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="category-horizontal-filter2.html">Horizontal Filter2
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-4">
                                                    <a href="#" className="nolink">VARIATION 2</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="category-list.html">List Types</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-infinite-scroll.html">Ajax Infinite Scroll</a>
                                                        </li>
                                                        <li>
                                                            <a href="category.html">3 Columns Products</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-4col.html">4 Columns Products</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-5col.html">5 Columns Products</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-6col.html">6 Columns Products</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-7col.html">7 Columns Products</a>
                                                        </li>
                                                        <li>
                                                            <a href="category-8col.html">8 Columns Products</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-4 p-0">
                                                    <div className="menu-banner">
                                                        <figure>
                                                            <Image src={templateImages.menuBanner.menu1} alt="Menu banner"
                                                                width="300" height="300" />
                                                        </figure>
                                                        <div className="banner-content">
                                                            <h4>
                                                                <span className="">UP TO</span>
                                                                <br />
                                                                <b className="">50%</b>
                                                                <i>OFF</i>
                                                            </h4>
                                                            <a href="category.html" className="btn btn-sm btn-dark">SHOP NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <a className="themeEightDrop" onMouseEnter={() => showDrop("theProducts")} onMouseLeave={() => showDrop("theProducts")} href="demo17-product.html">Products</a>
                                        <div onMouseEnter={() => showDrop("theProducts")} onMouseLeave={() => showDrop("theProducts")} id="theProducts" className="megamenu megamenu-fixed-width">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <a href="#" className="nolink">PRODUCT PAGES</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="product.html">SIMPLE PRODUCT</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-variable.html">VARIABLE PRODUCT</a>
                                                        </li>
                                                        <li>
                                                            <a href="product.html">SALE PRODUCT</a>
                                                        </li>
                                                        <li>
                                                            <a href="product.html">FEATURED & ON SALE</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-custom-tab.html">WITH CUSTOM TAB</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-addcart-sticky.html">ADD CART STICKY</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-lg-4">
                                                    <a href="#" className="nolink">PRODUCT LAYOUTS</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="product-extended-layout.html">EXTENDED LAYOUT</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-grid-layout.html">GRID IMAGE</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-full-width.html">FULL WIDTH LAYOUT</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-sticky-info.html">STICKY INFO</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-sticky-both.html">LEFT & RIGHT STICKY</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-transparent-image.html">TRANSPARENT IMAGE</a>
                                                        </li>
                                                        <li>
                                                            <a href="product-center-vertical.html">CENTER VERTICAL</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">BUILD YOUR OWN</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-lg-4 p-0">
                                                    <div className="menu-banner menu-banner-2">
                                                        <figure>
                                                            <Image src={templateImages.menuBanner.menu2} alt="Menu banner"
                                                                className="product-promo" width="380" height="790" />
                                                        </figure>
                                                        <i>OFF</i>
                                                        <div className="banner-content">
                                                            <h4>
                                                                <span className="">UP TO</span>
                                                                <br />
                                                                <b className="">50%</b>
                                                            </h4>
                                                        </div>
                                                        <a href="category.html" className="btn btn-sm btn-dark">SHOP NOW</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <a className="themeEightDrop" onMouseEnter={() => showDrop("thePages")} onMouseLeave={() => showDrop("thePages")} href="#">Pages</a>
                                        <ul onMouseEnter={() => showDrop("thePages")} onMouseLeave={() => showDrop("thePages")} id="thePages">
                                            <li>
                                                <a href="wishlist.html">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="cart.html">Shopping Cart</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">Checkout</a>
                                            </li>
                                            <li>
                                                <a href="dashboard.html">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="demo17-about.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="single.html">Blog Post</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="login.html">Login</a>
                                            </li>
                                            <li>
                                                <a href="forgot-password.html">Forgot Password</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-center justify-content-between">
                            <a href="demo17.html" className="logo">
                                <Image src={templateImages.logoImage.logo2} alt="Porto Logo" width="202" height="80" />
                            </a>

                            <button className="mobile-menu-toggler" type="button">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        <div className="header-right d-none d-lg-flex">
                            <div className="main-nav d-flex w-lg-max justify-content-end">
                                <ul className="menu">

                                    <li><a href="demo17-about.html">About Us</a></li>


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