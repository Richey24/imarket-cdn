import Image from "next/image";
// import { products } from "../data";
import "../../Header/Header.css";
import { templateImages } from "@/appProvider/templateImages";

const Product = ({ setQuickView, products }) => {
     const showDrop = () => {
          document.getElementById("fashionList").classList.toggle("showDrop");
     };

     const showDiv = (product: object) => {
          const theDiv = document.getElementById("quickViewDiv");
          if (theDiv) {
               theDiv.style.display = "block";
               setQuickView(product);
          }
     };

     return (
          <div className="main-container mt-3 mt-md-0">
               <div className="container-fluid">
                    <div className="category-list" id="category-list">
                         <ul className="nav category-list-nav">
                              <li className="nav-item green">
                                   <a href="#cat-1" className="nav-link">
                                        <span className="cat-list-icon">
                                             <i className="icon-cat-shirt"></i>
                                        </span>
                                        <span className="cat-list-text">Fashion &amp; Clothes</span>
                                   </a>
                              </li>
                              <li className="nav-item orange">
                                   <a href="#cat-2" className="nav-link">
                                        <span className="cat-list-icon">
                                             <i className="icon-cat-computer"></i>
                                        </span>
                                        <span className="cat-list-text">
                                             Electronics &amp; Computers
                                        </span>
                                   </a>
                              </li>
                              <li className="nav-item green">
                                   <a href="#cat-3" className="nav-link">
                                        <span className="cat-list-icon">
                                             <i className="icon-cat-toys"></i>
                                        </span>
                                        <span className="cat-list-text">Toys &amp; Hobbies</span>
                                   </a>
                              </li>
                              <li className="nav-item yellow">
                                   <a href="#cat-4" className="nav-link">
                                        <span className="cat-list-icon">
                                             <i className="icon-cat-garden"></i>
                                        </span>
                                        <span className="cat-list-text">Home &amp; Garden</span>
                                   </a>
                              </li>
                              <li className="nav-item gray">
                                   <a href="#cat-5" className="nav-link">
                                        <span className="cat-list-icon">
                                             <i className="icon-cat-sport"></i>
                                        </span>
                                        <span className="cat-list-text">Sports &amp; Fitness</span>
                                   </a>
                              </li>
                              <li className="nav-item lightblue">
                                   <a href="#cat-6" className="nav-link">
                                        <span className="cat-list-icon">
                                             <i className="icon-cat-gift"></i>
                                        </span>
                                        <span className="cat-list-text">Gifts</span>
                                   </a>
                              </li>
                         </ul>
                    </div>
                    <div className="category-details">
                         <section id="cat-1" className="category-section">
                              <div
                                   className="category-title"
                                   data-animation-name="fadeInDownShorter"
                                   data-animation-delay="200"
                              >
                                   <div className="dropdown">
                                        <a
                                             onClick={showDrop}
                                             style={{ cursor: "pointer", color: "black" }}
                                             className="dropdown-toggle cat-title"
                                             data-display="static"
                                             data-toggle="dropdown"
                                        >
                                             Fashion &amp; Clothes
                                        </a>
                                        <div id="fashionList" className="dropdown-menu">
                                             <ul className="row m-0">
                                                  <li className="col-6 col-md-4 col-lg-2">
                                                       <a href="#">FASHION</a>
                                                       <ul>
                                                            <li>
                                                                 <a href="#">Women</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Men</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Accessories</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Jewelry</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Shoes</a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="col-6 col-md-4 col-lg-2">
                                                       <a href="#">NEW ARRIVALS</a>
                                                       <ul>
                                                            <li>
                                                                 <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Tops</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Bottoms</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Swim</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Accessories</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Shoes</a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="col-6 col-md-4 col-lg-2">
                                                       <a href="#">JACKETS</a>
                                                       <ul>
                                                            <li>
                                                                 <a href="#">Bomber</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Leather + Suede</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Denim</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Parkas + Anoraks</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Blazers</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Dusters</a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="col-6 col-md-4 col-lg-2">
                                                       <a href="#">TOP</a>
                                                       <ul>
                                                            <li>
                                                                 <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Bodysuits</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Cropped</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Tanks + Tees</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Graphic Tees</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Sweaters</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Cardigans</a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li className="col-6 col-md-4 col-lg-2">
                                                       <a href="#">DRESSES</a>
                                                       <ul>
                                                            <li>
                                                                 <a href="#">Casual</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Cocktail</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Mini</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Midi</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Maxi</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Rompers</a>
                                                            </li>
                                                            <li>
                                                                 <a href="#">Plus Size</a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <a href="demo19-shop.html" className="btn btn-dark">
                                        View All
                                   </a>
                              </div>
                              <div
                                   style={{ display: "flex", columnGap: "20px" }}
                                   className="products-slider custom-products"
                              >
                                   {products &&
                                        products.map((product, i) => (
                                             <div
                                                  key={i}
                                                  className="product-default inner-quickview inner-icon"
                                             >
                                                  <figure>
                                                       <a href="demo19-product.html">
                                                            <Image
                                                                 src={product.productImageUrl}
                                                                 width="205"
                                                                 height="205"
                                                                 alt="product"
                                                            />
                                                       </a>
                                                       <div className="label-group">
                                                            <div className="product-label label-hot">
                                                                 HOT
                                                            </div>
                                                       </div>
                                                       <div className="btn-icon-group">
                                                            <a
                                                                 href="#"
                                                                 className="btn-icon btn-add-cart product-type-simple"
                                                            >
                                                                 <i className="icon-shopping-cart"></i>
                                                            </a>
                                                       </div>
                                                       <a
                                                            onClick={() => showDiv(product)}
                                                            style={{ cursor: "pointer" }}
                                                            className="btn-quickview"
                                                            title="Quick View"
                                                       >
                                                            Quick View
                                                       </a>
                                                  </figure>
                                                  <div className="product-details">
                                                       <div className="title-wrap">
                                                            <h3 className="product-title">
                                                                 <a href="demo19-product.html">
                                                                      {product.productTitle}
                                                                 </a>
                                                            </h3>
                                                            <a
                                                                 href="wishlist.html"
                                                                 title="Wishlist"
                                                                 className="btn-icon-wish"
                                                            >
                                                                 <i className="icon-heart"></i>
                                                            </a>
                                                       </div>
                                                       <div className="price-box">
                                                            <span className="product-price">
                                                                 ${product.productPrice}.00
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                              </div>
                              <div
                                   className="category-description"
                                   data-animation-name="fadeInDownShorter"
                                   data-animation-delay="200"
                              >
                                   <div className="row">
                                        <div className="col-lg-6">
                                             <div
                                                  className="banner banner1"
                                                  style={{ backgroundColor: "#6db2d9" }}
                                             >
                                                  <figure>
                                                       <Image
                                                            src={
                                                                 templateImages.demo19.bannerImage
                                                                      .banner2
                                                            }
                                                            alt="banner"
                                                            width="825"
                                                            height="178"
                                                       />
                                                  </figure>
                                                  <div className="banner-layer banner-layer-middle banner-layer-left">
                                                       <h5 className="m-b-2">
                                                            Find the Boundaries. Push Through!
                                                       </h5>
                                                       <h3 className="text-white mb-0">
                                                            Summer Sale
                                                       </h3>
                                                       <h4 className="text-uppercase text-white mb-0">
                                                            30% off
                                                       </h4>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-6">
                                             <div
                                                  className="banner banner2"
                                                  style={{ backgroundColor: "#f4f4f4" }}
                                             >
                                                  <figure>
                                                       <Image
                                                            src={
                                                                 templateImages.demo19.bannerImage
                                                                      .banner3
                                                            }
                                                            alt="banner"
                                                            width="825"
                                                            height="178"
                                                       />
                                                  </figure>
                                                  <div className="banner-layer banner-layer-center text-center">
                                                       <h3 className="text-uppercase ls-10 m-b-1">
                                                            Deal Promos
                                                       </h3>
                                                       <h5 className="text-body text-uppercase mb-0">
                                                            Starting at $99
                                                       </h5>
                                                  </div>
                                                  <div className="banner-layer banner-layer-middle banner-layer-left">
                                                       <h6 className="bg-dark text-white text-center mb-0">
                                                            50
                                                            <small>
                                                                 <sup>%</sup>
                                                                 <sub>off</sub>
                                                            </small>
                                                       </h6>
                                                  </div>
                                                  <div className="banner-layer banner-layer-right banner-layer-top">
                                                       <h6 className="bg-dark text-white text-center mb-0">
                                                            30
                                                            <small>
                                                                 <sup>%</sup>
                                                                 <sub>off</sub>
                                                            </small>
                                                       </h6>
                                                  </div>
                                                  <div className="banner-layer banner-layer-right banner-layer-bottom">
                                                       <h6 className="bg-dark text-white text-center mb-0">
                                                            70
                                                            <small>
                                                                 <sup>%</sup>
                                                                 <sub>off</sub>
                                                            </small>
                                                       </h6>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>
               </div>
          </div>
     );
};

export default Product;
