import React from "react";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Product } from "./Product";

interface Iproduct {
     imageUrl: StaticImageData | string;
     category: string;
     title: string;
     price: number;
}
[];
function FeaturedProduct({ products }: { products: Iproduct[] }) {
     return (
          <div>
               <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                         clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
               >
                    {products.map((product: Iproduct) => {
                         return (
                              <SwiperSlide key={product.title}>
                                   <Product
                                        productImageUrl={product.imageUrl as string}
                                        productCategory={product.category}
                                        productTitle={product.title}
                                        productPrice={product.price}
                                        productImageAlt=""
                                        id={123}
                                        // productImageUrlTwo={""}
                                   />
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </div>
     );
}

export default FeaturedProduct;
