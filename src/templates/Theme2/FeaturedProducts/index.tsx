import Product from "@/app/components/Product";
import ProductList from "@/app/components/ProductList";
import React from "react";

export default function FeaturedProducts() {
     return (
          <div>
               <div className="text-center font-bold text-2xl my-4">FEATURED PRODUCTS</div>
               <div className="container">
                    <ProductList col={5} />
               </div>
          </div>
     );
}
