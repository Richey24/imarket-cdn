import { StaticImageData } from "next/image";

export interface ProductProps {
     productImageUrl: StaticImageData | string;
     productCategory: string;
     productTitle: string;
     productPrice: number;
     oldPrice?: number;
     productImageUrlTwo: StaticImageData | string;
     productImageAlt: string;
}

export interface ProductWidgetProps {
     productImage: StaticImageData;
     productTitle: string;
     productPrice: number;
}
