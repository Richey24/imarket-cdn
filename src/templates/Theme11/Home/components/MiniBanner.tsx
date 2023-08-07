import Banner1 from "../../../../assets/images/demoes/demo21/banners/banner-1.jpg";
import Banner2 from "../../../../assets/images/demoes/demo21/banners/banner-2.jpg";
import CatBanner1 from "../../../../assets/images/demoes/demo21/products/categories/cat-1.jpg";
import CatBanner2 from "../../../../assets/images/demoes/demo21/products/categories/cat-2.jpg";
import CatBanner3 from "../../../../assets/images/demoes/demo21/products/categories/cat-3.jpg";
import CatBanner4 from "../../../../assets/images/demoes/demo21/products/categories/cat-4.jpg";

export const MiniBanner = () => {
     return (
          <div
               className="row m-b-3 appear-animate"
               data-animation-name="fadeIn"
               data-animation-delay={300}
          >
               <div className="col-md-6">
                    <div className="banner banner1" style={{ backgroundColor: "#f4f4f4" }}>
                         <figure>
                              <img src={Banner1.src} alt="banner" />
                         </figure>
                         <div className="banner-layer banner-layer-middle row justify-content-between align-items-center no-gutters">
                              <div className="col-6 col-lg-4">
                                   <h3 className="font1 text-uppercase ls-0 mb-0">
                                        Action
                                        <br />
                                        Cameras
                                   </h3>
                              </div>
                              <div className="col-6 col-lg-4 text-right text-lg-left">
                                   <h4 className="font1 ls-n-10">
                                        Starting From<b>$399</b>
                                   </h4>
                                   <a href="demo21-shop.html" className="btn btn-primary ls-n-25">
                                        Shop Now
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="col-md-6">
                    <div className="banner banner2" style={{ backgroundColor: "#f4f4f4" }}>
                         <figure>
                              <img src={Banner2.src} alt="banner" />
                         </figure>
                         <div className="banner-layer banner-layer-middle row justify-content-between align-items-center no-gutters">
                              <div className="col-6 col-lg-4 text-left text-lg-right">
                                   <h4 className="font1 ls-n-10">
                                        Starting From<b>$199</b>
                                   </h4>
                                   <a href="demo21-shop.html" className="btn btn-primary ls-n-25">
                                        Shop Now
                                   </a>
                              </div>
                              <div className="col-6 col-lg-4 text-right text-lg-left">
                                   <h3 className="font1 text-uppercase ls-0 mb-0">
                                        For All
                                        <br />
                                        Styles
                                   </h3>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export const CatBanner = () => {
     return (
          <section className="cat-banners-section">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-6 col-xl-3">
                              <div
                                   className="cat-banner appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={800}
                              >
                                   <figure>
                                        <img
                                             src={CatBanner1.src}
                                             alt="category"
                                             width={107}
                                             height={107}
                                        />
                                   </figure>
                                   <div className="cat-content">
                                        <h3 className="mb-1">
                                             Top Sharp
                                             <br />
                                             Knives
                                        </h3>
                                        <a href="demo21-shop.html" className="btn btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3">
                              <div
                                   className="cat-banner appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={600}
                              >
                                   <figure>
                                        <img
                                             src={CatBanner2.src}
                                             alt="category"
                                             width={107}
                                             height={107}
                                        />
                                   </figure>
                                   <div className="cat-content">
                                        <h3 className="mb-1">
                                             HD Vision
                                             <br />
                                             Web Cameras
                                        </h3>
                                        <a href="demo21-shop.html" className="btn btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3">
                              <div
                                   className="cat-banner appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={400}
                              >
                                   <figure>
                                        <img
                                             src={CatBanner3.src}
                                             alt="category"
                                             width={107}
                                             height={107}
                                        />
                                   </figure>
                                   <div className="cat-content">
                                        <h3 className="mb-1">
                                             Mobiles And
                                             <br />
                                             Tablets
                                        </h3>
                                        <a href="demo21-shop.html" className="btn btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6 col-xl-3">
                              <div
                                   className="cat-banner appear-animate"
                                   data-animation-name="fadeInLeftShorter"
                                   data-animation-delay={200}
                              >
                                   <figure>
                                        <img
                                             src={CatBanner4.src}
                                             alt="category"
                                             width={107}
                                             height={107}
                                        />
                                   </figure>
                                   <div className="cat-content">
                                        <h3 className="mb-1">
                                             Smart
                                             <br />
                                             Watches
                                        </h3>
                                        <a href="demo21-shop.html" className="btn btn-dark">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};
