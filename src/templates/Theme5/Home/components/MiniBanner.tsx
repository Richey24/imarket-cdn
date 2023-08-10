import Image from "next/image";
import banner1 from "../../../../assets/images/demoes/demo5/banners/banner-1.jpg"
import banner2 from "../../../../assets/images/demoes/demo5/banners/banner-2.jpg"
import banner3 from "../../../../assets/images/demoes/demo5/banners/banner-3.jpg"
import bannerBrand from "../../../../assets/images/demoes/demo5/banners/banner-brand.png"

const MiniBanner = () => {
     return (
          <div style={{ paddingLeft: "105px", paddingRight: "105px" }}>
               <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }} className="banners-slider mb-4 mb-md-2">
                    <div className="banner banner1 banner-sm-vw">
                         <figure>
                              <Image src={banner1} style={{ backgroundColor: "#fff" }}
                                   alt="banner" />
                         </figure>
                         <div className="banner-layer banner-layer-middle">
                              <h3 className="m-b-2">Porto Watches</h3>
                              <h4 className="m-b-3 text-primary"><sup
                                   className="text-dark mr-1"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                              <a href="demo5-shop.html" className="btn btn-sm btn-dark ls-10">Shop Now</a>
                         </div>
                    </div>

                    <div className="banner banner2 banner-sm-vw text-uppercase">
                         <figure>
                              <Image src={banner2} style={{ backgroundColor: "#fff" }}
                                   alt="banner" />
                         </figure>

                         <h4 className="banner-layer-circle banner-layer-circle1">
                              <span>50</span><sup>%<small>OFF</small></sup>
                         </h4>

                         <h4 className="banner-layer-circle banner-layer-circle2">
                              <span>70</span><sup>%<small>OFF</small></sup>
                         </h4>

                         <h4 className="banner-layer-circle banner-layer-circle3 mb-0">
                              <span>30</span><sup>%<small>OFF</small></sup>
                         </h4>

                         <div className="banner-layer banner-layer-middle text-center pr-lg-3">
                              <div className="row align-items-lg-center">
                                   <div className="col-lg-7 text-lg-right">
                                        <h3 className="m-b-1 ls-10">Deal Promos</h3>
                                        <h4 className="pb-4 pb-lg-0 mb-0 text-body ls-10">Starting at $99</h4>
                                   </div>
                                   <div className="col-lg-5 text-lg-left px-0 px-xl-3">
                                        <a href="demo5-shop.html" className="btn btn-sm btn-dark ls-10">Shop Now</a>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="banner banner3 banner-sm-vw">
                         <figure>
                              <Image src={banner3} style={{ backgroundColor: "#fff" }}
                                   alt="banner" />
                         </figure>

                         <h4 className="banner-layer-circle bg-secondary pt-2">40<sup>%<small>OFF</small></sup></h4>

                         <div className="banner-layer banner-layer-bottom banner-layer-left banner-layer-brand">
                              <Image src={bannerBrand} alt="banner brand" />
                         </div>
                         <div className="banner-layer banner-layer-middle text-right">
                              <h3 className="mb-1">Handbags</h3>
                              <h4 className="m-b-1 ls-10 pb-3 text-secondary text-uppercase">Starting at $99</h4>
                              <a href="demo5-shop.html" className="btn btn-sm btn-dark ls-10">Shop Now</a>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default MiniBanner