"use client";
import { useGetOrderHistory } from "@/appProvider/hooks/dashboard/orders";
import _ from "lodash";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Orders() {
     const [orders, setOrder] = useState(null);
     const [loading, setLoading] = useState(false);

     const getOrders = useGetOrderHistory();
     const { data } = useSession();

     useEffect(() => {
          setLoading(true);
          if (data) {
               getOrders(
                    (data as any)?.user?.id,
                    (orders) => {
                         console.log("orders", orders);
                         setLoading(false);
                         setOrder(orders);
                    },
                    () => {
                         setOrder([]);
                         setLoading(false);
                    },
               );
          }
     }, [data]);

     return (
          <div className="order-content">
               <h3 className="account-sub-title d-none d-md-block">
                    <i className="sicon-social-dropbox align-middle mr-3"></i>Orders
               </h3>
               <div className="order-table-container tw-text-center">
                    <table className="table table-order tw-text-left ">
                         <thead>
                              <tr>
                                   <th className="tw-text-base tw-font-bold order-id">ORDER</th>
                                   <th className="tw-text-base tw-font-bold order-date">DATE</th>
                                   <th className="tw-text-base tw-font-bold order-status">
                                        STATUS
                                   </th>
                                   <th className="tw-text-base tw-font-bold order-price">TOTAL</th>
                                   <th className="tw-text-base tw-font-bold order-action">
                                        ACTIONS
                                   </th>
                              </tr>
                         </thead>
                         {!orders && loading && (
                              <tbody>
                                   <tr>
                                        <td className="text-center p-0" colSpan={5}>
                                             <p className="mb-5 mt-5">Loading......</p>
                                        </td>
                                   </tr>
                              </tbody>
                         )}
                         {orders?.length == 0 ? (
                              <tbody>
                                   <tr>
                                        <td className="text-center p-0" colSpan={5}>
                                             <p className="mb-5 mt-5">
                                                  No Order has been made yet.
                                             </p>
                                        </td>
                                   </tr>
                              </tbody>
                         ) : (
                              <tbody>
                                   {orders?.map((order) => (
                                        <tr
                                             key={order.id}
                                             className="tw-border-b tw-transition tw-duration-300 tw-ease-in-out tw-hover:bg-gray-100"
                                        >
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  {order.name}
                                             </td>
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  {moment(order.date_order).format("YYYY-MM-DD")}
                                             </td>
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  {_.capitalize(order.state)}
                                             </td>
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  ${order.amount_total}
                                             </td>
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  <button>Cancel Order</button>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         )}
                    </table>

                    <Link href="/shop" className="btn btn-dark">
                         Go Shop
                    </Link>
               </div>
          </div>
     );
}
