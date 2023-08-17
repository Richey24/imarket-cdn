import React from "react";
import { StaticImageData } from "next/image";
import OwlCarousel from "react-owl-carousel";
import Product from "@/app/components/Product";

interface Iproduct {
     imageUrl: StaticImageData | string;
     category: string;
     title: string;
     price: string;
}
[];

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     items: 2,
     nav: true,
     responsive: {
          "768": {
               items: 3,
          },
     },
};

function FeaturedProduct({ products }: { products: Iproduct[] }) {
     return (
          <section className="best-product-section">
               <OwlCarousel className="product-panel" {...owlCarouselOptions}>
                    {products.map((product: Iproduct) => {
                         return (
                              <Product
                                   imageSrc={product.imageUrl as string}
                                   productName={product.title}
                                   price={product.price}
                              />
                         );
                    })}
               </OwlCarousel>
          </section>
     );
}

export default FeaturedProduct;
