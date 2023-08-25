import Image, { StaticImageData } from "next/image";
import React from "react";

export interface MiniBannerProps {
     src: StaticImageData | string;
     backgroundColor: string;
     title: string;
     subtitle?: string;
     price: string;
     priceSup?: string;
}

export const MiniBanner: React.FC<MiniBannerProps> = ({
     src,
     backgroundColor,
     title,
     subtitle,
     price,
     priceSup,
}) => {
     return (
          <>
               <div className="banner">
                    <Image
                         src={src}
                         width={360}
                         height={250}
                         style={{ backgroundColor }}
                         alt="banner"
                    />
                    <div className="banner-layer banner-layer-right banner-layer-middle text-right">
                         <h3 className="m-b-1 font3 text-right text-primary">{title}</h3>
                         <h5 className="ls-n-20 d-inline-block m-r-2 text-left">FROM</h5>
                         <h4 className="ls-n-20 text-price float-right text-left">
                              $<b>{price}</b>
                              {priceSup}
                         </h4>
                         <div className="mb-0 clearfix text-right">
                              <a href="demo15-shop.html" className="btn btn-modern btn-sm btn-dark">
                                   Shop Now!
                              </a>
                         </div>
                    </div>
               </div>
          </>
     );
};
