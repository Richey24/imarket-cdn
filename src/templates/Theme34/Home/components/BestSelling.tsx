import Image from "next/image";
import Link from "next/link";
// import OwlCarousel from "react-owl-carousel";
import { templateImages } from "@/appProvider/templateImages";
import Product from "@/app/components/Product";

function BestSelling() {
     return (
          <div>
               <section className="best-selling-products">
                    <div className="container">
                         <h2 className="section-title m-b-2">Best Selling Products</h2>
                         <h5 className="section-info p-b-4 mb-2">
                              Only the best seller products added recently in our catalog
                         </h5>

                         <div className="row">
                              <div className="col-md-6">
                                   <div className="banner banner1 mb-2 tw-bg-[#f4f4f2]">
                                        <figure>
                                             <img
                                                  src={templateImages.demo34.bannerImage.banner2}
                                                  alt="banner"
                                                  width="580"
                                                  height="430"
                                             />
                                        </figure>

                                        <div className="banner-layer banner-layer-middle banner-layer-right text-right">
                                             <h3 className="text-uppercase mb-0">
                                                  Fragrance Offers
                                             </h3>
                                             <h4 className="font1 text-uppercase mb-0">
                                                  <small className="font2 font-weight-bold ls-n-20">
                                                       <sup>up</sup>
                                                       <sub>to</sub>
                                                  </small>
                                                  <i>45%</i>
                                             </h4>
                                             <h5 className="ls-n-20 text-uppercase">off</h5>
                                             <a
                                                  href="demo34-shop.html"
                                                  className="btn btn-dark btn-lg"
                                             >
                                                  Shop now
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-6">
                                   {/* <OwlCarousel
                                        className="owl-carousel owl-theme dots-small"
                                        {...{
                                             dots: false,
                                             margin: 20,
                                             loop: false,
                                             items: 2,
                                             nav: true,
                                        }}
                                   >
                                        <Product
                                             imageSrc={templateImages.demo34.productImages.product1}
                                             productName={"ABC"}
                                             price={"$300"}
                                        />{" "}
                                        <Product
                                             imageSrc={templateImages.demo34.productImages.product1}
                                             productName={"ABC"}
                                             price={"$300"}
                                        />{" "}
                                        <Product
                                             imageSrc={templateImages.demo34.productImages.product1}
                                             productName={"ABC"}
                                             price={"$300"}
                                        />
                                   </OwlCarousel> */}
                              </div>
                         </div>
                    </div>
               </section>
               <div className="banner banner2">
                    <div className="row no-gutters m-0">
                         <div
                              className="col-lg-6 parallax-bg tw-bg-[#f4f4f2]"
                              // data-parallax="{'speed': 1.3, 'enableOnMobile': false}"
                              style={{
                                   backgroundImage: `url(${templateImages.demo34.bannerImage.banner3})`,
                                   backgroundRepeat: "no-repeat",
                                   backgroundSize: "cover",
                              }}
                         >
                              <div className="dot-image">
                                   <img
                                        src="assets/images/demoes/demo34/dots.png"
                                        alt="dots"
                                        width="123"
                                        height="126"
                                   />
                              </div>
                         </div>
                         <div
                              className="col-lg-6 banner-content "
                              data-animation-name="fadeInLeftShorter"
                              data-animation-delay="200"
                         >
                              <h4 className="m-b-1">Self Care for You</h4>
                              <h2 className="font1 font-italic m-b-4">Stay Beauty at Home</h2>
                              <p className="font2 ls-n-15 m-b-5">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                   ullamcorper quam lacus, et suscipit lectus porta efficitur.
                              </p>
                              <h5 className="coupon-sale-text float-left ls-n-20 text-uppercase">
                                   Starting at
                                   <em>
                                        $<strong>39</strong>99
                                   </em>
                              </h5>
                              <a href="demo34-shop.html" className="btn btn-dark btn-lg mb-0">
                                   Shop Now
                              </a>
                         </div>
                    </div>
               </div>

               <div className="banner banner3">
                    <div className="row no-gutters m-0">
                         <div
                              className="col-lg-6 parallax-bg order-lg-last tw-bg-[#f5dee6]"
                              style={{
                                   backgroundImage: `url(${templateImages.demo34.bannerImage.banner4})`,
                                   backgroundRepeat: "no-repeat",
                                   backgroundSize: "cover",
                              }}
                         >
                              <div className="dot-image">
                                   <img
                                        src="assets/images/demoes/demo34/dots.png"
                                        alt="dots"
                                        width="123"
                                        height="126"
                                   />
                              </div>
                         </div>
                         <div
                              className="col-lg-6 banner-content "
                              data-animation-name="fadeInRightShorter"
                              data-animation-delay="200"
                         >
                              <h4 className="m-b-1">Clear and Glowing Skin</h4>
                              <h2 className="font1 font-italic m-b-4">Best Face Masks</h2>
                              <p className="font2 ls-n-15 m-b-5">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                   ullamcorper quam lacus, et suscipit lectus porta efficitur.
                              </p>
                              <h5 className="coupon-sale-text float-left ls-n-20 text-uppercase">
                                   Starting at
                                   <em>
                                        $<strong>39</strong>99
                                   </em>
                              </h5>
                              <a href="demo34-shop.html" className="btn btn-dark btn-lg mb-0">
                                   Shop Now
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default BestSelling;
