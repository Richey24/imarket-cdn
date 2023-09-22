import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

interface InfoBoxItem {
     icon: string;
     title: string;
     description: string;
}

const InfoBox: React.FC<InfoBoxItem> = ({ icon, title, description }) => {
     return (
          <div className="info-box text-white info-box-icon-left">
               <i className={icon} />
               <div className="info-box-content pt-1">
                    <h4>{title}</h4>
                    <p>{description}</p>
               </div>
               {/* End .info-box-content */}
          </div>
     );
};

export const InfoBoxesContainer: React.FC<{ state: any }> = ({ state }) => {
     const infoBoxItems: InfoBoxItem[] = [
          {
               icon: "icon-shipping",
               title: "FREE SHIPPING & RETURN",
               // description: "Free Shipping on All Orders Over $99.",
               description: state?.shipping || "",
          },
          {
               icon: "icon-money",
               title: "MONEY BACK GUARANTEE",
               description: state?.money || "",
               // description: "100% Money Back Guarantee",
          },
          {
               icon: "icon-support",
               title: "ONLINE SUPPORT 24/7",
               description: state?.support || "",
               // description: "Lorem Ipsum Dolor Sit Amet.",
          },
     ];

     const owlCarouselOptions = {
          dots: false,
          margin: 20,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 3,
               },
          },
     };

     return (
          <div className="info-boxes-container bg-dark2 mb-4">
               <div className="container">
                    <OwlCarousel
                         className="info-boxes-slider owl-carousel owl-theme"
                         {...owlCarouselOptions}
                    >
                         {infoBoxItems.map((item, index) => (
                              <InfoBox key={index} {...item} />
                         ))}
                    </OwlCarousel>
                    {/* End .info-boxes-slider */}
               </div>
               {/* End .container */}
          </div>
     );
};
