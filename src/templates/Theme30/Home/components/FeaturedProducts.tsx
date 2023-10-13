import React from "react";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Product } from "./Product";

const FeaturedProducts = ({ products }) => {
     return (
          <div>
               <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    // modules={[Pagination]}
                    className="mySwiper"
               >
                    {products.map((product, key) => {
                         return (
                              <SwiperSlide key={key}>
                                   <Product {...product} />
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </div>
     );
};

export default FeaturedProducts;
