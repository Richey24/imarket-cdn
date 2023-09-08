import Image from "next/image"
import "./Header.css"
import { templateImages } from "@/appProvider/templateImages"

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
            <header className="header">
                <div className="header-wrapper">
                    <div className="header-top sticky-header" data-sticky-options="{'mobile': true}">
                        <div className="container">
                            <div className="header-left header-dropdowns">
                                <div className="header-dropdown d-none d-lg-block">
                                    <a href="#" className="pl-0">ENG</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a href="#">ENG</a></li>
                                            <li><a href="#">FRE</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="header-dropdown d-none d-lg-block">
                                    <a href="#" className="pt-0">USD</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a href="#">EUR</a></li>
                                            <li><a href="#">USD</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <button className="mobile-menu-toggler d-lg-none d-block" type="button">
                                    <i className="fas fa-bars text-white"></i>
                                </button>

                                <a href="demo10.html" className="logo d-block d-lg-none">
                                    <Image src={templateImages.logoImage.logo2} alt="Porto Logo" width={100} height={100} />
                                </a>
                            </div>

                            <div className="header-right">
                                <a href="login.html" className="header-icon header-icon-user d-lg-block d-none"><i
                                    className="icon-user-2"></i></a>

                                <div className="header-search d-lg-none d-block mr-4">
                                    <a href="#" className="search-toggle" role="button"><i className="icon-magnifier"></i></a>
                                    <div className="header-search-wrapper show">
                                        <form action="#" method="get">
                                            <input type="search" className="form-control" name="q" id="q"
                                                placeholder="Search..." required />
                                            <button className="btn" type="submit"><i className="icon-magnifier"></i></button>
                                        </form>
                                    </div>
                                </div>

                                <a href="wishlist.html" title="Wishlist" className="header-icon"><i
                                    className=" icon-wishlist-2"></i></a>

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
                                                            <a href="demo10-product.html">Ultimate 3D
                                                                Bluetooth Speaker</a>
                                                        </h4>

                                                        <span className="cart-product-info">
                                                            <span className="cart-product-qty">1</span> × $99.00
                                                        </span>
                                                    </div>

                                                    <figure className="product-image-container">
                                                        <a href="demo10-product.html" className="product-image">
                                                            <Image src={templateImages.allTemplateImage.product.product1} alt="product"
                                                                width="80" height="80" />
                                                        </a>

                                                        <a href="#" className="btn-remove"
                                                            title="Remove Product"><span>×</span></a>
                                                    </figure>
                                                </div>

                                                <div className="product">
                                                    <div className="product-details">
                                                        <h4 className="product-title">
                                                            <a href="demo10-product.html">Brown Women
                                                                Casual HandBag</a>
                                                        </h4>

                                                        <span className="cart-product-info">
                                                            <span className="cart-product-qty">1</span> × $35.00
                                                        </span>
                                                    </div>


                                                    <figure className="product-image-container">
                                                        <a href="demo10-product.html" className="product-image">
                                                            <Image src={templateImages.allTemplateImage.product.product2} alt="product"
                                                                width="80" height="80" />
                                                        </a>

                                                        <a href="#" className="btn-remove"
                                                            title="Remove Product"><span>×</span></a>
                                                    </figure>
                                                </div>

                                                <div className="product">
                                                    <div className="product-details">
                                                        <h4 className="product-title">
                                                            <a href="demo10-product.html">Circled
                                                                Ultimate 3D Speaker</a>
                                                        </h4>

                                                        <span className="cart-product-info">
                                                            <span className="cart-product-qty">1</span> × $35.00
                                                        </span>
                                                    </div>


                                                    <figure className="product-image-container">
                                                        <a href="demo10-product.html" className="product-image">
                                                            <Image src={templateImages.allTemplateImage.product.product3} alt="product"
                                                                width="80" height="80" />
                                                        </a>
                                                        <a href="#" className="btn-remove"
                                                            title="Remove Product"><span>×</span></a>
                                                    </figure>
                                                </div>
                                            </div>

                                            <div className="dropdown-cart-total">
                                                <span>SUBTOTAL:</span>

                                                <span className="cart-total-price float-right">$134.00</span>
                                            </div>

                                            <div className="dropdown-cart-action">
                                                <a href="cart.html" className="btn btn-gray btn-block view-cart">View
                                                    Cart</a>
                                                <a href="checkout.html" className="btn btn-dark btn-block">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-middle d-lg-block d-none">
                        <div className="container d-block">
                            <div className="header-left d-none d-lg-flex justify-content-center">
                                <button className="mobile-menu-toggler" type="button">
                                    <i className="fas fa-bars"></i>
                                </button>

                                <a href="demo10.html" className="logo">
                                    <Image src={templateImages.logoImage.logo2} alt="Porto Logo" width={100} height={100} />
                                </a>
                            </div>

                            <div className="header-right d-lg-block d-flex">
                                <div className="header-search d-lg-block d-none">
                                    <a href="#" className="search-toggle d-lg-none d-inline-block" role="button"><i
                                        className="icon-magnifier"></i></a>
                                    <div className="header-search-wrapper d-lg-flex position-relative border-0">
                                        <form action="#" method="get">
                                            <input type="search" className="form-control" name="q" id="qq"
                                                placeholder="Search..." required />
                                            <button className="btn" type="submit"><i className="icon-magnifier"></i></button>
                                        </form>
                                    </div>
                                </div>

                                <nav className="main-nav">
                                    <ul className="menu  menu-vertical sf-arrows no-animation">
                                        <li className="active border-0"><a href="demo10.html">HOME</a></li>
                                        <li className="border-0">
                                            <a onMouseEnter={() => showDrop("theCategory")} onMouseLeave={() => showDrop("theCategory")} href="demo10-shop.html" className="sf-with-ul border-0">CATEGORIES</a>
                                            <div onMouseEnter={() => showDrop("theCategory")} onMouseLeave={() => showDrop("theCategory")} id="theCategory" className="megamenu megamenu-fixed-width megamenu-3cols">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <a href="#" className="nolink">VARIATION 1</a>
                                                        <ul className="submenu">
                                                            <li><a href="category.html">Fullwidth Banner</a></li>
                                                            <li><a href="category-banner-boxed-slider.html">Boxed
                                                                Slider
                                                                Banner</a>
                                                            </li>
                                                            <li><a href="category-banner-boxed-image.html">Boxed
                                                                Image
                                                                Banner</a>
                                                            </li>
                                                            <li><a href="category.html">Left Sidebar</a></li>
                                                            <li><a href="category-sidebar-right.html">Right
                                                                Sidebar</a></li>
                                                            <li><a href="category-off-canvas.html">Off Canvas
                                                                Filter</a>
                                                            </li>
                                                            <li><a href="category-horizontal-filter1.html">Horizontal
                                                                Filter1</a>
                                                            </li>
                                                            <li><a href="category-horizontal-filter2.html">Horizontal
                                                                Filter2</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <a href="#" className="nolink">VARIATION 2</a>
                                                        <ul className="submenu">
                                                            <li><a href="category-list.html">List Types</a></li>
                                                            <li><a href="category-infinite-scroll.html">Ajax
                                                                Infinite
                                                                Scroll</a>
                                                            </li>
                                                            <li><a href="category.html">3 Columns Products</a></li>
                                                            <li><a href="category-4col.html">4 Columns Products</a>
                                                            </li>
                                                            <li><a href="category-5col.html">5 Columns Products</a>
                                                            </li>
                                                            <li><a href="category-6col.html">6 Columns Products</a>
                                                            </li>
                                                            <li><a href="category-7col.html">7 Columns Products</a>
                                                            </li>
                                                            <li><a href="category-8col.html">8 Columns Products</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 p-0">
                                                        <div className="menu-banner">
                                                            <figure>
                                                                <Image src={templateImages.menuBanner.menu1} width="192"
                                                                    height="313" alt="Menu banner" />
                                                            </figure>
                                                            <div className="banner-content">
                                                                <h4>
                                                                    <span className="">UP TO</span><br />
                                                                    <b className="">50%</b>
                                                                    <i>OFF</i>
                                                                </h4>
                                                                <a href="category.html" className="btn btn-sm btn-dark">SHOP
                                                                    NOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="megamenu-container border-0">
                                            <a onMouseEnter={() => showDrop("theProducts")} onMouseLeave={() => showDrop("theProducts")} href="demo10-product.html" className="sf-with-ul border-0">PRODUCTS</a>
                                            <div onMouseEnter={() => showDrop("theProducts")} onMouseLeave={() => showDrop("theProducts")} id="theProducts" className="megamenu megamenu-fixed-width megamenu-3cols">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <a href="#" className="nolink">PRODUCT PAGES</a>
                                                        <ul className="submenu">
                                                            <li><a href="product.html">SIMPLE PRODUCT</a></li>
                                                            <li><a href="product-variable.html">VARIABLE PRODUCT</a>
                                                            </li>
                                                            <li><a href="product.html">SALE PRODUCT</a></li>
                                                            <li><a href="product.html">FEATURED & ON SALE</a></li>
                                                            <li><a href="product-custom-tab.html">WITH CUSTOM
                                                                TAB</a></li>
                                                            <li><a href="product-sidebar-left.html">WITH LEFT
                                                                SIDEBAR</a>
                                                            </li>
                                                            <li><a href="product-sidebar-right.html">WITH RIGHT
                                                                SIDEBAR</a>
                                                            </li>
                                                            <li><a href="product-addcart-sticky.html">ADD CART
                                                                STICKY</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <a href="#" className="nolink">PRODUCT LAYOUTS</a>
                                                        <ul className="submenu">
                                                            <li><a href="product-extended-layout.html">EXTENDED
                                                                LAYOUT</a>
                                                            </li>
                                                            <li><a href="product-grid-layout.html">GRID IMAGE</a>
                                                            </li>
                                                            <li><a href="product-full-width.html">FULL WIDTH
                                                                LAYOUT</a></li>
                                                            <li><a href="product-sticky-info.html">STICKY INFO</a>
                                                            </li>
                                                            <li><a href="product-sticky-both.html">LEFT & RIGHT
                                                                STICKY</a>
                                                            </li>
                                                            <li><a href="product-transparent-image.html">TRANSPARENT
                                                                IMAGE</a></li>
                                                            <li><a href="product-center-vertical.html">CENTER
                                                                VERTICAL</a>
                                                            </li>
                                                            <li><a href="#">BUILD YOUR OWN</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-4 p-0">
                                                        <div className="menu-banner menu-banner-2">
                                                            <figure>
                                                                <Image src={templateImages.menuBanner.menu2} alt="Menu banner"
                                                                    className="product-promo" width={100} height={100} />
                                                            </figure>
                                                            <i>OFF</i>
                                                            <div className="banner-content">
                                                                <h4>
                                                                    <span className="">UP TO</span><br />
                                                                    <b className="">50%</b>
                                                                </h4>
                                                            </div>
                                                            <a href="category.html" className="btn btn-sm btn-dark">SHOP
                                                                NOW</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="border-0">
                                            <a onMouseEnter={() => showDrop("thePages")} onMouseLeave={() => showDrop("thePages")} href="#" className="sf-with-ul border-0">PAGES</a>

                                            <ul onMouseEnter={() => showDrop("thePages")} onMouseLeave={() => showDrop("thePages")} id="thePages">
                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                <li><a href="#">Checkout</a>
                                                    <ul>
                                                        <li><a href="checkout-shipping.html">Checkout Shipping</a>
                                                        </li>
                                                        <li><a href="checkout-shipping-2.html">Checkout Shipping
                                                            2</a></li>
                                                        <li><a href="checkout-review.html">Checkout Review</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Dashboard</a>
                                                    <ul>
                                                        <li><a href="dashboard.html">Dashboard</a></li>
                                                        <li><a href="dashboard.html">My Account</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="demo10-about.html">About Us</a></li>

                                                <li><a href="demo10-contact.html">Contact Us</a></li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="forgot-password.html">Forgot Password</a></li>
                                            </ul>
                                        </li>
                                        <li className="border-0"><a href="demo10-contact.html" className="border-0">CONTACT
                                            US</a>
                                        </li>

                                        <li className="border-0"><a href="#" className="login-link border-0">LOG IN</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="header-bottom d-none d-lg-block text-align-center position-absolute">
                        <div className="container d-block text-center">
                            <div className="header-left d-block">
                                <h6 className="mb-0">CALL US NOW</h6>
                            </div>

                            <div className="header-right d-block pr-0">
                                <div className="header-contact text-white">
                                    <a href="tel:#">+123 456 7890</a>
                                </div>
                            </div>
                        </div>

                        <div className="social-icons text-center">
                            <a href="#" className="social-icon" target="_blank"><i className="icon-facebook"></i></a>
                            <a href="#" className="social-icon" target="_blank"><i className="icon-twitter"></i></a>
                            <a href="#" className="social-icon" target="_blank"><i className="icon-instagram"></i></a>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header