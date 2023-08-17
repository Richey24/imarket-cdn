import React from "react";
import { MiniBanner, MiniBannerProps } from "./MiniBanner";

const MiniBanners: React.FC<{ banners: MiniBannerProps[] }> = ({ banners }) => {
     return (
          <section className="banner-container ">
               <div className="row">
                    {banners.map((banner, index) => (
                         <div className="col-md-4" key={index}>
                              <MiniBanner {...banner} />
                         </div>
                    ))}
               </div>
          </section>
     );
};
export default MiniBanners;
