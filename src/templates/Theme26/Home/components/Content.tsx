import React, { useState } from "react";
import Slider from "react-slick";
import { contentData } from "../data";
export const Content = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide state on slide change
     };
     return (
          <div className="blog-section post-date-in-media media-with-zoom bg-gray">
               <div className="container">
                    <div className="  owl-theme">
                         <Slider {...settings}>
                              {contentData.map((data) => (
                                   <article className="post">
                                        <div className="post-media">
                                             <a href="single.html">
                                                  <img
                                                       src={data.img}
                                                       data-zoom-image="assets/images/demoes/demo26/blogs/post-1.jpg"
                                                       alt="Post"
                                                       width={400}
                                                       height={185}
                                                  />
                                             </a>
                                             <div className="post-date">
                                                  <span className="day">{data.day}</span>
                                                  <span className="month">{data.month}</span>
                                             </div>
                                             <span className="prod-full-screen">
                                                  <i className="fas fa-search" />
                                             </span>
                                        </div>
                                        {/* End .post-media */}
                                        <div className="post-body">
                                             <h2 className="post-title">
                                                  <a href="single.html">{data.postTitle}</a>
                                             </h2>
                                             <div className="post-content">
                                                  <p>
                                                       {data.postContent}
                                                       <a href="single.html" className="read-more">
                                                            read more{" "}
                                                            <i className="fas fa-angle-right" />
                                                       </a>
                                                  </p>
                                             </div>
                                             {/* End .post-content */}
                                        </div>
                                        {/* End .post-body */}
                                   </article>
                              ))}
                         </Slider>
                    </div>
               </div>
          </div>
     );
};
