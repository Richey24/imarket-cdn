export type ProductItemProps = {
     productImageUrl: string ;
     productCategory: string;
     productName: string;
     price?: number | string;
};

export type ProductsProps = {
     products: ProductItemProps[];

};
