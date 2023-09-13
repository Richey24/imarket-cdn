import { templateImages } from "@/appProvider/templateImages"

const Banner = () => {
     return (
          <div>
               <section className="section-1 home-section position-relative">
                    <div className="home-banner banner bg-img"
                         style={{ backgroundImage: `url(${templateImages.demo12.bannerImage.banner1})` }}>
                         <div className="banner-layer banner-layer-middle">
                              <h4 className="text-transform-none m-b-3">Find the Boundaries. Push Through!</h4>
                              <h2 className="text-transform-none mb-0">Summer Sale</h2>
                              <h3 className="m-b-3">70% Off</h3>
                              <h5 className="d-inline-block mb-0">
                                   <span>Starting At</span>
                                   <b
                                        className="coupon-sale-text text-white bg-secondary align-middle"><sup>$</sup>199<sup>99</sup></b>
                              </h5>
                              <a href="demo12-shop.html" className="btn btn-dark btn-lg ls-10">Shop Now!</a>
                         </div>
                    </div>

                    <div className="cat-section container position-absolute">
                         <div style={{ display: "flex", columnGap: "20px" }}>
                              <a href="demo12-shop.html" className="btn btn-dark btn-lg">ACCESSORIES</a>
                              <a href="demo12-shop.html" className="btn btn-dark btn-lg">CAPS</a>
                              <a href="demo12-shop.html" className="btn btn-dark btn-lg">DRESS</a>
                              <a href="demo12-shop.html" className="btn btn-dark btn-lg">ELECTRONICS</a>
                              <a href="demo12-shop.html" className="btn btn-dark btn-lg">FASHION</a>
                              <a href="demo12-shop.html" className="btn btn-dark btn-lg">HEADPHONE</a>
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default Banner
