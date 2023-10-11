import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";

function HeaderIcons({ loggedInData, cart }) {
     return (
          <span className="tw-flex">
               {!loggedInData && (
                    <Link href="/login" className="header-icon" title="login">
                         <i className="icon-user-2"></i>
                    </Link>
               )}

               <Link href="/dashboard/wishlist" className="header-icon" title="wishlist">
                    <i className="icon-wishlist-2"></i>
               </Link>
               {/* cart button */}
               <CartButton loggedInData={loggedInData} cart={cart} />
          </span>
     );
}

export default HeaderIcons;
