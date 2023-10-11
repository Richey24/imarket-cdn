import Slider from "react-slick";
import { ProductProps } from "../types";
import { Product } from "./Product";
const TrendingAccessories: React.FC<{ trendingAccessories: ProductProps[]; headerTitle }> = (
     props,
) => {
     let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          className: "",
     };
     return (
          <section className="trendy-section mb-2 w-100">
               <div className="container">
                    <h2
                         className="section-title "
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                    >
                         {props.headerTitle}
                    </h2>
                    <div
                         className="row w-100"
                         data-animation-name="fadeInUpShorter"
                         data-animation-delay={200}
                    >
                         <div
                              className="products-slider 5col owl-carouse owl-theme w-100"
                              data-owl-options="{
      'margin': 0
  }"
                         >
                              <Slider {...settings}>
                                   {props.trendingAccessories.map((trendingAccessory, index) => (
                                        <Product {...trendingAccessory} key={index} />
                                   ))}
                              </Slider>
                         </div>
                    </div>
               </div>
          </section>
     );
};
export default TrendingAccessories;
