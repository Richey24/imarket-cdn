import Image from "next/image";
import banner3 from "../../../../assets/images/demoes/demo20/banners/banner-3.jpg";
import banner4 from "../../../../assets/images/demoes/demo20/banners/banner-4.jpg";
import banner5 from "../../../../assets/images/demoes/demo20/banners/banner-5.png";
import banner6 from "../../../../assets/images/demoes/demo20/banners/brand1.png";

export const MiniBanner = () => {
     return (
          <section
               className="newsletter-section"
               style={{ paddingRight: "50px", paddingLeft: "50px" }}
          >
               <div className="container">
                    <h2 className="section-title ls-n-10 text-center text-uppercase m-b-4" style={{fontWeight:'bold'}}>
                         Offers and Deals
                    </h2>
                    <div className="row">
                         <div className="col-md-6 mb-2">
                              <div
                                   className="banner banner3 h-100 appear-animate"
                                   data-animation-name="fadeIn"
                                   data-animation-delay={300}
                                   style={{ backgroundColor: "#eee" }}
                              >
                                   <figure>
                                        <Image
                                             src={banner3}
                                             alt="banner"
                                             width={530}
                                             height={249}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle banner-layer-left">
                                        <h3 className="m-b-1">Exclusive Shoes</h3>
                                        <h4 className="text-uppercase mb-4">50% Off</h4>
                                        <a href="demo20-shop.html" className="btn">
                                             Shop Now
                                        </a>
                                   </div>
                                   <div className="banner-layer banner-layer-right">
                                        <Image src={banner6} alt="brand" width={105} height={45} />
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-6 mb-2">
                              <div
                                   className="banner banner4 appear-animate"
                                   data-animation-name="fadeIn"
                                   data-animation-delay={600}
                                   style={{ backgroundColor: "#eee" }}
                              >
                                   <figure>
                                        <Image
                                             src={banner4}
                                             alt="banner"
                                             width={580}
                                             height={301}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle banner-layer-right text-center">
                                        <h6 className="heading-border text-dark text-uppercase m-b-2">
                                             Amazing
                                        </h6>
                                        <h3 className="ls-n-10 text-uppercase m-b-3">Collection</h3>
                                        <h5 className="text-uppercase">Check our discounts</h5>
                                        <a href="demo20-shop.html" className="btn">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-12">
                              <div className="banner banner5" style={{ backgroundColor: "#eee" }}>
                                   <figure>
                                        <Image
                                             src={banner5}
                                             alt="banner"
                                             width={1180}
                                             height={300}
                                        />
                                   </figure>
                                   <div className="banner-layer banner-layer-middle text-center">
                                        <div
                                             className="widget-newsletter appear-animate"
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay={200}
                                        >
                                             <h4 className="mt-0 m-b-1" style={{fontWeight:'bolder'}}>
                                                  Subscribe To Our Newsletter
                                             </h4>
                                             <p className="font2 text-body m-b-4">
                                                  Get all the latest information on events, sales
                                                  and offers.
                                             </p>
                                             <form action="#" className="d-flex mb-0 mx-auto">
                                                  <input
                                                       type="email"
                                                       className="form-control mb-0"
                                                       placeholder="Email address"
                                                  />
                                                  <input
                                                       style={{ background: "#282828" }}
                                                       type="submit"
                                                       className="btn btn-dark"
                                                       defaultValue="Subscribe"
                                                  />
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
