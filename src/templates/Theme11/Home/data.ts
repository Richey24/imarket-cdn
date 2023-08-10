import slide1 from "../../../assets/images/demoes/demo11/slider/slide-1.jpg";
import slide2 from "../../../assets/images/demoes/demo11/slider/slide-2.jpg";
import banner1 from "../../../assets/images/demoes/demo11/banners/banner-1.jpg";
import banner2 from "../../../assets/images/demoes/demo11/banners/banner-2.jpg";
import banner3 from "../../../assets/images/demoes/demo11/banners/banner-3.jpg";
import product1 from "../../../assets/images/demoes/demo11/products/product-15.jpg";
import product1b from "../../../assets/images/demoes/demo11/products/product-15-2.jpg";
import product2 from "../../../assets/images/demoes/demo11/products/product-16.jpg";
import product2b from "../../../assets/images/demoes/demo11/products/product-16-2.jpg";
import product3 from "../../../assets/images/demoes/demo11/products/product-17.jpg";
import product3b from "../../../assets/images/demoes/demo11/products/product-17-2.jpg";
import product4 from "../../../assets/images/demoes/demo11/products/product-18.jpg";
import product4b from "../../../assets/images/demoes/demo11/products/product-18-2.jpg";

export const sliderData = [
     {
          id: 1,
          imageUrl: slide1.src,
          title: "New Season Dresses",
          discount: "50%",
          startingPrice: "39.99",
          shopLink: "demo11-shop.html",
     },
     {
          id: 2,
          imageUrl: slide2.src,
          title: "New Season Hats",
          discount: "20%",
          startingPrice: "19.99",
          shopLink: "demo11-shop.html",
     },
     // Add more slide data here
];

export const bannerData = [
     {
          title: "Sunglasses",
          productsCount: "16",
          shopLink: "demo11-shop.html",
          imageUrl: banner1.src,
     },
     {
          title: "Woman Shoes",
          productsCount: "12",
          shopLink: "demo11-shop.html",
          imageUrl: banner2.src,
     },
     {
          title: "Woman Bags",
          productsCount: "38",
          shopLink: "demo11-shop.html",
          imageUrl: banner3.src,
     },
     // Add more banner data here
];

export const infoBoxData = [
     {
          icon: "icon-shipping",
          title: "FREE SHIPPING & RETURN",
          content: "Free shipping on all orders over $99.",
     },
     {
          icon: "icon-money",
          title: "MONEY BACK GUARANTEE",
          content: "100% money back guarantee",
     },
     {
          icon: "icon-support",
          title: "ONLINE SUPPORT 24/7",
          content: "Lorem ipsum dolor sit amet.",
     },
     // Add more info box data here
];

export const productsData = [
     {
          id: 1,
          image1: product1.src,
          image2: product1b.src,
          category: "Women Fashion",
          title: "Women Fashion-Black",
          oldPrice: "$90.00",
          price: "$70.00",
     },
     {
          id: 2,
          image1: product2.src,
          image2: product2b.src,
          category: "Men Glasses",
          title: "Men Glasses",
          price: "$60.00",
     },
     {
          id: 3,
          image1: product3.src,
          image2: product3b.src,
          category: "Ray Ban",
          title: "Ray Ban 5228",
          oldPrice: "$75.00",
          price: "$55.00",
     },
     {
          id: 4,
          image1: product4.src,
          image2: product4b.src,
          category: "Masrinna Ankle Fashion",
          title: "Masrinna Ankle Fashion",
          oldPrice: "$60.00",
          price: "$50.00",
     },
     // ... add more products here ...
];
