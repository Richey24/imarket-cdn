import Image from "next/image";

export default function Home() {
     return (
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
               <div className="container">
                    <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
                         <li className="active">
                              <a href="cart.html">Shopping Cart</a>
                         </li>
                         <li>
                              <a href="checkout.html">Checkout</a>
                         </li>
                         <li className="disabled">
                              <a href="cart.html">Order Complete</a>
                         </li>
                    </ul>
                    <div className="row">
                         <div className="col-lg-8">
                              <div className="cart-table-container">
                                   <table className="table table-cart">
                                        <thead>
                                             <tr className="font-bold text-base">
                                                  <th className="thumbnail-col"></th>
                                                  <th className="product-col">Product</th>
                                                  <th className="price-col">Price</th>
                                                  <th className="qty-col">Quantity</th>
                                                  <th className="text-right">Subtotal</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <CartProduct />
                                             <CartProduct />
                                             <CartProduct />
                                             <CartProduct />
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                         <div className="col-lg-4">
                              <div className="cart-summary">
                                   <h3>CART TOTALS</h3>

                                   <table className="table table-totals">
                                        <tbody>
                                             <tr>
                                                  <td>Subtotal</td>
                                                  <td>$17.90</td>
                                             </tr>

                                             <tr>
                                                  <td colSpan={2} className="text-left">
                                                       <h4>Shipping</h4>

                                                       <div className="form-group form-group-custom-control">
                                                            <div className="custom-control custom-radio">
                                                                 <input
                                                                      type="radio"
                                                                      className="custom-control-input"
                                                                      name="radio"
                                                                      checked
                                                                 />
                                                                 <label className="custom-control-label">
                                                                      Local pickup
                                                                 </label>
                                                            </div>
                                                       </div>

                                                       <div className="form-group form-group-custom-control mb-0">
                                                            <div className="custom-control custom-radio mb-0">
                                                                 <input
                                                                      type="radio"
                                                                      name="radio"
                                                                      className="custom-control-input"
                                                                 />
                                                                 <label className="custom-control-label">
                                                                      Flat rate
                                                                 </label>
                                                            </div>
                                                       </div>

                                                       <form action="#">
                                                            <div className="form-group form-group-sm">
                                                                 <label>
                                                                      Shipping to{" "}
                                                                      <strong>NY.</strong>
                                                                 </label>
                                                                 <div className="select-custom">
                                                                      <select className="form-control form-control-sm">
                                                                           <option value="USA">
                                                                                United States (US)
                                                                           </option>
                                                                           <option value="Turkey">
                                                                                Turkey
                                                                           </option>
                                                                           <option value="China">
                                                                                China
                                                                           </option>
                                                                           <option value="Germany">
                                                                                Germany
                                                                           </option>
                                                                      </select>
                                                                 </div>
                                                            </div>

                                                            <div className="form-group form-group-sm">
                                                                 <div className="select-custom">
                                                                      <select className="form-control form-control-sm">
                                                                           <option value="NY">
                                                                                New York
                                                                           </option>
                                                                           <option value="CA">
                                                                                California
                                                                           </option>
                                                                           <option value="TX">
                                                                                Texas
                                                                           </option>
                                                                      </select>
                                                                 </div>
                                                            </div>

                                                            <div className="form-group form-group-sm">
                                                                 <input
                                                                      type="text"
                                                                      className="form-control form-control-sm"
                                                                      placeholder="Town / City"
                                                                 />
                                                            </div>

                                                            <div className="form-group form-group-sm">
                                                                 <input
                                                                      type="text"
                                                                      className="form-control form-control-sm"
                                                                      placeholder="ZIP"
                                                                 />
                                                            </div>

                                                            <button
                                                                 type="submit"
                                                                 className="btn btn-shop btn-update-total"
                                                            >
                                                                 Update Totals
                                                            </button>
                                                       </form>
                                                  </td>
                                             </tr>
                                        </tbody>

                                        <tfoot>
                                             <tr>
                                                  <td>Total</td>
                                                  <td>$17.90</td>
                                             </tr>
                                        </tfoot>
                                   </table>

                                   <div className="checkout-methods">
                                        <a href="cart.html" className="btn btn-block btn-dark">
                                             Proceed to Checkout
                                             <i className="fa fa-arrow-right"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </main>
     );
}

function CartProduct() {
     return (
          <tr className="product-row items-center">
               <td className="align-middle">
                    <figure className="product-image-container h-20 w-20">
                         <a href="product.html" className="product-image w-full h-full">
                              <img
                                   className="w-full h-full"
                                   src="https://plus.unsplash.com/premium_photo-1676409609002-3181a2c8acc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                   alt="product"
                              />
                         </a>
                    </figure>
               </td>
               <td className="product-col align-middle">
                    <h5 className="text-base">
                         <a href="product.html">Men Watch</a>
                    </h5>
               </td>
               <td className="align-middle text-base font-base text-gray-600">$17.90</td>
               <td className="align-middle">
                    <div className="product-single-qty align-middle">
                         <input className="horizontal-quantity form-control" type="text" />
                    </div>
               </td>
               <td className="text-right align-middle">
                    <span className="text-base font-bold">$17.90</span>
               </td>
          </tr>
     );
}
