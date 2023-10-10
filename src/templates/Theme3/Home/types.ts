import { StaticImageData } from "next/image";
import { Url } from "url";

export interface ProductProps {
     id: number;
     productImageUrl: StaticImageData | string;
     productImageUrlTwo?: StaticImageData;
     productImageAlt: string;
     productCategory: string;
     productTitle: string;
     productPrice: number;
     oldPrice?: number;
}

export interface ProductWidgetProps {
     productImage: StaticImageData;
     productImageTwo: StaticImageData;
     productTitle: string;
     productPrice: number;
}

export interface TestimonialProps {
     clientImageUrl: StaticImageData;
     title: string;
     position: string;
     message: string;
}

export interface PromotionProps {
     imageUrl: StaticImageData;
     title: string;
     subtitle?: string;
     size: "small" | "large";
     position: "left" | "right" | "centered";
     buttonCaption: string;
     promoText?: string;
     promoUrl?: string;
     textColor?: "light" | "dark";
     verticalAlignment?: "top" | "middle" | "bottom";
}

export interface ShopByCategoryProps {
     imageUrl: StaticImageData;
     categoryName: string;
     count: number;
     // url: Url;
}
