const SideMenu = () => {
     return (
          <div className="side-menu-wrapper m-b-3 border-0">
               <h2 className="side-menu-title bg-primary text-white">
                    <i className="fas fa-bars" />
                    Shop By Category
               </h2>
               <nav className="side-nav border border-top-0">
                    <ul className="menu-vertical sf-arrows">
                         <li>
                              <a href="demo15-shop.html">Accessories</a>
                         </li>
                         <li>
                              <a href="demo15-shop.html">Dress</a>
                         </li>
                         <li>
                              <a href="demo15-shop.html">Electronics</a>
                         </li>
                         <li>
                              <a href="demo15-shop.html">Fashion</a>
                         </li>
                         <li>
                              <a href="demo15-shop.html">Headphone</a>
                         </li>
                         <li>
                              <a href="demo15-shop.html">Trousers</a>
                         </li>
                    </ul>
               </nav>
          </div>
     );
};
export default SideMenu;
