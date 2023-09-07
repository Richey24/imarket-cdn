import React from "react";
import Image, { StaticImageData } from "next/image";
import { templateImages } from "@/appProvider/templateImages";

interface FeatureBoxProps {
     imageUrl: StaticImageData | string;
     title: string;
     featureText: string;
     url: string;
}
const data: FeatureBoxProps[] = [
     {
          title: "Dedicated Service",
          featureText:
               "Consult our specialists for help with an order,customization, or design advice.",
          imageUrl: templateImages.demo24.IconImage.icon1,
          url: "#",
     },
     {
          title: "Money Back Guarantee",
          featureText:
               "Consult our specialists for help with an order,customization, or design advice.",
          imageUrl: templateImages.demo24.IconImage.icon2,
          url: "#",
     },
     {
          title: "Secure Payment",
          featureText:
               "Consult our specialists for help with an order, customization, or design advice.",
          imageUrl: templateImages.demo24.IconImage.icon1,
          url: "#",
     },
];
const FeatureBox: React.FC<FeatureBoxProps> = (props) => {
     return (
          <div className="col-md-4">
               <div className="feature-box feature-box-simple text-center mb-0 ">
                    <div className="feature-box-icon">
                         <Image src={props.imageUrl} alt="icon" width={45} height={45} />
                    </div>
                    <div className="feature-box-content">
                         <h3>{props.title}</h3>
                         <p>{props.featureText}</p>
                         <a href={props.url} className="btn btn-outline btn-round">
                              Get in touch
                         </a>
                    </div>
               </div>
          </div>
     );
};

const FeatureBoxes = () => {
     return (
          <div className="feature-boxes-container mb-3">
               <div className="container">
                    <div className="row">
                         {data.map((featureBox, index) => (
                              <FeatureBox
                                   key={index}
                                   imageUrl={featureBox.imageUrl}
                                   title={featureBox.title}
                                   featureText={featureBox.featureText}
                                   url={featureBox.url}
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default FeatureBoxes;
