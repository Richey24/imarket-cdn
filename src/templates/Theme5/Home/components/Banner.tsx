import { InfoBoxesContainer } from "@/templates/shared/Info";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const Banner = ({ slides }) => {
     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc: slide?.imageUrl !== "" ? slide?.imageUrl : slide1,
          title: "Find the Boundaries. Push Through!",
          saleTitle: "Summer Sale",
          discount: "80% Off",
          price: "$199.99",
          link: "demo13-shop.html",
     }));

     const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
     };

     return (
          <div style={{ height: "650px", overflow: "hidden" }}>
               <InfoBoxesContainer bg="bg-transparent" />

               <Slider {...settings}>
                    {mappedSlides.map((slide, next) => {
                         return (
                              <div className="home-slide banner banner-md-vw">
                                   <Image
                                        width={200}
                                        height={200}
                                        className="slide-bg"
                                        src={slide.imageSrc}
                                        style={{ width: "100%", margin: "0 auto" }}
                                        alt="slider image"
                                   />
                                   <div
                                        style={{ marginLeft: "100px" }}
                                        className="banner-layer banner-layer-middle"
                                   >
                                        <h2
                                             style={{ fontSize: "70px" }}
                                             className="font-script mb-0"
                                        >
                                             {slide.title}
                                        </h2>
                                        <h3
                                             style={{
                                                  fontSize: "80px",
                                                  display: "flex",
                                                  columnGap: "10px",
                                             }}
                                             className="upto-text"
                                        >
                                             <em
                                                  style={{
                                                       fontSize: "40px",
                                                       display: "flex",
                                                       flexDirection: "column",
                                                  }}
                                             >
                                                  up <span>to</span>
                                             </em>
                                             {slide.discount} OFF
                                        </h3>
                                        <h5 className="d-inline-block mb-0 text-uppercase ls-n-20">
                                             Starting At
                                             <b
                                                  style={{
                                                       backgroundColor: "#FF7272",
                                                       marginLeft: "15px",
                                                       marginRight: "15px",
                                                  }}
                                                  className="coupon-sale-text text-white"
                                             >
                                                  $<em> {slide.price}</em>99
                                             </b>
                                        </h5>
                                        <Link
                                             href={slide.link}
                                             className="btn btn-dark btn-lg ls-10"
                                        >
                                             Shop Now!
                                        </Link>
                                   </div>
                              </div>
                         );
                    })}
               </Slider>
          </div>
     );
};
export default Banner;
