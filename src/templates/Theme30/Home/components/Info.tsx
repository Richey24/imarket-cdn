import React from "react";
interface InfoBoxItem {
     icon: string;
     title: string;
     description: string;
}

const InfoBox: React.FC<InfoBoxItem> = ({ icon, title, description }) => {
     return (
          <div className="info-box info-box-icon-left">
               <i className={icon} />
               <div className="info-box-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
               </div>
               {/* End .info-box-content */}
          </div>
     );
};

export const InfoBoxesContainer: React.FC = () => {
     const infoBoxItems: InfoBoxItem[] = [
          {
               icon: "icon-shipping",
               title: "FREE SHIPPING & RETURN",
               description: "Free Shipping on All Orders Over $99.",
          },
          {
               icon: "icon-money",
               title: "MONEY BACK GUARANTEE",
               description: "100% Money Back Guarantee",
          },
          {
               icon: "icon-support",
               title: "ONLINE SUPPORT 24/7",
               description: "Lorem Ipsum Dolor Sit Amet.",
          },
     ];

     return (
          <div className="info-section mt-3 mb-3 row row-joined">
               {infoBoxItems.map((item, index) => (
                    <div className="col-sm-4" key={index}>
                         <InfoBox {...item} />
                    </div>
               ))}
          </div>
     );
};
