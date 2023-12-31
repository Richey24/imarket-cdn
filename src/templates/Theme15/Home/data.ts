import product5 from "../../../assets/images/demoes/demo15/products/product-5.jpg";
import product5two from "../../../assets/images/demoes/demo13/products/product-5-2.jpg";
import product1 from "../../../assets/images/demoes/demo15/products/product-1.jpg";
import product1two from "../../../assets/images/demoes/demo13/products/product-1-2.jpg";
import product2 from "../../../assets/images/demoes/demo15/products/product-2.jpg";
import product2two from "../../../assets/images/demoes/demo13/products/product-2-2.jpg";
import product3 from "../../../assets/images/demoes/demo15/products/product-3.jpg";
import product3two from "../../../assets/images/demoes/demo13/products/product-3-2.jpg";
import product4 from "../../../assets/images/demoes/demo15/products/product-4.jpg";
import product4two from "../../../assets/images/demoes/demo13/products/product-4-2.jpg";
import product6 from "../../../assets/images/demoes/demo15/products/product-6.jpg";
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
import {
     ProductProps,
     ProductWidgetProps,
     PromotionProps,
     ShopByCategoryProps,
     TestimonialProps,
} from "./types";
import client1 from "../../../assets/images/clients/client-1.jpg";
import client2 from "../../../assets/images/clients/client-2.jpg";
import client3 from "../../../assets/images/clients/client-3.jpg";

import banner1 from "../../../assets/images/demoes/demo15/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo15/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo15/banners/banner-3.jpg";
import banner4 from "../../../assets/images/demoes/demo3/banners/home-banner4.jpg";

import category1 from "../../../assets/images/demoes/demo3/categories/category-1.jpg";
import category2 from "../../../assets/images/demoes/demo3/categories/category-2.jpg";
import category3 from "../../../assets/images/demoes/demo3/categories/category-3.jpg";
import category4 from "../../../assets/images/demoes/demo3/categories/category-4.jpg";
import category5 from "../../../assets/images/demoes/demo3/categories/category-5.jpg";
import category6 from "../../../assets/images/demoes/demo3/categories/category-6.jpg";
import { MiniBannerProps } from "./components/MiniBanner/MiniBanner";
import { templateImages } from "@/appProvider/templateImages";

export const featuredProducts: ProductProps[] = [
     {
          productImageAlt: "product",
          productCategory: "SHOES, TOYS",
          productImageUrl: templateImages.demo15.productImages.product1,
          productTitle: "Woman Red Bag",
          productPrice: 269,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, TOYS",
          productImageUrl: templateImages.demo15.productImages.product2,
          productTitle: "Woman Black Blouse",
          productPrice: 29,
     },
     {
          productImageAlt: "product",
          productCategory: "CAPS, T-SHIRTS",
          productImageUrl: templateImages.demo15.productImages.product5,
          productTitle: "Porto White Cap",
          productPrice: 101,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, T-SHIRTS",
          productImageUrl: templateImages.demo15.productImages.product4,
          productTitle: "Woman Jacket",
          productPrice: 49,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, TROUSERS",
          productImageUrl: templateImages.demo15.productImages.product3,
          productTitle: "Porto Sticky info",
          productPrice: 49,
     },
     {
          productImageAlt: "product",
          productCategory: "HEADPHONE, T-SHIRTS",
          productImageUrl: templateImages.demo15.productImages.product6,
          productTitle: "Jeans Wear",
          productPrice: 239,
     },
];

export const miniBanners: MiniBannerProps[] = [
     {
          src: templateImages.demo15.bannerImage.banner2,
          title: "Orange",
          price: "19",
          priceSup: "99",
          backgroundColor: "#efefef",
     },
     {
          src: templateImages.demo15.bannerImage.banner3,
          title: "White",
          price: "29",
          priceSup: "99",
          backgroundColor: "#efefef",
     },
     {
          src: templateImages.demo15.bannerImage.banner4,
          title: "Black",
          price: "39",
          priceSup: "99",
          backgroundColor: "#efefef",
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
          title: "Sunglasses Sale",
          subtitle: "See all and find yours",
          imageUrl: banner1,
          position: "left",
          size: "small",
          buttonCaption: "Shop by Glasses",
          verticalAlignment: "end",
     },
     {
          title: "Cosmetics Trends",
          subtitle: "Browse in all our categories",
          imageUrl: banner2,
          position: "centered",
          size: "small",
          buttonCaption: "Shop by Glasses",
          textColor: "light",
          verticalAlignment: "start",
     },
     {
          title: "Fashion Summer Sale",
          subtitle: "Browse in all our categories",
          imageUrl: banner3,
          position: "centered",
          size: "small",
          buttonCaption: "Shop by fashion",
          textColor: "light",
          verticalAlignment: "center",
     },
     {
          title: "UP TO 70% IN ALL BAGS",
          subtitle: "* limited time only",
          imageUrl: banner4,
          position: "centered",
          size: "small",
          buttonCaption: "Buy Now!",
          verticalAlignment: "end",
     },
];

export const shopByCategories: ShopByCategoryProps[] = [
     {
          imageUrl: category1,
          categoryName: "Sunglasses",
          count: 8,
     },
     {
          imageUrl: category2,
          categoryName: "Bags",
          count: 5,
     },
     {
          imageUrl: category3,
          categoryName: "Electronics",
          count: 4,
     },
     {
          imageUrl: category4,
          categoryName: "Fashion",
          count: 9,
     },
     {
          imageUrl: category5,
          categoryName: "Headphone",
          count: 6,
     },
     {
          imageUrl: category6,
          categoryName: "Shoes",
          count: 4,
     },
];
