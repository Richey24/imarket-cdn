import React from "react";

export const Banner3 = () => {
     return (
          <section
               className="section-8 large-banner slider-left section-bg bg-img bg-fixed"
               style={{
                    backgroundImage: 'url("assets/images/demoes/demo16/bg-7.jpg")',
                    backgroundColor: "#dcdbd9",
               }}
          >
               <div className="container position-relative">
                    <div className="banner-layer banner-layer-middle float-right ml-auto text-left">
                         <h2 className="m-b-2 text-dark">New Season Sunglasses</h2>
                         <h3 className="text-uppercase rotated-upto-text mb-0 position-relative text-dark">
                              <small>Up to</small>50% Off
                         </h3>
                         <hr className="divider-short-thick border-dark" />
                         <h5 className="text-uppercase d-inline-block mb-0 ls-n-20 pr-1 pt-2 text-dark">
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
