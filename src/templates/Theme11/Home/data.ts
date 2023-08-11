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
import product5 from "../../../assets/images/demoes/demo11/products/product-19.jpg";
import product5b from "../../../assets/images/demoes/demo11/products/product-19-2.jpg";
import product6 from "../../../assets/images/demoes/demo11/products/product-20.jpg";
import product6b from "../../../assets/images/demoes/demo11/products/product-20-2.jpg";
import product7 from "../../../assets/images/demoes/demo11/products/product-21.jpg";
import product7b from "../../../assets/images/demoes/demo11/products/product-21-2.jpg";
import category1 from "../../../assets/images/demoes/demo11/categories/category-1.jpg";
import category2 from "../../../assets/images/demoes/demo11/categories/category-2.jpg";
import category3 from "../../../assets/images/demoes/demo11/categories/category-3.jpg";
import category4 from "../../../assets/images/demoes/demo11/categories/category-4.jpg";
import category5 from "../../../assets/images/demoes/demo11/categories/category-5.jpg";
import smallProduct1 from "../../../assets//images/demoes/demo11/products/small/product-1.jpg";
import smallProduct1b from "../../../assets//images/demoes/demo11/products/small/product-1-2.jpg";
import smallProduct2 from "../../../assets//images/demoes/demo11/products/small/product-2.jpg";
import smallProduct2b from "../../../assets//images/demoes/demo11/products/small/product-2-2.jpg";
import smallProduct3 from "../../../assets//images/demoes/demo11/products/small/product-3.jpg";
import smallProduct3b from "../../../assets//images/demoes/demo11/products/small/product-3-2.jpg";
import smallProduct4 from "../../../assets//images/demoes/demo11/products/small/product-4.jpg";
import smallProduct4b from "../../../assets//images/demoes/demo11/products/small/product-4-2.jpg";
import smallProduct5 from "../../../assets//images/demoes/demo11/products/small/product-5.jpg";
import smallProduct5b from "../../../assets//images/demoes/demo11/products/small/product-5-2.jpg";
import smallProduct6 from "../../../assets//images/demoes/demo11/products/small/product-6.jpg";
import smallProduct6b from "../../../assets//images/demoes/demo11/products/small/product-6-2.jpg";
import smallProduct7 from "../../../assets//images/demoes/demo11/products/small/product-7.jpg";
import smallProduct7b from "../../../assets//images/demoes/demo11/products/small/product-7-2.jpg";
import smallProduct8 from "../../../assets//images/demoes/demo11/products/small/product-8.jpg";
import smallProduct8b from "../../../assets//images/demoes/demo11/products/small/product-8-2.jpg";
import smallProduct9 from "../../../assets//images/demoes/demo11/products/small/product-9.jpg";
import smallProduct9b from "../../../assets//images/demoes/demo11/products/small/product-9-2.jpg";

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

export const categoriesData = [
     {
          name: "Bags",
          image: category1.src,
          link: "demo11-shop.html",
     },
     {
          name: "Hats",
          image: category2.src,
          link: "demo11-shop.html",
     },
     {
          name: "Jackets",
          image: category3.src,
          link: "demo11-shop.html",
     },
     {
          name: "Sunglasses",
          image: category4.src,
          link: "demo11-shop.html",
     },
     {
          name: "Shoes",
          image: category5.src,
          link: "demo11-shop.html",
     },
     {
          name: "More Bags",
          image: category1.src,
          link: "demo11-shop.html",
     },
     // Add more categories...
];

export const topRatedproducts = [
     {
          image1: product5.src,
          image2: product5b.src,
          alt: "Product",
          label: "HOT",
          name: "Product Brown Bag",
          price: 70.0,
     },
     {
          image1: product6.src,
          image2: product6b.src,
          alt: "Product",
          name: "Women Shoes",
          price: 60.0,
     },
     {
          image1: product7.src,
          image2: product7b.src,
          alt: "Product",
          label: "HOT",
          name: "Women Dress",
          price: 55.0,
     },
];

export const productWidgetsData = [
     {
          image1: smallProduct1.src,
          image2: smallProduct1b.src,
          alt: "Product",
          name: "Product Short Name 1",
          price: 49.0,
     },
     {
          image1: smallProduct2.src,
          image2: smallProduct2b.src,
          alt: "Product",
          name: "Product Short Name 2",
          price: 49.0,
     },
     {
          image1: smallProduct3.src,
          image2: smallProduct3b.src,
          alt: "Product",
          name: "Product Short Name 3",
          price: 49.0,
     },
     // Add more products...
];

export const additionalProductWidgetsData = [
     {
          image1: smallProduct4.src,
          image2: smallProduct4b.src,
          alt: "Product",
          name: "Product Short Name 4",
          price: 49.0,
     },
     {
          image1: smallProduct5.src,
          image2: smallProduct5b.src,
          alt: "Product",
          name: "Product Short Name 5",
          price: 49.0,
     },
     {
          image1: smallProduct6.src,
          image2: smallProduct6b.src,
          alt: "Product",
          name: "Product Short Name 6",
          price: 49.0,
     },
     // Add more products...
];

export const featuredProductsWidgetsData = [
     {
          image1: smallProduct7,
          image2: smallProduct7b,
          alt: "Product",
          name: "Product Short Name 7",
          price: 49.0,
     },
     {
          image1: smallProduct8,
          image2: smallProduct8b,
          alt: "Product",
          name: "Product Short Name 8",
          price: 49.0,
     },
     {
          image1: smallProduct9,
          image2: smallProduct9b,
          alt: "Product",
          name: "Product Short Name 9",
          price: 49.0,
     },
];
