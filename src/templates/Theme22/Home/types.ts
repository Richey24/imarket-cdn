import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ProductProps {
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

export interface ChildrenProps {
     setState: Dispatch<SetStateAction<object>>;
}
