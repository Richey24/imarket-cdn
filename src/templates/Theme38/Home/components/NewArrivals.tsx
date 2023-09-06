import Slider from "react-slick";
import { ProductProps } from "../types";
import { Product } from "./Product";
import { templateImages } from "@/appProvider/templateImages";

const NewArrivals: React.FC<{ newArrivalProducts: ProductProps[] }> = (props) => {
     let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          arrows: true,
          accessibility: true,
          className: "",
     };
     return (
          <section className="products-container new-products-container">
               <div className="container">
                    <div className="heading text-uppercase text-center">
                         <h5
                              className=""
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={200}
                         >
                              RECENTLY ARRIVED
                         </h5>
                         <h2
                              className="text-capitalize mb-0 "
                              data-animation-delay={300}
                              data-animation-name="fadeInUpShorter"
                         >
                              New Arrivals
                         </h2>
                    </div>
                    <div
                         className="products-slider custom-products owl-carouse owl-theme nav-outer show-nav-hover nav-image-center "
                         data-animation-delay={500}
                         data-animation-name="fadeIn"
                         data-owl-options="{
						'dots': true,
                  'nav': false
					}"
                    >
                         <Slider {...settings}>
                              {props.newArrivalProducts.map((product, index) => (
                                   // <div className="col-sm-6 col-md-4" key={index}>
                                   <Product {...product} key={index} />
                                   // </div>
                              ))}
                         </Slider>
                    </div>
                    {/* End .featured-proucts */}
               </div>
          </section>
     );
};
export default NewArrivals;
