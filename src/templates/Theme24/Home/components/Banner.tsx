import Image from "next/image";
import Slider from "react-slick";
import { templateImages } from "@/appProvider/templateImages";
// import "slick-carousel/slick/slick.css"; // Import react-slick styles
// import "slick-carousel/slick/slick-theme.css"; // Import react-slick theme styles

const Banner = () => {
     let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          // className: "intro-slider slide-animat curved-border  nav-big ",
     };
     return (
          <div className="intro-section mb-3">
               <Slider {...settings}>
                    <div>
                         <div
                              className="intro-slide intro-slide-1"
                              style={{
                                   backgroundImage: `url('${templateImages.demo24.sliderImage.slide1}')`,
                                   backgroundColor: "#d85c50",
                              }}
                         >
                              <div className="container">
                                   <div className="product-default">
                                        <figure>
                                             <Image
                                                  src={templateImages.demo24.productImages.product1}
                                                  alt="product"
                                                  width={722}
                                                  height={455}
                                             />
                                        </figure>
                                        <div className="product-details">
                                             <div className="title-wrap">
                                                  <h4 className="product-title">
                                                       <a href="demo24-product.html">
                                                            – Ecommerce Shop
                                                       </a>
                                                  </h4>
                                             </div>
                                             <div className="price-box">
                                                  <span className="sale-text">
                                                       <small>get yours now</small>SALE 34%
                                                  </span>
                                                  <div className="price-wrapper">
                                                       <div className="old-price">$59</div>
                                                       <div className="product-price">$39</div>
                                                  </div>
                                             </div>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo24-product.html"
                                                       className="btn-add-cart"
                                                  >
                                                       <i className="fa fa-arrow-right" />
                                                       Select Options
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div>
                         <div
                              className="intro-slide intro-slide-2"
                              style={{
                                   backgroundImage: `url('${templateImages.demo24.sliderImage.slide2}')`,
                                   backgroundColor: "#252a2e",
                              }}
                         >
                              <div className="container">
                                   <div className="product-default">
                                        <figure>
                                             <Image
                                                  src={templateImages.demo24.productImages.product2}
                                                  alt="product"
                                                  width={722}
                                                  height={455}
                                             />
                                        </figure>
                                        <div className="product-details">
                                             <div className="title-wrap">
                                                  <h4 className="product-title">
                                                       <a href="demo24-product.html">
                                                            Shoport – eCommerce Theme
                                                       </a>
                                                  </h4>
                                             </div>
                                             <div className="price-box">
                                                  <span className="sale-text">
                                                       <small>get yours now</small>SALE 50%
                                                  </span>
                                                  <div className="price-wrapper">
                                                       <div className="old-price">$399</div>
                                                       <div className="product-price">$198</div>
                                                  </div>
                                             </div>
                                             <div className="btn-icon-group">
                                                  <a
                                                       href="demo24-product.html"
                                                       className="btn-add-cart"
                                                  >
                                                       <i className="fa fa-arrow-right" />
                                                       Select Options
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Slider>
          </div>
     );
};
export default Banner;
