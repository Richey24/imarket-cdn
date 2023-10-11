import Product from "@/app/components/Product";
import React from "react";
// import OwlCarousel from "react-owl-carousel";
import { latestProducts } from "@/templates/Theme34/Home/data";
import { Tab, Nav } from "react-bootstrap";
import { templateImages } from "@/appProvider/templateImages";

const owlCarouselOptions = {
     dots: false,
     margin: 1,
     nav: true,
     loop: false,
     responsive: {
          "0": {
               items: 2.2,
          },
          "576": {
               items: 3,
          },
          "768": {
               items: 4,
          },
          "992": {
               items: 5,
          },
          "1200": {
               items: 6,
          },
     },
};

function TabContent() {
     return (
          // <OwlCarousel
          //      className="products-slider owl-carousel nav-circle carousel-with-bg owl-theme pb-0"
          //      {...owlCarouselOptions}
          // >
          //      {latestProducts.map((product, index) => {
          //           return (
          //                <Product
          //                     key={product.title}
          //                     imageSrc={templateImages.demo36.productImages[`product${index + 1}`]}
          //                     productName={product.title}
          //                     price={product.price}
          //                />
          //           );
          //      })}
          // </OwlCarousel>
          <div></div>
     );
}

export default function SelectedProducts() {
     return (
          <div className="tw-py-12">
               <div className="products-container product-slider-tab rounded tw-bg-white">
                    <Tab.Container id="post-popular" defaultActiveKey="viewAll">
                         <div className="heading shop-list d-flex flex-lg-row flex-column align-items-lg-center bg-gray mb-0 pl-0 pr-0 pt-2">
                              <h4 className="section-title text-transform-none mb-0 ml-0">
                                   Selected Products
                              </h4>
                              <Nav className="nav nav-tabs border-0 px-4 pb-0 m-b-3">
                                   <Nav.Item>
                                        <Nav.Link eventKey="viewAll" className="nav-link">
                                             Best Sellers
                                        </Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link eventKey="breakfast" className="nav-link">
                                             New Arrivals
                                        </Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link eventKey="cooking" className="nav-link">
                                             Best Ratings
                                        </Nav.Link>
                                   </Nav.Item>
                              </Nav>
                              <a className="view-all ml-auto" href="demo36-shop.html">
                                   View All<i className="fas fa-long-arrow-alt-right"></i>
                              </a>
                         </div>
                         <Tab.Content>
                              <Tab.Pane eventKey="viewAll">
                                   <TabContent />
                              </Tab.Pane>
                              <Tab.Pane eventKey="breakfast">
                                   <TabContent />
                              </Tab.Pane>
                              <Tab.Pane eventKey="cooking">
                                   <TabContent />
                              </Tab.Pane>
                         </Tab.Content>
                    </Tab.Container>
               </div>
          </div>
     );
}
