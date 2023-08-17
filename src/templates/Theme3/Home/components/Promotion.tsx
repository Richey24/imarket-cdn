import React from "react";
import { PromotionProps } from "../types";
import Image from "next/image";
import Link from "next/link";

export const Promotion: React.FC<PromotionProps> = (props) => {
     return (
          <div
               className="col-sm-6 col-lg-3"
               data-animation-name="fadeInLeftShorter"
               data-animation-delay={100}
               data-animation-duration={1000}
          >
               <div className="home-banner banner banner-sm-vw mb-2">
                    <Image
                         src={props.imageUrl}
                         style={{ backgroundColor: "#ccc" }}
                         width={419}
                         height={629}
                         alt="Banner"
                    />
                    <div
                         className={`banner-layer banner-layer-${props.verticalAlignment} text-left`}
                    >
                         <h3
                              className={`m-b-2 ${
                                   props.textColor ? `text-${props.textColor}` : null
                              }`}
                         >
                              {props.title}
                         </h3>
                         <h4
                              className={`m-b-3 ${
                                   props.textColor ? `text-${props.textColor}` : null
                              }`}
                         >
                              {props.subtitle}
                         </h4>
                         <a
                              href="demo3-shop.html"
                              className={`btn  btn-dark ${
                                   props.textColor ? `text-${props.textColor}` : null
                              }`}
                              role="button"
                         >
                              {props.buttonCaption}
                         </a>
                    </div>
               </div>
          </div>

          // <div className="col-sm-6 col-lg-3">
          //      <div className="home-banner banner banner-sm-vw mb-2">
          //           <figure className="m-0">
          //                <Image
          //                     src={props.imageUrl}
          //                     alt=""
          //                     className="w-100"
          //                     style={{ objectFit: "cover" }}
          //                />
          //           </figure>
          //           <div
          //                className={`position-absolute top-0 w-100 h-100 fs-3 p-5 d-flex flex-column ${
          //                     props.verticalAlignment
          //                          ? `justify-content-${props.verticalAlignment}`
          //                          : "justify-content-center"
          //                } bg-secondary bg-opacity-25
          //                     ${props.position === "right" ? "align-items-end text-end" : null}
          //                     ${props.position === "left" ? "align-items-start text-start" : null}
          //                     ${
          //                          props.position === "centered"
          //                               ? "align-items-center text-center"
          //                               : null
          //                     }
          //                     ${props.textColor === "light" ? "text-light" : null}
          //                     `}
          //           >
          //                <h2 className="fw-semibold display-5 my-0">{props.title}</h2>
          //                {props.subtitle && <p className="fs-4 my-0">{props.subtitle}</p>}
          //                <h5 className="my-2 display-6 fw-semibold text-secondary">
          //                     {props.promoText}
          //                </h5>
          //                {/* <h3 className="mb-0 ls-0">Mega Sale</h3> */}
          //                <Link
          //                     href={props.promoUrl || "#"}
          //                     className="btn btn-dark mt-5 px-4 py-2 fs-4 fw-bold"
          //                >
          //                     {props.buttonCaption}
          //                </Link>
          //           </div>
          //      </div>
          // </div>
     );
};
