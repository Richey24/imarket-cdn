import Image from "next/image";

import { templateImages } from "@/appProvider/templateImages";

const SaleBanner = () => {
     return (
          <section className="sale-banner m-t-3 ">
               <div className="banner" style={{ backgroundColor: "#ffab8c" }}>
                    <Image
                         src={templateImages.demo15.bannerImage.banner5}
                         width={1120}
                         height={380}
                         style={{ backgroundColor: "#fca383" }}
                         alt="banner"
                    />
                    <div className="banner-layer banner-layer-middle banner-layer-left">
                         <h5 className="font-weight-normal m-b-3 font3 text-left">
                              Outlet Selected Items
                         </h5>
                         <h4 className="mb-0 text-left text-uppercase text-white">
                              big sale up to
                         </h4>
                         <h3 className="text-sale text-left text-white mb-0">
                              80%
                              <small>OFF</small>
                         </h3>
                    </div>
               </div>
          </section>
     );
};
export default SaleBanner;
