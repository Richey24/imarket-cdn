import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";

const Card = () => {
     return (
          <div>
               <section className="section-3 category-banner-section container">
                    <div style={{ display: "flex", columnGap: "20px" }}>
                         <div
                              style={{ width: "33%" }}
                              className="cat-banner bg-dark"
                              data-animation-name="fadeInRightShorter"
                         >
                              <figure>
                                   <Image
                                        src={templateImages.demo17.brandImage.brand1}
                                        alt="brand"
                                        width="140"
                                        height="60"
                                        className="w-auto"
                                   />
                              </figure>

                              <div className="cat-content d-inline-block position-relative">
                                   <h3 className="text-uppercase rotated-upto-text mb-0">
                                        <small className="m-0">Up to</small>50% Off
                                   </h3>

                                   <hr className="divider-short-thick" />

                                   <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2">
                                        Starting at
                                        <span>
                                             $<strong>3</strong>99
                                        </span>
                                   </h5>
                                   <a
                                        href="demo17-shop.html"
                                        className="btn btn-xl btn-icon-right"
                                        role="button"
                                   >
                                        Shop Now
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                   </a>
                              </div>
                         </div>

                         <div
                              style={{ width: "33%" }}
                              className="cat-banner bg-dark"
                              data-animation-name="fadeInRightShorter"
                         >
                              <figure>
                                   <Image
                                        src={templateImages.demo17.brandImage.brand2}
                                        alt="brand"
                                        width="140"
                                        height="60"
                                        className="w-auto"
                                   />
                              </figure>

                              <div className="cat-content d-inline-block position-relative">
                                   <h3 className="text-uppercase rotated-upto-text mb-0">
                                        <small>Up to</small>60% Off
                                   </h3>

                                   <hr className="divider-short-thick" />

                                   <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2">
                                        Starting at
                                        <span>
                                             $<strong>4</strong>99
                                        </span>
                                   </h5>
                                   <a
                                        href="demo17-shop.html"
                                        className="btn text-dark btn-xl btn-icon-right"
                                        role="button"
                                   >
                                        Shop Now
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                   </a>
                              </div>
                         </div>

                         <div
                              style={{ width: "33%" }}
                              className="cat-banner bg-dark"
                              data-animation-name="fadeInRightShorter"
                         >
                              <figure>
                                   <Image
                                        src={templateImages.demo17.brandImage.brand3}
                                        alt="brand"
                                        width="140"
                                        height="60"
                                        className="w-auto"
                                   />
                              </figure>

                              <div className="cat-content d-inline-block position-relative">
                                   <h3 className="text-uppercase rotated-upto-text mb-0">
                                        <small>Up to</small>70% Off
                                   </h3>

                                   <hr className="divider-short-thick" />

                                   <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2">
                                        Starting at
                                        <span>
                                             $<strong>5</strong>99
                                        </span>
                                   </h5>
                                   <a
                                        href="demo17-shop.html"
                                        className="btn text-dark btn-xl btn-icon-right"
                                        role="button"
                                   >
                                        Shop Now
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                   </a>
                              </div>
                         </div>
                    </div>

                    <div className="newsletter-section bg-dark mt-4 mb-4">
                         <div className="d-flex flex-wrap align-items-center align-items-lg-start">
                              <div className="col-md-6 d-block d-sm-flex text-center text-sm-left news-info justify-content-center justify-content-md-start align-items-start align-items-md-center">
                                   <i className="far fa-envelope text-white"></i>

                                   <div className="newsletter-content">
                                        <h3 className="ls-n-10 mb-0 text-white">
                                             Get Special Offers and Savings
                                        </h3>
                                        <p className="font-weight-normal">
                                             Get all the latest information on Events, Sales and
                                             Offers.
                                        </p>
                                   </div>
                              </div>

                              <div className="col-md-6 widget-newsletter px-3">
                                   <form
                                        action="#"
                                        className="d-flex justify-content-center mb-0 ml-auto mr-auto mb-md-0"
                                   >
                                        <input
                                             type="email"
                                             className="form-control mb-0 border-0"
                                             placeholder="Email Your E-mail Address..."
                                             required
                                        />
                                        <button className="btn text-dark ls-n-25">SIGN UP</button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Card;
