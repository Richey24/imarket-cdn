import { ProductProps } from "./types";
import { templateImages } from "@/appProvider/templateImages";

 
export const featuredProducts: ProductProps[] = [
     {
          productImageAlt: "product",
          productCategory: "CATEGORY",
          productImageUrl: templateImages.demo20.productImages.product1,
          productTitle: "Men Gentle Shoes",
          productPrice: 56.0,
     },
     {
          productImageAlt: "product",
          productCategory: "CATEGORY",
          productImageUrl: templateImages.demo20.productImages.product2,
          productTitle: "Porto Gray Cap",
          productPrice: 76.0,
     },
     {
          productImageAlt: "product",
          productCategory: "CATEGORY",
          productImageUrl: templateImages.demo20.productImages.product3,
          productTitle: "Porto White Cap",
          productPrice: 56.0,
     },
     {
          productImageAlt: "product",
          productCategory: "CATEGORY",
          productImageUrl: templateImages.demo20.productImages.product4,
          productTitle: "Winter Towel",
          productPrice: 199,
     },
     {
          productImageAlt: "product",
          productCategory: "CATEGORY",
          productImageUrl: templateImages.demo20.productImages.product5,
          productTitle: "FOOTWAER",
          productPrice: 88,
     },
];

export const featuredCat = [
     {
          Img: templateImages.demo20.categoryImages.category1,
          Title: "Fashion",
          Smsize: 4,
          MdSize: 3,
     },
     {
          Img: templateImages.demo20.categoryImages.category2,
          Title: "Furniture",
          Smsize: 8,
          MdSize: 6,
     },
     {
          Img: templateImages.demo20.categoryImages.category3,
          Title: "Decore",
          Smsize: 5,
          MdSize: 3,
     },
     {
          Img: templateImages.demo20.categoryImages.category4,
          Title: "Accessories",
          Smsize: 7,
          MdSize: 4,
     },
     {
          Img: templateImages.demo20.categoryImages.category5,
          Title: "Mobile",
          Smsize: 4,
          MdSize: 3,
     },
     {
          Img: templateImages.demo20.categoryImages.category6,
          Title: "Footwear",
          Smsize: 8,
          MdSize: 5,
     },
];
export const offerAndDeals = [
     {
          Img: templateImages.demo20.bannerImage.banner4,
          Img2: templateImages.demo20.bannerImage.banner7,
          h3: "Exclusive Shoes",
          h4: "50% Off",
          atag: "demo20-shop.html",
          MdSize: 6,
          bannerStyles:'banner3',
          h3Styles: "m-b-1",
          h4Styles: "text-uppercase mb-4",
          contentStyles:'banner-layer banner-layer-middle banner-layer-left'

     },
     {
          Img: templateImages.demo20.bannerImage.banner5,
          h3: "Collection",
          h6: "Amazing",
          h5: "Check our discounts",
          atag: "demo20-shop.html",
          MdSize: 6,
          bannerStyles:'banner4',
          h6Styles: "heading-border text-dark text-uppercase m-b-2",
          h3Styles: "ls-n-10 text-uppercase m-b-3",
          h5Styles: "text-uppercase",
          contentStyles:'banner-layer banner-layer-middle banner-layer-right text-center'
     },
     {
          Img: templateImages.demo20.bannerImage.banner6,
          h4: "Subscribe To Our Newsletter",
          p: "Get all the latest information on events, sales and offers",
          MdSize: 12,
          h4Styles: "mt-0 m-b-1",
          pStyles: "font2 text-body m-b-4",
          contentStyles:'banner-layer banner-layer-middle text-center',
          bannerStyles:'banner5',
     },
];

export const instagram = [
     {
          image: templateImages.demo20.instagramImage.insta1,
     },
     {
          image: templateImages.demo20.instagramImage.insta2,
     },
     {
          image: templateImages.demo20.instagramImage.insta3,
     },
     {
          image: templateImages.demo20.instagramImage.insta4,
     },
     {
          image: templateImages.demo20.instagramImage.insta5,
     },
     {
          image: templateImages.demo20.instagramImage.insta6,
     },
     {
          image: templateImages.demo20.instagramImage.insta7,
     },
     {
          image: templateImages.demo20.instagramImage.insta8,
     },
     {
          image: templateImages.demo20.instagramImage.insta9,
     },
];
export const payments = [
     {
          image: templateImages.paymentImage.payment4,
     },
     {
          image: templateImages.paymentImage.payment1,
     },
     {
          image: templateImages.paymentImage.payment2,
     },
     {
          image: templateImages.paymentImage.payment3,
     },
];
