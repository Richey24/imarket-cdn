import Product from "@/app/components/Product";
import React from "react";

export default function PopularProducts() {
     return (
          <div>
               <div className="text-center font-bold text-2xl my-4">Popular Products</div>
               <div className="container">
                    <div className="flex flex-row flex-wrap ">
                         {[...Array(8)].map((product) => {
                              return (
                                   <div className="w-full md:w-[16.66%] p-2">
                                        <Product
                                             imageSrc={
                                                  "https://plus.unsplash.com/premium_photo-1689596509479-daa6ba973629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                             }
                                             productName={"BMW 350"}
                                             price={"$1,000"}
                                        />{" "}
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </div>
     );
}
