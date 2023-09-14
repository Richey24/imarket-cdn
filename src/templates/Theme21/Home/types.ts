import { StaticImageData } from "next/image";

export interface ProductProps {
     productImageUrl: StaticImageData | string;
     productImageUrlTwo?: StaticImageData | string;
     productImageAlt: string;
     productCategory: string;
     productTitle: string;
     productPrice: number;
     oldPrice?: number;
}

export interface ProductWidgetProps {
     productImage: StaticImageData | string;
     productTitle: string;
     productPrice: number;
}

export interface TestimonialProps {
     clientImageUrl: StaticImageData;
     title: string;
     position: string;
     message: string;
}
