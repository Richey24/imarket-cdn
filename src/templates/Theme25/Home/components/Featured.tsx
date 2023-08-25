import { templateImages } from "@/appProvider/templateImages"
import Image from "next/image"
import { products } from "../data"

const Featured = ({ setQuickView }) => {

    const showDiv = (product: object) => {
        const theDiv = document.getElementById("quickViewDiv")
        if (theDiv) {
            theDiv.style.display = "block"
            setQuickView(product)
        }
    }

    return (
        <div>
            <section className="featured-section bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 m-b-3">
                            <div className="banner banner2"
                                style={{ backgroundColor: "#343339", backgroundImage: `url(${templateImages.demo25.bannerImage.banner3})` }}
                                data-animation-name="fadeInRightShorter" data-animation-delay="200">
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Award Winners</h3>
                                    <p className="font2 m-b-3">12 Books</p>
                                    <a href="demo25-shop.html" className="btn btn-primary">View Collections<i
                                        className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-b-3">
                            <div className="banner banner3"
                                style={{ backgroundColor: "#343436", backgroundImage: `url(${templateImages.demo25.bannerImage.banner4})` }}
                                data-animation-name="fadeInRightShorter" data-animation-delay="400">
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Deal in books</h3>
                                    <p className="font2 m-b-3">21 Books</p>
                                    <a href="demo25-shop.html" className="btn btn-secondary">View Collections<i
                                        className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-b-5">
                            <div className="banner banner4"
                                style={{ backgroundColor: "#343436", backgroundImage: `url(${templateImages.demo25.bannerImage.banner5})` }}
                                data-animation-name="fadeInRightShorter" data-animation-delay="600">
                                <div className="banner-layer">
                                    <h3 className="text-uppercase text-white m-b-2">Most gifted</h3>
                                    <p className="font2 m-b-3">38 Books</p>
                                    <a href="demo25-shop.html" className="btn btn-teritary">View Collections<i
                                        className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="section-title pb-3 mb-2">Featured Books</h2>

                        <div className="row">
                            {
                                products.slice(0, 6).map((product, i) => (
                                    <div key={i} className="col-6 col-md-4 col-lg-3 col-xl-2">
                                        <div className="product-default inner-quickview inner-icon">
                                            <figure>
                                                <a href="demo25-product.html">
                                                    <Image src={product.productImageUrl} width="217"
                                                        height="217" alt="product" />
                                                </a>
                                                <div className="label-group">
                                                    <div className="product-label label-hot">HOT</div>
                                                </div>
                                                <div className="btn-icon-group">
                                                    <a href="demo25-product.html"
                                                        className="btn-icon btn-add-cart product-type-simple"><i
                                                            className="icon-shopping-cart"></i></a>
                                                </div>
                                                <a onClick={() => showDiv(product)} style={{ cursor: "pointer" }} className="btn-quickview"
                                                    title="Quick View">Quick
                                                    View</a>
                                            </figure>
                                            <div className="product-details">
                                                <div className="category-wrap">
                                                    <div className="category-list">
                                                        <a href="demo25-shop.html" className="product-category">{product.productCategory}</a>
                                                    </div>
                                                    <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i
                                                        className="icon-heart"></i></a>
                                                </div>
                                                <h3 className="product-title">
                                                    <a href="demo25-product.html">{product.productTitle}</a>
                                                </h3>
                                                <div className="price-box">
                                                    <span className="product-price">${product.productPrice}.0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Featured