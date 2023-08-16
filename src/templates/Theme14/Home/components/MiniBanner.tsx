import React, { useState } from "react";
import Slider from "react-slick";
import { miniBanners } from "../data";
import { Banner } from "./Banner";

export const MiniBanner = () => {
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
     };
     return (
          <div className="banners-section container mt-4" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
               <div className="banners-slider   owl-theme dots-mt-1">
                    <Slider {...settings}>
                         {" "}
                         {miniBanners.map((banner) => (
                              <div className="banner">
                                   <img
                                        src={banner.image}
                                        width={360}
                                        height={280}
                                        alt="category banner"
                                   />
                                   <div className="banner-content bg-dark text-center">
                                        <h5 className="m-b-1">
                                             <a href="demo14-shop.html">{banner.atag}</a>
                                        </h5>
                                        <h4 className="text-white m-b-1">${banner.h4tag}</h4>
                                        <h5 className="text-white mb-0">{banner.h5tag}</h5>
                                   </div>
                              </div>
                         ))}
                    </Slider>
               </div>
          </div>
     );
};
