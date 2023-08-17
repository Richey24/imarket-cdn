import React from "react";
import { TestimonialProps } from "../types";
import Image from "next/image";

export const Testimonial: React.FC<TestimonialProps> = ({
     clientImageUrl,
     title,
     position,
     message,
}) => {
     return (
          <div className="testimonial">
               <div className="testimonial-owner">
                    <figure>
                         <Image src={clientImageUrl} alt="client" width={400} height={400} />
                    </figure>

                    <div>
                         <h4 className="testimonial-title">{title}</h4>
                         <span>{position}</span>
                    </div>
               </div>
               <blockquote className="ml-4 pr-0">
                    <p>{message}</p>
               </blockquote>
          </div>
     );
};
