import React from "react";
import Skeleton from "react-loading-skeleton";
import "./PlaceholderLayout.css";

export const ProductPlaceholder = () => {
     return (
          <div className="complex-placeholder-layout" style={{ minWidth: 250, width: "100%" }}>
               <div className="content-header">
                    <Skeleton height={200} width={"100%"} />
               </div>
               <div className="content-body">
                    <Skeleton count={3} />
               </div>
          </div>
     );
};
