import Image, { StaticImageData } from "next/image";
import React from "react";

interface MiniBannerProps {
     src: StaticImageData;
     backgroundColor: string;
     title: string;
     subtitle: string;
}

export const MiniBanner: React.FC<MiniBannerProps> = ({
     src,
     backgroundColor,
     title,
     subtitle,
}) => {
     return (
          <div
               className="banner banner-md-vw-large banner-sm-vw-large mb-2"
               style={{ backgroundColor }}
          >
               <figure>
                    <Image src={src} alt="banner" width={264} height={133} />
               </figure>
               <div className="banner-layer banner-layer-middle text-right">
                    <h3 className="m-b-2">{title}</h3>
                    <h4 className="text-secondary text-uppercase">{subtitle}</h4>
                    <a href="demo13-shop.html" className="text-dark text-uppercase ls-10 py-1">
                         Shop Now
                    </a>
               </div>
          </div>
     );
};
