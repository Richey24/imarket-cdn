import React from "react";

const Footer = (): JSX.Element => {
     return (
          <footer className="bg-gray-800 text-white py-8">
               <div className="container mx-auto flex flex-wrap">
                    <div className="w-full md:w-1/4 px-4">
                         <h3 className="text-lg font-semibold mb-4">About</h3>
                         <p className="text-sm text-gray-400">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                              pretium, nibh vitae tempus finibus, erat turpis mattis odio, id
                              elementum dui elit eu ex.
                         </p>
                    </div>
                    <div className="w-full md:w-1/4 px-4">
                         <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                         <p className="text-sm text-gray-400">
                              ADDRESS:
                              <br />
                              123 Street Name, City, England
                         </p>
                         <p className="text-sm text-gray-400 mt-4">
                              PHONE:
                              <br />
                              (123) 456-7890
                         </p>
                         <p className="text-sm text-gray-400 mt-4">
                              EMAIL:
                              <br />
                              mail@example.com
                         </p>
                         <p className="text-sm text-gray-400 mt-4">
                              WORKING DAYS/HOURS:
                              <br />
                              Mon - Sun / 9:00 AM - 8:00 PM
                         </p>
                    </div>
                    <div className="w-full md:w-1/4 px-4">
                         <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                         <ul className="text-sm text-gray-400">
                              <li className="mb-2">Shipping &amp; Returns</li>
                              <li className="mb-2">Terms &amp; Conditions</li>
                              <li className="mb-2">Privacy Policy</li>
                              <li className="mb-2">FAQs</li>
                         </ul>
                    </div>
                    <div className="w-full md:w-1/4 px-4">
                         <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                         <ul className="text-sm text-gray-400 flex flex-wrap">
                              <li className="mr-2 mb-2">Clothing</li>
                              <li className="mr-2 mb-2">Shoes</li>
                              <li className="mr-2 mb-2">Accessories</li>
                              <li className="mr-2 mb-2">Electronics</li>
                              <li className="mr-2 mb-2">Home Decor</li>
                         </ul>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
