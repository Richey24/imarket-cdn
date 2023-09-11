import { templateImages } from "@/appProvider/templateImages";
import Carousel from "react-bootstrap/Carousel";
import { Sliders } from "../data";

export const Banner = () => {
     return (
          <section className="home-slider  owl-theme text-uppercase nav-big bg-gray">
               <Carousel>
                    {" "}
                    {Sliders.map((data) => (
                         <Carousel.Item>
                              <div className="home-slide home-slide1 banner">
                                   <img
                                        className="slide-bg"
                                        src={data.slider}
                                        alt="slider image"
                                        width={1120}
                                        height={500}
                                        style={{ backgroundColor: "#eee" }}
                                   />
                                   <div className="container">
                                        <div
                                             className={`banner-layer banner-layer-middle ${data.styles}`}
                                        >
                                             <h4 className="text-capitalize m-b-3">{data.h4}</h4>
                                             <h2 className="m-b-2">{data.h2}</h2>

                                             <h3 className="m-b-2">{data.h3}</h3>

                                             {data.price ? (
                                                  <h5 className="d-inline-block pt-2 mb-1 pb-1 ls-n-20 align-middle">
                                                       Starting AT
                                                       <b
                                                            className="coupon-sale-text  text-white d-inline-block align-sub"
                                                            style={{ background: "#ff7272" }}
                                                       >
                                                            $
                                                            <em className="align-middle">
                                                                 {data.price}
                                                            </em>
                                                            99
                                                       </b>
                                                  </h5>
                                             ) : null}
                                             <a href={data.atag} className="btn btn-dark">
                                                  Shop Now!
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </Carousel.Item>
                    ))}
               </Carousel>
          </section>
     );
};
