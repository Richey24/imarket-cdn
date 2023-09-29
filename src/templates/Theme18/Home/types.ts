export type ProductItemProps = {
     productImageUrl: string ;
     productCategory: string;
     productName: string;
     productPrice?: number | string;
 
};

export type ProductsProps = {
     products: ProductItemProps[];

};
