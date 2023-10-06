import React from "react";
import "./NoSite.css";

export const NoSite = () => {
     return (
          <div className="error-container">
               <h1>
                    Sorry, the site {"you're"} looking for {"doesn't"} exist.
               </h1>
               <p>Please check the URL.</p>
          </div>
     );
};
