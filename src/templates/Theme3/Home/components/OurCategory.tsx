"use client";
import Image from "next/image";
import Link from "next/link";
// import OwlCarousel from "react-owl-carousel";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          0: {
               items: 2,
          },
          768: {
               items: 3,
          },
          991: {
               items: 4,
               // 'nav': false
          },
     },
};

function OurCategory() {
     return (
          <div className="categories-section bg-primary">
               <div className="container">
                    <h2
                         className="section-title border-0 title-decorate text-center text-white d-flex align-items-center appear-animate"
                         data-animation-name="fadeInUpShorter"
                    >
                         <span>BROWSE OUR CATEGORIES</span>
                    </h2>
                    {/* <OwlCarousel
                         className="owl-carousel owl-theme show-nav-hover"
                         {...owlCarouselOptions}
                    >
                         <div className="banner banner-image">
                              <Link href="demo7-product.html">
                                   <Image
                                        src="https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                        width="272"
                                        height="231"
                                        alt="banner"
                                   />
                              </Link>
                              <div className="banner-layer banner-layer-middle">
                                   <h3>DRESS</h3>
                                   <span>2 PRODUCTS </span>
                              </div>
                         </div>

                         <div className="banner banner-image">
                              <Link href="demo7-product.html">
                                   <Image
                                        src="https://images.unsplash.com/photo-1414322058660-a4c56ab6c1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        width="272"
                                        height="231"
                                        alt="banner"
                                   />
                              </Link>
                              <div className="banner-layer banner-layer-middle">
                                   <h3>TOYS</h3>
                                   <span>2 PRODUCTS </span>
                              </div>
                         </div>

                         <div className="banner banner-image">
                              <Link href="demo7-product.html">
                                   <Image
                                        src="https://images.unsplash.com/photo-1414322058660-a4c56ab6c1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        width="272"
                                        height="231"
                                        alt="banner"
                                   />
                              </Link>
                              <div className="banner-layer banner-layer-middle">
                                   <h3>SHOES</h3>
                                   <span>2 PRODUCTS </span>
                              </div>
                         </div>

                         <div className="banner banner-image">
                              <Link href="demo7-shop.html">
                                   <Image
                                        src="https://images.unsplash.com/photo-1414322058660-a4c56ab6c1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        width="272"
                                        height="231"
                                        alt="banner"
                                   />
                              </Link>
                              <div className="banner-layer banner-layer-middle">
                                   <h3>WATCHES</h3>
                                   <span>2 PRODUCTS </span>
                              </div>
                         </div>

                         <div className="banner banner-image">
                              <Link href="demo7-shop.html">
                                   <Image
                                        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                                        width="272"
                                        height="231"
                                        alt="banner"
                                   />
                              </Link>
                              <div className="banner-layer banner-layer-middle">
                                   <h3>Dress</h3>
                                   <span>2 Products </span>
                              </div>
                         </div>
                    </OwlCarousel> */}
               </div>
          </div>
     );
}

export default OurCategory;
