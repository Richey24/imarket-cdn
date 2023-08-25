import React from "react";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Product from "@/app/components/Product";

interface Iproduct {
     imageUrl: StaticImageData | string;
     category: string;
     title: string;
     price: string;
}
[];
function FeaturedProduct({ products }: { products: Iproduct[] }) {
     return (
          <div>
               <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    // modules={[Pagination]}
                    className="mySwiper"
               >
                    {products.map((product: Iproduct) => {
                         return (
                              <SwiperSlide key={product.title}>
                                   <Product
                                        imageSrc={product.imageUrl as string}
                                        productName={product.title}
                                        price={product.price}
                                   />
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </div>
     );
}

export default FeaturedProduct;
