import banner1 from "../../../assets/images/demoes/demo20/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo20/banners/banner-2.jpg";
import { FeaturedCategories } from "./components/FeaturedCategories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { MiniBanner } from "./components/MiniBanner";
import { Product } from "./components/Product";
import { featuredProducts } from "./data";
const Home = () => {
     return (
          <main className="main">
               <section className="intro-section">
                    <div className="container">
                         <div className="row">
                              <div className="grid-item col-lg-8 mb-2">
                                   <div
                                        className="banner banner1"
                                        style={{ backgroundColor: "#eee" }}
                                   >
                                        <figure>
                                             <img
                                                  src={banner1.src}
                                                  alt="banner"
                                                  width={779}
                                                  height={464}
                                             />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle banner-layer-left">
                                             <div
                                                  className="appear-animate"
                                                  data-animation-name="bounceInLeft"
                                                  data-animation-delay={100}
                                             >
                                                  <h3 className="text-body m-b-1">Save Big Sale</h3>
                                                  <h4 className="d-flex align-items-center text-uppercase">
                                                       50%
                                                       <small className="d-inline-block">Off</small>
                                                  </h4>
                                                  <h5>
                                                       <span className="d-inline-block align-top ls-n-20 text-uppercase">
                                                            Starting At
                                                       </span>
                                                       <b className="coupon-sale-text d-inline-block ls-n-20 text-primary mb-0">
                                                            <sup>$</sup>199<sup>99</sup>
                                                       </b>
                                                  </h5>
                                                  <a
                                                       href="demo20-shop.html"
                                                       className="btn btn-sm text-uppercase ls-10"
                                                  >
                                                       Shop Now
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="grid-item col-lg-4 mb-2">
                                   <div className="find-form d-flex flex-column justify-content-center">
                                        <h3 className="line-height-1 ls-n-10 text-center text-uppercase text-white m-b-3">
                                             Find A Product
                                        </h3>
                                        <form className="mb-0" action="#" method="get">
                                             <div className="select-custom">
                                                  <select className="form-control">
                                                       <option>Select a category</option>
                                                       <option>Accessories</option>
                                                       <option>&nbsp;&nbsp;Caps</option>
                                                       <option>&nbsp;&nbsp;Watches</option>
                                                       <option>Beauty</option>
                                                       <option>Decor</option>
                                                       <option>Fashion</option>
                                                       <option>Shoes</option>
                                                       <option>Footwear</option>
                                                       <option>&nbsp;&nbsp;Headphone</option>
                                                       <option>&nbsp;&nbsp;Toys</option>
                                                  </select>
                                             </div>
                                             <div className="select-custom mb-0">
                                                  <select className="form-control mb-0">
                                                       <option>By brand</option>
                                                       <option>Adidas</option>
                                                       <option>Calvin Klein</option>
                                                       <option>Diesel</option>
                                                       <option>Lacoste</option>
                                                  </select>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                              <div className="grid-item col-lg-4 mb-2">
                                   <div
                                        className="banner banner2 appear-animate"
                                        data-animation-name="fadeIn"
                                        data-animation-delay={200}
                                        style={{ backgroundColor: "#eee" }}
                                   >
                                        <figure>
                                             <img src={banner2.src} alt="banner" />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle banner-layer-right text-right">
                                             <h3 className="ls-10 text-uppercase m-b-3">
                                                  Electronic
                                                  <br />
                                                  Deals
                                             </h3>
                                             <div className="coupon-sale-text d-inline-block text-left">
                                                  <h4 className="font1 d-block text-white bg-dark ls-10">
                                                       Exclusive COUPON
                                                  </h4>
                                                  <h5 className="mb-0 font1 d-inline-block bg-dark">
                                                       <i className="text-dark ls-0">UP TO</i>
                                                       <b className="text-white">$100</b>
                                                       <sub className="text-dark">OFF</sub>
                                                  </h5>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="grid-col-sizer col-1"></div>
                         </div>
                    </div>
               </section>
               <FeaturedCategories />
          <FeaturedProducts/>
               <MiniBanner />
               <div className="brands-section">
                    <div className="container">
                         <div
                              className="brands-slider owl-carousel owl-theme"
                              data-owl-options="{
                          'margin': 0
                      }"
                         >
                              <img
                                   src="assets/images/brands/small/brand1.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand2.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand3.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand4.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand5.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                              <img
                                   src="assets/images/brands/small/brand6.png"
                                   width={130}
                                   height={56}
                                   alt="brand"
                              />
                         </div>
                    </div>
               </div>
          </main>
     );
};

export default Home;
