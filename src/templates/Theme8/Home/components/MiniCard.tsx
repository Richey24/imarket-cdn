import Image from "next/image";
import instagram1 from "../../../../assets/images/demoes/demo8/instagram/1.jpg";
import instagram2 from "../../../../assets/images/demoes/demo8/instagram/2.jpg";
import instagram3 from "../../../../assets/images/demoes/demo8/instagram/3.jpg";
import instagram4 from "../../../../assets/images/demoes/demo8/instagram/4.jpg";
import instagram5 from "../../../../assets/images/demoes/demo8/instagram/5.jpg";
import instagram6 from "../../../../assets/images/demoes/demo8/instagram/6.jpg";
import instagram7 from "../../../../assets/images/demoes/demo8/instagram/7.jpg";
import instagram8 from "../../../../assets/images/demoes/demo8/instagram/8.jpg";
import instagram9 from "../../../../assets/images/demoes/demo8/instagram/9.jpg";
import instagram10 from "../../../../assets/images/demoes/demo8/instagram/10.jpg";
import { bestSeller, featuredProduct, latestProducts } from "../data";
import ProductWidget from "@/app/components/Product/ProductWidget";

const MiniCard = () => {
     return (
          <div>
               <div className="container">
                    <div className="product-widgets row pt-1">
                         <div className="col-md-4 col-sm-6 pb-5">
                              <h4
                                   style={{ fontSize: "15px" }}
                                   className="subtitle text-left text-uppercase"
                              >
                                   Top Rated Products
                              </h4>
                              <div className="heading-spacer"></div>
                              {featuredProduct.slice(0, 3).map((product, i) => (
                                   <ProductWidget
                                        showCategory={true}
                                        category={product.productCategory}
                                        imageSrc={product.productImageUrl}
                                        productName={product.productTitle}
                                        price={product.productPrice}
                                   />
                              ))}
                         </div>
                         <div className="col-md-4 col-sm-6 pb-5">
                              <h4
                                   style={{ fontSize: "15px" }}
                                   className="subtitle text-left text-uppercase"
                              >
                                   Best Selling Products
                              </h4>
                              <div className="heading-spacer"></div>
                              {bestSeller.slice(0, 3).map((product, i) => (
                                   <ProductWidget
                                        showCategory={true}
                                        category={product.productCategory}
                                        imageSrc={product.productImageUrl}
                                        productName={product.productTitle}
                                        price={product.productPrice}
                                   />
                              ))}
                         </div>
                         <div className="col-md-4 col-sm-6 pb-5">
                              <h4
                                   style={{ fontSize: "15px" }}
                                   className="subtitle text-left text-uppercase"
                              >
                                   Latest Products
                              </h4>
                              <div className="heading-spacer"></div>
                              {latestProducts.slice(0, 3).map((product, i) => {
                                   return (
                                        <ProductWidget
                                             showCategory={true}
                                             category={product.productCategory}
                                             imageSrc={product.productImageUrl}
                                             productName={product.productTitle}
                                             price={product.productPrice}
                                        />
                                   );
                              })}
                         </div>
                    </div>
               </div>
               <div className="instagram-section">
                    <h3 className="subtitle text-uppercase">Follow On Instagram</h3>
                    <div className="heading-spacer"></div>
                    <div
                         style={{ display: "flex" }}
                         className="instagram-feed-carousel instagram-feed-list"
                    >
                         <a href="#">
                              <Image src={instagram1} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram2} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram3} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram4} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram5} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram6} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram7} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram8} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram9} width="197" height="150" alt="Feed" />
                         </a>
                         <a href="#">
                              <Image src={instagram10} width="197" height="150" alt="Feed" />
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default MiniCard;
