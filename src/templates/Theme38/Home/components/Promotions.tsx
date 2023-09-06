import Image, { StaticImageData } from "next/image";
import React from "react";
import { PromotionProps } from "../types";

const Promotion: React.FC<PromotionProps> = (props) => {
     return (
          <div className="col-xl-6 mb-2">
               <div
                    className="banner banner3 d-flex flex-wrap align-items-center bg-gray h-100 "
                    data-animation-name="fadeInRightShorter"
                    data-animation-delay={100}
               >
                    <div className="col-sm-4 text-center">
                         <h3 className="font5 mb-0">{props.title}</h3>
                         <h2 className="text-uppercase mb-0">{props.promoText}</h2>
                    </div>
                    <div className="col-sm-4">
                         <Image src={props.bannerUrl} alt="banner" width={232} height={124} />
                    </div>
                    <div className="col-sm-4 text-center">
                         <a href="demo27-shop.html" className="btn btn-dark">
                              Shop All Sale
                         </a>
                    </div>
               </div>
          </div>
     );
};
const Promotions: React.FC<{ promotions: PromotionProps[] }> = (props) => {
     return (
          <section className="trendy-section mb-2">
               <div className="container">
                    <div className="row">
                         {props.promotions.map((promotion, index) => (
                              <Promotion {...promotion} key={index} />
                         ))}
                    </div>
               </div>
          </section>
     );
};
export default Promotions;
