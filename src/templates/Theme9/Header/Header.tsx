"use client";
import React from "react";
import { InfoBoxesContainer } from "@/templates/shared/Info";
import HeaderLinks2 from "@/templates/shared/Header/HeaderLinks/HeaderLinks2";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";

interface InfoBoxItem {
     icon: string;
     title: string;
     description: string;
}

const InfoBox: React.FC<InfoBoxItem> = ({ icon, title, description }) => {
     return (
          <div className="info-box info-box-icon-left">
               <i className={icon} />
               <div className="info-box-content pt-1">
                    <h4>{title}</h4>
                    <p>{description}</p>
               </div>
               {/* End .info-box-content */}
          </div>
     );
};

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     const infoBoxItems: InfoBoxItem[] = [
          {
               icon: "icon-shipping",
               title: "FREE SHIPPING & RETURN",
               description: "Free Shipping on All Orders Over $99.",
          },
          {
               icon: "icon-money",
               title: "MONEY BACK GUARANTEE",
               description: "100% Money Back Guarantee",
          },
          {
               icon: "icon-support",
               title: "ONLINE SUPPORT 24/7",
               description: "Lorem Ipsum Dolor Sit Amet.",
          },
     ];

     const owlCarouselOptions = {
          dots: false,
          margin: 20,
          loop: false,
          responsive: {
               576: {
                    items: 2,
               },
               992: {
                    items: 3,
               },
          },
     };

     return (
          <header className="header mb-0" data-y="0">
               <InfoBoxesContainer />
               <div className="header-top sticky top-0">
                    <div className="container">
                         <HeaderLinks2 staticProps={staticProps} className="w-100" />
                    </div>
               </div>
               <div className="container">
                    <HeaderSearch
                         company={company}
                         categories={categories}
                         className="w-100"
                         menuBtnTextColor="text-white"
                    />
               </div>
          </header>
     );
}
