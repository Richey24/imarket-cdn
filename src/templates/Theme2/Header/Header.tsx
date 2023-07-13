import React from "react";
import { FaPhoneAlt, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

export default function Header() {
     return (
          <header className="">
               <div className="container 2xl:w-[1240px] mx-auto flex items-center justify-between py-4 px-8 text-gray-900">
                    <div className="flex items-center">
                         <div className="mr-4">logo 2 </div>
                         <input
                              type="text"
                              placeholder="Search"
                              className="px-4 py-2 w-full rounded-full bg-gray-100 focus:outline-none  focus:border-gray-300"
                         />
                    </div>
                    <div className="flex items-center space-x-4">
                         <div className="flex items-center text-xs text-gray-400 mt-1">
                              <FaPhoneAlt className="w-6 h-6" />{" "}
                              <div className="pl-2">
                                   Call us now:{" "}
                                   <div className="font-bold text-lg  text-gray-900">
                                        123-456-7890
                                   </div>
                              </div>
                         </div>
                         <div className="text-gray-400 hover:text-white">
                              <FaUser className="w-6 h-6" />
                         </div>
                         <div className="text-gray-400 hover:text-white">
                              <FaHeart className="w-6 h-6" />
                         </div>

                         <div className="text-gray-400 hover:text-white">
                              <FaShoppingCart className="w-6 h-6" />
                         </div>
                    </div>
               </div>
          </header>
     );
}
