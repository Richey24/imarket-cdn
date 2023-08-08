import Product from "../Product";

function CollectionHalfSection({ reverse = false }: { reverse?: boolean }): JSX.Element {
     return (
          <div className="half-section">
               <div className={`flex flex-wrap ${reverse && "flex-row-reverse"}`}>
                    <div
                         className={`relative col-md-6 col-12 half-img banner banner-md-vw-small xbanner py-12 px-24 bg-img d-flex align-items-center ${
                              reverse ? "justify-content-start" : "justify-content-end"
                         }`}
                         style={{
                              backgroundImage:
                                   "url('https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
                         }}
                    >
                         <div className="banner-content z-20">
                              <h3
                                   className={`ls-n-10 m-b-3 font-black text-5xl  ${
                                        reverse ? "text-left" : "text-right"
                                   }`}
                              >
                                   MEN'S
                                   <br />
                                   COLLECTION
                              </h3>
                              <p
                                   className={`line-height-1 m-b-4 text-xl text-gray-700 ${
                                        reverse ? "text-left" : "text-right"
                                   }`}
                              >
                                   Check out this week's hottest styles.
                              </p>
                              <div className={`mb-0 ${reverse ? "text-left" : "text-right"}`}>
                                   <a
                                        href="demo6-shop.html"
                                        className="btn btn-borders btn-lg btn-outline-dark"
                                   >
                                        SHOP NOW
                                   </a>
                              </div>
                         </div>
                         <div className="bg-black opacity-25 absolute top-0 right-0 left-0 bottom-0"></div>
                    </div>

                    <div className="col-md-6 col-12 flex gap-4 mt-6 align-items-center justify-content-center p-12">
                         <Product
                              imageSrc={
                                   "https://plus.unsplash.com/premium_photo-1689596509479-daa6ba973629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                              }
                              productName={"BMW 350"}
                              price={"$1,000"}
                         />{" "}
                         <Product
                              imageSrc={
                                   "https://plus.unsplash.com/premium_photo-1689596509479-daa6ba973629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                              }
                              productName={"BMW 350"}
                              price={"$1,000"}
                         />
                    </div>
               </div>
          </div>
     );
}

export default CollectionHalfSection;
