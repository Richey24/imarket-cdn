import Link from "next/link";
import OwlCarousel from "react-owl-carousel";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          576: {
               items: 2,
          },
          992: {
               items: 4,
          },
     },
};

export default function MainCategory() {
     return (
          <section className="bg-gray banners-section text-center">
               <div className="container py-2">
                    <div className="row">
                         <div
                              className="col-sm-6 col-lg-3"
                              data-animation-name="fadeInLeftShorter"
                              data-animation-delay="100"
                              data-animation-duration="1000"
                         >
                              <div className="home-banner banner banner-sm-vw mb-2">
                                   <img
                                        src="https://images.unsplash.com/photo-1523297736436-356615162cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                                        className="bg-[#ccc]"
                                        width="419"
                                        height="629"
                                        alt="Banner"
                                   />
                                   <div className="banner-layer banner-layer-bottom text-left">
                                        <h3 className="m-b-2">Sunglasses Sale</h3>
                                        <h4 className="m-b-3">See all and find yours</h4>
                                        <a
                                             href="demo3-shop.html"
                                             className="btn  btn-dark"
                                             role="button"
                                        >
                                             Shop By Glasses
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="col-sm-6 col-lg-3 appear-animate"
                              data-animation-name="fadeInLeftShorter"
                              data-animation-delay="300"
                              data-animation-duration="1000"
                         >
                              <div className="home-banner banner banner-sm-vw mb-2">
                                   <img
                                        src="https://images.unsplash.com/photo-1523297736436-356615162cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                                        className="bg-[#ccc]"
                                        width="419"
                                        height="629"
                                        alt="Banner"
                                   />
                                   <div className="banner-layer banner-layer-top ">
                                        <h3 className="mb-0">Cosmetics Trends</h3>
                                        <h4 className="m-b-4">Browse in all our categories</h4>
                                        <a
                                             href="demo3-shop.html"
                                             className="btn  btn-dark"
                                             role="button"
                                        >
                                             Shop By Glasses
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="col-sm-6 col-lg-3 appear-animate"
                              data-animation-name="fadeInLeftShorter"
                              data-animation-delay="500"
                              data-animation-duration="1000"
                         >
                              <div className="home-banner banner banner-sm-vw mb-2">
                                   <img
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
                                        className="bg-[#444]"
                                        width="419"
                                        height="629"
                                        alt="Banner"
                                   />
                                   <div className="banner-layer banner-layer-middle">
                                        <h3 className="text-white m-b-1">Fashion Summer Sale</h3>
                                        <h4 className="text-white m-b-4">
                                             Browse in all our categories
                                        </h4>
                                        <a
                                             href="demo3-shop.html"
                                             className="btn btn-light bg-white"
                                             role="button"
                                        >
                                             Shop By Fashion
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="col-sm-6 col-lg-3 appear-animate"
                              data-animation-name="fadeInLeftShorter"
                              data-animation-delay="700"
                              data-animation-duration="1000"
                         >
                              <div className="home-banner banner banner-sm-vw mb-2">
                                   <img
                                        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                                        className="bg-[#ccc]"
                                        width="419"
                                        height="629"
                                        alt="Banner"
                                   />
                                   <div className="banner-layer banner-layer-bottom banner-layer-boxed">
                                        <h3 className="m-b-2">UP TO 70% IN ALL BAGS</h3>
                                        <h4>Starting at $99</h4>
                                        <a
                                             href="demo3-shop.html"
                                             className="btn  btn-dark"
                                             role="button"
                                        >
                                             Shop By Bags
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
