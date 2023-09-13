import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";

const BannersSection = () => {
     return (
          <div className="banners-section mb-4">
               <div className="row row-sm">
                    <div className="col-md-4">
                         <div
                              className="banner banner1 "
                              data-animation-name="fadeIn"
                              data-animation-delay={200}
                              style={{ backgroundColor: "#696f6f" }}
                         >
                              <figure>
                                   <Image
                                        src={templateImages.demo27.bannerImage.banner2}
                                        alt="banner"
                                        width={640}
                                        height={640}
                                   />
                              </figure>
                         </div>
                    </div>
                    <div className="col-md-8">
                         <div
                              className="banner banner2 h-100"
                              style={{
                                   background: `#101010 no-repeat center/cover url(${templateImages.demo27.bannerImage.banner3})`,
                              }}
                         >
                              <h4
                                   className="text-light text-uppercase mb-0 "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay={100}
                              >
                                   Get Ready
                              </h4>
                              <h2
                                   className="d-inline-block align-middle text-uppercase m-b-3 "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay={300}
                              >
                                   20% off
                              </h2>
                              <a
                                   href="demo27-shop.html"
                                   className="btn btn-dark btn-lg align-middle m-b-3  d-none d-sm-inline-block"
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay={300}
                              >
                                   Shop All Sale
                              </a>
                              <h3
                                   className="heading-border "
                                   data-animation-name="fadeInUpShorter"
                                   data-animation-delay={500}
                              >
                                   BIKES
                              </h3>
                         </div>
                    </div>
               </div>
          </div>
     );
};
export default BannersSection;
