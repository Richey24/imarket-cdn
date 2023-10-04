import Link from "next/link";
import React from "react";

const Dashboard = async () => {
     return (
          <div className="dashboard-content">
               <p>
                    Hello <strong className="text-dark">Editor</strong> (not
                    <strong className="text-dark">Editor</strong>?
                    <Link href="login.html" className="btn btn-link ">
                         Log out
                    </Link>
                    )
               </p>

               <p>
                    From your account dashboard you can view your
                    <a className="btn btn-link link-to-tab" href="#order">
                         recent orders
                    </a>
                    , manage your
                    <a className="btn btn-link link-to-tab" href="#address">
                         shipping and billing addresses
                    </a>
                    , and
                    <a className="btn btn-link link-to-tab" href="#edit">
                         edit your password and account details.
                    </a>
               </p>

               <div className="mb-4"></div>

               <div className="row row-lg">
                    <div className="col-6 col-md-4">
                         <div className="feature-box p-12 text-center border border-solidtext-center pb-4">
                              <Link href="/dashboard/orders" className="link-to-tab">
                                   <i className="sicon-social-dropbox"></i>
                              </Link>
                              <div className="mb-2 uppercase">
                                   <div className="text-lg font-semibold">ORDERS</div>
                              </div>
                         </div>
                    </div>

                    <div className="col-6 col-md-4">
                         <div className="feature-box p-12 text-center border border-solidtext-center pb-4">
                              <Link href="/dashboard/addresses" className="link-to-tab">
                                   <i className="sicon-location-pin"></i>
                              </Link>
                              <div className="mb-2 uppercase">
                                   <div className="text-lg font-semibold">ADDRESSES</div>
                              </div>
                         </div>
                    </div>

                    <div className="col-6 col-md-4">
                         <div className="feature-box p-12 text-center border border-solidtext-center pb-4">
                              <Link href="/dashboard/account-details" className="link-to-tab">
                                   <i className="icon-user-2"></i>
                              </Link>
                              <div className="mb-2 uppercase p-0">
                                   <div className="text-lg font-semibold">ACCOUNT DETAILS</div>
                              </div>
                         </div>
                    </div>

                    <div className="col-6 col-md-4">
                         <div className="feature-box p-12 text-center border border-solidtext-center pb-4">
                              <Link href="/wishlist/">
                                   <i className="sicon-heart"></i>
                              </Link>
                              <div className="mb-2 uppercase">
                                   <div className="text-lg font-semibold">WISHLIST</div>
                              </div>
                         </div>
                    </div>

                    <div className="col-6 col-md-4">
                         <div className="feature-box p-12 text-center border border-solidtext-center pb-4">
                              <Link href="login.html">
                                   <i className="sicon-logout"></i>
                              </Link>
                              <div className="mb-2 uppercase">
                                   <div className="text-lg font-semibold">LOGOUT</div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
export default Dashboard;
