import product5 from "../../../assets/images/demoes/demo13/products/product-5.jpg";
import product5two from "../../../assets/images/demoes/demo13/products/product-5-2.jpg";
import product1 from "../../../assets/images/demoes/demo13/products/product-1.jpg";
import product1two from "../../../assets/images/demoes/demo13/products/product-1-2.jpg";
import product2 from "../../../assets/images/demoes/demo13/products/product-2.jpg";
import product2two from "../../../assets/images/demoes/demo13/products/product-2-2.jpg";
import product3 from "../../../assets/images/demoes/demo13/products/product-3.jpg";
import product3two from "../../../assets/images/demoes/demo13/products/product-3-2.jpg";
import product4 from "../../../assets/images/demoes/demo13/products/product-4.jpg";
import product4two from "../../../assets/images/demoes/demo13/products/product-4-2.jpg";
import product6 from "../../../assets/images/demoes/demo13/products/product-6.jpg";
import product6two from "../../../assets/images/demoes/demo13/products/product-6-2.jpg";
import product7 from "../../../assets/images/demoes/demo13/products/product-7.jpg";
import product7two from "../../../assets/images/demoes/demo13/products/product-7-2.jpg";
import product8 from "../../../assets/images/demoes/demo13/products/product-8.jpg";
import product8two from "../../../assets/images/demoes/demo13/products/product-8-2.jpg";
import product9 from "../../../assets/images/demoes/demo13/products/product-9.jpg";
import product9two from "../../../assets/images/demoes/demo13/products/product-9-2.jpg";
import product10 from "../../../assets/images/demoes/demo13/products/product-10.jpg";
import product10two from "../../../assets/images/demoes/demo13/products/product-10-2.jpg";
import product11 from "../../../assets/images/demoes/demo13/products/product-11.jpg";
import product11two from "../../../assets/images/demoes/demo13/products/product-11-2.jpg";
import product12 from "../../../assets/images/demoes/demo13/products/product-12.jpg";
import product12two from "../../../assets/images/demoes/demo13/products/product-12-2.jpg";
import product13 from "../../../assets/images/demoes/demo13/products/product-13.jpg";
import product13two from "../../../assets/images/demoes/demo13/products/product-13-2.jpg";
import product14 from "../../../assets/images/demoes/demo13/products/product-14.jpg";
import product14two from "../../../assets/images/demoes/demo13/products/product-14-2.jpg";
import { ProductProps, ProductWidgetProps } from "./types";

export const featuredProducts: ProductProps[] = [
     {
          productImageAlt: "product",
          productCategory: "SHOES, TOYS",
          productImageUrl: product5,
          productImageUrlTwo: product5two,
          productTitle: "Men Gentle Shoes",
          productPrice: 269,
     },
     {
          productImageAlt: "product",
          productCategory: "CAPS, DRESS",
          productImageUrl: product1,
          productImageUrlTwo: product1two,
          productTitle: "Porto Gray Cap",
          productPrice: 29,
     },
     {
          productImageAlt: "product",
          productCategory: "CAPS, T-SHIRTS",
          productImageUrl: product8,
          productImageUrlTwo: product8two,
          productTitle: "Porto White Cap",
          productPrice: 101,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, T-SHIRTS",
          productImageUrl: product11,
          productImageUrlTwo: product11two,
          productTitle: "Winter Towel",
          productPrice: 49,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, HEADPHONE",
          productImageUrl: product9,
          productImageUrlTwo: product9two,
          productTitle: "Product Extended",
          productPrice: 49,
     },
     {
          productImageAlt: "product",
          productCategory: "SHOES, TOYS",
          productImageUrl: product10,
          productImageUrlTwo: product10two,
          productTitle: "Sports Shoes",
          productPrice: 239,
     },
     {
          productImageAlt: "product",
          productCategory: "TOYS, TROUSERS",
          productImageUrl: product14,
          productImageUrlTwo: product14two,
          productTitle: "Women Bag",
          productPrice: 299,
     },
     {
          productImageAlt: "product",
          productCategory: "HEADPHONE, WATCHES",
          productImageUrl: product4,
          productImageUrlTwo: product4two,
          productTitle: "Men Black Belts",
          productPrice: 55,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, WATCHES",
          productImageUrl: product12,
          productImageUrlTwo: product12two,
          productTitle: "Women Bag",
          productPrice: 199,
     },
];

export const latestProducts = [
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product1,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product2,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product3,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
     // Add more latest products as needed
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product4,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product5,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product6,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product10,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product11,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
     {
          productImageAlt: "product",
          productCategory: "category",
          productImageUrl: product12,
          productTitle: "Product Short Name",
          productPrice: 49,
          oldPrice: 59,
     },
];

export const topRatedProducts: ProductWidgetProps[] = [
     {
          productImage: product5,
          productImageTwo: product5two,
          productTitle: "Men Gentle Shoes",
          productPrice: 269,
     },
     {
          productImage: product13,
          productImageTwo: product13two,
          productTitle: "Women Bag",
          productPrice: 299,
     },
     {
          productImage: product9,
          productImageTwo: product9two,
          productTitle: "Product Extended",
          productPrice: 39,
     },
     // Add more products as needed
];
