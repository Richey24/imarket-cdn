import { StaticImageData } from "next/image";
import { Url } from "url";

export interface ProductProps {
     id?: number;
     productImageUrl: StaticImageData | string;
     productImageUrlTwo?: StaticImageData | string;
     productImageAlt: string;
     productCategory: string;
     productTitle: string;
     productPrice: number;
     oldPrice?: number;
}

export interface BrowseCategoryProps {
     title: string;
     imageUrl: string;
}

export interface PromotionProps {
     title: string;
     promoText: string;
     bannerUrl: string | StaticImageData;
}
export interface ProductWidgetProps {
     id: number;
     productImage: StaticImageData | string;
     productImageTwo?: StaticImageData | string;
     productTitle: string;
     productPrice: number;
}
