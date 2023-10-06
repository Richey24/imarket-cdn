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

 
export type ProductsProps = {
     products: ProductProps[];

};
