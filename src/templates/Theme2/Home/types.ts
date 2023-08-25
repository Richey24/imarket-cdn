import { StaticImageData } from "next/image";

export interface ProductProps {
<<<<<<< HEAD
     id: number;
     productImageUrl: StaticImageData;
     productImageUrlTwo?: StaticImageData;
=======
     productImageUrl: StaticImageData | string;
     productImageUrlTwo?: StaticImageData | string;
>>>>>>> b277f7e7eeeb5d12f1d744e0853b1061587b8b04
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
