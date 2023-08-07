import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../../assets/images/demoes/demo3/slider/slide1.jpg";
import slide2 from "../../../../assets/images/demoes/demo3/slider/slide2.jpg";
import Image from "next/image";
import Slider from "react-slick";

const Banner = () => {
     let settings = {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
     };
     // const slides = [
     //      {
     //           imageUrl: slide1,
     //           title: "Winter Fashion Trends",
     //           promoText: "Get up to 30% off",

     //      }
     // ]
     return (
          <Slider {...settings}>
               <div className="home-slide home-slide1 banner d-flex align-items-center">
                    <Image
                         className="slide-bg"
                         src={slide1}
                         style={{ backgroundColor: "#ecc" }}
                         alt="home banner"
                    />
                    <div className="banner-layer " data-animation-name="fadeInUpShorter">
                         <h2>Winter Fashion Trends</h2>
                         <h3 className="text-uppercase mb-0">Get up to 30% off</h3>
                         <h4 className="m-b-4">on Jackets</h4>
                         <h5 className="text-uppercase">
                              Starting at
                              <span className="coupon-sale-text">
                                   <sup>$</sup>199<sup>99</sup>
                              </span>
                         </h5>
                         <a href="demo3-shop.html" className="btn btn-dark btn-xl" role="button">
                              Shop Now
                         </a>
                    </div>
                    {/* End .banner-layer */}
               </div>
               {/* End .home-slide */}
               <div className="home-slide home-slide2 banner d-flex align-items-center">
                    <Image
                         className="slide-bg"
                         src={slide2}
                         style={{ backgroundColor: "#bfcec9" }}
                         alt="home banner"
                    />
                    <div className="banner-layer " data-animation-name="fadeInUpShorter">
                         <h2>New Season Hats </h2>
                         <h3 className="text-uppercase rotated-upto-text mb-0">
                              <small>Up to</small>20% off
                         </h3>
                         <hr className="short-thick-divider mb-sm-0 mb-1" />
                         <h5 className="text-uppercase d-inline-block mb-2 mb-sm-0">
                              Starting at{" "}
                              <span>
                                   $<em>19</em>99
                              </span>
                         </h5>
                         <a
                              href="demo3-shop.html"
                              className="btn btn-dark btn-xl btn-icon-right"
                              role="button"
                         >
                              Shop Now <i className="fas fa-long-arrow-alt-right" />
                         </a>
                    </div>
                    {/* End .banner-layer */}
               </div>
               {/* End .home-slide */}
          </Slider>
     );
};
export default Banner;
