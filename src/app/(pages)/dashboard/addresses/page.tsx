"use client";
import BillingAddress from "@/app/components/BillingAddress";
import ShippingAddress from "@/app/components/ShippingAddress";
import { useGetBillingAddress } from "@/appProvider/hooks/dashboard/addresses";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Addresses = () => {
     const [tab, setTab] = React.useState<number | null>(null);
     const getBilling = useGetBillingAddress();
     const { data } = useSession();

     useEffect(() => {
          if (data) {
               // getBilling((data as any)?.user?.id);
          }
     }, [data]);

     return (
          <div>
               {tab === null && (
                    <div>
                         <h3 className="account-sub-title d-none d-md-block mb-1">
                              <i className="sicon-location-pin align-middle mr-3"></i>Addresses
                         </h3>
                         <div className="addresses-content">
                              <p className="mb-4">
                                   The following addresses will be used on the checkout page by
                                   default.
                              </p>

                              <div className="row">
                                   <div className="address col-md-6">
                                        <div className="heading d-flex">
                                             <h4 className="text-dark mb-0">Billing address</h4>
                                        </div>

                                        <div className="address-box">
                                             You have not set up this type of address yet.
                                        </div>

                                        <button
                                             onClick={() => setTab(1)}
                                             className="btn btn-default address-action link-to-tab"
                                        >
                                             Add Address
                                        </button>
                                   </div>

                                   <div className="address col-md-6 mt-5 mt-md-0">
                                        <div className="heading d-flex">
                                             <h4 className="text-dark mb-0">Shipping address</h4>
                                        </div>

                                        <div className="address-box">
                                             You have not set up this type of address yet.
                                        </div>

                                        <button
                                             onClick={() => setTab(2)}
                                             className="btn btn-default address-action link-to-tab"
                                        >
                                             Add Address
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
               {tab === 1 && <BillingAddress />}
               {tab === 2 && <ShippingAddress />}
          </div>
     );
};
export default Addresses;

const AddressCard = (props) => {
     const { firstname, lastname, country, state, city, company, street, phone, zipcode, email } =
          props;

     return (
          <Card>
               <Card.Body>
                    <Card.Title>Address Information</Card.Title>
                    <Card.Text>
                         <strong>Name:</strong> {firstname} {lastname}
                         <br />
                         <strong>Country:</strong> {country}
                         <br />
                         <strong>State:</strong> {state}
                         <br />
                         <strong>City:</strong> {city}
                         <br />
                         <strong>Company:</strong> {company}
                         <br />
                         <strong>Street:</strong> {street}
                         <br />
                         <strong>Phone:</strong> {phone}
                         <br />
                         <strong>Zipcode:</strong> {zipcode}
                         <br />
                         <strong>Email:</strong> {email}
                    </Card.Text>
               </Card.Body>
          </Card>
     );
};
