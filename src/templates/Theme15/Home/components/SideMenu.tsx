const SideMenu = ({ categories }) => {
     return (
          <div className="side-menu-wrapper m-b-3 border-0">
               <h2 className="side-menu-title bg-primary text-white">
                    <i className="fas fa-bars" />
                    Shop By Category
               </h2>
               <nav className="side-nav border border-top-0">
                    <ul className="menu-vertical sf-arrows">
                         {categories.map((cat, index) => (
                              <li key={index}>
                                   <a href="demo15-shop.html">{cat.name}</a>
                              </li>
                         ))}
                    </ul>
               </nav>
          </div>
     );
};
export default SideMenu;
