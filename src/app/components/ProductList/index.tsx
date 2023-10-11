"use client";
import React from "react";
import Product from "@/app/components/Product";

export default function ProductList({ col = 6 }: { col?: number }): JSX.Element {
     const dynamicCols: any = {
          1: "md:w-[100%]",
          2: "md:w-[50%]",
          3: "md:w-[33.33%]",
          4: "md:w-[25%]",
          5: "md:w-[20%]",
          6: "md:w-[16.67%]",
          7: "md:w-[14.29%]",
          8: "md:w-[12.50%]",
          9: "md:w-[11.11%]",
          10: "md:w-[10%]",
          11: "md:w-[9.09%]",
          12: "md:w-[8.33%]",
     };
     return (
          <div className="flex flex-row flex-wrap ">
               {[...Array(8)].map((product, idx) => {
                    return (
                         <div key={idx} className={`w-full ${dynamicCols[col]} p-2`}>
                              {/* 16.66 */}
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
     );
}
