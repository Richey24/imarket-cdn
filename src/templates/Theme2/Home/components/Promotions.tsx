import Image from "next/image";
import banner1 from "../../../../assets/images/demoes/demo2/banners/banner-1.jpg";
import banner2 from "../../../../assets/images/demoes/demo2/banners/banner-2.jpg";
import banner4 from "../../../../assets/images/demoes/demo2/banners/banner-4.jpg";
import banner5 from "../../../../assets/images/demoes/demo2/banners/banner-5.jpg";
import banner7 from "../../../../assets/images/demoes/demo2/banners/banner-7.jpg";
import banner8 from "../../../../assets/images/demoes/demo2/banners/banner-8.jpg";
import banner3 from "../../../../assets/images/demoes/demo2/banners/banner-3.jpg";
import banner9 from "../../../../assets/images/demoes/demo2/banners/banner-9.jpg";
import banner6 from "../../../../assets/images/demoes/demo2/banners/banner-6.jpg";
const Promotions = () => {
     return (
          <>
               <div
                    className="banners-grid text-uppercase grid"
                    data-grid-options="{
                      'sortReorder': true
                  }"
               >
                    {/* End .banner */}

                    {/* End .banner */}

                    {/* End .banner */}

                    {/* End .banner */}

                    {/* End .banner */}

                    {/* End .banner */}

                    {/* End .banner */}

                    {/* End .banner */}

                    {/* End .banner */}
                    <div className="grid-col-sizer w-25" />
               </div>
               <div className="row gy-3">
                    <div className="col-lg-3 ">
                         <div
                              className="banner banner1 grid-item banner-md-vw w-25 w-md-100 text-transform-none w-xxs-100 w-100 w-100"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={100}
                              data-animation-duration={1000}
                              data-md-order={1}
                         >
                              <figure>
                                   <Image
                                        src={banner1}
                                        style={{ backgroundColor: "#ccc" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-middle text-right">
                                   <h4 className="banner-layer-circle-item ml-auto mb-2 ls-0">
                                        40
                                        <sup>
                                             %<small className="ls-0">OFF</small>
                                        </sup>
                                   </h4>
                                   <h5 className="m-b-3 ls-0">
                                        <del className="d-block m-b-2">$450</del>$270
                                   </h5>
                                   <h4 className="m-b-1 ls-n-0">Watches</h4>
                                   <h3 className="mb-0 ls-0">Mega Sale</h3>
                              </div>
                         </div>
                         <div
                              className="banner banner2 grid-item banner-md-vw w-25 w-md-100 w-xxs-100 w-100 my-3 "
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={500}
                              data-animation-duration={1000}
                              data-md-order={2}
                         >
                              <figure>
                                   <Image
                                        src={banner2}
                                        style={{ backgroundColor: "#dce1e7" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-top text-right">
                                   <h3 className="ls-0">Trending</h3>
                                   <h2 className="m-b-3 ls-10 text-transform-none">Hot Sales</h2>
                                   <h4 className="m-b-3 text-secondary ls-0">Starting at $99</h4>
                                   <a href="demo2-shop.html" className="btn btn-dark ls-10">
                                        Buy Now!
                                   </a>
                              </div>
                         </div>
                         <div
                              className="banner banner3 grid-item banner-md-vw w-25 w-md-100 w-xxs-100 w-100 "
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={800}
                              data-animation-duration={1000}
                              data-md-order={9}
                         >
                              <figure>
                                   <Image
                                        src={banner3}
                                        style={{ backgroundColor: "#ccc" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-top text-center">
                                   <h2 className="m-b-1">Top Brands</h2>
                                   <h3 className="mb-1 pb-1">Smartphones</h3>
                                   <h4 className="text-body">* limited time only</h4>
                              </div>
                              <div className="banner-layer banner-layer-bottom text-center">
                                   <a href="demo2-shop.html" className="btn btn-secondary">
                                        Buy Now!
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-6">
                         <div
                              className="banner banner7 grid-item banner-md-vw w-50 w-md-100 order-lg-0 w-xxs-100 w-100 "
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                              data-animation-duration={1000}
                              data-md-order={3}
                         >
                              <figure>
                                   <Image
                                        src={banner7}
                                        style={{ backgroundColor: "#444" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                   <h3 className="m-b-3 text-white text-right ls-0">
                                        Electronic
                                        <br />
                                        Deals
                                   </h3>
                                   <div className="coupon-sale-content">
                                        <h4 className="mb-1 coupon-sale-text bg-white d-block ls-n-10 text-transform-none">
                                             Exclusive COUPON
                                        </h4>
                                        <h5 className="coupon-sale-text text-white ls-n-10 p-0">
                                             <i className="ls-0">UP TO</i>
                                             <b className="text-dark">$100</b> OFF
                                        </h5>
                                        <a
                                             href="demo2-shop.html"
                                             className="btn btn-block btn-dark btn-black"
                                        >
                                             Get Yours!
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="banner banner8 grid-item banner-md-vw w-50 w-md-100 w-xxs-100 w-100 my-3"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={600}
                              data-animation-duration={1000}
                              data-md-order={4}
                         >
                              <figure>
                                   <Image
                                        src={banner8}
                                        style={{ backgroundColor: "#bd9c88" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-middle">
                                   <h3 className="m-b-2 text-transform-none">Exclusive Shoes</h3>
                                   <h4 className="m-b-3">50% Off</h4>
                                   <a href="demo2-shop.html" className="btn btn-dark ls-10">
                                        Get Yours!
                                   </a>
                              </div>
                         </div>
                         <div
                              className="banner banner9 grid-item banner-md-vw text-center w-50 w-md-100 w-xxs-100 w-100 w-100"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={700}
                              data-animation-duration={1000}
                              data-md-order={5}
                         >
                              <figure>
                                   <Image
                                        src={banner9}
                                        style={{ backgroundColor: "#fff" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-middle banner-layer-left">
                                   <h4 className="m-b-3 text-body">Check our discounts</h4>
                                   <h3 className="text-nowrap">
                                        More than
                                        <span className="d-block mt-1 m-b-3">20 brands</span>
                                   </h3>
                                   <hr className="mt-0 mb-2" />
                                   <h5 className="coupon-sale-text ls-n-10 p-0 mb-0">
                                        <i className="ls-0">UP TO</i>
                                        <b className="ls-n-0">$100</b> OFF
                                   </h5>
                              </div>
                              <div className="banner-layer banner-layer-middle banner-layer-right text-center">
                                   <a href="#" className="btn btn-dark">
                                        Check this sale!
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-3">
                         <div
                              className="banner banner4 grid-item banner-md-vw w-25 w-md-100 w-xxs-100 w-100 "
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={300}
                              data-animation-duration={1000}
                              data-md-order={7}
                         >
                              <figure>
                                   <Image
                                        src={banner4}
                                        style={{ backgroundColor: "#444" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-middle text-right">
                                   <h2 className="m-b-2 text-secondary ls-n-20">Flash Sale</h2>
                                   <h3 className="m-b-1 ls-n-20">
                                        Top Brands
                                        <br />
                                        Summer Sunglasses
                                   </h3>
                                   <h4 className="text-white ls-n-20">
                                        Starting
                                        <br />
                                        AT <sup>$</sup>199<sup>99</sup>
                                   </h4>
                                   <a href="demo2-shop.html" className="btn btn-light ls-10">
                                        View Sale
                                   </a>
                              </div>
                         </div>
                         <div
                              className="banner banner5 grid-item banner-md-vw text-center w-25 w-md-100 w-xxs-100 w-100 w-100 my-3"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={400}
                              data-animation-duration={1000}
                              data-md-order={8}
                         >
                              <figure>
                                   <Image
                                        src={banner5}
                                        style={{ backgroundColor: "#ccc" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-top">
                                   <h4 className="heading-border">Amazing</h4>
                                   <h3 className="ls-0 mb-1">Collection</h3>
                                   <hr className="mb-1 mt-1" />
                                   <h5 className="pt-1">Check our discounts</h5>
                              </div>
                              <div className="banner-layer banner-layer-bottom">
                                   <a href="demo2-shop.html" className="btn btn-dark">
                                        Shop Now!
                                   </a>
                              </div>
                         </div>

                         <div
                              className="banner banner6 grid-item banner-md-vw w-25 w-md-100 w-xxs-100 w-100 "
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={900}
                              data-animation-duration={1000}
                              data-md-order={6}
                         >
                              <figure>
                                   <Image
                                        src={banner6}
                                        style={{ backgroundColor: "#ccc" }}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-middle text-center">
                                   <h3 className="m-b-1 ls-0">Deal Promos</h3>
                                   <h4 className="m-b-3 ls-0 text-body">Starting at $99</h4>
                                   <a href="demo2-shop.html" className="btn btn-dark ls-10">
                                        Buy Now!
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};
export default Promotions;
