import Product from "@/app/components/Product";
import React from "react";
// import OwlCarousel from "react-owl-carousel";
import { latestProducts } from "@/templates/Theme34/Home/data";
import { Tab, Nav } from "react-bootstrap";
import { templateImages } from "@/appProvider/templateImages";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          576: {
               items: 2.5,
          },
          992: {
               items: 6,
          },
     },
};

function TabContent() {
     return (
          // <OwlCarousel
          //      className="products-slider owl-carousel owl-theme show-nav-hover nav-outer nav-image-center"
          //      {...owlCarouselOptions}
          // >
          //      {latestProducts.map((product, index) => {
          //           return (
          //                <Product
          //                     key={product.title}
          //                     imageSrc={templateImages.demo35.productImages[`product${index + 1}`]}
          //                     productName={product.title}
          //                     price={product.price}
          //                />
          //           );
          //      })}
          // </OwlCarousel>
          <div></div>
     );
}

export default function PopularProducts() {
     return (
          <div className="tw-py-12">
               <h2 className="section-title">Most Popular</h2>
               <p className="section-info font2">
                    All our new arrivals in a exclusive brand selection
               </p>

               <div className="products-container product-slider-tab rounded tw-bg-white">
                    <Tab.Container id="post-popular" defaultActiveKey="viewAll">
                         <Nav className="nav nav-tabs border-0 px-4 pb-0 m-b-3">
                              <Nav.Item>
                                   <Nav.Link eventKey="viewAll" className="nav-link">
                                        View All
                                   </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="breakfast" className="nav-link">
                                        Breakfast
                                   </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="cooking" className="nav-link">
                                        Cooking
                                   </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="frozen" className="nav-link">
                                        Frozen
                                   </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="fruits" className="nav-link">
                                        Fruits
                                   </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="vegetables" className="nav-link">
                                        Vegetables
                                   </Nav.Link>
                              </Nav.Item>
                         </Nav>
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
                              <Tab.Pane eventKey="frozen">
                                   <TabContent />
                              </Tab.Pane>
                              <Tab.Pane eventKey="fruits">
                                   <TabContent />
                              </Tab.Pane>
                              <Tab.Pane eventKey="vegetables">
                                   <TabContent />
                              </Tab.Pane>
                         </Tab.Content>
                    </Tab.Container>
               </div>
          </div>
     );
}
