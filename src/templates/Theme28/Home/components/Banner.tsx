import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";

const Banner = () => {
     return (
          <div>
               <section className="section-1" id="intro">
                    <div className="container">
                         <div className="row align-items-center product-row">
                              <div
                                   className="col-lg-7 "
                                   data-animation-name="fadeInLeftShorter"
                                   data-appear-animation-delay="200"
                              >
                                   <figure className="large-img">
                                        <Image
                                             src={templateImages.demo28.bannerImage.banner1}
                                             alt="banner"
                                             width="939"
                                             height="1120"
                                        />
                                   </figure>
                              </div>
                              <div
                                   className="col-lg-5 order-lg-first "
                                   data-animation-name="fadeIn"
                                   data-appear-animation-delay="100"
                              >
                                   <div className="section-body">
                                        <h3
                                             className="banner-subtitle mb-0 line-height-1e "
                                             data-animation-name="fadeInLeftShorter"
                                             data-appear-animation-delay="1170"
                                        >
                                             INTRODUCING
                                        </h3>
                                        <h3
                                             className="product-title  line-height-1"
                                             data-animation-name="fadeInLeftShorter"
                                             data-appear-animation-delay="1320"
                                        >
                                             PORTO HEADPHONE
                                        </h3>
                                        <div
                                             className="price-box "
                                             data-animation-name="fadeInLeftShorter"
                                             data-appear-animation-delay="1500"
                                        >
                                             <span className="product-price text-primary">
                                                  <b>$350.00</b>
                                             </span>
                                             <a
                                                  href="#"
                                                  className="btn btn-rounded with-bg btn-add-cart product-type-simple"
                                             >
                                                  add to cart
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="section-2 with-bg" id="feature">
                    <div className="container">
                         <div className="row align-items-center">
                              <div
                                   className="col-lg-6 "
                                   data-animation-name="fadeInRightShorter"
                                   data-appear-animation-delay="400"
                              >
                                   <figure>
                                        <Image
                                             src={templateImages.demo28.bannerImage.banner2}
                                             alt="banner"
                                             width="629"
                                             height="455"
                                        />
                                   </figure>
                              </div>
                              <div className="col-lg-6">
                                   <div className="section-body">
                                        <h3
                                             className="product-title mb-2 "
                                             data-animation-name="fadeInUpShorter"
                                             data-appear-animation-delay="500"
                                        >
                                             PORTO HEADPHONE
                                        </h3>
                                        <p
                                             className="section-text "
                                             data-animation-name="fadeInUpShorter"
                                             data-appear-animation-delay="700"
                                        >
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the{" "}
                                             {"industry's"} standard dummy text ever since the
                                             1500s, when an unknown printer took a galley of type
                                             and scrambled it to make a type specimen book. It has
                                             survived not only five centurie
                                        </p>
                                        <div
                                             className="mb-2  scrolling-box"
                                             data-animation-name="fadeInUpShorter"
                                             data-appear-animation-delay="900"
                                        >
                                             <a
                                                  href="#specific"
                                                  className="btn btn-rounded with-border"
                                             >
                                                  specifications
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="section-3">
                    <div className="container">
                         <div className="row align-items-center">
                              <div
                                   className="col-lg-5 img-wrapper "
                                   data-animation-name="fadeInRightShorter"
                                   data-appear-animation-delay="200"
                              >
                                   <figure>
                                        <Image
                                             src={templateImages.demo28.bannerImage.banner3}
                                             alt="banner"
                                             width="463"
                                             height="473"
                                        />
                                   </figure>
                              </div>
                              <div className="col-lg-6 order-lg-first">
                                   <div className="section-body">
                                        <h3
                                             className="product-title mb-2 appear-aniamte"
                                             data-animation-name="fadeInUpShorter"
                                             data-appear-animation-delay="300"
                                        >
                                             BLUETOOTH CONNECTION
                                        </h3>
                                        <p
                                             className="section-text "
                                             data-animation-name="fadeInUpShorter"
                                             data-appear-animation-delay="500"
                                        >
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the{" "}
                                             {"industry's"} standard dummy text ever since the
                                             1500s, when an unknown printer took a galley of type
                                             and scrambled it to make a type specimen book. It has
                                             survived not only five centuries, but also the leap
                                             into electronic typesetting.
                                        </p>
                                        <div
                                             className="mb-2  scrolling-box"
                                             data-animation-name="fadeInUpShorter"
                                             data-appear-animation-delay="700"
                                        >
                                             <a
                                                  href="#testimonial"
                                                  className="btn btn-rounded with-border"
                                             >
                                                  testimonials
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="section-4 with-bg">
                    <div className="container">
                         <div className="row align-items-center product-row">
                              <div
                                   className="col-lg-6 "
                                   data-animation-name="fadeInRightShorter"
                                   data-appear-animation-delay="400"
                              >
                                   <figure>
                                        <Image
                                             src={templateImages.demo28.bannerImage.banner4}
                                             alt="banner"
                                             width="870"
                                             height="587"
                                        />
                                   </figure>
                              </div>
                              <div className="col-lg-6">
                                   <div className="section-body">
                                        <h3
                                             className="product-title mb-2 "
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay="500"
                                        >
                                             EXTRA QUALITY SOUND
                                        </h3>
                                        <p
                                             className="section-text "
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay="700"
                                        >
                                             Lorem ipsum dolor sit amet, consectetur adipiscing
                                             elit. Aliquam ac metus at elit malesuada tristique ut
                                             at est. Donec ut iaculis nunc. Nullam egestas nec erat
                                             a tincidunt. Mauris metus metus, bibendum id convallis
                                             non, commodo in lacus. Maecenas maximus consequat
                                             varius. Praesent ullamcorper non lectus ac ultrices.
                                        </p>
                                        <div
                                             className=""
                                             data-animation-name="fadeInUpShorter"
                                             data-animation-delay="700"
                                        >
                                             <a
                                                  href="#"
                                                  className="btn btn-rounded with-border btn-add-cart product-type-simple"
                                             >
                                                  add to cart
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Banner;
