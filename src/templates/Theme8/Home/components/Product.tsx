import Image from "next/image";
import { products } from "../data";

const Product = ({ setQuickView }) => {

    const showDiv = (product: object) => {
        const theDiv = document.getElementById("quickViewDiv")
        if (theDiv) {
            theDiv.style.display = "block"
            setQuickView(product)
        }
    }

    return (
        <div className="container feature-container">
            <h2 className="subtitle text-center">FEATURED PRODUCTS</h2>
            <div className="heading-spacer"></div>
            <div className="row">
                {
                    products.slice(0, 8).map((product, i) => (
                        <div className="col-6 col-sm-4 col-md-3" key={i}>
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo8-product.html">
                                        <Image src={product.productImageUrl} alt="product"
                                            width="300" height="300" />
                                        <Image src={product.productImageUrlTwo} alt="product"
                                            width="300" height="300" />
                                    </a>
                                    <div className="btn-icon-group">
                                        <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                            className="icon-shopping-cart"></i></a>
                                    </div>
                                    <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo8-shop.html" className="product-category">{product.productCategory}</a>
                                        </div>
                                        <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i
                                            className="icon-heart"></i></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo8-product.html">{product.productTitle}</a>
                                    </h3>
                                    <div className="price-box">
                                        <span className="product-price">${product.productPrice}.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="sale-banner banner">
                <div className="container banner-content">
                    <div className="row no-gutter bg-secondary">
                        <div className="col-auto col-md-4 d-flex flex-column justify-content-center col-1">
                            <h4 className="align-left text-uppercase mb-0">Furniture &amp; Garden</h4>
                            <h3 className="text-white mb-0 align-left text-uppercase">Huge Sale</h3>
                        </div>
                        <div className="col-auto col-md-4 col-2">
                            <h5 className="text-white mb-0 position-relative align-left">50<small style={{ right: "35px" }}>%<ins>OFF</ins></small>
                            </h5>
                        </div>
                        <div className="mb-0 col-md-4 col-3 col-auto">
                            <a href="demo8-shop.html" className="btn btn-lg btn-primary">Shop Now!</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product