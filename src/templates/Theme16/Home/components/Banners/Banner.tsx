import { templateImages } from "@/appProvider/templateImages";
import Carousel from "react-bootstrap/Carousel";

export const Banner = () => {
     return (
          <section
               className="section-1 large-banner section-bg bg-img bg-fixed  slide-animate"
               style={{
                    backgroundImage: 'url("assets/images/demoes/demo16/bg-1.jpg")',
                    backgroundColor: "#dcdbd6",
               }}
          >
               <div className="container position-relative">
                    <div className="banner-layer banner-layer-middle float-right ml-auto text-right">
                         <h2
                              className="m-b-2 appear-animate"
                              data-animation-delay={700}
                              data-animation-name="splitRight"
                         >
                              New Season Shirts
                         </h2>
                         <h3
                              className="text-uppercase rotated-upto-text mb-0 position-relative appear-animate"
                              data-animation-name="blurIn"
                              data-animation-duration={1200}
                         >
                              <small>Up to</small>50% Off
                         </h3>
                         <hr className="divider-short-thick" />
                         <h5
                              className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2 appear-animate"
                              data-animation-delay={1900}
                              data-animation-duration={1200}
                         >
                              Starting at
                              <span>
                                   $<strong>39</strong>99
                              </span>
                         </h5>
                         <a
                              href="demo16-shop.html"
                              className="btn btn-dark btn-xl btn-icon-right appear-animate"
                              data-animation-delay={1900}
                              data-animation-duration={1200}
                              data-animation-name="fadeInUp"
                              role="button"
                         >
                              Shop Now
                              <i className="fas fa-long-arrow-alt-right" />
                         </a>
                    </div>
                    {/* End .section-content */}
               </div>
               {/* End .container */}
          </section>
     );
};
