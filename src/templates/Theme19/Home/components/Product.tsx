import Image from "next/image"
import { products } from "../data"
import "../../Header/Header.css"
import { templateImages } from "@/appProvider/templateImages"

const Product = ({ setQuickView }) => {

    const showDrop = () => {
        document.getElementById("fashionList").classList.toggle("showDrop")
    }

    const showDiv = (product: object) => {
        const theDiv = document.getElementById("quickViewDiv")
        if (theDiv) {
            theDiv.style.display = "block"
            setQuickView(product)
        }
    }

    return (
        <div className="main-container mt-3 mt-md-0">
            <div className="container-fluid">
                <div className="category-list" id="category-list">
                    <ul className="nav category-list-nav">
                        <li className="nav-item green">
                            <a href="#cat-1" className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-shirt"></i></span>
                                <span className="cat-list-text">Fashion &amp; Clothes</span>
                            </a>
                        </li>
                        <li className="nav-item orange">
                            <a href="#cat-2" className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-computer"></i></span>
                                <span className="cat-list-text">Electronics &amp; Computers</span>
                            </a>
                        </li>
                        <li className="nav-item green">
                            <a href="#cat-3" className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-toys"></i></span>
                                <span className="cat-list-text">Toys &amp; Hobbies</span>
                            </a>
                        </li>
                        <li className="nav-item yellow">
                            <a href="#cat-4" className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-garden"></i></span>
                                <span className="cat-list-text">Home &amp; Garden</span>
                            </a>
                        </li>
                        <li className="nav-item gray">
                            <a href="#cat-5" className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-sport"></i></span>
                                <span className="cat-list-text">Sports &amp; Fitness</span>
                            </a>
                        </li>
                        <li className="nav-item lightblue">
                            <a href="#cat-6" className="nav-link">
                                <span className="cat-list-icon"><i className="icon-cat-gift"></i></span>
                                <span className="cat-list-text">Gifts</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="category-details">
                    <section id="cat-1" className="category-section">
                        <div className="category-title" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <div className="dropdown">
                                <a onClick={showDrop} style={{ cursor: "pointer", color: "black" }} className="dropdown-toggle cat-title" data-display="static"
                                    data-toggle="dropdown">Fashion &amp; Clothes</a>
                                <div id="fashionList" className="dropdown-menu">
                                    <ul className="row m-0">
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <a href="#">FASHION</a>
                                            <ul>
                                                <li><a href="#">Women</a></li>
                                                <li><a href="#">Men</a></li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Jewelry</a></li>
                                                <li><a href="#">Shoes</a></li>
                                            </ul>
                                        </li>
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <a href="#">NEW ARRIVALS</a>
                                            <ul>
                                                <li><a href="#">Dresses</a></li>
                                                <li><a href="#">Tops</a></li>
                                                <li><a href="#">Jackets</a></li>
                                                <li><a href="#">Bottoms</a></li>
                                                <li><a href="#">Swim</a></li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Shoes</a></li>
                                            </ul>
                                        </li>
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <a href="#">JACKETS</a>
                                            <ul>
                                                <li><a href="#">Bomber</a></li>
                                                <li><a href="#">Leather + Suede</a></li>
                                                <li><a href="#">Denim</a></li>
                                                <li><a href="#">Parkas + Anoraks</a></li>
                                                <li><a href="#">Blazers</a></li>
                                                <li><a href="#">Dusters</a></li>
                                            </ul>
                                        </li>
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <a href="#">TOP</a>
                                            <ul>
                                                <li><a href="#">Shirts</a></li>
                                                <li><a href="#">Bodysuits</a></li>
                                                <li><a href="#">Cropped</a></li>
                                                <li><a href="#">Tanks + Tees</a></li>
                                                <li><a href="#">Graphic Tees</a></li>
                                                <li><a href="#">Sweaters</a></li>
                                                <li><a href="#">Cardigans</a></li>
                                            </ul>
                                        </li>
                                        <li className="col-6 col-md-4 col-lg-2">
                                            <a href="#">DRESSES</a>
                                            <ul>
                                                <li><a href="#">Casual</a></li>
                                                <li><a href="#">Cocktail</a></li>
                                                <li><a href="#">Mini</a></li>
                                                <li><a href="#">Midi</a></li>
                                                <li><a href="#">Maxi</a></li>
                                                <li><a href="#">Rompers</a></li>
                                                <li><a href="#">Plus Size</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="demo19-shop.html" className="btn btn-dark">View All</a>
                        </div>
                        <div style={{ display: "flex", columnGap: "20px" }} className="products-slider custom-products">
                            {
                                products.slice(0, 6).map((product, i) => (
                                    <div key={i} className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo19-product.html">
                                                <Image src={product.productImageUrl} width="205"
                                                    height="205" alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                    className="icon-shopping-cart"></i></a>
                                            </div>
                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="title-wrap">
                                                <h3 className="product-title">
                                                    <a href="demo19-product.html">{product.productTitle}</a>
                                                </h3>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i
                                                    className="icon-heart"></i></a>
                                            </div>
                                            <div className="price-box">
                                                <span className="product-price">${product.productPrice}.00</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="category-description" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner banner1" style={{ backgroundColor: "#6db2d9" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner2} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle banner-layer-left">
                                            <h5 className="m-b-2">Find the Boundaries. Push Through!</h5>
                                            <h3 className="text-white mb-0">Summer Sale</h3>
                                            <h4 className="text-uppercase text-white mb-0">30% off</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner banner2" style={{ backgroundColor: "#f4f4f4" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner3} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div className="banner-layer banner-layer-center text-center">
                                            <h3 className="text-uppercase ls-10 m-b-1">Deal Promos</h3>
                                            <h5 className="text-body text-uppercase mb-0">Starting at $99</h5>
                                        </div>
                                        <div className="banner-layer banner-layer-middle banner-layer-left">
                                            <h6 className="bg-dark text-white text-center mb-0">
                                                50<small><sup>%</sup><sub>off</sub></small></h6>
                                        </div>
                                        <div className="banner-layer banner-layer-right banner-layer-top">
                                            <h6 className="bg-dark text-white text-center mb-0">
                                                30<small><sup>%</sup><sub>off</sub></small></h6>
                                        </div>
                                        <div className="banner-layer banner-layer-right banner-layer-bottom">
                                            <h6 className="bg-dark text-white text-center mb-0">
                                                70<small><sup>%</sup><sub>off</sub></small></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="cat-2" className="category-section">
                        <div className="category-title" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <h2 className="cat-title">ELECTRONICS &amp; COMPUTERS</h2>
                            <a href="demo19-shop.html" className="btn btn-dark">View All</a>
                        </div>
                        <div style={{ display: "flex", columnGap: "20px" }} className="products-slider custom-products">
                            {
                                products.slice(6, 12).map((product, i) => (
                                    <div key={i} className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo19-product.html">
                                                <Image src={product.productImageUrl} width="205"
                                                    height="205" alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                    className="icon-shopping-cart"></i></a>
                                            </div>
                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="title-wrap">
                                                <h3 className="product-title">
                                                    <a href="demo19-product.html">{product.productTitle}</a>
                                                </h3>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i
                                                    className="icon-heart"></i></a>
                                            </div>
                                            <div className="price-box">
                                                <span className="product-price">${product.productPrice}.00</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="category-description" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner banner3" style={{ backgroundColor: "#f4f4f4" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner4} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div
                                            className="banner-layer banner-layer-middle row align-items-center flex-md-nowrap">
                                            <div className="col-auto offset-4">
                                                <div className="coupon-sale-text">
                                                    <h4 className="m-b-2 font1 d-block text-white bg-dark">Exclusive
                                                        COUPON</h4>
                                                    <h5 className="mb-0 font1 d-inline-block bg-dark"><i
                                                        className="text-dark ls-0">UP TO</i><b
                                                            className="text-white">$100</b><sub
                                                                className="text-dark">OFF</sub></h5>
                                                </div>
                                            </div>
                                            <div className="col-md-4 offset-md-0 offset-4">
                                                <h3 className="font1 ls-10 text-md-center text-uppercase mb-0">Drone
                                                    &amp; Cameras</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner banner4" style={{ backgroundColor: "#242527" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner5} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle row align-items-center">
                                            <div className="col-md-4 col-md-4 offset-4">
                                                <h3
                                                    className="ls-10 text-uppercase text-white text-md-center m-b-2 mb-lg-0">
                                                    Electronic Deals</h3>
                                            </div>
                                            <div className="col-auto offset-md-0 offset-4">
                                                <div className="coupon-sale-text">
                                                    <h4 className="m-b-2 font1 d-block text-dark bg-white">Exclusive
                                                        COUPON</h4>
                                                    <h5 className="mb-0 font1 d-inline-block"><i
                                                        className="text-white ls-0">UP TO</i><b
                                                            className="text-dark">$100</b><sub
                                                                className="text-white">OFF</sub></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="cat-3" className="category-section">
                        <div className="category-title" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <h2 className="cat-title">Toys &amp; Games</h2>
                            <a href="demo19-shop.html" className="btn btn-dark">View All</a>
                        </div>
                        <div style={{ display: "flex", columnGap: "20px" }} className="products-slider custom-products">
                            {
                                products.slice(12, 18).map((product, i) => (
                                    <div key={i} className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo19-product.html">
                                                <Image src={product.productImageUrl} width="205"
                                                    height="205" alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                    className="icon-shopping-cart"></i></a>
                                            </div>
                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="title-wrap">
                                                <h3 className="product-title">
                                                    <a href="demo19-product.html">{product.productTitle}</a>
                                                </h3>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i
                                                    className="icon-heart"></i></a>
                                            </div>
                                            <div className="price-box">
                                                <span className="product-price">${product.productPrice}.00</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="category-description" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner banner5" style={{ backgroundColor: "#292929" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner6} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div
                                            className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                            <div className="content-left">
                                                <h5 className="font1 text-uppercase m-b-1">Be a Kendo Warrior</h5>
                                                <h3 className="font1 text-white text-uppercase ls-n-20 mb-0">ProWarrior
                                                </h3>
                                            </div>
                                            <div className="content-right">
                                                <h4 className="font1 mb-0 text-white">
                                                    <del>$59</del>
                                                    $29
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner banner6" style={{ backgroundColor: "#f4f4f4" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner7} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle banner-layer-left">
                                            <h3 className="m-b-1">Consoles &amp; Games</h3>
                                            <h4 className="mb-0">50% OFF</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="cat-4" className="category-section">
                        <div className="category-title" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <h2 className="cat-title">Home &amp; Garden</h2>
                            <a href="demo19-shop.html" className="btn btn-dark">View All</a>
                        </div>
                        <div style={{ display: "flex", columnGap: "20px" }} className="products-slider custom-products">
                            {
                                products.slice(18, 24).map((product, i) => (
                                    <div key={i} className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo19-product.html">
                                                <Image src={product.productImageUrl} width="205"
                                                    height="205" alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                    className="icon-shopping-cart"></i></a>
                                            </div>
                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="title-wrap">
                                                <h3 className="product-title">
                                                    <a href="demo19-product.html">{product.productTitle}</a>
                                                </h3>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i
                                                    className="icon-heart"></i></a>
                                            </div>
                                            <div className="price-box">
                                                <span className="product-price">${product.productPrice}.00</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="category-description" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <div className="row">
                                <div className="col-lg-6 d-flex">
                                    <div className="banner banner7 m-b-4" style={{ backgroundColor: "#f4f4f4" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner8} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div
                                            className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                            <div className="content-left text-center">
                                                <h5 className="heading-border text-dark text-uppercase m-b-1">Amazing
                                                </h5>
                                                <h3 className="font1 ls-n-10 text-uppercase m-b-2">Collection</h3>
                                                <hr className="m-b-2 mt-0" />
                                                <h5 className="text-uppercase mb-0">Check our discounts</h5>
                                            </div>
                                            <div className="content-right text-center">
                                                <h4 className="text-uppercase ls-n-20 m-b-2">Starting AT
                                                    <sup>$</sup>199<sup>99</sup>
                                                </h4>
                                                <h6 className="text-body text-uppercase mb-0">* limited time only</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div
                                        className="banner banner8 d-flex align-items-center justify-content-center m-b-4">
                                        <div
                                            className="row no-gutters banner-layer position-static justify-content-center align-items-center m-t-3 px-3">
                                            <div
                                                className="col-auto d-flex flex-column justify-content-center text-center">
                                                <h4 className="align-left text-uppercase mb-0">Furniture &amp; Garden
                                                </h4>
                                                <h3 className="text-white m-b-3 align-left text-uppercase">Huge Sale
                                                </h3>
                                            </div>

                                            <div className="col-auto">
                                                <h2 className="text-white m-b-3 position-relative align-left">
                                                    50<small style={{ right: "35px" }}>%<ins>OFF</ins></small>
                                                </h2>
                                            </div>

                                            <div className="col-auto">
                                                <a href="demo19-shop.html" className="btn m-b-3 ls-10">Shop Now!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="cat-5" className="category-section">
                        <div className="category-title" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <h2 className="cat-title">Sports &amp; Fitness</h2>
                            <a href="demo19-shop.html" className="btn btn-dark">View All</a>
                        </div>
                        <div style={{ display: "flex", columnGap: "20px" }} className="products-slider custom-products">
                            {
                                products.slice(24, 30).map((product, i) => (
                                    <div key={i} className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo19-product.html">
                                                <Image src={product.productImageUrl} width="205"
                                                    height="205" alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                    className="icon-shopping-cart"></i></a>
                                            </div>
                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="title-wrap">
                                                <h3 className="product-title">
                                                    <a href="demo19-product.html">{product.productTitle}</a>
                                                </h3>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i
                                                    className="icon-heart"></i></a>
                                            </div>
                                            <div className="price-box">
                                                <span className="product-price">${product.productPrice}.00</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="category-description" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner banner9" style={{ backgroundColor: "#22252a" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner9} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div
                                            className="banner-layer banner-layer-middle d-flex justify-content-between align-items-center">
                                            <div className="content-left coupon-sale-text">
                                                <h5 className="mb-0 font1 d-inline-block ls-10 text-white"><i
                                                    className="ls-0">UP TO</i><b>50%</b><sub>OFF</sub></h5>
                                            </div>
                                            <div className="content-right">
                                                <h4 className="font1 text-uppercase m-b-1">Flash Sales On</h4>
                                                <h3 className="font1 text-white text-uppercase mb-0">Nice Shoes</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner banner10" style={{ backgroundColor: "#f4f4f4" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner10} alt="banner"
                                                width="825" height="178" />
                                        </figure>
                                        <div
                                            className="banner-layer banner-layer-middle row no-gutters d-flex align-items-center justify-content-between justify-content-lg-start flex-nowrap overflow-hidden m-0">
                                            <div className="col-auto col-lg-4 text-right ml-4 ml-lg-0">
                                                <h6 className="font1 text-uppercase text-body m-b-1">Feel like a player
                                                </h6>
                                                <h3 className="font1 text-uppercase ls-n-25 mb-0">Football</h3>
                                            </div>
                                            <div className="col-auto coupon-sale-text offset-lg-4 mr-4 mr-lg-0">
                                                <h4 className="m-b-2 font1 d-block ls-10 text-white bg-dark">Exclusive
                                                    COUPON</h4>
                                                <h5 className="mb-0 font1 d-inline-block ls-10 bg-dark"><i
                                                    className="text-dark ls-0">UP TO</i><b
                                                        className="text-white">100%</b><sub className="text-dark">OFF</sub>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="cat-6" className="category-section">
                        <div className="category-title" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <h2 className="cat-title">Gifts &amp; Gadgets</h2>
                            <a href="demo19-shop.html" className="btn btn-dark">View All</a>
                        </div>
                        <div style={{ display: "flex", columnGap: "20px" }} className="products-slider custom-products">
                            {
                                products.slice(30, 36).map((product, i) => (
                                    <div key={i} className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo19-product.html">
                                                <Image src={product.productImageUrl} width="205"
                                                    height="205" alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                                    className="icon-shopping-cart"></i></a>
                                            </div>
                                            <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="title-wrap">
                                                <h3 className="product-title">
                                                    <a href="demo19-product.html">{product.productTitle}</a>
                                                </h3>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i
                                                    className="icon-heart"></i></a>
                                            </div>
                                            <div className="price-box">
                                                <span className="product-price">${product.productPrice}.00</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="category-description" data-animation-name="fadeInDownShorter"
                            data-animation-delay="200">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner banner11" style={{ backgroundColor: "#f4f4f4" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner11}
                                                alt="banner" width="825" height="178" />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle banner-layer-right">
                                            <h3 className="text-uppercase text-right ls-10 mb-0">
                                                Top Electronic<br />For Gifts
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner banner12" style={{ backgroundColor: "#f5a083" }}>
                                        <figure>
                                            <Image src={templateImages.demo19.bannerImage.banner12}
                                                alt="banner" width="825" height="178" />
                                        </figure>

                                        <div className="banner-layer banner-layer-middle">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <h2 className="line-height-1 m-b-2">Outlet Selected Items</h2>
                                                    <h4 className="text-white ls-0 mb-0"><b>BIG SALE UP TO</b></h4>
                                                </div>

                                                <div className="col-auto">
                                                    <h3 className="text-white mb-0">80%<small
                                                        className="d-inline-block text-center"><b>OFF</b></small>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Product