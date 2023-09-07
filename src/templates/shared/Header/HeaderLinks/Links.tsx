import Link from "next/link";

function Links(): JSX.Element {
     return (
          <>
               <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                    <div className="header-menu">
                         <ul>
                              <li>
                                   <Link href="/dashboard">Dashboard</Link>
                              </li>
                              <li>
                                   <Link href="/cart">Cart</Link>
                              </li>
                              {/* <li>
                                   <Link href="cart.html">Checkout</Link>
                              </li> */}
                              <li>
                                   <Link href="/wishlist">Wishlist</Link>
                              </li>
                              <li>
                                   <Link href="/about">About Us</Link>
                              </li>
                              <li>
                                   <Link href="/contact-us">Contact Us</Link>
                              </li>
                         </ul>
                    </div>
               </div>
               <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                    <Link href="#">Order</Link>
                    <div className="header-menu">
                         <ul>
                              <li>
                                   <Link href="#">Order Tracking</Link>
                              </li>
                              <li>
                                   <Link href="#">Order History</Link>
                              </li>
                         </ul>
                    </div>
               </div>
          </>
     );
}

export default Links;
