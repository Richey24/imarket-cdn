import Image, { StaticImageData } from "next/image";
import React from "react";

interface MiniBannerProps {
     src: StaticImageData | string;
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
               className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100"
               style={{ backgroundColor }}
          >
               <figure className="w-100">
                    <Image
                         src={src}
                         alt="banner"
                         width={264}
                         height={133}
                         className="img-fluid w-100"
                         style={{ backgroundColor: "#dadada", objectFit: "cover" }}
                    />
               </figure>
               <div className="banner-layer ">
                    <h3 className="m-b-2">{title}</h3>
                    <h5 className="text-secondary text-uppercase fw-bold">{subtitle}</h5>
                    <a
                         href="demo13-shop.html"
                         className="text-dark text-uppercase fw-bold ls-10 py-1"
                    >
                         Shop Now
                    </a>
               </div>
          </div>
     );
};
