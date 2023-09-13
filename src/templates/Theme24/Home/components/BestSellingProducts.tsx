import { ProductProps } from "../types";
import { Product } from "./Product";

const BestSellingProducts: React.FC<{ products: ProductProps[] }> = (props) => {
     return (
          <section className="best-sellers">
               <div className="container">
                    <h2 className="section-title mb-2">Best Selling Items</h2>
                    <div className="row">
                         {props.products.map((product, index) => (
                              <div className="col-sm-6 col-md-4" key={index}>
                                   <Product {...product} />
                              </div>
                         ))}
                    </div>
                    <div className="view-more-container text-center">
                         <a href="demo24-shop.html" className="btn btn-round btn-view-more">
                              View more
                         </a>
                    </div>
               </div>
          </section>
     );
};
export default BestSellingProducts;
