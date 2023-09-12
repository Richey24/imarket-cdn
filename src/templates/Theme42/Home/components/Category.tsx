import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import OwlCarousel from "react-owl-carousel";

function Category() {
     const owlCarouselOptions = {
          dots: false,
          margin: 20,
          nav: false,
          loop: false,
          responsive: {
               "0": {
                    items: 2,
               },
               "768": {
                    items: 3,
               },
               "991": {
                    items: 4,
               },
          },
     };

     return (
          <section className="category-section container">
               <div
                    className="d-lg-flex align-items-center "
                    data-animation-name="fadeInLeftShorter"
               >
                    <h2 className="title title-underline divider">Shop Categories</h2>
                    <a href="demo42-shop.html" className="sicon-title">
                         VIEW CATEGORIES<i className="fas fa-arrow-right"></i>
                    </a>
               </div>
               <OwlCarousel className="owl-carousel owl-theme " {...owlCarouselOptions}>
                    <div className="product-category">
                         <a href="demo42-shop.html">
                              <figure>
                                   <Image
                                        src={templateImages.demo42.categoryImage.category1}
                                        alt="category"
                                        width="250"
                                        height="250"
                                   />
                              </figure>
                         </a>
                         <div className="category-content">
                              <h3 className="category-title">Auto Parts</h3>
                              <ul className="sub-categories">
                                   <li>
                                        <a href="#">Batteries, Starting And Charging</a>
                                   </li>
                                   <li>
                                        <a href="#">Brakes And Traction Control</a>
                                   </li>
                                   <li>
                                        <a href="#">Climate Control</a>
                                   </li>
                                   <li>
                                        <a href="#">Collision And Hardware</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="product-category">
                         <a href="demo42-shop.html">
                              <figure>
                                   <Image
                                        src={templateImages.demo42.categoryImage.category2}
                                        alt="category"
                                        width="250"
                                        height="250"
                                   />
                              </figure>
                         </a>
                         <div className="category-content">
                              <h3 className="category-title">Interior Accessories</h3>
                              <ul className="sub-categories">
                                   <li>
                                        <a href="#">Alarm And Security</a>
                                   </li>
                                   <li>
                                        <a href="#">Dash Covers, Headliners And Visor</a>
                                   </li>
                                   <li>
                                        <a href="#">Seat Covers And Seats Accessories</a>
                                   </li>
                                   <li>
                                        <a href="#">Sun / Heat Protection</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="product-category">
                         <a href="demo42-shop.html">
                              <figure>
                                   <Image
                                        src={templateImages.demo42.categoryImage.category3}
                                        alt="category"
                                        width="250"
                                        height="250"
                                   />
                              </figure>
                         </a>
                         <div className="category-content">
                              <h3 className="category-title">External Accessories</h3>
                              <ul className="sub-categories">
                                   <li>
                                        <a href="#">Antenna Cables And Masts</a>
                                   </li>
                                   <li>
                                        <a href="#">Decals And Graphics</a>
                                   </li>
                                   <li>
                                        <a href="#">Exterior Lighting</a>
                                   </li>
                                   <li>
                                        <a href="#">License Plate And Accessories</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="product-category">
                         <a href="demo42-shop.html">
                              <figure>
                                   <Image
                                        src={templateImages.demo42.categoryImage.category4}
                                        alt="category"
                                        width="250"
                                        height="250"
                                   />
                              </figure>
                         </a>
                         <div className="category-content">
                              <h3 className="category-title">Performance</h3>
                              <ul className="sub-categories">
                                   <li>
                                        <a href="#">Body, Suspension, And Steering</a>
                                   </li>
                                   <li>
                                        <a href="#">Exhaust</a>
                                   </li>
                                   <li>
                                        <a href="#">Fuel System</a>
                                   </li>
                                   <li>
                                        <a href="#">Power Adders Components</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </OwlCarousel>
          </section>
     );
}

export default Category;
