import { AppContext } from "@/appProvider";
import { useRemoveProductFromCart } from "@/appProvider/hooks";
import { CircularProgress, Progress, Spinner } from "@chakra-ui/react";
import _ from "lodash";
import { useContext, useState } from "react";
import { MdAdd } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import Link from "next/link";

const RightDrawer = ({ isOpen, onClose }) => {
     const { cart, handleRemoveProductFromOrder, handleUpdateProductQtyOnCart } = useContext<{
          cart: any;
          handleRemoveProductFromOrder: (id: number, onDone: () => void) => void;
          handleUpdateProductQtyOnCart: (id: number, qty: number, onDone: () => void) => void;
     }>(AppContext);
     const [deleteLoading, setDeleteLoading] = useState(false);
     const [target, setTarget] = useState<number | null>(null);

     console.log("cart", cart);

     return (
          cart && (
               <div
                    style={{ padding: 16, backgroundColor: "#fff !important" }}
                    className={`tw-fixed tw-inset-y-0 tw-z-50 tw-top-0 tw-right-0 tw-w-[30rem] tw-text-white tw-transform tw-transition tw-duration-300 tw-ease-in-out ${
                         isOpen ? "tw-translate-x-0" : "tw-translate-x-full"
                    }`}
               >
                    <div className="">
                         <div
                              style={{ padding: 16, borderRadius: 8 }}
                              className="dropdownmenu-wrapper custom-scrollbar"
                         >
                              <div
                                   style={{ color: "#000", fontSize: 40, textAlign: "center" }}
                                   className="dropdown-cart-header"
                              >
                                   Shoppingt Cart
                              </div>
                              <div
                                   style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "flex-end",
                                        paddingBottom: 30,
                                   }}
                              >
                                   {deleteLoading && (
                                        <CircularProgress
                                             isIndeterminate
                                             color="green"
                                             width={30}
                                             height={30}
                                             size={30}
                                        />
                                   )}
                              </div>
                              <div className="dropdown-cart-products">
                                   {cart?.order_lines?.map((order) => (
                                        <div
                                             className="product d-flex align-items-center justify-content-center"
                                             style={{
                                                  position: "relative",
                                                  opacity: order?.id === target ? 0.5 : 1,
                                                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                                  marginBottom: 16,
                                                  height: 80,
                                             }}
                                        >
                                             <figure className="product-image-container">
                                                  <a
                                                       href="demo1-product.html"
                                                       className="product-image"
                                                  >
                                                       <img
                                                            src="https://ae04.alicdn.com/kf/Sdb2603b900434808865d3a76a209efbcW/Black-Winter-Warm-Full-Fingers-Waterproof-Cycling-Outdoor-Sports-Running-Motorcycle-Ski-Touch-Screen-Fleece-Gloves.jpg_220x220xz.jpg_.webp"
                                                            alt="product"
                                                            width="80"
                                                            height="80"
                                                       />
                                                  </a>

                                                  <a
                                                       onClick={() => {
                                                            setDeleteLoading(true);
                                                            setTarget(order?.id as number);
                                                            handleRemoveProductFromOrder(
                                                                 order?.id,
                                                                 () => {
                                                                      setDeleteLoading(false);
                                                                      setTarget(null);
                                                                 },
                                                            );
                                                       }}
                                                       style={{ color: "#000", cursor: "pointer" }}
                                                       className="btn-remove"
                                                       title="Remove Product"
                                                  >
                                                       <span>×</span>
                                                  </a>
                                             </figure>
                                             <div
                                                  className="product-details flex-fill bd-highlight align-items-start justify-content-start p-1 h-100"
                                                  // style={{
                                                  //      height: "100px !important",
                                                  //      border: "4px solid blue !important",
                                                  // }}
                                             >
                                                  <h4
                                                       className="product-title"
                                                       style={{
                                                            margin: 0,
                                                            padding: 0,
                                                       }}
                                                  >
                                                       <a href="demo1-product.html">
                                                            {_.truncate(_.capitalize(order?.name), {
                                                                 length: 100,
                                                            })}
                                                       </a>
                                                  </h4>
                                                  <div className="d-flex align-items-center justify-content-start">
                                                       <LuMinus
                                                            color="#777"
                                                            size={20}
                                                            style={{
                                                                 cursor: "pointer",
                                                                 opacity:
                                                                      order?.product_uom_qty <= 1
                                                                           ? 0.5
                                                                           : 1,
                                                            }}
                                                            onClick={() => {
                                                                 if (order?.product_uom_qty > 1) {
                                                                      setTarget(
                                                                           order?.id as number,
                                                                      );
                                                                      handleUpdateProductQtyOnCart(
                                                                           order?.id,
                                                                           order?.product_uom_qty -
                                                                                1,
                                                                           () => {
                                                                                setDeleteLoading(
                                                                                     false,
                                                                                );
                                                                                setTarget(null);
                                                                           },
                                                                      );
                                                                 }
                                                            }}
                                                       />
                                                       (
                                                       <span className="cart-product-info">
                                                            {"("}
                                                            <span
                                                                 className="cart-product-qty"
                                                                 style={{ fontSize: 10 }}
                                                            >
                                                                 {order?.product_uom_qty} × $
                                                                 {order?.price_unit}
                                                            </span>{" "}
                                                            {")"}
                                                       </span>
                                                       )
                                                       <MdAdd
                                                            color="#777"
                                                            size={20}
                                                            style={{
                                                                 cursor: "pointer",
                                                            }}
                                                            onClick={() => {
                                                                 setTarget(order?.id as number);
                                                                 handleUpdateProductQtyOnCart(
                                                                      order?.id,
                                                                      order?.product_uom_qty + 1,
                                                                      () => {
                                                                           setDeleteLoading(false);
                                                                           setTarget(null);
                                                                      },
                                                                 );
                                                            }}
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              <div style={{ color: "#000" }} className="dropdown-cart-total">
                                   <span>SUBTOTAL:</span>

                                   <span
                                        className="cart-total-price float-right "
                                        style={{ color: "#000" }}
                                   >
                                        ${cart?.amount_total}
                                   </span>
                              </div>

                              <div className="dropdown-cart-action" onClick={() => onClose()}>
                                   {/* <a href="cart.html" className="btn btn-gray btn-block view-cart">
                                        View Cart
                                   </a> */}
                                   <Link
                                        href={`/checkout/${cart.id}`}
                                        className="btn btn-dark btn-block"
                                   >
                                        Checkout
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          )
     );
};

export default RightDrawer;
