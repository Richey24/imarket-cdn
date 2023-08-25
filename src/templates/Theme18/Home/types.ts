export type ProductItemProps = {
    imageUrl: string;
    category: string;
    productName: string;
    price: number;
};

export type ProductsProps = {
    products: ProductItemProps[];
};