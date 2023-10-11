import { ProductProps, PromotionProps } from "./types";
import { templateImages } from "@/appProvider/templateImages";

export const promotions: PromotionProps[] = [
     {
          title: "Summer Sale",
          promoText: "20% OFF",
          bannerUrl: templateImages.demo27.bannerImage.banner4,
     },
     {
          title: "Flash Sale",
          promoText: "20% OFF",
          bannerUrl: templateImages.demo27.bannerImage.banner5,
     },
];
