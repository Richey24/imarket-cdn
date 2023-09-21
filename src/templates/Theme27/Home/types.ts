import { StaticImageData } from "next/image";
import { Url } from "url";

export interface ProductProps {
     productImageUrl: StaticImageData | string;
     productImageUrlTwo?: StaticImageData;
     productImageAlt: string;
     productCategory: string;
     productTitle: string;
     productPrice: number;
     oldPrice?: number;
}

export interface PromotionProps {
     title: string;
     promoText: string;
     bannerUrl: string | StaticImageData;
}
