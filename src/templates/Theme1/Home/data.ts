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
import { ProductProps, ProductWidgetProps, TestimonialProps } from "./types";
import client1 from "../../../assets/images/clients/client-1.jpg";
import client2 from "../../../assets/images/clients/client-2.jpg";
import client3 from "../../../assets/images/clients/client-3.jpg";
import { templateImages } from "@/appProvider/templateImages";

export const featuredProducts: ProductProps[] = [
     {
          productImageAlt: "product",
          productCategory: "SHOES, TOYS",
          productImageUrl: templateImages.demo1.productImages.product5,
          productImageUrlTwo: templateImages.demo1.productImages.product5,
          productTitle: "Men Gentle Shoes",
          productPrice: 269,
     },
     {
          productImageAlt: "product",
          productCategory: "CAPS, DRESS",
          productImageUrl: templateImages.demo1.productImages.product1,
          productImageUrlTwo: templateImages.demo1.productImages.product1,
          productTitle: "Porto Gray Cap",
          productPrice: 29,
     },
     {
          productImageAlt: "product",
          productCategory: "CAPS, T-SHIRTS",
          productImageUrl: templateImages.demo1.productImages.product8,
          productImageUrlTwo: templateImages.demo1.productImages.product8,
          productTitle: "Porto White Cap",
          productPrice: 101,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, T-SHIRTS",
          productImageUrl: templateImages.demo1.productImages.product9,
          productImageUrlTwo: templateImages.demo1.productImages.product9,
          productTitle: "Winter Towel",
          productPrice: 49,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, HEADPHONE",
          productImageUrl: templateImages.demo1.productImages.product7,
          productImageUrlTwo: templateImages.demo1.productImages.product7,
          productTitle: "Product Extended",
          productPrice: 49,
     },
     {
          productImageAlt: "product",
          productCategory: "SHOES, TOYS",
          productImageUrl: templateImages.demo1.productImages.product6,
          productImageUrlTwo: templateImages.demo1.productImages.product6,
          productTitle: "Sports Shoes",
          productPrice: 239,
     },
     {
          productImageAlt: "product",
          productCategory: "TOYS, TROUSERS",
          productImageUrl: templateImages.demo1.productImages.product3,
          productImageUrlTwo: templateImages.demo1.productImages.product3,
          productTitle: "Women Bag",
          productPrice: 299,
     },
     {
          productImageAlt: "product",
          productCategory: "HEADPHONE, WATCHES",
          productImageUrl: templateImages.demo1.productImages.product4,
          productImageUrlTwo: templateImages.demo1.productImages.product4,
          productTitle: "Men Black Belts",
          productPrice: 55,
     },
     {
          productImageAlt: "product",
          productCategory: "DRESS, WATCHES",
          productImageUrl: templateImages.demo1.productImages.product8,
          productImageUrlTwo: templateImages.demo1.productImages.product8,
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

export const testimonies: TestimonialProps[] = [
     {
          clientImageUrl: templateImages.clientImage.client1,
          position: "John Smith",
          title: "CEO, Founder",
          message: " Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.",
     },
     {
          clientImageUrl: templateImages.clientImage.client2,
          position: "Dae Smith",
          title: "CEO, Founder",
          message: " Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.",
     },
     {
          clientImageUrl: templateImages.clientImage.client3,
          position: "John Doe",
          title: "CEO, Founder",
          message: " Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.",
     },
];
