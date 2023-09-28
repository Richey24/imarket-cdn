"use client";
import { withAuth } from "@/utils/middleware";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }: { children: React.ReactNode }) {
     const sideNav = [
          { title: "Dashboard", url: "/dashboard" },
          { title: "Orders", url: "/dashboard/orders" },
          { title: "Addresses", url: "/dashboard/addresses" },
          { title: "Account details", url: "/dashboard/account-details" },
          { title: "Wishlist", url: "/wishlist" },
     ];

     return (
          <>
               <div className="page-header bg-gray-200 py-12">
                    <div className="container d-flex flex-column align-items-center">
                         <nav aria-label="breadcrumb" className="breadcrumb-nav mb-0">
                              <div className="container">
                                   <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                             <a href="demo4.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                             <a href="category.html">Shop</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                             My Account
                                        </li>
                                   </ol>
                              </div>
                         </nav>

                         <h1 className="mt-0">My Account</h1>
                    </div>
               </div>
               <div className="container account-container custom-account-container py-12">
                    <div className="row">
                         <div className="sidebar widget widget-dashboard mb-lg-0 mb-3 col-lg-3 order-0">
                              <h2 className="text-uppercase text-lg font-bold pl-3 mb-2">
                                   My Account
                              </h2>
                              <ul className="nav nav-tabs list flex-column mb-0 list-none ">
                                   {sideNav.map((link, _id) => {
                                        return (
                                             <li
                                                  key={_id}
                                                  className="nav-item before:contents-[''] before:hidden"
                                             >
                                                  <Link
                                                       href={link.url}
                                                       className=" text-lg text-gray-600"
                                                  >
                                                       {link.title}
                                                  </Link>
                                             </li>
                                        );
                                   })}

                                   <li className="nav-item before:contents-[''] before:hidden">
                                        <a className="text-lg text-gray-600" href="login.html">
                                             Logout
                                        </a>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-lg-9 order-lg-last order-1 tab-content">
                              {children}
                         </div>
                    </div>
               </div>
          </>
     );
}

export default withAuth(RootLayout);
