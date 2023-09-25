"use client";
import PricingCard from "@/app/components/PricingCard";
import React from "react";

export default function Pricing() {
     const [pricingPeriod, setPricingPeriod] = React.useState<"month" | "year">("month");

     const handlePricingSwitch = (period: "month" | "year") => {
          setPricingPeriod(period);
     };
     const useage1Month = [
          "Easy-to-use Website Builder",
          "Free Business Email & SSL Certificate*",
          "1 hour expert design support​",
     ];
     const useage2Month = [
          "Easy-to-use Website Builder",
          "Free Business Email & SSL Certificate*",
          "1 hour expert design support​",
     ];
     const pricing = {
          month: [
               {
                    title: "Website",
                    description: "Get your business or blog started with a website",
                    usage: useage1Month,
                    price: "$1.95/MO",
                    tag: "",
                    isPrimary: false,
               },
               {
                    title: "Website + Marketing",
                    description: "Take online appointments and boost your marketing",
                    usage: [
                         ...useage1Month,
                         "Social & email marketing features",
                         "Sell services",
                         "AI copywriting tool - NEW",
                    ],
                    tag: "",
                    price: "$2.95/M",

                    isPrimary: false,
               },
               {
                    title: "Online Store",
                    description: "Sell products and accept online payments",
                    usage: [
                         ...useage1Month,
                         "Store with secure checkout",
                         "Sell on Facebook & Instagram",
                    ],
                    tag: "RECOMMENDED",
                    price: "$3.95/MO",
                    isPrimary: false,
               },
          ],
          year: [
               {
                    title: "Website",
                    description: "Get your business or blog started with a website",
                    usage: useage1Month,
                    price: "$1.95/MO",
                    tag: "",
                    isPrimary: false,
               },
               {
                    title: "Website + Marketing",
                    description: "Take online appointments and boost your marketing",
                    usage: [
                         ...useage1Month,
                         "Social & email marketing features",
                         "Sell services",
                         "AI copywriting tool - NEW",
                    ],
                    tag: "",
                    price: "$2.95/M",

                    isPrimary: false,
               },
               {
                    title: "Online Store",
                    description: "Sell products and accept online payments",
                    usage: ["Store with secure checkout", "Sell on Facebook & Instagram"],
                    tag: "RECOMMENDED",
                    price: "$3.95/MO",
                    isPrimary: false,
               },
          ],
     };

     return (
          <div>
               <div className="tw-px-12 tw-py-16 tw-text-center tw-text-white bg-primary">
                    <div className="tw-text-8xl tw-font-extrabold tw-mb-6">
                         {" "}
                         Pick your website package
                    </div>
                    <div className=" tw-text-2xl tw-bg-white/40 tw-flex tw-gap-4 tw-justify-between tw-p-6 tw-w-[22%] tw-text-center tw-auto tw-rounded-full tw-mx-auto">
                         <div
                              onClick={() => handlePricingSwitch("month")}
                              className={`tw-p-4 tw-rounded-full tw-cursor-pointer tw-text-white ${
                                   pricingPeriod === "month" ? "bg-primary" : " "
                              }`}
                         >
                              Billed Monthly
                         </div>
                         <div
                              onClick={() => handlePricingSwitch("year")}
                              className={`tw-p-4 tw-rounded-full tw-cursor-pointer tw-text-white ${
                                   pricingPeriod === "year" ? "bg-primary " : " "
                              }`}
                         >
                              Billed Yearly - 70% Savings
                         </div>
                    </div>
               </div>
               <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-start tw-gap-6 tw-my-12 tw-h-auto">
                    {pricing[pricingPeriod].map((pricing) => {
                         return <PricingCard key={pricing.title} {...pricing} />;
                    })}
               </div>
          </div>
     );
}
