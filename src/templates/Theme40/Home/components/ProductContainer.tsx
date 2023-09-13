import Slider from "react-slick";
import { ProductProps } from "../types";
import { Product } from "./Product";

const slidesToShow = 4;
let settings = {
     // dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: slidesToShow,
     slidesToScroll: 1,
     autoplay: true,
     swipeToSlide: true,
     arrows: true,
     accessibility: true,
     className: "",
};
const ProductContainer: React.FC<{
     title: string;
     products: ProductProps[];
     withBorder?: Boolean;
}> = (props) => {
     return (
          <section
               className={`products-container ${
                    props.withBorder ? "products-section-with-border" : null
               }`}
          >
               <div
                    className="heading d-flex align-items-center "
                    data-animation-name="fadeInUpShorter"
                    data-animation-delay={150}
               >
                    <h2 className="text-transform-none mb-0">{props.title}</h2>
                    <a className="d-block view-all ml-auto" href="demo40-shop.html">
                         View All
                         <i className="fas fa-chevron-right" />
                    </a>
               </div>
               <Slider {...settings}>
                    {props.products.length < slidesToShow
                         ? [
                                ...props.products,
                                ...Array(slidesToShow - props.products.length).fill(null),
                           ].map((product, index) =>
                                product ? (
                                     <Product {...product} key={index} />
                                ) : (
                                     <div key={index}></div>
                                ),
                           )
                         : props.products.map((product, index) => (
                                <Product {...product} key={index} />
                           ))}
               </Slider>
          </section>
     );
};

export default ProductContainer;
