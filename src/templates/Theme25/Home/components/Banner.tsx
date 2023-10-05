import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import Slider from "react-slick";
import "./Banner.css";
import { bannerData } from "@/templates/Theme11/Home/data";

const Banner = ({ bannerData }) => {
     const settings = {
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     return (
          <div>
               <div className="intro-section">
                    <div className="home-slider">
                         <Slider {...settings}>
                              <div className="theBanner25">
                                   {bannerData.slice(0, 3).map((data) => (
                                        <div className="home-slide">
                                             <a href="demo25-shop.html">
                                                  <Image
                                                       src={
                                                            templateImages.demo25.sliderImage.slide1
                                                       }
                                                       alt="slider"
                                                       width="545"
                                                       height="398"
                                                  />
                                                  <div className="home-slide-content text-center">
                                                       <h3 className="ls-n-10 text-white mb-0">
                                                            {data.name}
                                                       </h3>
                                                       <span className="product-count d-block font2 ls-10 text-uppercase">
                                                            {data.productsCount} Products
                                                       </span>
                                                       <span className="btn text-white">
                                                            View All Products{" "}
                                                            <i className="fas fa-long-arrow-alt-right"></i>
                                                       </span>
                                                  </div>
                                             </a>
                                             {data.firstProduct && (
                                                  <div className="product-default">
                                                       <figure>
                                                            <Image
                                                                 src={data?.firstProduct?.imageUrl}
                                                                 alt="product"
                                                                 width="250"
                                                                 height="375"
                                                            />
                                                       </figure>
                                                       <div className="product-details">
                                                            <h3 className="product-title">
                                                                 <a href="demo25-product.html">
                                                                      {
                                                                           data?.firstProduct
                                                                                ?.display_name
                                                                      }
                                                                 </a>
                                                            </h3>
                                                            <div className="price-box">
                                                                 <span className="product-price">
                                                                      $
                                                                      {
                                                                           data?.firstProduct
                                                                                ?.standard_price
                                                                      }
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             )}{" "}
                                        </div>
                                   ))}
                              </div>

                              <div className="theBanner25">
                                   {bannerData.slice(3, 6).map((data) => (
                                        <div className="home-slide">
                                             <a href="demo25-shop.html">
                                                  <Image
                                                       src={
                                                            templateImages.demo25.sliderImage.slide1
                                                       }
                                                       alt="slider"
                                                       width="545"
                                                       height="398"
                                                  />
                                                  <div className="home-slide-content text-center">
                                                       <h3 className="ls-n-10 text-white mb-0">
                                                            {data.name}
                                                       </h3>
                                                       <span className="product-count d-block font2 ls-10 text-uppercase">
                                                            {data.productsCount} Products
                                                       </span>
                                                       <span className="btn text-white">
                                                            View All Products{" "}
                                                            <i className="fas fa-long-arrow-alt-right"></i>
                                                       </span>
                                                  </div>
                                             </a>
                                             {data.firstProduct && (
                                                  <div className="product-default">
                                                       <figure>
                                                            <Image
                                                                 src={data?.firstProduct?.imageUrl}
                                                                 alt="product"
                                                                 width="250"
                                                                 height="375"
                                                            />
                                                       </figure>
                                                       <div className="product-details">
                                                            <h3 className="product-title">
                                                                 <a href="demo25-product.html">
                                                                      {
                                                                           data?.firstProduct
                                                                                ?.display_name
                                                                      }
                                                                 </a>
                                                            </h3>
                                                            <div className="price-box">
                                                                 <span className="product-price">
                                                                      $
                                                                      {
                                                                           data?.firstProduct
                                                                                ?.standard_price
                                                                      }
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             )}{" "}
                                        </div>
                                   ))}
                              </div>
                         </Slider>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
