import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";

function HeaderIcons({ loggedInData }) {
     return (
          <span className="tw-flex">
               {!loggedInData && (
                    <Link href="/login" className="header-icon" title="login">
                         <i className="icon-user-2"></i>
                    </Link>
               )}

               <Link href="wishlist.html" className="header-icon" title="wishlist">
                    <i className="icon-wishlist-2"></i>
               </Link>
               {/* cart button */}
               <CartButton loggedInData={loggedInData} />
          </span>
     );
}

export default HeaderIcons;
