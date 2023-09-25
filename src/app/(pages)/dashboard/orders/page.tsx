export default function Orders() {
     const orders = [
          {
               id: 1,
               order: "Product A",
               date: "2023-07-19",
               status: "Pending",
               total: "$100",
          },
          {
               id: 2,
               order: "Product B",
               date: "2023-07-20",
               status: "Shipped",
               total: "$50",
          },
          // Add more sample data here...
     ];

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
                         {orders.length == 0 ? (
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
                                   {orders.map((order) => (
                                        <tr
                                             key={order.id}
                                             className="tw-border-b tw-transition tw-duration-300 tw-ease-in-out tw-hover:bg-gray-100"
                                        >
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  {order.order}
                                             </td>
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  {order.date}
                                             </td>
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  {order.status}
                                             </td>
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  {order.total}
                                             </td>
                                             <td className="whitespace-nowrap tw-font-light tw-text-lg tw-px-6 tw-py-2">
                                                  <button>Cancel Order</button>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         )}
                    </table>

                    <a href="category.html" className="btn btn-dark">
                         Go Shop
                    </a>
               </div>
          </div>
     );
}
