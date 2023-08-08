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

export interface BrowseByCategoryProps {
     imageUrl: StaticImageData | string;
     categoryName: string;
     count: number;
     // url: Url;
}

export interface ProductWidgetProps {
     productImage: StaticImageData;
     productImageTwo: StaticImageData;
     productTitle: string;
     productPrice: number;
}
