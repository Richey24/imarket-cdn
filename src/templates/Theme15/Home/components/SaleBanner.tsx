import Image from "next/image";

import banner4 from "../../../../assets/images/demoes/demo15/banners/banner-4.jpg";

const SaleBanner = () => {
     return (
          <section className="sale-banner m-t-3 ">
               <div className="banner" style={{ backgroundColor: "#ffab8c" }}>
                    <Image
                         src={banner4}
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
