import React from 'react'
import CatBanner1 from "../../../../assets/images/demoes/demo21/products/categories/cat-1.jpg";
import CatBanner2 from "../../../../assets/images/demoes/demo21/products/categories/cat-2.jpg";
import CatBanner3 from "../../../../assets/images/demoes/demo21/products/categories/cat-3.jpg";
import CatBanner4 from "../../../../assets/images/demoes/demo21/products/categories/cat-4.jpg";
export const SmallBanner = () => {
  return (
    <section className="cat-banners-section" style={{paddingRight:'80px', paddingLeft:'80px'}}>
    <div className="container">
         <div className="row">
              <div className="col-sm-6 col-xl-3">
                   <div
                        className="cat-banner"
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
                        className="cat-banner"
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
                        className="cat-banner"
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
                        className="cat-banner"
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
  )
}
 