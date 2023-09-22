const RightDrawer = ({ isOpen, onClose }) => {
     return (
          <div
               className={`tw-fixed tw-inset-y-0 tw-z-50 tw-top-0 tw-right-0 tw-w-[30rem] tw-bg-gray-800 tw-text-white tw-transform tw-transition tw-duration-300 tw-ease-in-out ${
                    isOpen ? "tw-translate-x-0" : "tw-translate-x-full"
               }`}
          >
               <div className="tw-flex tw-justify-end tw-p-4">
                    <button className="text-white" onClick={onClose}>
                         &times;
                    </button>
               </div>
               <div className="">
                    <a href="#" title="Close (Esc)" className="btn-close">
                         ×
                    </a>

                    <div className="dropdownmenu-wrapper custom-scrollbar">
                         <div className="dropdown-cart-header">Shopping Cart</div>

                         <div className="dropdown-cart-products">
                              <div className="product">
                                   <div className="product-details">
                                        <h4 className="product-title">
                                             <a href="demo1-product.html">
                                                  Ultimate 3D Bluetooth Speaker
                                             </a>
                                        </h4>

                                        <span className="cart-product-info">
                                             <span className="cart-product-qty">1</span> × $99.00
                                        </span>
                                   </div>

                                   <figure className="product-image-container">
                                        <a href="demo1-product.html" className="product-image">
                                             <img
                                                  src="assets/images/products/product-1.jpg"
                                                  alt="product"
                                                  width="80"
                                                  height="80"
                                             />
                                        </a>

                                        <a href="#" className="btn-remove" title="Remove Product">
                                             <span>×</span>
                                        </a>
                                   </figure>
                              </div>

                              <div className="product">
                                   <div className="product-details">
                                        <h4 className="product-title">
                                             <a href="demo1-product.html">
                                                  Brown Women Casual HandBag
                                             </a>
                                        </h4>

                                        <span className="cart-product-info">
                                             <span className="cart-product-qty">1</span> × $35.00
                                        </span>
                                   </div>

                                   <figure className="product-image-container">
                                        <a href="demo1-product.html" className="product-image">
                                             <img
                                                  src="assets/images/products/product-2.jpg"
                                                  alt="product"
                                                  width="80"
                                                  height="80"
                                             />
                                        </a>

                                        <a href="#" className="btn-remove" title="Remove Product">
                                             <span>×</span>
                                        </a>
                                   </figure>
                              </div>

                              <div className="product">
                                   <div className="product-details">
                                        <h4 className="product-title">
                                             <a href="demo1-product.html">
                                                  Circled Ultimate 3D Speaker
                                             </a>
                                        </h4>

                                        <span className="cart-product-info">
                                             <span className="cart-product-qty">1</span> × $35.00
                                        </span>
                                   </div>

                                   <figure className="product-image-container">
                                        <a href="demo1-product.html" className="product-image">
                                             <img
                                                  src="assets/images/products/product-3.jpg"
                                                  alt="product"
                                                  width="80"
                                                  height="80"
                                             />
                                        </a>
                                        <a href="#" className="btn-remove" title="Remove Product">
                                             <span>×</span>
                                        </a>
                                   </figure>
                              </div>
                         </div>

                         <div className="dropdown-cart-total">
                              <span>SUBTOTAL:</span>

                              <span className="cart-total-price float-right">$134.00</span>
                         </div>

                         <div className="dropdown-cart-action">
                              <a href="cart.html" className="btn btn-gray btn-block view-cart">
                                   View Cart
                              </a>
                              <a href="checkout.html" className="btn btn-dark btn-block">
                                   Checkout
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default RightDrawer;
