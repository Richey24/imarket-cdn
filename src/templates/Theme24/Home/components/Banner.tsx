import Image from "next/image";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import { templateImages } from "@/appProvider/templateImages";
// import "slick-carousel/slick/slick.css"; // Import react-slick styles
// import "slick-carousel/slick/slick-theme.css"; // Import react-slick theme styles

const Banner = ({ slides }) => {
     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc:
               slide?.imageUrl !== "" ? slide?.imageUrl : templateImages.demo21.sliderImage.slide1,
          title: "– Ecommerce Shop",
          saleTitle: "get yours now",
          discount: "50% off",
          price: 39,
          oldPrice: 59,
          link: "demo13-shop.html",
     }));

     return (
          <div className="intro-section mb-3">
               <Carousel>
                    {mappedSlides.map((slide, index) => (
                         <Carousel.Item>
                              <div>
                                   <div
                                        className="intro-slide intro-slide-1"
                                        style={{
                                             backgroundImage: `url('${slide.imageSrc}')`,
                                             backgroundColor: "#d85c50",
                                        }}
                                   >
                                        <div className="container">
                                             <div className="product-default">
                                                  <figure>
                                                       <Image
                                                            src={slide.imageSrc}
                                                            alt="product"
                                                            width={722}
                                                            height={455}
                                                       />
                                                  </figure>
                                                  <div className="product-details">
                                                       <div className="title-wrap">
                                                            <h4 className="product-title">
                                                                 <a href="demo24-product.html">
                                                                      {slide.title}
                                                                 </a>
                                                            </h4>
                                                       </div>
                                                       <div className="price-box">
                                                            <span className="sale-text">
                                                                 <small>{slide.subTitle}</small>SALE
                                                                 34%
                                                            </span>
                                                            <div className="price-wrapper">
                                                                 <div className="old-price">
                                                                      ${slide.oldPrice}
                                                                 </div>
                                                                 <div className="product-price">
                                                                      ${slide.price}
                                                                 </div>
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
                         </Carousel.Item>
                    ))}
               </Carousel>
          </div>
     );
};
export default Banner;
