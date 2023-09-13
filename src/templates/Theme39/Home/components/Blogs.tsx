import React, { useState } from "react";
import Slider from "react-slick";
import { blogs } from "../data";
export const Blogs = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     return (
          <div
               className="blog-section font2 media-with-zoom appear-animate"
               data-animation-name="fadeInUpShorter"
               data-animation-delay={250}
          >
               <div className="heading">
                    <h2 className="text-uppercase">FROM THE BLOG</h2>
               </div>
               <div className="  owl-theme mb-0">
                    <Slider {...settings}>
                         {blogs.map((data) => (
                              <article className="post mb-3">
                                   <div className="post-box mx-3">
                                        <div className="post-media">
                                             <a href="single.html">
                                                  <img
                                                       src="assets/images/demoes/demo39/blog/post-1.jpg"
                                                       data-zoom-image="assets/images/demoes/demo39/blog/post-1.jpg"
                                                       width={354}
                                                       height={181}
                                                       alt="Post"
                                                  />
                                             </a>
                                             <span className="prod-full-screen">
                                                  <i className="fas fa-search" />
                                             </span>
                                        </div>
                                        {/* End .post-media */}
                                        <div className="post-body">
                                             <div className="post-meta">
                                                  <span className="meta-date">
                                                       <i className="far fa-calendar-alt" />
                                                       {data.blogDate}
                                                  </span>
                                                  <span className="meta-author">
                                                       <i className="far fa-user" />
                                                       By{" "}
                                                       <a
                                                            href="#"
                                                            title="Posts by John Doe"
                                                            rel="author"
                                                       >
                                                            {data.blogAuthor}
                                                       </a>
                                                  </span>
                                                  <span className="meta-comments">
                                                       <i className="far fa-comments" />
                                                       <a
                                                            href="#"
                                                            title="Comment on Lorem ipsum dolor sit amet"
                                                       >
                                                            {data.blogComments} Comments
                                                       </a>
                                                  </span>
                                             </div>
                                             <h2 className="post-title">
                                                  <a href="single.html">{data.blogTitle}</a>
                                             </h2>
                                             <div className="post-content">
                                                  <p>{data.blogContent}</p>
                                                  <a href="single.html" className="read-more">
                                                       read more...
                                                  </a>
                                             </div>
                                             {/* End .post-content */}
                                        </div>
                                        {/* End .post-body */}
                                   </div>
                              </article>
                         ))}
                    </Slider>
               </div>
               {/* End .  */}
          </div>
     );
};
