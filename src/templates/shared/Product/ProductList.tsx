import Link from "next/link";
import PropTypes, { InferProps } from "prop-types";
import { socialMap } from "@/utils/helper";
import Product from "@/app/components/Product";

const productListProps = {
     products: PropTypes.array.isRequired,
};

function ProductList({ products }: InferProps<typeof productListProps>): JSX.Element {
     return (
          <div className="row">
               {products &&
                    products.map((product) => {
                         return (
                              <div key={product.id} className="col-6 col-lg-3 col-md-4 col-xl-5col">
                                   <Product
                                        imageSrc={product.productImageUrl}
                                        productName={product.productTitle}
                                        price={product.productPrice}
                                   />
                              </div>
                         );
                    })}
          </div>
     );
}

export default ProductList;
