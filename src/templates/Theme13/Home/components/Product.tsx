import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { ProductProps } from "../types";
import Link from "next/link";
import { Spinner } from "react-bootstrap";
import { CircularProgress } from "@chakra-ui/react";
import { useAddWishlist } from "@/appProvider/hooks/dashboard/wishlist";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

export const Product: React.FC<ProductProps> = ({
     id,
     productImageUrl,
     productImageUrlTwo,
     productImageAlt,
     productCategory,
     productTitle,
     productPrice,
     oldPrice,
     handleAddToCart,
}) => {
     const [cartLoading, setCartLoading] = useState(false);
     const [wishLoading, setWishLoading] = useState(false);
     const addToWishlist = useAddWishlist();
     const { data } = useSession();

     const handleAddToWishlist = () => {
          setWishLoading(true);
          if (data) {
               addToWishlist(
                    {
                         userId: (data as any)?.user?.id,
                         productId: id,
                         price: productPrice,
                         display_name: productTitle,
                    },
                    () => {
                         setWishLoading(false);
                    },
                    () => {
                         setWishLoading(false);
                    },
               );
          } else {
               toast.error("Login to Continue");
          }
     };

     return (
          <div className="col-6 col-sm-4">
               <div className="product-default inner-quickview inner-icon">
                    <figure>
                         <Link href={`/${id}`}>
                              <Image src={productImageUrl} width={300} height={300} alt="product" />
                              {productImageUrlTwo && (
                                   <Image
                                        src={productImageUrlTwo}
                                        width={300}
                                        height={300}
                                        alt="product"
                                   />
                              )}
                         </Link>
                         <div className="label-group">
                              <span className="product-label label-sale">-30%</span>
                         </div>
                         <div className="btn-icon-group">
                              {cartLoading ? (
                                   <CircularProgress
                                        isIndeterminate
                                        color="green"
                                        width={30}
                                        height={30}
                                        size={30}
                                   />
                              ) : (
                                   <a
                                        onClick={() => {
                                             setCartLoading(true);
                                             handleAddToCart(id, productPrice, () =>
                                                  setCartLoading(false),
                                             );
                                        }}
                                        className="btn-icon btn-add-cart product-type-simple"
                                   >
                                        <i className="icon-shopping-cart" />
                                   </a>
                              )}
                              {/* <Spinner /> */}
                         </div>
                         <Link href={`/${id}`} className="btn-quickview" title="Quick View">
                              Quick View
                         </Link>
                    </figure>
                    <div className="product-details">
                         <div className="category-wrap">
                              <div className="category-list">
                                   <a href="demo13-shop.html" className="product-category">
                                        {productCategory}
                                   </a>
                              </div>
                              {wishLoading ? (
                                   <CircularProgress
                                        isIndeterminate
                                        color="green"
                                        width={30}
                                        height={30}
                                        size={30}
                                   />
                              ) : (
                                   <a
                                        className="btn-icon-wish"
                                        style={{ cursor: "pointer" }}
                                        onClick={handleAddToWishlist}
                                   >
                                        <i className="icon-wishlist-2" />
                                   </a>
                              )}
                         </div>
                         <h3 className="product-title">
                              <Link href={`/${id}`}>{productTitle}</Link>
                         </h3>
                         {/* End .product-container */}
                         <div className="price-box">
                              {oldPrice && (
                                   <span className="old-price">${oldPrice.toFixed(2)}</span>
                              )}
                              <span className="product-price">${productPrice.toFixed(2)}</span>
                         </div>
                         {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
               </div>
          </div>
     );
};
