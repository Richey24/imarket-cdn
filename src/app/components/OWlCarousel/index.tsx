"use client";
"use-client";
import React from "react";
const OwlCarousel = React.lazy(() => import("react-owl-carousel"));
import { Options } from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function OwlCarouselComponent({
     children,
     className,
     isResponsive = false,
     responsive = {
          "480": {
               items: 2,
          },
          "768": {
               items: 3,
          },
          "992": {
               items: 4,
          },
     },
}: {
     children: React.ReactNode;
     className: string;
     isResponsive?: boolean;
     responsive?: { [breakpoint: string]: Options };
}) {
     return (
          <div className="container">
               {typeof window !== "undefined" && (
                    <OwlCarousel
                         className={className ? `${className} owl-theme` : "owl-theme"}
                         loop={false}
                         {...(isResponsive && { responsive: responsive })}
                         margin={10}
                         nav
                    >
                         {children}
                    </OwlCarousel>
               )}
          </div>
     );
}
