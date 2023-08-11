import Image from "next/image";
import { BrowseByCategoryProps } from "../types";

const BrowseByCategory: React.FC<BrowseByCategoryProps> = (props) => {
     return (
          <div className="product-category mx-2">
               <a href="demo3-shop.html">
                    <figure>
                         <Image src={props.imageUrl} width={273} height={200} alt="category" />
                    </figure>
                    <div className="category-content">
                         <h3>{props.categoryName}</h3>
                         <span>
                              <mark className="count">{props.count}</mark> products
                         </span>
                    </div>
               </a>
          </div>
     );
};

export default BrowseByCategory;
