import React from "react";
import { TestimonialProps } from "../types";
import Image from "next/image";
import Slider from "react-slick";

const Testimonial: React.FC<TestimonialProps> = ({ clientImageUrl, title, position, message }) => {
     return (
          <div className="testimonial">
               <div className="testimonial-owner">
                    <figure>
                         <Image src={clientImageUrl} alt="client" width={400} height={400} />
                    </figure>
                    <div>
                         <h4 className="testimonial-title">{title}</h4>
                         <span>{position}</span>
                    </div>
               </div>
               <blockquote className="ml-4 pr-0">
                    <p>{message}</p>
               </blockquote>
          </div>
     );
};

const Testimonials: React.FC<{ testimonials: TestimonialProps[] }> = (props) => {
     const sliderSettings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: false,
          accessibility: true,
          // className: "",
     };
     return (
          <div className="testimonials-section bg-gray">
               <div className="container">
                    <div className="row align-items-center">
                         <div className="col-lg-6">
                              <Slider {...sliderSettings}>
                                   {props.testimonials.map((testimonial, index) => (
                                        <Testimonial {...testimonial} key={index} />
                                   ))}
                              </Slider>
                         </div>
                         <div className="col-lg-6">
                              <div className="widget news-widget">
                                   <h3 className="widget-title ls-0 mt-0 m-b-4">Latest News</h3>
                                   <div className="widget-content">
                                        <div className="row">
                                             <div className="col-lg-6">
                                                  <article className="post">
                                                       <div className="post-date">
                                                            <span>26- Feb -2018</span>
                                                       </div>
                                                       <div className="post-body">
                                                            <h2 className="post-title">
                                                                 <a href="single.html">
                                                                      Post Format Standard
                                                                 </a>
                                                            </h2>
                                                            <div className="post-content">
                                                                 <p>
                                                                      Lorem ipsum dolor sit amet,
                                                                      consectetur adipiscing elit.
                                                                      Cras non placerat mi. Etiam
                                                                      non...{" "}
                                                                 </p>
                                                                 <a
                                                                      href="single.html"
                                                                      className="read-more"
                                                                 >
                                                                      read more{" "}
                                                                      <i className="fas fa-angle-right" />
                                                                 </a>
                                                            </div>
                                                       </div>
                                                  </article>
                                             </div>
                                             <div className="col-lg-6">
                                                  <article className="post">
                                                       <div className="post-date">
                                                            <span>26- Feb -2018</span>
                                                       </div>
                                                       <div className="post-body">
                                                            <h2 className="post-title">
                                                                 <a href="single.html">
                                                                      Post Format Video
                                                                 </a>
                                                            </h2>
                                                            <div className="post-content">
                                                                 <p>
                                                                      Leap into electronic
                                                                      typesetting, remaining
                                                                      essentially unchanged. It was
                                                                      popularised in the 1960s
                                                                      with...{" "}
                                                                 </p>
                                                                 <a
                                                                      href="single.html"
                                                                      className="read-more"
                                                                 >
                                                                      read more{" "}
                                                                      <i className="fas fa-angle-right" />
                                                                 </a>
                                                            </div>
                                                       </div>
                                                  </article>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Testimonials;
