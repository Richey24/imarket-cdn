import Image from "next/image";
import { templateImages } from "@/appProvider/templateImages";
import { featuredCat } from "../data";

export const FeaturedCategories = () => {
     return (
          <section className="category-section mb-3">
               <div className="container">
                    <h2
                         className="section-title ls-n-10 text-center text-uppercase"
                         style={{ fontWeight: "bold", marginBottom: "15px" }}
                    >
                         Featured Categories
                    </h2>
                    <div className="row">
                         {featuredCat.map((data) => (
                              <div
                                   className={`grid-item col-sm-${data.Smsize} col-md-${data.MdSize}`}
                              >
                                   <div
                                        className="product-category appear-animate"
                                        data-animation-name="fadeIn"
                                        data-animation-delay={200}
                                        style={{ backgroundColor: "#eee" }}
                                   >
                                        <a href="demo20-shop.html">
                                             <figure>
                                                  <Image
                                                       src={data.Img}
                                                       alt="category"
                                                       width={280}
                                                       height={240}
                                                  />
                                             </figure>
                                             <div className="category-content">
                                                  <h3>{data.Title}</h3>
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
