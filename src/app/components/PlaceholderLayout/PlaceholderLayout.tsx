import React from "react";
import Skeleton from "react-loading-skeleton";  
import "./PlaceholderLayout.css";
 
export const PlaceholderLayout = () => {  
     return (
          <div className="complex-placeholder-layout">
               <header className="header">
                    <Skeleton height={60} width={300} />
               </header>
               <main className="main">
                    <section className="content">
                         <div className="content-header">
                              <Skeleton height={30} width={200} />
                         </div>
                         <div className="content-body">
                              <Skeleton count={5} />
                         </div>
                    </section>
                    <section className="sidebar">
                         <div className="sidebar-header">
                              <Skeleton height={30} width={150} />
                         </div>
                         <div className="sidebar-body">
                              <Skeleton count={3} />
                         </div>
                    </section>
               </main>
               <footer className="footer">
                    <Skeleton height={40} width={200} />
               </footer>
          </div>
     );
};
