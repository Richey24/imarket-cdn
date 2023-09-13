import Link from "next/link";
import React from "react";

function HeaderIcons() {
     return (
          <span className="tw-flex">
               <Link href="login.html" className="header-icon" title="login">
                    <i className="icon-user-2"></i>
               </Link>

               <Link href="wishlist.html" className="header-icon" title="wishlist">
                    <i className="icon-wishlist-2"></i>
               </Link>
               <div className="dropdown cart-dropdown">
                    <a
                         href="#"
                         title="Cart"
                         className="dropdown-toggle dropdown-arrow cart-toggle"
                         role="button"
                         data-toggle="dropdown"
                         aria-haspopup="true"
                         aria-expanded="false"
                         data-display="static"
                    >
                         <i className="minicart-icon"></i>
                         <span className="cart-count badge-circle">3</span>
                    </a>
               </div>
          </span>
     );
}

export default HeaderIcons;
