import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../../assets/images/demoes/demo1/slider/slide-1.png";
import Image from "next/image";

const Banner = ({ slides }) => {
     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc: slide?.imageUrl !== "" ? slide?.imageUrl : slide1,
          title: "Find the Boundaries. Push Through!",
          saleTitle: "Summer Sale",
          discount: "70% Off",
          price: "$199.99",
          link: "demo13-shop.html",
     }));

     return (
          <Carousel>
               {mappedSlides.map((slide, next) => {
                    return (
                         <Carousel.Item>
                              <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                                   <Image
                                        src={slide.imageSrc}
                                        alt=""
                                        width="880"
                                        height="428"
                                        className="img-fluid"
                                   />
                                   <Carousel.Caption className="h-100">
                                        <div className="w-100 d-flex flex-column justify-content-center align-items-start h-100 text-uppercase">
                                             <h4 className="text-white mb-0">{slide.title}</h4>
                                             <h3 className="text-white text-uppercase m-b-3">
                                                  {slide.discount}
                                             </h3>
                                             <h5 className="text-white text-uppercase d-inline-block mb-0 ls-n-20 align-text-bottom">
                                                  Starting At{" "}
                                                  <b className="coupon-sale-text bg-secondary text-white d-inline-block">
                                                       ${" "}
                                                       <em className="align-text-top">
                                                            {slide.price}
                                                       </em>
                                                       99
                                                  </b>
                                                  <a
                                                       href="demo1-shop.html"
                                                       className="btn btn-dark btn-md ls-10"
                                                  >
                                                       Shop Now!
                                                  </a>
                                             </h5>
                                        </div>
                                   </Carousel.Caption>
                              </div>
                         </Carousel.Item>
                    );
               })}
          </Carousel>
     );
};
export default Banner;
