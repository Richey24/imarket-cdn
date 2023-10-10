"use client";
import React, { useContext } from "react";
import { AppContext } from "@/appProvider";
import OwlCarouselComponent from "@/app/components/OWlCarousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import Link from "next/link";

export default function PopularProducts() {
     const { products } = useContext(AppContext);
     return (
          <div>
               <div className="tw-text-2xl tw-font-bold tw-mb-4 tw-mx-4">Featured Products</div>
               <OwlCarouselComponent
                    className={"products-slider"}
                    isResponsive={true}
                    container={false}
                    // responsive={{
                    //      "480": {
                    //           items: 2,
                    //      },
                    //      "768": {
                    //           items: 3,
                    //      },
                    //      "992": {
                    //           items: 4,
                    //      },
                    //      "1440": {
                    //           items: 6,
                    //      },
                    // }}
               >
                    {products &&
                         products.length > 0 &&
                         products.map((product) => {
                              return (
                                   <Link
                                        key={product.id}
                                        href={`/${product.id}`}
                                        className="tw-no-underline hover:tw-no-underline	"
                                   >
                                        <div className="tw-max-w-xs tw-mx-auto tw-bg-white tw-rounded tw-transition tw-ease-in-out tw-overflow-hidden tw-shadow-md hover:tw-shadow-lg tw-m-4">
                                             <div className="tw-relative tw-h-40">
                                                  <Image
                                                       src={
                                                            "data:image/jpeg;base64," +
                                                            product.image_256
                                                       }
                                                       alt={product.display_name}
                                                       layout="fill"
                                                       objectFit="cover"
                                                  />
                                             </div>
                                             <div className="tw-px-6 tw-py-4">
                                                  <div className="tw-font-bold tw-text-xl mb-2">
                                                       {product.display_name}
                                                  </div>
                                                  <p className="tw-text-gray-700 tw-text-base">
                                                       {/* {product.description} */}
                                                       Lorem ipsum dolor sit amet consectetur
                                                       adipisicing elit. Magnam, delectus.
                                                  </p>
                                                  <div className="tw-font-bold tw-text-xl mt-4">
                                                       ${product.standard_price}
                                                  </div>
                                             </div>
                                        </div>
                                   </Link>
                              );
                         })}
                    {!products &&
                         [1, 2, 3, 4, 5, 6].map((prod) => {
                              return (
                                   <div key={prod}>
                                        <div className="tw-max-w-xs tw-mx-auto tw-bg-white tw-rounded tw-transition tw-ease-in-out tw-overflow-hidden tw-shadow-md hover:tw-shadow-lg tw-m-4 tw-w-full">
                                             <div className="tw-relative tw-h-40">
                                                  <Skeleton height="100%" width={"100%"} />
                                             </div>
                                             <div className="tw-px-6 tw-py-4">
                                                  <div className="tw-font-bold tw-text-xl mb-2">
                                                       <Skeleton height={12} count={1} />{" "}
                                                  </div>
                                                  <p className="tw-text-gray-700 tw-text-base">
                                                       <Skeleton height={8} count={3} />
                                                  </p>
                                                  <div className="tw-font-bold tw-text-xl mt-4">
                                                       <Skeleton count={1} width="2rem" />{" "}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              );
                         })}
               </OwlCarouselComponent>
          </div>
     );
}
