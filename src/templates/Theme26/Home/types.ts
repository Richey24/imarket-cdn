import { StaticImageData } from "next/image";

export interface ProductProps {
     productImageUrl: StaticImageData | string;
     productCategory: string;
     productTitle: string;
     productPrice: number;
     oldPrice?: number;
}

export interface ProductWidgetProps {
     productImage: StaticImageData;
     productTitle: string;
     productPrice: number;
}
