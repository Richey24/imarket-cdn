import { templateImages } from "@/appProvider/templateImages";
 

export const MiniBanner = () => {
     return (
          <div className="row m-b-3">
               <div className="col-md-6">
                    <div className="banner banner1" style={{ backgroundColor: "#f4f4f4" }}>
                         <figure>
                              <img src={templateImages.demo21.bannerImage.banner2} alt="banner" />
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
                              <img src={templateImages.demo21.bannerImage.banner3} alt="banner" />
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
