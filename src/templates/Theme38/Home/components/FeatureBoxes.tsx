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
          <div className="feature-boxes-container container pt-2">
               <div className="row justify-content-center">
                    <div
                         className="col-sm-6 col-lg-4 "
                         data-animation-name="fadeInLeftShorter"
                         data-animation-delay={500}
                         data-animation-duration={1000}
                    >
                         <div className="feature-box feature-box-simple text-center">
                              <i className="icon-earphones-alt" />
                              <div className="feature-box-content p-0">
                                   <h3 className="text-capitalize">Customer Support</h3>
                                   <h5>Need Assistence?</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                              {/* End .feature-box-content */}
                         </div>
                         {/* End .feature-box */}
                    </div>
                    {/* End .col-lg-3 */}
                    <div
                         className="col-sm-6 col-lg-4 "
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                         data-animation-duration={1000}
                    >
                         <div className="feature-box feature-box-simple text-center">
                              <i className="icon-credit-card" />
                              <div className="feature-box-content p-0">
                                   <h3 className="text-capitalize">Secure Payment</h3>
                                   <h5>Safe &amp; Fast</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                              {/* End .feature-box-content */}
                         </div>
                         {/* End .feature-box */}
                    </div>
                    {/* End .col-lg-3 */}
                    <div
                         className="col-sm-6 col-lg-4 "
                         data-animation-name="fadeInRightShorter"
                         data-animation-delay={500}
                         data-animation-duration={1000}
                    >
                         <div className="feature-box feature-box-simple text-center">
                              <i className="icon-action-undo" />
                              <div className="feature-box-content p-0">
                                   <h3 className="text-capitalize">Free Returns</h3>
                                   <h5>Easy &amp; Free</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                              {/* End .feature-box-content */}
                         </div>
                         {/* End .feature-box */}
                    </div>
                    {/* End .col-lg-3 */}
               </div>
          </div>
     );
};

export default FeatureBoxes;
