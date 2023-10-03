export type ProductItemProps = {
     imageUrl: string;
     category: string;
     productName: string;
     price?: number | string;
};

export type ProductsProps = {
     products: ProductItemProps[];
};
