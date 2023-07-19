import ProductCard from "@/app/components/Product";

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
                                   <div className="widget">
                                        <h3 className="widget-title">
                                             <a
                                                  data-toggle="collapse"
                                                  href="#widget-body-2"
                                                  role="button"
                                                  aria-expanded="true"
                                                  aria-controls="widget-body-2"
                                             >
                                                  Categories
                                             </a>
                                        </h3>

                                        <div className="collapse show" id="widget-body-2">
                                             <div className="widget-body">
                                                  <ul className="cat-list">
                                                       <li>
                                                            <a
                                                                 href="#widget-category-1"
                                                                 data-toggle="collapse"
                                                                 role="button"
                                                                 aria-expanded="true"
                                                                 aria-controls="widget-category-1"
                                                            >
                                                                 Accessories
                                                                 <span className="products-count">
                                                                      (3)
                                                                 </span>
                                                                 <span className="toggle"></span>
                                                            </a>
                                                            <div
                                                                 className="collapse show"
                                                                 id="widget-category-1"
                                                            >
                                                                 <ul className="cat-sublist">
                                                                      <li>
                                                                           Caps
                                                                           <span className="products-count">
                                                                                (1)
                                                                           </span>
                                                                      </li>
                                                                      <li>
                                                                           Watches
                                                                           <span className="products-count">
                                                                                (2)
                                                                           </span>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#widget-category-2"
                                                                 className="collapsed"
                                                                 data-toggle="collapse"
                                                                 role="button"
                                                                 aria-expanded="false"
                                                                 aria-controls="widget-category-2"
                                                            >
                                                                 Dress
                                                                 <span className="products-count">
                                                                      (4)
                                                                 </span>
                                                                 <span className="toggle"></span>
                                                            </a>
                                                            <div
                                                                 className="collapse"
                                                                 id="widget-category-2"
                                                            >
                                                                 <ul className="cat-sublist">
                                                                      <li>
                                                                           Clothing
                                                                           <span className="products-count">
                                                                                (4)
                                                                           </span>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#widget-category-3"
                                                                 className="collapsed"
                                                                 data-toggle="collapse"
                                                                 role="button"
                                                                 aria-expanded="false"
                                                                 aria-controls="widget-category-3"
                                                            >
                                                                 Electronics
                                                                 <span className="products-count">
                                                                      (2)
                                                                 </span>
                                                                 <span className="toggle"></span>
                                                            </a>
                                                            <div
                                                                 className="collapse"
                                                                 id="widget-category-3"
                                                            >
                                                                 <ul className="cat-sublist">
                                                                      <li>
                                                                           Headphone
                                                                           <span className="products-count">
                                                                                (1)
                                                                           </span>
                                                                      </li>
                                                                      <li>
                                                                           Watch
                                                                           <span className="products-count">
                                                                                (1)
                                                                           </span>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#widget-category-4"
                                                                 className="collapsed"
                                                                 data-toggle="collapse"
                                                                 role="button"
                                                                 aria-expanded="false"
                                                                 aria-controls="widget-category-4"
                                                            >
                                                                 Fashion
                                                                 <span className="products-count">
                                                                      (6)
                                                                 </span>
                                                                 <span className="toggle"></span>
                                                            </a>
                                                            <div
                                                                 className="collapse"
                                                                 id="widget-category-4"
                                                            >
                                                                 <ul className="cat-sublist">
                                                                      <li>
                                                                           Shoes
                                                                           <span className="products-count">
                                                                                (4)
                                                                           </span>
                                                                      </li>
                                                                      <li>
                                                                           Bag
                                                                           <span className="products-count">
                                                                                (2)
                                                                           </span>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="widget">
                                        <h3 className="widget-title">
                                             <a
                                                  data-toggle="collapse"
                                                  href="#widget-body-3"
                                                  role="button"
                                                  aria-expanded="true"
                                                  aria-controls="widget-body-3"
                                             >
                                                  Price
                                             </a>
                                        </h3>

                                        <div className="collapse show" id="widget-body-3">
                                             <div className="widget-body pb-0">
                                                  <form action="#">
                                                       <div className="price-slider-wrapper">
                                                            <div id="price-slider"></div>
                                                       </div>

                                                       <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                                            <div className="filter-price-text">
                                                                 Price:
                                                                 <span id="filter-price-range"></span>
                                                            </div>

                                                            <button
                                                                 type="submit"
                                                                 className="btn btn-primary"
                                                            >
                                                                 Filter
                                                            </button>
                                                       </div>
                                                  </form>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="widget widget-size">
                                        <h3 className="widget-title">
                                             <a
                                                  data-toggle="collapse"
                                                  href="#widget-body-5"
                                                  role="button"
                                                  aria-expanded="true"
                                                  aria-controls="widget-body-5"
                                             >
                                                  Size
                                             </a>
                                        </h3>

                                        <div className="collapse show" id="widget-body-5">
                                             <div className="widget-body">
                                                  <ul className="cat-list">
                                                       <li className="active">
                                                            <a href="#">Extra Large</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Extra Small</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Large</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Medium</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Small</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="widget widget-brand">
                                        <h3 className="widget-title">
                                             <a
                                                  data-toggle="collapse"
                                                  href="#widget-body-5"
                                                  role="button"
                                                  aria-expanded="true"
                                                  aria-controls="widget-body-5"
                                             >
                                                  Brands
                                             </a>
                                        </h3>

                                        <div className="collapse show" id="widget-body-6">
                                             <div className="widget-body">
                                                  <ul className="cat-list">
                                                       <li>
                                                            <a href="#">Adidas</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="widget widget-color">
                                        <h3 className="widget-title">
                                             <a
                                                  data-toggle="collapse"
                                                  href="#widget-body-4"
                                                  role="button"
                                                  aria-expanded="true"
                                                  aria-controls="widget-body-4"
                                             >
                                                  Color
                                             </a>
                                        </h3>

                                        <div className="collapse show" id="widget-body-4">
                                             <div className="widget-body pb-0">
                                                  <ul className="config-swatch-list">
                                                       <li className="active">
                                                            <a
                                                                 href="#"
                                                                 style={{ backgroundColor: "#000" }}
                                                            ></a>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#"
                                                                 style={{
                                                                      backgroundColor: "#0188cc",
                                                                 }}
                                                            ></a>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#"
                                                                 style={{
                                                                      backgroundColor: "#81d742",
                                                                 }}
                                                            ></a>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#"
                                                                 style={{
                                                                      backgroundColor: "#6085a5",
                                                                 }}
                                                            ></a>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#"
                                                                 style={{
                                                                      backgroundColor: "#ab6e6e",
                                                                 }}
                                                            ></a>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#"
                                                                 style={{
                                                                      backgroundColor: "#809fbf",
                                                                 }}
                                                            ></a>
                                                       </li>
                                                       <li>
                                                            <a
                                                                 href="#"
                                                                 style={{
                                                                      backgroundColor: "#eded78",
                                                                 }}
                                                            ></a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </aside>
                    </div>
               </div>
          </div>
     );
}
