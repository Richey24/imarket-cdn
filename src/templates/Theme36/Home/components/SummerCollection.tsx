import Image from "next/image";
import Link from "next/link";

function SummerCollection() {
     return (
          <section className="category-section text-center">
               <div className="section-title">
                    <div className="divide-txt">
                         <div className="divide-line"></div>
                         <span>
                              <strong>Summer</strong> Collection
                         </span>
                         <div className="divide-line"></div>
                    </div>
                    <h3 className="section-subtitle">
                         Amazing products added recently in our catalog
                    </h3>
               </div>

               <div className="row">
                    <div className=" col-lg-6">
                         <div className="product-category">
                              <a href="demo32-shop.html">
                                   <figure>
                                        <img
                                             src="https://images.unsplash.com/photo-1691074750897-a0e1a431176f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=716&q=80"
                                             width="265"
                                             height="265"
                                             alt="Category Banner"
                                        />
                                   </figure>

                                   <div className="category-content content-right">
                                        <h3>
                                             Sport
                                             <br />
                                             Shoes
                                        </h3>
                                   </div>
                              </a>
                         </div>
                    </div>
                    <div className="col-lg-6">
                         <div className="row">
                              <div className=" col-6 col-lg-6 height-x1">
                                   <div className="product-category">
                                        <a href="demo32-shop.html">
                                             <figure>
                                                  <img
                                                       src="https://images.unsplash.com/photo-1691573155562-bb83d1237f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                                       width="265"
                                                       height="265"
                                                       alt="Category Banner"
                                                  />
                                             </figure>

                                             <div className="category-content content-white">
                                                  <h3>For Her</h3>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                              <div className="col-6 height-x1">
                                   <div className="product-category">
                                        <a href="demo32-shop.html">
                                             <figure>
                                                  <img
                                                       src="https://images.unsplash.com/photo-1682188299490-1e6e9c98bac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=690&q=80"
                                                       width="265"
                                                       height="265"
                                                       alt="Category Banner"
                                                  />
                                             </figure>
                                        </a>
                                   </div>
                              </div>
                              <div className="col-6 height-x1">
                                   <div className="product-category">
                                        <a href="demo32-shop.html">
                                             <figure>
                                                  <img
                                                       src="https://images.unsplash.com/photo-1691405203088-92e9fcb91cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                                       width="265"
                                                       height="265"
                                                       alt="Category Banner"
                                                  />
                                             </figure>

                                             <div className="category-content content-white">
                                                  <h3>For Him</h3>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                              <div className="col-6 height-x1">
                                   <div className="product-category">
                                        <a href="demo32-shop.html">
                                             <figure>
                                                  <img
                                                       src="https://plus.unsplash.com/premium_photo-1690267599168-98dc22a96f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                                       width="265"
                                                       height="265"
                                                       alt="Category Banner"
                                                  />
                                             </figure>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default SummerCollection;
