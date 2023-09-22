import "./Header.css";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import CategorySelect from "@/templates/shared/Header/HeaderLinks/CategorySelect";
import Links from "@/templates/shared/Header/HeaderLinks/Links";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const showSearch = () => {
          document.getElementById("searchDiv").classList.toggle("showSearch");
     };

     return (
          <div>
               <div className="header-wrapper position-relative">
                    <div className="header position-absolute">
                         <div className="header-top">
                              <div className="container d-flex">
                                   <div className="header-left">
                                        <div className="header-dropdown">
                                             <a href="#" className="pl-0">
                                                  USD
                                             </a>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li>
                                                            <a href="#">EUR</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">USD</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>

                                        <div className="header-dropdown">
                                             <a href="#" className="pl-0">
                                                  ENG
                                             </a>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li>
                                                            <a href="#">ENG</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">FRH</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                                        <Links />
                                        <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                                             <a href="#">Order</a>
                                             <div className="header-menu">
                                                  <ul>
                                                       <li>
                                                            <a href="#">Order Tracking</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Order History</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="header-middle sticky-header">
                              <div className="container d-flex">
                                   <div className="header-left">
                                        <MenuButton />

                                        <Logo company={company} />
                                        <PageLinks staticProps={staticProps} />
                                   </div>

                                   <div className="header-right">
                                        <a
                                             href="login.html"
                                             className="header-icon header-icon-user"
                                        >
                                             <i className="icon-user-2"></i>
                                        </a>

                                        <a
                                             href="#"
                                             className="header-icon position-relative header-wishlist"
                                        >
                                             <i className="icon-wishlist-2"></i>
                                             <span className="cart-count badge-circle bg-secondary">
                                                  0
                                             </span>
                                        </a>

                                        <div className="header-search header-search-popup header-search-category d-none d-sm-block">
                                             <a
                                                  onClick={showSearch}
                                                  href="#"
                                                  className="search-toggle header-icon"
                                                  role="button"
                                             >
                                                  <i className="icon-search-3"></i>
                                             </a>

                                             <form action="#" method="get">
                                                  <div
                                                       id="searchDiv"
                                                       className="header-search-wrapper"
                                                  >
                                                       <input
                                                            type="search"
                                                            className="form-control bg-white"
                                                            name="q"
                                                            id="q"
                                                            placeholder="Search..."
                                                            required
                                                       />
                                                       <div className="select-custom bg-white">
                                                            <CategorySelect
                                                                 categories={categories}
                                                            />
                                                       </div>
                                                       <button
                                                            className="btn icon-search-3 bg-white"
                                                            type="submit"
                                                       ></button>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Header;
