import Link from "next/link";
import CategorySelect from "../HeaderLinks/CategorySelect";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";
import Logo from "./Logo";
import HeaderIcons from "./headerIcons";

function HeaderSearch({
     company,
     categories,
     className,
     menuBtnTextColor,
     showCategory = true,
     showPhone = true,
}: {
     company: any;
     categories: any;
     className?: string;
     menuBtnTextColor?: string;
     showCategory?: boolean;
     showPhone?: boolean;
}): JSX.Element {
     return (
          <div className={`header-middle sticky-header ${className}`}>
               <div className="container">
                    <div className="header-left col-lg-2 w-auto pl-0">
                         <MenuButton textColor={menuBtnTextColor} />
                         {/* logo */}
                         <Logo company={company} />
                    </div>

                    <div className="header-right w-lg-max">
                         <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mt-0">
                              <a href="#" className="search-toggle" role="button">
                                   <i className="icon-search-3"></i>
                              </a>
                              <form action="#" method="get">
                                   <div className="header-search-wrapper">
                                        <input
                                             type="search"
                                             className="form-control"
                                             name="q"
                                             id="q"
                                             placeholder="Search..."
                                             required
                                        />
                                        {showCategory && (
                                             <div className="select-custom">
                                                  <CategorySelect categories={categories} />
                                             </div>
                                        )}

                                        <button
                                             className="btn icon-magnifier p-0"
                                             title="search"
                                             type="submit"
                                        ></button>
                                   </div>
                              </form>
                         </div>

                         {showPhone && (
                              <div className="header-contact d-none d-lg-flex pl-4 pr-4">
                                   <i className="icon-phone-2"></i>
                                   <h6 className="!tw-text-inherit">
                                        <span>Call us now</span>
                                        <Link
                                             href={`tel:${company?.phone}`}
                                             className={`font1 ${
                                                  className &&
                                                  className.includes("text-dark") &&
                                                  "text-dark"
                                             }`}
                                        >
                                             {company?.phone}
                                        </Link>
                                   </h6>
                              </div>
                         )}

                         <HeaderIcons />
                    </div>
               </div>
          </div>
     );
}

export default HeaderSearch;
