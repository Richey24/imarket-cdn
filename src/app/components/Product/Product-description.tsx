"use client";

import { HiStar } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";

export function ProductDescription({ productDetail }) {
     return (
          <>
               <div className="tw-mb-6 tw-flex tw-flex-col tw-border-b tw-pb-6 dark:tw-border-neutral-100">
                    <h1 className="tw-mb-2 tw-text-5xl tw-font-semibold">{productDetail?.name}</h1>
                    <div className="tw-mr-auto tw-font-medium tw-w-auto tw-rounded-full text-primary tw-p-2 tw-text-3xl md:text-4xl ">
                         {productDetail?.base_unit_price}
                         <span className="text-gray-800"> USD</span>
                    </div>
                    <div className="tw-flex tw-flex-wrap tw-gap-3 tw-text-gray-900 tw-my-10">
                         <div className="tw-flex tw-gap-2 tw-items-center tw-rounded-full tw-border px-3 py-1 text-xl">
                              <HiStar />
                              <HiStar />
                              <HiStar />
                         </div>

                         <div className=" tw-rounded-full tw-border px-3 py-1 text-xl">
                              <span className="tw-text-gray-500">Reviews</span> 200
                         </div>
                         <div className=" tw-rounded-full tw-border px-3 py-1 text-xl">
                              <span className="tw-text-gray-500">Sold</span> 25k items
                         </div>
                         <div className=" tw-rounded-full tw-border px-3 py-1 text-xl">
                              <span className="tw-text-gray-500">Category:</span> phone
                         </div>
                    </div>
                    <div className="tw-mb-10">
                         <div className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
                              Color
                         </div>
                         <div className="tw-flex tw-gap-3">
                              <div className="tw-border-2 tw-border-blue-700 tw-p-1 tw-rounded-full tw-overflow-hidden">
                                   <div className="tw-bg-black tw-rounded-full tw-h-8 tw-w-8 tw-cursor-pointer"></div>
                              </div>
                              <div className=" tw-p-1 tw-rounded-full tw-overflow-hidden">
                                   <div className="tw-bg-orange-500 tw-rounded-full tw-h-8 tw-w-8 tw-cursor-pointer"></div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="w-full tw-mb-12">
                    <button className="bg-primary text-white tw-rounded-xl tw-py-4 tw-px-8 tw-flex tw-justify-center tw-items-center tw-text-xl tw-gap-4 tw-w-full">
                         <MdOutlineShoppingBag size={24} /> Add to Cart
                    </button>
               </div>
               <div>
                    <div className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
                         Description
                    </div>
                    <div className="tw-text-xl tw-text-gray-700">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident
                         enim distinctio iure omnis, quaerat nesciunt aut quos praesentium
                         cupiditate. Est harum corrupti assumenda fugit sequi, commodi pariatur quae
                         iste?
                    </div>
               </div>
          </>
     );
}
