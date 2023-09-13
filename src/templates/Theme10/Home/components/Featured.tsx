import { templateImages } from "@/appProvider/templateImages"
import Image from "next/image"
import "./Featured.css"

const Featured = () => {
    return (
        <section className="section-2 featured-collection mt-5" data-animation-name="fadeIn"
            data-animation-delay="100">
            <div className="container">
                <h2 className="section-title">Featured Products</h2>

                <div className="">
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div id="feat1" className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark">
                            <figure style={{ height: "533px" }}>
                                <a href="demo10-product.html">
                                    <Image src={templateImages.demo10.grid.gridImage1} className="h-100"
                                        alt="desc" height="720" width="720" />
                                </a>

                                <div className="btn-icon-group">
                                    <a href="#" className="btn-icon btn-icon-wish"><i className="icon-wishlist-2"></i></a>
                                    <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                        className="icon-shopping-cart"></i></a>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="demo10-shop.html" className="product-category">Women</a>
                                    </div>
                                </div>
                                <h3 className="product-title"> <a href="demo10-product.html">Woman Blouse</a> </h3>
                                <div className="price-box">
                                    <span className="product-price">$88.00</span>
                                </div>
                            </div>
                        </div>

                        <div id="feat2" className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark">
                            <figure style={{ height: "533px" }}>
                                <a href="demo10-product.html">
                                    <Image src={templateImages.demo10.grid.gridImage2} className="h-100"
                                        height="490" width="366" alt="desc" />
                                </a>

                                <div className="btn-icon-group">
                                    <a href="#" className="btn-icon btn-icon-wish"><i className="icon-wishlist-2"></i></a>
                                    <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                        className="icon-shopping-cart"></i></a>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="demo10-shop.html" className="product-category">Women</a>
                                    </div>
                                </div>
                                <h3 className="product-title"> <a href="demo10-product.html">Men Cloths</a> </h3>
                                <div className="price-box">
                                    <span className="product-price">$199.00</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark">
                                <figure>
                                    <a href="demo10-product.html">
                                        <Image src={templateImages.demo10.grid.gridImage3} className="h-100"
                                            alt="desc" width="231" height="231" />
                                    </a>

                                    <div className="btn-icon-group">
                                        <a href="#" className="btn-icon btn-icon-wish"><i className="icon-wishlist-2"></i></a>
                                        <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                            className="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo10-shop.html" className="product-category">Women</a>
                                        </div>
                                    </div>
                                    <h3 className="product-title"> <a href="demo10-product.html">Man Belt</a> </h3>
                                    <div className="price-box">
                                        <span className="product-price">$48.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark">
                                <figure>
                                    <a href="demo10-product.html">
                                        <Image src={templateImages.demo10.grid.gridImage4} className="h-100"
                                            alt="desc" width="231" height="231" />
                                    </a>

                                    <div className="btn-icon-group">
                                        <a href="#" className="btn-icon btn-icon-wish"><i className="icon-wishlist-2"></i></a>
                                        <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                            className="icon-shopping-cart"></i></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo10-shop.html" className="product-category">Women</a>
                                        </div>
                                    </div>
                                    <h3 className="product-title"> <a href="demo10-product.html">Double Belt</a> </h3>
                                    <div className="price-box">
                                        <span className="product-price">$48.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ display: "flex", gap: "20px" }}>
                        <div className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark">
                            <figure>
                                <a href="demo10-product.html">
                                    <Image src={templateImages.demo10.grid.gridImage5} className="h-100"
                                        alt="desc" width="231" height="231" />
                                </a>

                                <div className="btn-icon-group">
                                    <a href="#" className="btn-icon btn-icon-wish"><i className="icon-wishlist-2"></i></a>
                                    <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                        className="icon-shopping-cart"></i></a>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="demo10-shop.html" className="product-category">Women</a>
                                    </div>
                                </div>
                                <h3 className="product-title"> <a href="demo10-product.html">Woman Bag</a> </h3>
                                <div className="price-box">
                                    <span className="product-price">$48.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="product-default inner-quickview inner-icon inner-icon-inline overlay-dark">
                            <figure>
                                <a href="demo10-product.html">
                                    <Image src={templateImages.demo10.grid.gridImage6} className="h-100"
                                        alt="desc" width="231" height="231" />
                                </a>

                                <div className="btn-icon-group">
                                    <a href="#" className="btn-icon btn-icon-wish"><i className="icon-wishlist-2"></i></a>
                                    <a href="#" className="btn-icon btn-add-cart product-type-simple"><i
                                        className="icon-shopping-cart"></i></a>
                                </div>
                                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                    View</a>
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="demo10-shop.html" className="product-category">Women</a>
                                    </div>
                                </div>
                                <h3 className="product-title"> <a href="demo10-product.html">Man Shoes</a> </h3>
                                <div className="price-box">
                                    <span className="product-price">$416.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-col-sizer col-1"></div>
                </div>
            </div>
        </section>
    )
}

export default Featured