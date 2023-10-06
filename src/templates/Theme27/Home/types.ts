import { StaticImageData } from "next/image";
import { Url } from "url";

export interface ProductProps {
     imageUrl1: StaticImageData | string;
     productImageUrlTwo?: StaticImageData;
     productImageAlt: string;
     productCategory: string;
     productName: string;
     productPrice: number;
     oldPrice?: number;
}

export interface PromotionProps {
     title: string;
     promoText: string;
     bannerUrl: string | StaticImageData;
}
