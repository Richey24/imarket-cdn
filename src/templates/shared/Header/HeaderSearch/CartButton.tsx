import React from "react";
import { setCartSideBarOpen } from "@/redux/global";
import { useDispatch } from "react-redux";

function CartButton({
     textColor,
     loggedInData,
     cart,
}: {
     textColor?: string;
     loggedInData: any;
     cart: any;
}) {
     const dispatch = useDispatch();

     const handleSideBarClose = () => {
          dispatch(setCartSideBarOpen());
     };

     return (
          <div className={`dropdown cart-dropdown ${textColor ? textColor : ""}`}>
               <a
                    href="#"
                    title="Cart"
                    className="dropdown-toggle dropdown-arrow cart-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                    onClick={handleSideBarClose}
               >
                    <i className="minicart-icon"></i>
                    {loggedInData && (
                         <span className="cart-count badge-circle">
                              {cart?.order_lines?.length}
                         </span>
                    )}
               </a>
          </div>
     );
}

export default CartButton;
