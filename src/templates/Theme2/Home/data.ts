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
import { ProductProps, ProductWidgetProps, PromotionProps, TestimonialProps } from "./types";
import client1 from "../../../assets/images/clients/client-1.jpg";
import client2 from "../../../assets/images/clients/client-2.jpg";
import client3 from "../../../assets/images/clients/client-3.jpg";

import banner1 from "../../../assets/images/demoes/demo2/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo2/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo2/banners/banner-3.jpg";
import banner4 from "../../../assets/images/demoes/demo2/banners/banner-4.jpg";
import banner5 from "../../../assets/images/demoes/demo2/banners/banner-5.jpg";
import banner6 from "../../../assets/images/demoes/demo2/banners/banner-6.jpg";
import banner7 from "../../../assets/images/demoes/demo2/banners/banner-7.jpg";
import banner8 from "../../../assets/images/demoes/demo2/banners/banner-8.jpg";
import banner9 from "../../../assets/images/demoes/demo2/banners/banner-9.jpg";
import { templateImages } from "@/appProvider/templateImages";

export const featuredProducts: ProductProps[] = [
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo2.productImages.product1,
          productImageUrlTwo: templateImages.demo2.productImages.product1,
          productTitle: "Blue High Hill",
          productPrice: 269,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo2.productImages.product2,
          productImageUrlTwo: templateImages.demo2.productImages.product2,
          productTitle: "Brown Bag",
          productPrice: 29,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo2.productImages.product3,
          productImageUrlTwo: templateImages.demo2.productImages.product3,
          productTitle: "Black Belt",
          productPrice: 101,
     },
     {
          productImageAlt: "product",
          productCategory: "Category",
          productImageUrl: templateImages.demo2.productImages.product4,
          productImageUrlTwo: templateImages.demo2.productImages.product4,
          productTitle: "High Hill Casual",
          productPrice: 49,
     },
     // {
     //      productImageAlt: "product",
     //      productCategory: "Category",
     //      productImageUrl: templateImages.demo2.productImages.product5,
     //      productImageUrlTwo: templateImages.demo2.productImages.product5,
     //      productTitle: "Travel Bag",
     //      productPrice: 49,
     // },
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

export const testimonies: TestimonialProps[] = [
     {
          clientImageUrl: client1,
          position: "John Smith",
          title: "CEO, Founder",
          message: " Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.",
     },
     {
          clientImageUrl: client2,
          position: "Dae Smith",
          title: "CEO, Founder",
          message: " Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.",
     },
     {
          clientImageUrl: client3,
          position: "John Doe",
          title: "CEO, Founder",
          message: " Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.",
     },
];

export const promotions: PromotionProps[] = [
     {
          title: "Mega Sale",
          subtitle: "Watches",
          imageUrl: banner1,
          position: "right",
          size: "small",
          buttonCaption: "View Sales",
          promoText: "40% Off",
     },
     {
          title: "Electronic Deals",
          subtitle: "Exclusive COUPON",
          promoText: "UP TO $100 OFF",
          imageUrl: banner7,
          position: "right",
          size: "large",
          buttonCaption: "Get Yours!",
          textColor: "light",
     },
     {
          title: "Trending",
          subtitle: "Hot Sales",
          imageUrl: banner2,
          position: "right",
          size: "small",
          buttonCaption: "Buy Now!",
          promoText: "Starting at $99",
     },
     {
          title: "Top Brands Smartphones",
          subtitle: "* limited time only",
          imageUrl: banner3,
          position: "right",
          size: "small",
          buttonCaption: "Buy Now!",
     },

     {
          title: "Exclusive Shoes",
          promoText: "50% Off",
          imageUrl: banner8,
          position: "left",
          size: "large",
          buttonCaption: "Get Yours!",
     },
     {
          title: "FLASH SALE",
          subtitle: "TOP BRANDS SUMMER SUNGLASSES",
          promoText: "STARTING AT $199",
          imageUrl: banner4,
          position: "right",
          size: "small",
          buttonCaption: "VIEW SALE",
          textColor: "light",
     },
     {
          title: "Amazing Collections",
          subtitle: "Check Our Discounts",
          promoText: "STARTING AT $199",
          imageUrl: banner2,
          position: "centered",
          size: "small",
          buttonCaption: "SHOP NOW!",
     },
     {
          title: "Check our discounts",
          subtitle: "More than 20 brands",
          promoText: "UP TO 100% OFF",
          imageUrl: banner9,
          position: "left",
          size: "large",
          buttonCaption: "CHECK THIS SALE!",
     },

     {
          title: "Deal Promos",
          promoText: "STARTING AT $199",
          imageUrl: banner6,
          position: "centered",
          size: "small",
          buttonCaption: "BUY NOW!",
     },
];
