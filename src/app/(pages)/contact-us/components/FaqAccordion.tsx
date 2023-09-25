import { useState } from "react";

interface AccordionAttr {
     activePanel: string;
     id: string;
     title: string;
     description: string;
     handlePanelClick: (panelId: string) => void;
}
const CardAccordion: React.FC<AccordionAttr> = (props) => {
     return (
          <div className="card card-accordion">
               <a
                    className={`card-header ${props.activePanel === props.id ? "" : "collapsed"}`}
                    href="#"
                    onClick={(event) => {
                         event.preventDefault();
                         props.handlePanelClick(props.id);
                    }}
                    aria-expanded={props.activePanel === props.id ? "true" : "false"}
                    aria-controls={props.id}
               >
                    {props.title}
               </a>
               <div
                    id={props.id}
                    className={`collapse ${props.activePanel === props.id ? "show" : ""}`}
                    data-parent="#accordion"
               >
                    <p>{props.description}</p>
               </div>
          </div>
     );
};

const FaqAccordions: React.FC<{ accordions: AccordionAttr[] }> = (props) => {
     const [activePanel, setActivePanel] = useState(null);

     const handlePanelClick = (panelId: string) => {
          if (activePanel === panelId) {
               // If the clicked panel is already active, close it.
               setActivePanel(null);
          } else {
               // Open the clicked panel.
               setActivePanel(panelId);
          }
     };
     return (
          <div id="accordion">
               {props.accordions.map((accordion, index) => (
                    <CardAccordion
                         activePanel={activePanel}
                         description={accordion.description}
                         title={accordion.title}
                         id={`collapse${index}`}
                         handlePanelClick={handlePanelClick}
                         key={index}
                    />
               ))}
          </div>
     );
};

export default FaqAccordions;
