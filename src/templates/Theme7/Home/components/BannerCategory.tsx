import React from "react";
import Link from "next/link";
import Image from "next/image";
import OwlCarousel from "react-owl-carousel";
import { templateImages } from "@/appProvider/templateImages";

interface Icategory {
     categoryName: string;
     count: number;
}

const ShopByCategory: React.FC<Icategory> = ({ categoryName, count }) => {
     return (
          <div className="banner banner-image">
               <Link href="demo7-product.html">
                    <Image
                         src={templateImages.demo7.bannerImage.banner6}
                         width="272"
                         height="231"
                         alt="banner"
                    />
               </Link>
               <div className="banner-layer banner-layer-middle">
                    <h3>{categoryName}</h3>
                    <span>{count} PRODUCTS </span>
               </div>
          </div>
     );
};

const BannerCategory = ({ categories }): JSX.Element => {

     const owlCarouselOptions = {
          dots: false,
          margin: 20,
          loop: false,
          navText: ["<i class=icon-left-open-big>", "<i class=icon-right-open-big>"],
          nav: true,
          responsive: {
               "0": {
                    items: 2,
               },
               "768": {
                    items: 3,
               },
               "991": {
                    items: 4,
                    nav: false,
               },
          },
     };

     return (
          <OwlCarousel className="info-boxes-slider owl-carousel owl-theme" {...owlCarouselOptions}>
               {categories &&
                    categories.length > 0 &&
                    categories.map((item, index) => (
                         <ShopByCategory key={index} categoryName={item.name} count={0} />
                    ))}
          </OwlCarousel>
     );
};

export default BannerCategory;
