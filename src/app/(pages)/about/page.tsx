"use client";
import Image from "next/image";
import OwlCarouselComponent from "@/app/components/OWlCarousel";
import { useContext, useState } from "react";
import { AppContext } from "@/appProvider";
import { TeamInfo } from "./TeamInfo";
import Slider from "react-slick";

export default function About() {
     const [currentSlide, setCurrentSlide] = useState(0);
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          beforeChange: (current, next) => setCurrentSlide(next),
     };
     const currentPage = "about_us";

     const { site } = useContext(AppContext);

     const pageData =
          site?.theme?.pages?.find((page: { name: any }) => page.name === currentPage) || null;
     const minifiedData = pageData?.sections[0]?.component.props.static || null;
     // console.log("pageData", minifiedData);

     const img1 =
          "https://images.unsplash.com/photo-1689481172416-dae28c4a08b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=822&q=80";
     return (
          <main className="main">
               <div className="page-header">
                    <div className="container">
                         <h1 className="heading tw-text-white text-uppercase">About Us</h1>
                    </div>
               </div>
               <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                         <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                                   <a href="demo13.html">Home</a>
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                   About Us
                              </li>
                         </ol>
                    </div>
               </nav>
               <section className="info-section">
                    <h2 className="d-none">history & reviews</h2>
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6 history-section">
                                   <h3 className="section-heading">our history</h3>
                                   <p
                                        className="section-text"
                                        dangerouslySetInnerHTML={{
                                             __html: minifiedData?.history ?? "",
                                        }}
                                   ></p>
                              </div>
                              <div className="col-lg-6 testimonial about-test">
                                   <h3 className="section-heading">client reviews</h3>
                                   <div className="testimonial-owner">
                                        <figure>
                                             <img src={img1} alt="client" />
                                        </figure>

                                        <div>
                                             <strong className="testimonial-title">
                                                  John Smith
                                             </strong>
                                             <span>SMARTWAVE CEO</span>
                                        </div>
                                   </div>

                                   <blockquote>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur elitad
                                             adipiscing Cras non placerat mipsum dolor sit amet,
                                             consectetur elitad adipiscing cas non placerat mi.
                                        </p>
                                   </blockquote>
                              </div>
                         </div>
                    </div>
               </section>
               <div className="team-section container">
                    <h4 className="title-decorate text-center text-dark d-flex align-items-center">
                         OUR TEAM
                    </h4>
                    <div className=" justify-content-center">
                         <Slider {...settings}>
                              {" "}
                              {minifiedData &&
                                   minifiedData.team &&
                                   minifiedData.team.map((data, idx) => (
                                        <TeamInfo key={idx} {...data} />
                                   ))}
                         </Slider>
                    </div>
                    {/* End .row */}
               </div>

               <section className="features-section with-bg">
                    <div className="container">
                         <div className="owl-carousel owl-theme">
                              <div className="feature-box">
                                   <i className="icon-shipped"></i>

                                   <div className="feature-box-content p-0">
                                        <h3>Free Shipping</h3>
                                        <p>
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry.
                                        </p>
                                   </div>
                              </div>
                              <div className="feature-box">
                                   <i className="icon-us-dollar"></i>

                                   <div className="feature-box-content p-0">
                                        <h3>100% Money Back Guarantee</h3>
                                        <p>
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry.
                                        </p>
                                   </div>
                              </div>
                              <div className="feature-box">
                                   <i className="icon-online-support"></i>

                                   <div className="feature-box-content p-0">
                                        <h3>Online Support 24/7</h3>
                                        <p>
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     );
}
