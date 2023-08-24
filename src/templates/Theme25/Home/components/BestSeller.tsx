import { templateImages } from "@/appProvider/templateImages"
import Image from "next/image"
import { products } from "../data"

const BestSeller = () => {
    return (
        <div>
            <section className="best-sellers">
                <div className="container">
                    <div className="heading pb-3 mb-2 d-flex align-items-center justify-content-between">
                        <h2 className="section-title border-0">Best Sellers Books</h2>
                        <a href="demo25-shop.html" className="btn btn-link">View all products<i
                            className="fas fa-long-arrow-alt-right"></i></a>
                    </div>

                    <div className="row no-gutters m-0">
                        <div className="col-md-4">
                            <div className="banner banner1 bg-white">
                                <div
                                    className="banner-layer d-flex flex-column align-items-center justify-content-center h-100">
                                    <h5 className="font-weight-normal text-uppercase m-b-1"><i>Book Club</i></h5>
                                    <h2 className="text-center">A selection with only the best books</h2>
                                    <figure>
                                        <Image src={templateImages.demo25.bannerImage.banner2} alt="banner"
                                            width="343" height="283" />
                                    </figure>
                                    <a href="demo25-shop.html" className="btn btn-primary">Explore Books <i
                                        className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row custom-products no-gutters">
                                {
                                    products.slice(0, 8).map((product, i) => (
                                        <div key={i} className="col-6 col-md-4 col-xl-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <Image src={product.productImageUrl}
                                                            width="217" height="217" alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-hot">HOT</div>
                                                        <div className="product-label label-sale">-17%</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html"
                                                            className="btn-icon btn-add-cart product-type-simple"><i
                                                                className="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview"
                                                        title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">{product.productCategory}</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i
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
                </div>
            </section>
        </div>
    )
}

export default BestSeller