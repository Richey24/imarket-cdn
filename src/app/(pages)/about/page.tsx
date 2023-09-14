"use client";
import Image from "next/image";
import OwlCarouselComponent from "@/app/components/OWlCarousel";
import { useContext } from "react";
import { AppContext } from "@/appProvider";

export default function About() {
     const currentPage = "about_us";

     const { site } = useContext(AppContext);

     const pageData = site?.theme?.pages?.find((page: { name: any }) => page.name === currentPage);
     const minifiedData = pageData?.sections[0]?.component.props.static;
     console.log("pageData", minifiedData);

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
                              {/* <div className="col-lg-6 testimonial about-test">
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
                              </div> */}
                         </div>
                    </div>
               </section>
               <section className="gallery-section with-bg">
                    <div className="container">
                         <h3 className="section-heading">photo gallery</h3>
                         <OwlCarouselComponent>
                              <figure>
                                   <img src={img1} alt="blog" />
                              </figure>
                              <figure>
                                   <img src={img1} alt="blog" />
                              </figure>
                              <figure>
                                   <img src={img1} alt="blog" />
                              </figure>
                              <figure>
                                   <img src={img1} alt="blog" />
                              </figure>
                         </OwlCarouselComponent>
                    </div>
               </section>
               <section className="detail-info-section">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6">
                                   <figure>
                                        <Image
                                             src={img1}
                                             layout="fill"
                                             className="lg-img"
                                             alt="blog"
                                        />
                                   </figure>
                              </div>
                              <div className="col-lg-6 info-body">
                                   <div className="info-item">
                                        <h4 className="section-heading">our mission</h4>
                                        <p className="section-text">
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                             industry’s standard dummy text ever since the 1500s,
                                             when an unknown printer took a galley of type and
                                             scrambled.
                                        </p>
                                   </div>
                                   <div className="info-item">
                                        <h4 className="section-heading">our vision</h4>
                                        <p className="section-text">
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                             industry’s standard dummy text ever since the 1500s,
                                             when an unknown printer took a galley of type and
                                             scrambled.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="features-section with-bg">
                    <div className="container">
                         <div
                              className="owl-carousel owl-theme"
                              data-owl-options="{
                        'dots': false,
                        'margin': 30,
                        'loop': false,
                        'responsive': {
                            '0': {
                                'items': 1
                            },
                            '576': {
                                'items': 2
                            },
                            '992': {
                                'items': 3
                            }
                        }
                    }"
                         >
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
