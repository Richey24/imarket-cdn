import { templateImages } from "@/appProvider/templateImages";
import Carousel from "react-bootstrap/Carousel";

export const Banner2 = () => {
     return (
          <section
               className="section-2 large-banner slider-left section-bg bg-img bg-fixed"
               style={{
                    backgroundImage: `url(${templateImages.demo16.bgImages.bg1})`,
                    backgroundColor: "#0188ca",
               }}
          >
               <div className="container position-relative">
                    <div className="banner-layer banner-layer-middle float-right ml-auto text-left">
                         <h2 className="m-b-2 text-white">Summer Fashion Hats</h2>
                         <h3 className="text-uppercase rotated-upto-text mb-0 position-relative text-white">
                              <small>Up to</small>50% Off
                         </h3>
                         <hr className="divider-short-thick border-white" />
                         <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2 text-white">
                              Starting at
                              <span>
                                   $<strong>39</strong>99
                              </span>
                         </h5>
                         <a
                              href="demo16-shop.html"
                              className="btn btn-light btn-xl btn-icon-right"
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
