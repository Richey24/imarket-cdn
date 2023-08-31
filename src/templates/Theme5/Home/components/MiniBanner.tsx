import Image from "next/image";
import banner1 from "../../../../assets/images/demoes/demo5/banners/banner-1.jpg";

const MiniBanner = ({ dealsBanner }) => {
     return (
          <div>
               <div
                    style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
                    className="banners-slider mb-4 mb-md-2"
               >
                    {dealsBanner?.map((banner: any, idx: number) => (
                         <div key={banner.title} className="banner banner1 banner-sm-vw">
                              <figure>
                                   <Image
                                        src={banner?.imageUrl !== "" ? banner?.imageUrl : banner1}
                                        width={264}
                                        style={{
                                             backgroundColor: "#fff",
                                             maxHeight: "100%",
                                             height: "100%",
                                        }}
                                        height={133}
                                        alt="banner"
                                   />
                              </figure>
                              <div className="banner-layer banner-layer-middle">
                                   <h3 className="m-b-2">
                                        {banner?.text !== "" ? banner?.title : "HandBag"}
                                   </h3>
                                   <h4 className="m-b-3 text-primary">{banner.subtitle}</h4>
                                   <a href="demo5-shop.html" className="btn btn-sm btn-dark ls-10">
                                        Shop Now
                                   </a>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default MiniBanner