import { StaticImageData } from "next/image";

export interface ProductProps {
     productImageUrl: StaticImageData | string;
     productCategory: string;
     productTitle: string;
     productPrice: number;
     oldPrice?: number;
}

export interface BrowseByCategoryProps {
     imageUrl: StaticImageData | string;
     categoryName: string;
     count: number;
     // url: Url;
}

export interface ProductWidgetProps {
     productImage: string;
     productImageTwo: string;
     productTitle: string;
     productPrice: number;
}
