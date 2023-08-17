import React from "react";
import { PromotionProps } from "../types";
import Image from "next/image";
import Link from "next/link";

export const Promotion: React.FC<PromotionProps> = (props) => {
     let promotion;

     //  if (props.size === "small") {
     //       promotion = (

     //       );
     //  } else {
     //       promotion = <div className="col-lg-6"></div>;
     //  }

     return (
          <div className={`${props.size === "large" ? "col-lg-6" : "col-lg-3"}`}>
               <div className="position-relative">
                    <figure className="m-0">
                         <Image
                              src={props.imageUrl}
                              alt=""
                              className="w-100"
                              style={{ objectFit: "cover" }}
                         />
                    </figure>
                    <div
                         className={`position-absolute top-0 w-100 h-100 fs-3 p-5 d-flex flex-column justify-content-center bg-secondary bg-opacity-25
                              ${props.position === "right" ? "align-items-end text-end" : null}
                              ${props.position === "left" ? "align-items-start text-start" : null}
                              ${
                                   props.position === "centered"
                                        ? "align-items-center text-center"
                                        : null
                              }
                              ${props.textColor === "light" ? "text-light" : null}
                              `}
                    >
                         <h2 className="fw-semibold display-5 my-0">{props.title}</h2>
                         {props.subtitle && <p className="fs-4 my-0">{props.subtitle}</p>}
                         <h5 className="my-2 display-6 fw-semibold text-secondary">
                              {props.promoText}
                         </h5>
                         {/* <h3 className="mb-0 ls-0">Mega Sale</h3> */}
                         <Link
                              href={props.promoUrl || "#"}
                              className="btn btn-dark mt-5 px-4 py-2 fs-4 fw-bold"
                         >
                              {props.buttonCaption}
                         </Link>
                    </div>
               </div>
          </div>
     );
};
