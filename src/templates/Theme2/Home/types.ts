import { StaticImageData } from "next/image";

export interface ProductProps {
     id: number;
     productImageUrl: StaticImageData;
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
}
