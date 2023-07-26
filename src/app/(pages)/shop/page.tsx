"use client";
import ProductCard from "@/app/components/Product";
import {
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionIcon,
     AccordionPanel,
     Box,
     RangeSliderTrack,
     RangeSliderThumb,
     RangeSliderFilledTrack,
     RangeSlider,
} from "@chakra-ui/react";

export default function Home() {
     const img =
          "https://images.unsplash.com/photo-1689631281436-0123773c8cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
     return (
          <div className="">
               <div className="category-banner-container bg-gray">
                    <div
                         className="category-banner banner text-uppercase position-relative"
                         style={{
                              background:
                                   "no-repeat 50%/cover url(https://plus.unsplash.com/premium_photo-1661381007965-b21e0fb0681b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80) #ee3d43",
                         }}
                    >
                         <div className="bg-black opacity-50 absolute w-full h-full top-0 left-0"></div>
                         <div className="container position-relative">
                              <div className="banner-body text-uppercase">
                                   <h4 className="banner-subtitle text-white">
                                        over 200 products with discounts
                                   </h4>
                                   <h3 className="banner-title text-white">great deals</h3>
                                   <h5 className="banner-text text-white d-inline-block ls-n-20 align-text-bottom">
                                        Starting At
                                        <b className="coupon-sale-text bg-secondary text-white d-inline-block">
                                             $<em>299</em>99
                                        </b>
                                   </h5>
                                   <a
                                        href="demo13-shop.html"
                                        className="btn btn-primary btn-md ls-10 align-bottom"
                                   >
                                        Get Yours!
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
               <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                         <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                                   <a href="demo13.html">Home</a>
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                   Shop
                              </li>
                         </ol>
                    </div>
               </nav>
               <div className="container">
                    <div className="row">
                         <div className="col-lg-9 main-content">
                              <nav
                                   className="toolbox sticky-header"
                                   data-sticky-options="{'mobile': true}"
                              >
                                   <div className="toolbox-left">
                                        <a href="#" className="sidebar-toggle">
                                             <svg
                                                  data-name="Layer 3"
                                                  id="Layer_3"
                                                  viewBox="0 0 32 32"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <line
                                                       x1="15"
                                                       x2="26"
                                                       y1="9"
                                                       y2="9"
                                                       className="cls-1"
                                                  ></line>
                                                  <line
                                                       x1="6"
                                                       x2="9"
                                                       y1="9"
                                                       y2="9"
                                                       className="cls-1"
                                                  ></line>
                                                  <line
                                                       x1="23"
                                                       x2="26"
                                                       y1="16"
                                                       y2="16"
                                                       className="cls-1"
                                                  ></line>
                                                  <line
                                                       x1="6"
                                                       x2="17"
                                                       y1="16"
                                                       y2="16"
                                                       className="cls-1"
                                                  ></line>
                                                  <line
                                                       x1="17"
                                                       x2="26"
                                                       y1="23"
                                                       y2="23"
                                                       className="cls-1"
                                                  ></line>
                                                  <line
                                                       x1="6"
                                                       x2="11"
                                                       y1="23"
                                                       y2="23"
                                                       className="cls-1"
                                                  ></line>
                                                  <path
                                                       d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                                                       className="cls-2"
                                                  ></path>
                                                  <path
                                                       d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                                                       className="cls-2"
                                                  ></path>
                                                  <path
                                                       d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
                                                       className="cls-3"
                                                  ></path>
                                                  <path
                                                       d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                                                       className="cls-2"
                                                  ></path>
                                             </svg>
                                             <span>Filter</span>
                                        </a>

                                        <div className="toolbox-item toolbox-sort">
                                             <label>Sort By:</label>

                                             <div className="select-custom">
                                                  <select name="orderby" className="form-control">
                                                       <option value="menu_order" selected={true}>
                                                            Default sorting
                                                       </option>
                                                       <option value="popularity">
                                                            Sort by popularity
                                                       </option>
                                                       <option value="rating">
                                                            Sort by average rating
                                                       </option>
                                                       <option value="date">Sort by newness</option>
                                                       <option value="price">
                                                            Sort by price: low to high
                                                       </option>
                                                       <option value="price-desc">
                                                            Sort by price: high to low
                                                       </option>
                                                  </select>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="toolbox-right">
                                        <div className="toolbox-item toolbox-show">
                                             <label>Show:</label>

                                             <div className="select-custom">
                                                  <select name="count" className="form-control">
                                                       <option value="12">12</option>
                                                       <option value="24">24</option>
                                                       <option value="36">36</option>
                                                  </select>
                                             </div>
                                        </div>
                                   </div>
                              </nav>
                              <div className="row products-group">
                                   <div className="col-xl-3 col-md-4 col-6">
                                        <ProductCard
                                             imageSrc={img}
                                             productName={""}
                                             price={"$180"}
                                        />
                                   </div>
                                   <div className="col-xl-3 col-md-4 col-6">
                                        <ProductCard
                                             imageSrc={img}
                                             productName={""}
                                             price={"$4000"}
                                        />
                                   </div>
                                   <div className="col-xl-3 col-md-4 col-6">
                                        <ProductCard
                                             imageSrc={img}
                                             productName={""}
                                             price={"$2000"}
                                        />
                                   </div>
                                   <div className="col-xl-3 col-md-4 col-6">
                                        <ProductCard
                                             imageSrc={img}
                                             productName={""}
                                             price={"$20"}
                                        />
                                   </div>
                                   <div className="col-xl-3 col-md-4 col-6">
                                        <ProductCard
                                             imageSrc={img}
                                             productName={""}
                                             price={"$20"}
                                        />
                                   </div>
                              </div>
                         </div>
                         <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                              <div className="sidebar-wrapper">
                                   {/* side nav */}
                                   <Accordion allowMultiple allowToggle>
                                        <AccordionItem>
                                             <h2>
                                                  <AccordionButton>
                                                       <Box
                                                            as="span"
                                                            flex="1"
                                                            textAlign="left"
                                                            className=" font-semibold "
                                                       >
                                                            CATEGORIES
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                             </h2>
                                             <AccordionPanel pb={4}>
                                                  {/*  */}

                                                  <Accordion allowMultiple allowToggle>
                                                       <AccordionItem>
                                                            <h2>
                                                                 <AccordionButton>
                                                                      <Box
                                                                           as="span"
                                                                           flex="1"
                                                                           textAlign="left"
                                                                      >
                                                                           Car
                                                                      </Box>
                                                                      <AccordionIcon />
                                                                 </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={4}>
                                                                 <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                                      BMW
                                                                 </div>
                                                                 <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                                      Range Rover
                                                                 </div>
                                                                 <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                                      Benz
                                                                 </div>
                                                            </AccordionPanel>
                                                       </AccordionItem>
                                                       <AccordionItem>
                                                            <h2>
                                                                 <AccordionButton>
                                                                      <Box
                                                                           as="span"
                                                                           flex="1"
                                                                           textAlign="left"
                                                                      >
                                                                           Fashion
                                                                      </Box>
                                                                      <AccordionIcon />
                                                                 </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={4}>
                                                                 <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                                      Shoe
                                                                 </div>
                                                                 <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                                      Clothes
                                                                 </div>
                                                                 <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                                      Bag
                                                                 </div>
                                                            </AccordionPanel>
                                                       </AccordionItem>
                                                  </Accordion>
                                                  {/*  */}
                                             </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                             <h2>
                                                  <AccordionButton>
                                                       <Box
                                                            as="span"
                                                            flex="1"
                                                            textAlign="left"
                                                            className=" font-semibold "
                                                       >
                                                            PRICE
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                             </h2>
                                             <AccordionPanel pb={4}>
                                                  <RangeSlider
                                                       aria-label={["min", "max"]}
                                                       defaultValue={[10, 3000]}
                                                  >
                                                       <RangeSliderTrack>
                                                            <RangeSliderFilledTrack />
                                                       </RangeSliderTrack>
                                                       <RangeSliderThumb index={0} />
                                                       <RangeSliderThumb index={1} />
                                                  </RangeSlider>
                                             </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                             <h2>
                                                  <AccordionButton>
                                                       <Box
                                                            as="span"
                                                            flex="1"
                                                            textAlign="left"
                                                            className=" font-semibold "
                                                       >
                                                            SIZE
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                             </h2>
                                             <AccordionPanel pb={4}>
                                                  <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                       Extra Large
                                                  </div>
                                                  <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                       Extra Small
                                                  </div>
                                                  <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                       Large
                                                  </div>
                                                  <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                       Medium
                                                  </div>
                                                  <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                       Small
                                                  </div>
                                             </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                             <h2>
                                                  <AccordionButton>
                                                       <Box
                                                            as="span"
                                                            flex="1"
                                                            textAlign="left"
                                                            className=" font-semibold "
                                                       >
                                                            BRANDS
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                             </h2>
                                             <AccordionPanel pb={4}>
                                                  <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                       Adidas
                                                  </div>
                                                  <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                       Niki
                                                  </div>
                                                  <div className="text-base font-light cursor-pointer text-gray-700 hover:text-gray-900">
                                                       Puma
                                                  </div>
                                             </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                             <h2>
                                                  <AccordionButton>
                                                       <Box
                                                            as="span"
                                                            flex="1"
                                                            textAlign="left"
                                                            className=" font-semibold "
                                                       >
                                                            COLOR
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                             </h2>
                                             <AccordionPanel pb={4}>
                                                  <div className="flex gap-4">
                                                       {["red", "blue", "green"].map((color) => {
                                                            return (
                                                                 <div
                                                                      className="h-8 w-8 rounded-sm cursor-pointer"
                                                                      style={{
                                                                           backgroundColor: color,
                                                                      }}
                                                                 ></div>
                                                            );
                                                       })}
                                                  </div>
                                             </AccordionPanel>
                                        </AccordionItem>
                                   </Accordion>
                              </div>
                         </aside>
                    </div>
               </div>
          </div>
     );
}
//
