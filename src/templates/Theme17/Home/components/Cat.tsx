import React from "react";

const Cat = ({ categories }) => {
     return (
          <div style={{ paddingTop: "40px" }} className="section-5 category-section container">
               <h2 className="section-title text-center">Shop By Category</h2>

               <div className="border-container">
                    <div className="row">
                         {categories.map((cat, index) => (
                              <div className="col-md-4 col-6" key={index}>
                                   <a
                                        className="btn btn-dark text-white btn-cat"
                                        role="button"
                                        href="demo17-shop.html"
                                   >
                                        {cat.name}
                                   </a>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Cat;
