import React from "react";

interface InfoBoxData {
     icon: string;
     title: string;
     content: string;
}

interface InfoBoxesContainerProps {
     infoBoxes: InfoBoxData[];
}

const InfoBoxesContainer: React.FC<InfoBoxesContainerProps> = ({ infoBoxes }) => (
     <div className="container mb-5">
          <div className="info-boxes-container" data-animation-name="fadeIn">
               <div className="row row-joined">
                    {infoBoxes.map((infoBox, index) => (
                         <div key={index} className="info-box info-box-icon-left col-lg-4">
                              <i className={infoBox.icon} />
                              <div className="info-box-content">
                                   <h4>{infoBox.title}</h4>
                                   <p>{infoBox.content}</p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     </div>
);

export default InfoBoxesContainer;
