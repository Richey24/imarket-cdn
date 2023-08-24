import Image from "next/image";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Product from "@/app/components/Product";
import { templateImages } from "@/appProvider/templateImages";
import { latestProducts } from "@/templates/Theme34/Home/data";

function TabContent() {
     return (
          <div className="row row-joined h-100">
               {latestProducts.map((product, index) => {
                    if (index > 2) {
                         return (
                              <div key={product.title} className="col-sm-4 col-6">
                                   <Product
                                        imageSrc={
                                             templateImages.demo36.productImages[
                                                  `product${index + 1}`
                                             ]
                                        }
                                        productName={product.title}
                                        price={product.price}
                                   />
                              </div>
                         );
                    }
               })}
          </div>
     );
}

function SortBy() {
     return (
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
               <div className="category-filter-section bg-gray">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3 pr-lg-3 pr-sm-0 col-sm-6 order-1 order-sm-0">
                                   <div className="shop-list h-100">
                                        <h4>Sort By</h4>
                                        <Nav variant="pills" className="flex-column">
                                             <Nav.Item>
                                                  <Nav.Link eventKey="1">Casual Shoes</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="2">Spring & Autumn</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="3">Man</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="4">Accessories</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="5">Pants & Denim</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="6">
                                                       Tees, Knits & Polos
                                                  </Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="7">Watch Fashion</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="8">Woman</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="9">Accessories</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="10">
                                                       Dresses & Skirts
                                                  </Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="11">Shoes & Boots</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item>
                                                  <Nav.Link eventKey="12">Top & Blouses</Nav.Link>
                                             </Nav.Item>
                                        </Nav>

                                        <a className="view-all" href="demo36-shop.html">
                                             View All<i className="fas fa-long-arrow-alt-right"></i>
                                        </a>
                                   </div>
                              </div>

                              <div className="col-lg-3 col-sm-6 pl-lg-3 pl-sm-0 order-0">
                                   <div
                                        className="banner banner3"
                                        style={{
                                             backgroundImage: `url(${templateImages.demo36.productImages.product1})`,
                                        }}
                                   >
                                        <div className="container d-flex justify-content-center">
                                             <div className="banner-layer text-center">
                                                  <h4 className="font1">
                                                       <i className="font2">
                                                            Find the Boundaries. Push Through!
                                                       </i>
                                                  </h4>

                                                  <h3 className="text-dark mb-0">MEGA SALE</h3>
                                                  <h2 className="text-dark">70% OFF</h2>
                                                  <h5 className="coupon-sale-text justify-content-end">
                                                       <span className="text-dark">
                                                            STARTING AT
                                                       </span>
                                                       <b className="text-white align-middle">
                                                            <sup>$</sup>
                                                            <em className="align-text-top">199</em>
                                                            <sup>99</sup>
                                                       </b>
                                                  </h5>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="col-lg-6 tab-content mt-2 mt-lg-0 order-2 order-sm-0">
                                   <Tab.Content>
                                        <Tab.Pane eventKey="1">
                                             {" "}
                                             <div className="product-content products-with-divide">
                                                  <TabContent />
                                             </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2">
                                             {" "}
                                             <div className="product-content products-with-divide">
                                                  {" "}
                                                  <TabContent />
                                             </div>
                                        </Tab.Pane>
                                   </Tab.Content>
                              </div>
                         </div>
                    </div>
               </div>
          </Tab.Container>
     );
}

export default SortBy;
