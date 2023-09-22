import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";

function HeaderIcons() {
     return (
          <span className="tw-flex">
               <Link href="login.html" className="header-icon" title="login">
                    <i className="icon-user-2"></i>
               </Link>

               <Link href="wishlist.html" className="header-icon" title="wishlist">
                    <i className="icon-wishlist-2"></i>
               </Link>
               {/* cart button */}
               <CartButton />
          </span>
     );
}

export default HeaderIcons;
