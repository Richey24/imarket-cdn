const SideMenu = () => {
     return (
          <div className="col-lg-3 mb-2">
               <div className="side-menu-wrapper fs-4">
                    <h2 className="side-menu-title ls-10 fw-bold">Top Categories</h2>
                    <div className="side-menu-body mb-2 px-3 mx-3">
                         <ul className="side-menu pb-1">
                              <li>
                                   <a href="demo2-shop.html">
                                        <i className="icon-category-fashion" />
                                        Fashion
                                   </a>
                              </li>
                              <li>
                                   <a href="demo2-shop.html">
                                        <i className="icon-category-electronics" />
                                        Electronics
                                   </a>
                              </li>
                              <li>
                                   <a href="demo2-shop.html">
                                        <i className="icon-category-gifts" />
                                        Gifts
                                   </a>
                              </li>
                              <li>
                                   <a href="demo2-shop.html">
                                        <i className="icon-category-garden" />
                                        Home &amp; Garden
                                   </a>
                              </li>
                              <li>
                                   <a href="demo2-shop.html">
                                        <i className="icon-category-music" />
                                        Music
                                   </a>
                              </li>
                              <li>
                                   <a href="demo2-shop.html">
                                        <i className="icon-cat-sport" />
                                        Sports
                                   </a>
                              </li>
                         </ul>
                         <a href="#" className="btn btn-block btn-dark btn-lg px-0 ls-10">
                              Huge Sale -<strong>70%</strong>
                              Off
                         </a>
                    </div>
               </div>
          </div>
     );
};
export default SideMenu;
