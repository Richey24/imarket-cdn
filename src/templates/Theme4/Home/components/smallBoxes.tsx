import React from "react";
import Image from "next/image";
// import OwlCarousel from "react-owl-carousel";

interface Banner {
     imageUrl: string;
     title: string;
}

interface Props {
     banners: Banner[];
}

const SmallBoxes: React.FC<Props> = ({ banners }) => {
     const owlCarouselOptions = {
          dots: false,
          margin: 0,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 3,
               },
          },
     };
     return (
          <div className="container">
               <div className="banners-container mb-2">
                    <div className="banners-slider ">
                         {/* <OwlCarousel
                              className="info-boxes-slider owl-carousel owl-theme"
                              {...owlCarouselOptions}
                         >
                              {banners.map((banner, index) => (
                                   <div
                                        className={`banner banner${index + 1} banner-sm-vw ${
                                             index === 1 ? "text-uppercase " : ""
                                        }d-flex align-items-center`}
                                        key={index}
                                        style={{ backgroundColor: index !== 1 && "#ccc" }}
                                   >
                                        <figure className="w-100">
                                             <Image
                                                  src={banner.imageUrl}
                                                  style={{ backgroundColor: "#ccc" }}
                                                  alt="banner"
                                                  width={340}
                                                  height={175}
                                             />
                                        </figure>
                                        <div
                                             className={`banner-layer ${
                                                  index === 1
                                                       ? "text-center"
                                                       : index === 2
                                                       ? "text-right"
                                                       : "null"
                                             }`}
                                        >
                                             {index !== 1 ? (
                                                  <>
                                                       <h3 className="m-b-2">{banner.title}</h3>
                                                       <h4 className="m-b-3 text-primary">
                                                            <sup className="text-dark">
                                                                 <del>20%</del>
                                                            </sup>
                                                            30%<sup>OFF</sup>
                                                       </h4>
                                                       <a
                                                            href="category.html"
                                                            className="btn btn-sm btn-dark"
                                                       >
                                                            Shop Now
                                                       </a>
                                                  </>
                                             ) : (
                                                  <div className="row align-items-lg-center">
                                                       <div className="col-lg-7 text-lg-right">
                                                            <h3>{banner.title}</h3>
                                                            <h4 className="pb-4 pb-lg-0 mb-0 text-body">
                                                                 Starting at $99
                                                            </h4>
                                                       </div>
                                                       <div className="col-lg-5 text-lg-left px-0 px-xl-3">
                                                            <a
                                                                 href="category.html"
                                                                 className="btn btn-sm btn-dark"
                                                            >
                                                                 Shop Now
                                                            </a>
                                                       </div>
                                                  </div>
                                             )}
                                        </div>
                                   </div>
                              ))}
                         </OwlCarousel> */}
                    </div>
               </div>
          </div>
     );
};

export default SmallBoxes;
