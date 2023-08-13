import Image from "next/image";

function ProductWidget() {
     return (
          <div className="product-default left-details product-widget">
               <figure className="tw-w-24 tw-h-24 tw-relative">
                    <a href="product.html" className="w-full h-full">
                         <Image
                              src="https://plus.unsplash.com/premium_photo-1676409609002-3181a2c8acc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                              fill
                              alt="product"
                         />
                    </a>
               </figure>
               <div className="product-details">
                    <h3 className="product-title">
                         {" "}
                         <a href="product.html">Men Gentle Shoes</a>{" "}
                    </h3>
                    <div className="ratings-container">
                         <div className="product-ratings">
                              <span className="ratings tw-w-0"></span>

                              <span className="tooltiptext tooltip-top"></span>
                         </div>
                    </div>

                    <div className="price-box">
                         <span className="product-price">$269.00</span>
                    </div>
               </div>
          </div>
     );
}

export default ProductWidget;
