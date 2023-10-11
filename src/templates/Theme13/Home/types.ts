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
     handleAddToCart: (id: number, productPrice: string | number, done: () => void) => any;
}

export interface ProductWidgetProps {
     id: number;
     productImage: StaticImageData;
     productImageTwo: StaticImageData;
     productTitle: string;
     productPrice: number;
}
