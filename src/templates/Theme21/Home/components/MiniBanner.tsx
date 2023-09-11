import { miniBanners } from "../data";

export const MiniBanner = () => {
     return (
          <div className="row m-b-3">
               {miniBanners.map((data) => (
                    <div className="col-md-6">
                         <div className="banner banner1" style={{ backgroundColor: "#f4f4f4" }}>
                              <figure>
                                   <img src={data.img} alt="banner" />
                              </figure>
                              <div className="banner-layer banner-layer-middle row justify-content-between align-items-center no-gutters">
                                   <div className={data.bannerStyles}>
                                        <h3 className="font1 text-uppercase ls-0 mb-0">
                                             {data.h3}
                                             <br />
                                             {data.h3Br}
                                        </h3>
                                   </div>
                                   <div className={`col-6 col-lg-4 ${data.styles}`}>
                                        <h4 className="font1 ls-n-10">
                                             {data.h4}
                                             <b>${data.price}</b>
                                        </h4>
                                        <a href={data.atag} className="btn btn-primary ls-n-25">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     );
};
