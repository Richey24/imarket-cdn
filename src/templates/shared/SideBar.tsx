// src/components/Sidebar.js
import React from "react";
import { Accordion } from "react-bootstrap";
import SocialIcons from "@/templates/shared/SocialIcons";
import Link from "next/link";

const Sidebar = ({ data, isOpen, toggleSidebar }) => {
     const { company, static: staticProps, categories } = data;

     return (
          <aside
               className={`mobile-menu-container tw-fixed tw-z-50 tw-top-0 tw-left-0 tw-w-[28.889rem] tw-h-screen tw-bg-[#1d1e20] tw-text-white tw-p-4 tw-transform ${
                    isOpen ? "tw-translate-x-0" : "-tw-translate-x-full"
               } tw-transition-transform tw-duration-300 tw-ease-in-out`}
          >
               {/* <div className="tw-h-full tw-w-full"> */}
               <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close" onClick={toggleSidebar}>
                         <i className="fa fa-times"></i>
                    </span>
                    <nav className="mobile-nav tw-mt-7">
                         <ul className="mobile-menu">
                              <li>
                                   <Link href="/">Home</Link>
                              </li>

                              <Accordion flush>
                                   <Accordion.Item eventKey="0">
                                        <Accordion.Header className="tw-block tw-mb-0 tw-w-full tw-text-white tw-text-2xl tw-font-normal tw-mx-4 tw-pt-4 tw-pb-4 tw-pl-3">
                                             <span className="tw-uppercase"> Categories</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                             <ul>
                                                  {categories &&
                                                       categories.map((category) => {
                                                            return (
                                                                 <li key={category.id}>
                                                                      <Link
                                                                           href={`/${category.name}`}
                                                                      >
                                                                           {category.name}
                                                                      </Link>
                                                                 </li>
                                                            );
                                                       })}
                                             </ul>
                                        </Accordion.Body>
                                   </Accordion.Item>
                                   <Accordion.Item eventKey="1">
                                        <Accordion.Header className="tw-block tw-mb-0 tw-w-full tw-text-white tw-text-2xl tw-font-normal tw-mx-4 tw-pt-4 tw-pb-4 tw-pl-3">
                                             {" "}
                                             <span className="tw-uppercase">
                                                  {" "}
                                                  Pages<span className="tip tip-hot">Hot!</span>
                                             </span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                             <ul>
                                                  <li>
                                                       <Link href="/wishlist">Wishlist</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/cart">Shopping Cart</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/checkout">Checkout</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/dashboard">Dashboard</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/login">Login</Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/forgot-password">
                                                            Forgot Password
                                                       </Link>
                                                  </li>
                                             </ul>
                                        </Accordion.Body>
                                   </Accordion.Item>
                              </Accordion>
                         </ul>

                         <ul className="mobile-menu">
                              <li>
                                   <Link href="/login">My Account</Link>
                              </li>
                              <li>
                                   <Link href="/contact-us">Contact Us</Link>
                              </li>

                              <li>
                                   <Link href="/wishlist">My Wishlist</Link>
                              </li>
                              <li>
                                   <Link href="/cart">Cart</Link>
                              </li>
                              <li>
                                   <Link href="/login" className="login-link">
                                        Log In
                                   </Link>
                              </li>
                         </ul>
                    </nav>

                    <form className="search-wrapper mb-2" action="#">
                         <input
                              type="text"
                              className="form-control mb-0"
                              placeholder="Search..."
                              required
                         />
                         <button
                              className="btn icon-search text-white bg-transparent p-0"
                              type="submit"
                         ></button>
                    </form>

                    <SocialIcons links={staticProps?.socials || []} />
               </div>
               {/* </div> */}
               {/* Sidebar content */}
          </aside>
     );
};

export default Sidebar;
