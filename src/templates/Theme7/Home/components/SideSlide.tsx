import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import banner7 from "../../../../assets/images/demoes/demo1/banners/banner-7.jpg";
const SideSlide = () => {
     return (
          <Carousel className="border">
               <Carousel.Item className="">
                    <div
                         className="banner d-flex flex-column align-items-center justify-content-between pb-5 px-4"
                         style={{ height: "400px" }}
                    >
                         <h3 className="badge-sale bg-primary d-flex flex-column align-items-center justify-content-center text-uppercase">
                              <em>Sale</em>Many Item
                         </h3>
                         <h4 className="text-uppercase display-3 fw-bold">
                              <small>UP TO</small> <br />
                              <div className="d-flex">
                                   <span>50</span>
                                   <span className="d-flex flex-column">
                                        <span>%</span>
                                        <span>off</span>
                                   </span>
                              </div>
                         </h4>
                         <p className="fs-4 text-center">
                              Bags, Clothing, T-Shirts, Shoes, Watches and much more...
                         </p>
                         <a href="demo1-shop.html" className="btn btn-dark btn-md">
                              View Sale
                         </a>
                    </div>
               </Carousel.Item>
               <Carousel.Item>
                    <div
                         className="banner d-flex flex-column align-items-center justify-content-between pb-5 px-4 text-center"
                         style={{ height: "400px" }}
                    >
                         <figure>
                              <Image src={banner7} alt="banner" width={400} height={700} />
                         </figure>

                         <h4 className="text-uppercase display-3 fw-bold">DRONE + CAMERAS</h4>
                         <h5 className="coupon-sale-text text-gray ls-n-10 p-0 font1">
                              <i>UP TO</i>
                              <b className="text-white bg-dark font1">$100</b> OFF
                         </h5>
                         <p className="ls-0">Top Brands and Models!</p>
                         <a
                              href="demo1-shop.html"
                              className="btn btn-inline-block btn-dark btn-black ls-0"
                         >
                              VIEW SALE
                         </a>
                    </div>
               </Carousel.Item>
          </Carousel>
     );
};

export default SideSlide;
