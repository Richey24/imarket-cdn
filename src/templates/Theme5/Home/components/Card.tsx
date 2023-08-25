import Image from "next/image";
import Slider from "react-slick";
import product4 from "../../../../assets/images/demoes/demo5/products/product-4.jpg"
import product15 from "../../../../assets/images/demoes/demo5/products/product-15.jpg"
import product16 from "../../../../assets/images/demoes/demo5/products/product-16.jpg"
import { bestSeller, featuredProduct, latestProducts } from "../data";

const Card = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
         <div>
              <div className="home-products-container text-center">
                   <div className="row">
                        <div className="col-md-4 mb-2">
                             <div className="home-products bg-white px-4 pb-2 pt-4">
                                  <h3 className="section-sub-title mt-1 m-b-1">
                                       Featured Products
                                  </h3>

                                  <div className="nav-image-center nav-thin px-3 ">
                                       <Slider {...settings}>
                                            {featuredProduct.map((product, i) => (
                                                 <div key={i} className="product-default">
                                                      <figure>
                                                           <a href="demo5-product.html">
                                                                <Image
                                                                     src={product.productImageUrl}
                                                                     alt="product"
                                                                     width="300"
                                                                     height="300"
                                                                />
                                                                <Image
                                                                     src={product4}
                                                                     alt="product"
                                                                     width="300"
                                                                     height="300"
                                                                />
                                                           </a>
                                                      </figure>
                                                      <div className="product-details">
                                                           <div className="category-list">
                                                                <a
                                                                     href="demo5-shop.html"
                                                                     className="product-category"
                                                                >
                                                                     {product.productCategory}
                                                                </a>
                                                           </div>
                                                           <h3 className="product-title">
                                                                <a href="demo5-product.html">
                                                                     {product.productTitle}
                                                                </a>
                                                           </h3>
                                                           {/* <!-- <div className="ratings-container">
                                                    <div className="product-ratings">
                                                        <span className="ratings" style="width:100%"></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div> --> */}
                                                           <div className="price-box">
                                                                <span className="old-price">
                                                                     ${product.oldPrice}.00
                                                                </span>
                                                                <span className="product-price">
                                                                     ${product.productPrice}.00
                                                                </span>
                                                           </div>
                                                      </div>
                                                 </div>
                                            ))}
                                       </Slider>
                                  </div>
                             </div>
                        </div>

                        <div className="col-md-4 mb-2">
                             <div className="home-products bg-white px-4 pb-2 pt-4">
                                  <h3 className="section-sub-title mt-1 m-b-1">Best Sellers</h3>

                                  <div className="nav-image-center nav-thin px-3">
                                       <Slider {...settings}>
                                            {bestSeller.map((product, i) => (
                                                 <div key={i} className="product-default">
                                                      <figure>
                                                           <a href="demo5-product.html">
                                                                <Image
                                                                     src={product.productImageUrl}
                                                                     alt="product"
                                                                     width="300"
                                                                     height="300"
                                                                />
                                                                <Image
                                                                     src={product15}
                                                                     alt="product"
                                                                     width="300"
                                                                     height="300"
                                                                />
                                                           </a>
                                                      </figure>
                                                      <div className="product-details">
                                                           <div className="category-list">
                                                                <a
                                                                     href="demo5-shop.html"
                                                                     className="product-category"
                                                                >
                                                                     {product.productCategory}
                                                                </a>
                                                           </div>
                                                           <h3 className="product-title">
                                                                <a href="demo5-product.html">
                                                                     {product.productTitle}
                                                                </a>
                                                           </h3>
                                                           {/* <!-- <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style="width:100%"></span>
                                                                <span className="tooltiptext tooltip-top"></span>
                                                            </div>
                                                        </div> --> */}
                                                           <div className="price-box">
                                                                <span className="old-price">
                                                                     ${product.oldPrice}.00
                                                                </span>
                                                                <span className="product-price">
                                                                     ${product.productPrice}.00
                                                                </span>
                                                           </div>
                                                      </div>
                                                 </div>
                                            ))}
                                       </Slider>
                                  </div>
                             </div>
                        </div>

                        <div className="col-md-4 mb-2">
                             <div className="home-products bg-white px-4 pb-2 pt-4">
                                  <h3 className="section-sub-title mt-1 m-b-1">New Arrivals</h3>

                                  <div className="nav-image-center nav-thin px-3">
                                       <Slider {...settings}>
                                            {latestProducts.map((product, i) => (
                                                 <div key={i} className="product-default">
                                                      <figure>
                                                           <a href="demo5-product.html">
                                                                <Image
                                                                     src={product.productImageUrl}
                                                                     alt="product"
                                                                     width="300"
                                                                     height="300"
                                                                />
                                                                <Image
                                                                     src={product16}
                                                                     alt="product"
                                                                     width="300"
                                                                     height="300"
                                                                />
                                                           </a>
                                                      </figure>
                                                      <div className="product-details">
                                                           <div className="category-list">
                                                                <a
                                                                     href="demo5-shop.html"
                                                                     className="product-category"
                                                                >
                                                                     {product.productCategory}
                                                                </a>
                                                           </div>
                                                           <h3 className="product-title">
                                                                <a href="demo5-product.html">
                                                                     {product.productTitle}
                                                                </a>
                                                           </h3>
                                                           {/* <!-- <div className="ratings-container">
                                                                <div className="product-ratings">
                                                                    <span className="ratings" style="width:100%"></span>
                                                                    <span className="tooltiptext tooltip-top"></span>
                                                                </div>
                                                            </div> --> */}
                                                           <div className="price-box">
                                                                <span className="old-price">
                                                                     ${product.oldPrice}.00
                                                                </span>
                                                                <span className="product-price">
                                                                     ${product.productPrice}.00
                                                                </span>
                                                           </div>
                                                      </div>
                                                 </div>
                                            ))}
                                       </Slider>
                                  </div>
                             </div>
                        </div>
                   </div>
              </div>
         </div>
    );
}

export default Card