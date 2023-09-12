import Image from "next/image";
import Link from "next/link";

interface Icategory {
     imageUrl: string;
     categoryName: string;
     count: number;
}

const ShopByCategory: React.FC<Icategory> = ({ imageUrl, categoryName, count }) => {
     return (
          <div className="product-category mx-2">
               <Link href={`/category/${categoryName}`}>
                    <figure>
                         <Image src={imageUrl} width={273} height={273} alt="category" />
                    </figure>
                    <div className="category-content">
                         <h3>{categoryName}</h3>
                         <span>
                              <mark className="count">{count}</mark> products
                         </span>
                    </div>
               </Link>
          </div>
     );
};

export default ShopByCategory;
