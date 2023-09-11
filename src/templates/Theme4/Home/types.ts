import { StaticImageData } from "next/image";
import { JsxElement } from "typescript";

export interface ProductProps {
     productImageUrl: StaticImageData | string;
     productCategory: string;
     productTitle: string;
     productPrice: number;
     oldPrice?: number;
}

export interface BrowseByCategoryProps {
     categoryName: string;
     count: number;
     // url: Url;
}

export interface ProductWidgetProps {
     productImage: string;
     productImageTwo: string;
     productName: string;
     productPrice: number;
}
