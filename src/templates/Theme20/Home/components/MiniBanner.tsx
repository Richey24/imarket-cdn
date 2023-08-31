import Image from "next/image";
import { offerAndDeals } from "../data";

export const MiniBanner = () => {
     return (
          <section className="newsletter-section">
               <div className="container">
                    <h2
                         className="section-title ls-n-10 text-center text-uppercase m-b-4"
                         style={{ fontWeight: "bold" }}
                    >
                         Offers and Deals
                    </h2>
                    <div className="row">
                         {offerAndDeals.map((data) => (
                              <div className={`col-md-${data.MdSize} mb-2`}>
                                   <div
                                        className={`banner ${data.bannerStyles} h-100 appear-animate`}
                                        data-animation-name="fadeIn"
                                        data-animation-delay={300}
                                        style={{ backgroundColor: "#eee" }}
                                   >
                                        <figure>
                                             <Image
                                                  src={data.Img}
                                                  alt="banner"
                                                  width={530}
                                                  height={249}
                                             />
                                        </figure>
                                        <div className={data.contentStyles}>
                                             {data.h6 ? (
                                                  <h6 className="heading-border text-dark text-uppercase m-b-2">
                                                       Amazing
                                                  </h6>
                                             ) : null}
                                             <h3 className={data.h3Styles}>{data.h3}</h3>
                                             <h4 className="text-uppercase mb-4">{data.h4}</h4>
                                             {data.h5 ? (
                                                  <h5 className="text-uppercase">
                                                       Check our discounts
                                                  </h5>
                                             ) : null}
                                             {data.p ? (
                                                  <p className="font2 text-body m-b-4">
                                                       Get all the latest information on events,
                                                       sales and offers.
                                                  </p>
                                             ) : null}
                                             {data.atag ? (
                                                  <a href={data.atag} className="btn">
                                                       Shop Now
                                                  </a>
                                             ) : null}
                                             {data.p && (
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
                                             )}
                                        </div>
                                        ,
                                        {data.Img2 ? (
                                             <div className="banner-layer banner-layer-right">
                                                  <Image
                                                       src={data.Img2}
                                                       alt="brand"
                                                       width={105}
                                                       height={45}
                                                  />
                                             </div>
                                        ) : null}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};
