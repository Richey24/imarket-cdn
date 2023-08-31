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
     clientImageUrl: StaticImageData | string;
     title: string;
     position: string;
     message: string;
}
