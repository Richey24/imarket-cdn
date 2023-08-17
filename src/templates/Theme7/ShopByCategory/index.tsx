import Image from "next/image";
import Link from "next/link";

function ShopByCategory() {
     return (
          <section className="container">
               <h2 className="text-center font-bold text-2xl my-4">Shop By Category</h2>

               <div className="flex justify-center">
                    <div className="product-category w-full md:w-[16%] p-1">
                         <Link href="#">
                              <figure className="relative h-64 w-64">
                                   <Image
                                        src="https://images.unsplash.com/photo-1614703418052-d5b893d495bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                                        fill
                                        alt="category"
                                   />
                              </figure>
                              <div className="category-content">
                                   <div className="text-xl font-semibold mb-1">Sunglasses</div>
                                   <span>
                                        <mark className="count">8</mark> products
                                   </span>
                              </div>
                         </Link>
                    </div>
                    <div className="product-category w-full md:w-[16%] p-1">
                         <Link href="#">
                              <figure className="relative h-64 w-64">
                                   <Image
                                        src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80"
                                        fill
                                        alt="category"
                                   />
                              </figure>
                              <div className="category-content">
                                   <div className="text-xl font-semibold mb-1">Bags</div>
                                   <span>
                                        <mark className="count">4</mark> products
                                   </span>
                              </div>
                         </Link>
                    </div>
                    <div className="product-category w-full md:w-[16%] p-1">
                         <Link href="#">
                              <figure className="relative h-64 w-64">
                                   <Image
                                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                                        fill
                                        alt="category"
                                   />
                              </figure>
                              <div className="category-content">
                                   <div className="text-xl font-semibold mb-1">Electronics</div>
                                   <span>
                                        <mark className="count">8</mark> products
                                   </span>
                              </div>
                         </Link>
                    </div>
                    <div className="product-category w-full md:w-[16%] p-1">
                         <Link href="#">
                              <figure className="relative h-64 w-64">
                                   <Image
                                        src="https://plus.unsplash.com/premium_photo-1679865289918-b21aae5a9559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                        fill
                                        alt="category"
                                   />
                              </figure>
                              <div className="category-content">
                                   <div className="text-xl font-semibold mb-1">Fashion</div>
                                   <span>
                                        <mark className="count">11</mark> products
                                   </span>
                              </div>
                         </Link>
                    </div>
                    <div className="product-category w-full md:w-[16%] p-1">
                         <Link href="#">
                              <figure className="relative h-64 w-64">
                                   <Image
                                        src="https://plus.unsplash.com/premium_photo-1679865289918-b21aae5a9559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                        fill
                                        alt="category"
                                   />
                              </figure>
                              <div className="category-content">
                                   <div className="text-xl font-semibold mb-1">Headphone</div>
                                   <span>
                                        <mark className="count">3</mark> products
                                   </span>
                              </div>
                         </Link>
                    </div>
                    <div className="product-category w-full md:w-[16%] p-1">
                         <Link href="#">
                              <figure className="relative h-64 w-64">
                                   <Image
                                        src="https://plus.unsplash.com/premium_photo-1679865289918-b21aae5a9559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                        fill
                                        alt="category"
                                   />
                              </figure>
                              <div className="category-content">
                                   <div className="text-xl font-semibold mb-1">Shoes</div>
                                   <span>
                                        <mark className="count">4</mark> products
                                   </span>
                              </div>
                         </Link>
                    </div>
               </div>
          </section>
     );
}

export default ShopByCategory;
