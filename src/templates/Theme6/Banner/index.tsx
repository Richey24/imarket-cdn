import HeroSlider from "@/app/components/HeroSlider";
import Image from "next/image";
import Link from "next/link";

function Banner() {
     const sliderTestImages = [
          "https://images.unsplash.com/photo-1680726613909-4af2fcc1f09d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          "https://swiperjs.com/demos/images/nature-2.jpg",
          "https://swiperjs.com/demos/images/nature-3.jpg",
     ];
     return (
          <div className="h-screen w-full">
               <HeroSlider images={sliderTestImages} />
          </div>
     );
}

export default Banner;
