import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import Slider from "react-slick";

const Banner = ({ banners }) => {
     const settings = {
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     return (
          <section className="section-1">
               <h2 className="d-none">Home Slider</h2>

               <div className="home-slider slide-animate show-nav-hover">
                    <Slider {...settings}>
                         {banners.map((banner, index) => (
                              <div className="banner text-right" key={index}>
                                   <Image
                                        src={banner.imageUrl}
                                        width="1620"
                                        height="980"
                                        style={{ backgroundColor: "#eee" }}
                                        alt="slider-two"
                                   />

                                   <div className="banner-layer banner-layer-middle content-right">
                                        <h6
                                             className=" "
                                             data-animation-name="fadeInLeftShorter"
                                             data-animation-delay="200"
                                        >
                                             {banner.title}
                                        </h6>
                                        <Image
                                             src={templateImages.demo10.bannerImage.banner4}
                                             className="w-auto ml-auto "
                                             width="503"
                                             height="113"
                                             alt="banner-text"
                                        />
                                        <h3
                                             className=" "
                                             data-animation-name="fadeInLeftShorter"
                                             data-animation-delay="700"
                                        >
                                             {banner.text}
                                        </h3>
                                        <a
                                             href="demo10-shop.html"
                                             className="btn btn-xl "
                                             data-animation-name="fadeInLeftShorter"
                                             data-animation-delay="950"
                                             role="button"
                                        >
                                             Shop Now<i className="fas fa-chevron-right"></i>
                                        </a>
                                   </div>
                              </div>
                         ))}
                    </Slider>
               </div>
          </section>
     );
};

export default Banner;
