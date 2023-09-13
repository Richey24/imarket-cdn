import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { templateImages } from "@/appProvider/templateImages";

const Banner = ({ slides }) => {
     // const mappedSlides = slides.map((slide: any) => ({
     //      background: "#555",
     //      imageSrc: slide?.imageUrl !== "" ? slide?.imageUrl : slide1,
     //      title: "Find the Boundaries. Push Through!",
     //      saleTitle: "Summer Sale",
     //      discount: "70% Off",
     //      price: "$199.99",
     //      link: "demo13-shop.html",
     // }));

     return (
          <div className="home-top-container ">
               <div className="container">
                    <div className="row">
                         <div className="col-lg-6 mb-2">
                              <div className="home-banner banner banner1 banner-md-vw banner-sm-vw d-flex align-items-center">
                                   <figure className="w-100">
                                        <img
                                             src={templateImages.demo7.bannerImage.banner2}
                                             className="tw-bg-[#4a4a4a]"
                                             alt="banner"
                                        />
                                   </figure>
                                   <div className="banner-layer">
                                        <h4 className=" text-white mb-0">Find the Boundaries</h4>
                                        <h2 className="text-white mb-0">Flash Sale</h2>
                                        <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                                        <h5 className="text-white text-uppercase ls-n-20 align-text-bottom">
                                             Starting At{" "}
                                             <b className="coupon-sale-text bg-secondary text-white d-inline-block">
                                                  $<em className="align-text-top">199</em>99
                                             </b>
                                        </h5>
                                        <a
                                             href="demo7-shop.html"
                                             className="btn bg-white btn-md ls-10"
                                        >
                                             Shop Now!
                                        </a>
                                   </div>
                              </div>
                         </div>

                         <div className="col-lg-3 col-sm-6 mb-2">
                              <div className="row h-100">
                                   <div className="col-lg-12 mb-2">
                                        <div className="banner banner2 banner-hover-shadow d-flex align-items-center">
                                             <figure className="w-100">
                                                  <img
                                                       src={
                                                            templateImages.demo7.bannerImage.banner3
                                                       }
                                                       className="tw-bg-[#ccc]"
                                                       alt="banner"
                                                  />
                                             </figure>
                                             <div className="banner-layer">
                                                  <h3 className="m-b-2">Porto Watches</h3>
                                                  <h4 className="m-b-2 text-secondary">
                                                       <sup className="text-dark">
                                                            <del>20%</del>
                                                       </sup>
                                                       30%<sup>OFF</sup>
                                                  </h4>
                                                  <a
                                                       href="demo7-shop.html"
                                                       className="btn btn-dark text-uppercase ls-10"
                                                  >
                                                       Shop Now
                                                  </a>
                                                  <img
                                                       src={
                                                            templateImages.demo7.bannerImage.banner5
                                                       }
                                                       className="tw-bg-[#eee]"
                                                       width="48"
                                                       height="15"
                                                       alt="brand"
                                                  />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="col-lg-12">
                                        <div className="banner banner3 text-uppercase banner-hover-shadow d-flex align-items-center">
                                             <figure className="w-100">
                                                  <img
                                                       src={
                                                            templateImages.demo7.bannerImage.banner6
                                                       }
                                                       alt="banner"
                                                  />
                                             </figure>

                                             <h6 className="banner-label left-label">
                                                  50
                                                  <small>
                                                       <sup>%</sup>
                                                       <sub>OFF</sub>
                                                  </small>
                                             </h6>
                                             <h6 className="banner-label right-label">
                                                  70
                                                  <small>
                                                       <sup>%</sup>
                                                       <sub>OFF</sub>
                                                  </small>
                                             </h6>
                                             <h6 className="banner-label bottom-label mb-0">
                                                  30
                                                  <small>
                                                       <sup>%</sup>
                                                       <sub>OFF</sub>
                                                  </small>
                                             </h6>

                                             <div className="banner-layer banner-layer-middle text-center">
                                                  <h3 className="m-b-1 ls-10">DEAL PROMOS</h3>
                                                  <h4 className="ls-0 text-body">
                                                       STARTING AT $99
                                                  </h4>
                                                  <a
                                                       href="demo7-shop.html"
                                                       className="btn btn-dark btn-black ls-10"
                                                  >
                                                       SHOP NOW
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="col-lg-3 col-sm-6 mb-2">
                              <div className="banner banner4 text-uppercase banner-hover-shadow d-flex align-items-center">
                                   <figure className="w-100">
                                        <img
                                             src={templateImages.demo7.bannerImage.banner7}
                                             className="tw-bg-[#555]"
                                             alt="banner"
                                        />
                                   </figure>

                                   <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                        <div className="coupon-sale-content">
                                             <h3 className="text-white font1">Leather Jackets</h3>
                                             <h5 className="coupon-sale-text text-white ls-0 p-0">
                                                  <i className="ls-0 font1">UP TO</i>
                                                  <b className="text-white bg-secondary">$100</b>
                                                  <sub>OFF</sub>
                                             </h5>
                                             <a
                                                  href="demo7-shop.html"
                                                  className="btn bg-white btn-lg ls-10 d-block d-lg-inline-block  text-dark"
                                             >
                                                  Get Yours!
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
