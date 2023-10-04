import React from "react";
import Image from "next/image";
export const TeamInfo = ({ name, role, image_url }) => {
     return (
          <div className="team-info mx-2">
               <figure className="zoom-effect">
                    <a href="#">
                         <div style={{width:'300px', height:'300px', overflow:'hidden'}}>
                              <img
                                   src={image_url}
                                   data-zoom-image="assets/images/demoes/demo6/about/team1.jpg"
                                   className="w-100"
                                   width={270}
                                   height={319}
                                   alt="Team"
                              />
                         </div>
                    </a>
                    <h5 className="team-name font4 mb-0">{name}</h5>
                    <h5 style={{ fontWeight: 500, color: "#555555" }}>{role}</h5>
                    <span className="prod-full-screen">
                         <i className="fas fa-search" />
                    </span>
               </figure>
          </div>
     );
};
