import React, { useState } from "react";

const PageLinks = () => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

     const handleDropdownToggle = () => {
          setIsDropdownOpen(!isDropdownOpen);
     };

     return (
          <header className="bg-gray-900 text-white py-4 px-8">
               <div className="flex justify-between items-center">
                    <div>
                         <h1 className="text-2xl font-bold">My Ecommerce Store</h1>
                    </div>
                    <nav>
                         <ul className="flex space-x-4">
                              <li className="relative group">
                                   <button
                                        className="flex items-center"
                                        onClick={handleDropdownToggle}
                                   >
                                        <span className="mr-1">Shop</span>
                                   </button>
                                   {isDropdownOpen && (
                                        <ul className="absolute left-0 mt-2 py-2 bg-gray-900 rounded-md text-white">
                                             <li className="pl-4 py-2">Category 1</li>
                                             <li className="pl-4 py-2">Category 2</li>
                                             <li className="pl-4 py-2">Category 3</li>
                                        </ul>
                                   )}
                              </li>
                              <li>
                                   <a href="#" className="hover:text-gray-400">
                                        Cart
                                   </a>
                              </li>
                              <li>
                                   <a href="#" className="hover:text-gray-400">
                                        Favorites
                                   </a>
                              </li>
                              <li>
                                   <a href="#" className="hover:text-gray-400">
                                        Account
                                   </a>
                              </li>
                         </ul>
                    </nav>
               </div>
          </header>
     );
};

export default PageLinks;
