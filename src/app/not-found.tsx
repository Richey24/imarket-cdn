import React from "react";
import PopularProducts from "./components/Product/popularProducts";
import Link from "next/link";

export default function page() {
     return (
          <section className="">
               <div className="tw-py-8 px-4 tw-mx-auto tw-max-w-screen-xl tw-lg:py-16 tw-lg:px-6">
                    <div className="tw-mx-auto tw-max-w-screen-sm tw-text-center">
                         <h1 className="tw-mb-4 tw-text-7xl tw-tracking-tight tw-font-extrabold lg:tw-text-9xl tw-text-primary-600 dark:tw-text-primary-500">
                              404
                         </h1>
                         <p className="tw-mb-4 tw-text-3xl tw-tracking-tight tw-font-bold tw-text-gray-900 md:tw-text-4xl dark:tw-text-white">
                              Something's missing.
                         </p>
                         <p className="tw-mb-4 tw-text-lg tw-font-light tw-text-gray-500 dark:tw-text-gray-400">
                              Sorry, we can't find that page. You'll find lots to explore on the
                              home page.{" "}
                         </p>
                         <Link
                              href="/"
                              className="tw-inline-flex tw-text-white bg-primary hover:tw-text-white focus:tw-ring-4 focus:tw-outline-none tw-text-md
                               focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-px-5 tw-py-2.5 tw-text-center dark:tw-focus:ring-primary-900 tw-my-4"
                         >
                              Back to Homepage
                         </Link>
                    </div>
               </div>
               <div className="w-full">
                    <PopularProducts />
               </div>
          </section>
     );
}
