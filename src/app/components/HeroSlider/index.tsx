import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Zoom, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function HeroSlider({ images }: { images: string[] }): JSX.Element {
     return (
          <div className="">
               {/* h-screen w-screen overflow-hidden */}
               <Swiper
                    effect={"fade"}
                    zoom={true}
                    loop={true}
                    navigation={true}
                    pagination={{
                         clickable: true,
                    }}
                    modules={[EffectFade, Zoom, Navigation, Pagination]}
                    className="mySwiper"
               >
                    {images.map((image) => {
                         return (
                              <SwiperSlide>
                                   <div className="swiper-zoom-container h-screen relative">
                                        <div className="h-full w-full absolute top-0 bottom-0 right-0 left-0 bg-black opacity-40 "></div>
                                        <img
                                             className="w-full h-screen !object-cover"
                                             src={image}
                                        />
                                   </div>
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </div>
     );
}

export default HeroSlider;
