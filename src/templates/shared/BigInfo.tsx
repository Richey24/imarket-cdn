import React from "react";

interface InfoBoxItem {
     icon: string;
     title: string;
     sub: string;
     description: string;
}

const InfoBox: React.FC<InfoBoxItem> = ({ icon, title, sub, description }) => {
     return (
          <div className="feature-box feature-box-simple text-center">
               <i className={icon}></i>

               <div className="feature-box-content p-0">
                    <h3 className="text-uppercase">{title}</h3>
                    <h5>{sub}</h5>

                    <p>{description} </p>
               </div>
          </div>
     );
};

const BigInfo = (): JSX.Element => {
     const lorem =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.";
     const infoBoxItems: InfoBoxItem[] = [
          {
               icon: "sicon-earphones-alt",
               title: "CUSTOMER SUPPORT",
               sub: "Need Assistence?",
               description: lorem,
          },
          {
               icon: "sicon-credit-card",
               title: "SECURED PAYMENT",
               sub: "Safe & Fast",
               description: lorem,
          },
          {
               icon: "sicon-action-undo",
               title: "FREE RETURNS",
               sub: "Easy & Free",
               description: lorem,
          },
          {
               icon: "icon-shipping",
               title: "FREE SHIPPING",
               sub: "Orders Over $99",
               description: lorem,
          },
     ];

     return (
          <div className="row feature-boxes-container pt-2">
               {infoBoxItems.map((item) => {
                    return (
                         <div key={item.title} className="col-sm-6 col-lg-3">
                              <InfoBox
                                   icon={item.icon}
                                   title={item.title}
                                   sub={item.sub}
                                   description={item.description}
                              />
                         </div>
                    );
               })}
          </div>
     );
};

export default BigInfo;
