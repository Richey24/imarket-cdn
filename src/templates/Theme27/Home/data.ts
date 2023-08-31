import { ProductProps, PromotionProps } from "./types";
import { templateImages } from "@/appProvider/templateImages";

export const mostPopularProducts: ProductProps[] = [
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product1,
          productTitle: "Black Bike",
          productPrice: 299.0,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product2,
          productTitle: "Porto Fashion Bike",
          productPrice: 259.0,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product3,
          productTitle: "Green Bike",
          productPrice: 149.0,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product4,
          productTitle: "White Bike",
          productPrice: 129.0,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product5,
          productTitle: "Casual Bike",
          productPrice: 149.0,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product6,
          productTitle: "Blue Bike",
          productPrice: 59.0,
     },
];

export const trendingAccessories: ProductProps[] = [
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product2,
          productTitle: "Porto Fashion Bike",
          productPrice: 259.0,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product7,
          productTitle: "Bike Kit",
          productPrice: 55.0,
     },

     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product8,
          productTitle: "Bike Glass",
          productPrice: 49.0,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product9,
          productTitle: "Bike Frame",
          productPrice: 599.0,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo27.productImages.product10,
          productTitle: "Bike Chain",
          productPrice: 39.0,
     },
];

export const promotions: PromotionProps[] = [
     {
          title: "Summer Sale",
          promoText: "20% OFF",
          bannerUrl: templateImages.demo27.bannerImage.banner4,
     },
     {
          title: "Flash Sale",
          promoText: "20% OFF",
          bannerUrl: templateImages.demo27.bannerImage.banner5,
     },
];
