import Image from "next/image";
import Cat1 from "../../../../assets/images/demoes/demo20/products/categories/cat-1.jpg";
import Cat2 from "../../../../assets/images/demoes/demo20/products/categories/cat-2.jpg";
import Cat3 from "../../../../assets/images/demoes/demo20/products/categories/cat-3.jpg";
import Cat4 from "../../../../assets/images/demoes/demo20/products/categories/cat-4.jpg";
import Cat5 from "../../../../assets/images/demoes/demo20/products/categories/cat-5.jpg";
import Cat6 from "../../../../assets/images/demoes/demo20/products/categories/cat-6.jpg";

export const FeaturedCategories = () => {
    return (
      <section className="category-section mb-3">
                      <div className="container">
                           <h2 className="section-title ls-n-10 text-center text-uppercase">
                                Featured Categories
                           </h2>
                           <div className="row">
                                <div className="grid-item col-sm-4 col-md-3">
                                     <div
                                          className="product-category appear-animate"
                                          data-animation-name="fadeIn"
                                          data-animation-delay={200}
                                          style={{ backgroundColor: "#eee" }}
                                     >
                                          <a href="demo20-shop.html">
                                               <figure>
                                                    <Image
                                                         src={Cat1}
                                                         alt="category"
                                                         width={280}
                                                         height={240}
                                                    />
                                               </figure>
                                               <div className="category-content">
                                                    <h3>Fashion</h3>
                                               </div>
                                          </a>
                                     </div>
                                </div>
                                <div className="grid-item col-sm-8 col-md-6">
                                     <div
                                          className="product-category appear-animate"
                                          data-animation-name="fadeIn"
                                          data-animation-delay={200}
                                          style={{ backgroundColor: "#eee" }}
                                     >
                                          <a href="demo20-shop.html">
                                               <figure>
                                                    <Image
                                                         src={Cat2}
                                                         alt="category"
                                                         width={580}
                                                         height={240}
                                                    />
                                               </figure>
                                               <div className="category-content">
                                                    <h3>Furniture</h3>
                                               </div>
                                          </a>
                                     </div>
                                </div>
                                <div className="grid-item col-sm-5 col-md-3">
                                     <div
                                          className="product-category appear-animate"
                                          data-animation-name="fadeIn"
                                          data-animation-delay={200}
                                          style={{ backgroundColor: "#eee" }}
                                     >
                                          <a href="demo20-shop.html">
                                               <figure>
                                                    <Image
                                                         src={Cat3}
                                                         alt="category"
                                                         width={280}
                                                         height={240}
                                                    />
                                               </figure>
                                               <div className="category-content">
                                                    <h3>Decore</h3>
                                               </div>
                                          </a>
                                     </div>
                                </div>
                                <div className="grid-item col-sm-7 col-md-4">
                                     <div
                                          className="product-category appear-animate"
                                          data-animation-name="fadeIn"
                                          data-animation-delay={200}
                                          style={{ backgroundColor: "#eee" }}
                                     >
                                          <a href="demo20-shop.html">
                                               <figure>
                                                    <Image
                                                         src={Cat4}
                                                         alt="category"
                                                         width={380}
                                                         height={240}
                                                    />
                                               </figure>
                                               <div className="category-content">
                                                    <h3>Accessories</h3>
                                               </div>
                                          </a>
                                     </div>
                                </div>
                                <div className="grid-item col-sm-4 col-md-3">
                                     <div
                                          className="product-category appear-animate"
                                          data-animation-name="fadeIn"
                                          data-animation-delay={200}
                                          style={{ backgroundColor: "#eee" }}
                                     >
                                          <a href="demo20-shop.html">
                                               <figure>
                                                    <Image
                                                         src={Cat5}
                                                         alt="category"
                                                         width={280}
                                                         height={240}
                                                    />
                                               </figure>
                                               <div className="category-content">
                                                    <h3>Mobile</h3>
                                               </div>
                                          </a>
                                     </div>
                                </div>
                                <div className="grid-item col-sm-8 col-md-5">
                                     <div
                                          className="product-category appear-animate"
                                          data-animation-name="fadeIn"
                                          data-animation-delay={200}
                                          style={{ backgroundColor: "#eee" }}
                                     >
                                          <a href="demo20-shop.html">
                                               <figure>
                                                    <Image
                                                         src={Cat6}
                                                         alt="category"
                                                         width={480}
                                                         height={240}
                                                    />
                                               </figure>
                                               <div className="category-content">
                                                    <h3>Footwear</h3>
                                               </div>
                                          </a>
                                     </div>
                                </div>
                                <div className="grid-col-sizer col-1" />
                           </div>
                      </div>
                 </section>
    )
  }
  