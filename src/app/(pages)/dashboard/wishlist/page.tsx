"use client";
import { useGetWishlist } from "@/appProvider/hooks/dashboard/wishlist";
import _ from "lodash";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function WishList() {
     const [wishlists, setWishlist] = useState<any>(null);
     const [loading, setLoading] = useState<any>(true);

     const getWishList = useGetWishlist();
     const { data } = useSession();

     useEffect(() => {
          if (data) {
               getWishList(
                    (data as any)?.user?.id,
                    (wishlist) => {
                         setWishlist(wishlist);
                    },
                    () => {
                         setWishlist([]);
                    },
               );
          }
     }, [data]);

     return (
          <div className="">
               <div className="container my-12">
                    <div className="text-3xl font-bold">My wishlist on Porto Shop 4</div>
                    <table className="table table-order text-left my-6 border-none">
                         <thead>
                              <tr>
                                   <th className=""></th>
                                   <th className="text-base font-bold order-id">PRODUCT</th>
                                   <th className="text-base font-bold order-date">PRICE</th>
                                   <th className="text-base font-bold order-status">
                                        STOCK STATUS
                                   </th>
                                   <th className="text-base font-bold order-price">ACTIONS</th>
                              </tr>
                         </thead>
                         {!wishlists && loading && (
                              <tbody>
                                   <tr>
                                        <td className="text-center p-0" colSpan={5}>
                                             <p className="mb-5 mt-5">Loading....</p>
                                        </td>
                                   </tr>
                              </tbody>
                         )}
                         {wishlists?.length == 0 ? (
                              <tbody>
                                   <tr>
                                        <td className="text-center p-0" colSpan={5}>
                                             <p className="mb-5 mt-5">
                                                  No product has been added to your wish list.
                                             </p>
                                        </td>
                                   </tr>
                              </tbody>
                         ) : (
                              <tbody>
                                   {wishlists?.map((wishlist, idx) => (
                                        <tr
                                             key={idx}
                                             className="border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                        >
                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 relative">
                                                  <div className="w-24 h-24 relative rounded-md overflow-hidden">
                                                       {/* <Image
                                                            src={product.imageSrc}
                                                            layout="fill"
                                                            alt={product.title}
                                                            width={100}
                                                            height={100}
                                                       /> */}
                                                  </div>
                                             </td>
                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 align-middle ">
                                                  {_.capitalize(wishlist?.product_id?.[1])}
                                             </td>
                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 align-middle">
                                                  {wishlist?.price}
                                             </td>
                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 align-middle">
                                                  {moment(wishlist?.create_date).format(
                                                       "YYYY-MM-DD",
                                                  )}
                                             </td>

                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 align-middle">
                                                  <button
                                                       onClick={() => {}}
                                                       className="bg-gray-100 text-gray-800 px-6 py-3 mx-2 rounded-sm"
                                                  >
                                                       View
                                                  </button>
                                                  <button className="bg-gray-800  text-white px-6 py-3 mx-2 rounded-sm ">
                                                       Add To Cart
                                                  </button>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         )}
                    </table>
               </div>
          </div>
     );
}
