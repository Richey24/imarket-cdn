import Product from "@/app/components/Product";
import ProductList from "@/app/components/ProductList";
import React from "react";

export default function PopularProducts() {
     return (
          <div>
               <div className="text-center font-bold text-2xl my-4">Popular Products</div>
               <div className="container">
                    <ProductList />
               </div>
          </div>
     );
}
