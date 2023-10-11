import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";

const Banner = ({ slides }) => {
     const mappedSlides = slides.map((slide: any) => ({
          background: "#555",
          imageSrc:
               slide?.imageUrl !== "" ? slide?.imageUrl : templateImages.demo21.sliderImage.slide1,
          title: "wooden Black chair",
          saleTitle: "go coupon",
          discount: "$100",
          price: 99,
          oldPrice: 59,
          link: "demo29-shop.html",
     }));
     return (
          <div className="container">
               <section>
                    <div className="row grid">
                         <div className="grid-item col-lg-5 height-x1">
                              <div className="home-banner">
                                   <figure>
                                        <Image
                                             src={templateImages.demo29.bannerImage.banner6}
                                             width="674"
                                             height="316"
                                             alt="banner"
                                        />
                                   </figure>
                                   <div className="banner-content content-right">
                                        <h3 className="ls-10">
                                             <strong>
                                                  black
                                                  <br />
                                             </strong>
                                             Armchairs
                                        </h3>
                                        <p className="font2">starting from $399</p>
                                        <a href="demo29-shop.html" className="btn">
                                             shop now{" "}
                                             <i className="fas fa-long-arrow-alt-right"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="grid-item col-lg-7 height-x2">
                              <Carousel>
                                   {mappedSlides.map((slide, index) => (
                                        <Carousel.Item key={index}>
                                             <div className="home-banner">
                                                  <figure className="bg-gray">
                                                       <Image
                                                            src={slide.imageSrc}
                                                            width="951"
                                                            height="651"
                                                            alt="banner"
                                                       />
                                                  </figure>
                                                  <div className="banner-content content-left">
                                                       <h3>{slide.title}</h3>
                                                       <div className="banner-info">
                                                            <a href="#" className="btn skew-box">
                                                                 {slide.saleTitle}
                                                            </a>
                                                            <h3 className="sale-off skew-box">
                                                                 <span>{slide.discount}</span>off
                                                            </h3>
                                                            <p className="font2">
                                                                 starting from ${slide.price}
                                                            </p>
                                                            <a href={slide.link} className="btn">
                                                                 shop now{" "}
                                                                 <i className="fas fa-long-arrow-alt-right"></i>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Carousel.Item>
                                   ))}
                              </Carousel>
                         </div>
                         <div id="banGrid" className="row grid" style={{ width: "100%" }}>
                              <div className="grid-item col-6 col-lg-2 height-x1">
                                   <div className="home-banner">
                                        <figure className="bg-dark">
                                             <Image
                                                  src={templateImages.demo29.bannerImage.banner8}
                                                  width="257"
                                                  height="315"
                                                  alt="banner"
                                             />
                                        </figure>
                                        <div className="banner-content content-top">
                                             <span className="font2">check new arrivals</span>
                                             <h4>
                                                  <strong>cool lamps</strong>
                                             </h4>
                                        </div>
                                   </div>
                              </div>
                              <div className="grid-item col-6 col-lg-3 height-x1">
                                   <div className="home-banner">
                                        <figure className="bg-primary">
                                             <Image
                                                  src={templateImages.demo29.bannerImage.banner9}
                                                  width="396"
                                                  height="315"
                                                  alt="banner"
                                             />
                                        </figure>
                                        <div className="banner-content content-bottom">
                                             <span className="font2">exclusive new collection</span>
                                             <h4>
                                                  <strong>luxurious jacuzzi</strong>
                                             </h4>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="col-1 pr-0 pl-0 grid-col-sizer"></div>
                    </div>
               </section>

               <section className="info-box-container mb-0">
                    <div className="row">
                         <div className="col-sm-6 col-xl-3 mb-2 mb-xl-0">
                              <div className="info-box info-box-icon-left justify-content-sm-center justify-content-start p-0">
                                   <i className="icon-shipping line-height-1"></i>

                                   <div className="info-box-content">
                                        <h4 className="ls-25 line-height-1">
                                             FREE SHIPPING &amp; RETURN
                                        </h4>
                                        <p className="text-body">
                                             Free shipping on all orders over $99.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3 mb-2 mb-xl-0">
                              <div className="info-box info-box-icon-left justify-content-sm-center justify-content-start p-0">
                                   <i className="icon-money line-height-1"></i>

                                   <div className="info-box-content">
                                        <h4 className="ls-25 line-height-1">
                                             MONEY BACK GUARANTEE
                                        </h4>
                                        <p className="text-body">100% money back guarantee.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3 mb-2 mb-xl-0">
                              <div className="info-box info-box-icon-left justify-content-sm-center justify-content-start p-0">
                                   <i className="icon-support line-height-1"></i>

                                   <div className="info-box-content">
                                        <h4 className="ls-25 line-height-1">ONLINE SUPPORT 24/7</h4>
                                        <p className="text-body">Lorem ipsum dolor sit amet.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3 mb-2 mb-xl-0">
                              <div className="info-box info-box-icon-left justify-content-sm-center justify-content-start p-0">
                                   <i className="icon-secure-payment line-height-1"></i>

                                   <div className="info-box-content">
                                        <h4 className="ls-25 line-height-1">SECURE PAYMENT</h4>
                                        <p className="text-body">Lorem ipsum dolor sit amet.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <hr className="mt-0" />
          </div>
     );
};

export default Banner;
