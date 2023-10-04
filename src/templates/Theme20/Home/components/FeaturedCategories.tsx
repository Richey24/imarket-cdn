import Image from "next/image";
import { templateImages } from "@/appProvider/templateImages";
import { CategoryIconComponent } from "@/utils/Categoryicon";

export const FeaturedCategories = ({ categories }) => {
     const determineSize = (index) => {
          switch (index) {
               case 0:
                    return {
                         Smsize: 4,
                         MdSize: 3,
                    };
               case 1:
                    return {
                         Smsize: 8,
                         MdSize: 6,
                    };
               case 2:
                    return {
                         Smsize: 5,
                         MdSize: 3,
                    };
               case 3:
                    return {
                         Smsize: 7,
                         MdSize: 4,
                    };
               case 4:
                    return {
                         Smsize: 4,
                         MdSize: 3,
                    };
               case 5:
                    return {
                         Smsize: 8,
                         MdSize: 5,
                    };
               default:
                    return {
                         Smsize: 4,
                         MdSize: 3,
                    };
          }
     };

     return (
          <section className="category-section mb-3">
               <div className="container">
                    <h2
                         className="section-title ls-n-10 text-center text-uppercase"
                         style={{ fontWeight: "bold", marginBottom: "15px" }}
                    >
                         Categories
                    </h2>
                    <div className="row">
                         {categories.map((cat, index) => (
                              <div
                                   className={`grid-item col-sm-${
                                        determineSize(index).Smsize
                                   } col-md-${determineSize(index).MdSize}`}
                              >
                                   <div
                                        className="product-category appear-animate"
                                        data-animation-name="fadeIn"
                                        data-animation-delay={200}
                                        style={{ backgroundColor: "#eee" }}
                                   >
                                        <a href="demo20-shop.html">
                                             <figure>
                                                  <CategoryIconComponent
                                                       categoryName={cat.name}
                                                       fontSize={"60px"}
                                                  />
                                             </figure>
                                             <div className="category-content">
                                                  <h3>{cat.name}</h3>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                         ))}

                         <div className="grid-col-sizer col-1" />
                    </div>
               </div>
          </section>
     );
};
