import React from "react";
import Skeleton from "react-loading-skeleton";  
import "./PlaceholderLayout.css";
 
export const PlaceholderLayout = () => {  
     return (
          <div className="complex-placeholder-layout">
               <div style={{ marginBottom: 10 }}>
                    <Skeleton height={30} width={"100%"} />
               </div>
               <header className="header" style={{ marginBottom: 10 }}>
                    <Skeleton height={100} width={"100%"} />
               </header>
               <div className="content-header" style={{ marginBottom: 10 }}>
                    <Skeleton height={300} />
               </div>
               <div className="content-body">
                    <Skeleton count={5} />
               </div>
               <section className="sidebar">
                    <div className="sidebar-header">
                         <Skeleton height={30}  />
                    </div>
                    <div className="sidebar-body">
                         <Skeleton count={10} />
                    </div>
               </section>
               {/* <footer className="footer">
                    <Skeleton height={40} width={200} />
               </footer> */}
          </div>
     );
};
