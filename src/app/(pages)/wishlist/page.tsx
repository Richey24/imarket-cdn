import Image from "next/image";

export default function WishList() {
     const wishlist = [
          {
               id: 1,
               product: {
                    title: "Product A",
                    price: "$500 ",
                    imageSrc:
                         "https://images.unsplash.com/photo-1689249876759-10ff4bc9f189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80",
               },
               stockStatus: "Pending",
          },
          {
               id: 2,
               product: {
                    title: "Product B",
                    price: "$200 ",
                    imageSrc:
                         "https://images.unsplash.com/photo-1689595244175-90c22a553086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
               },
               stockStatus: "Shipped",
          },
          // Add more sample data here...
     ];

     return (
          <div className="">
               <div className="page-header bg-gray-200 py-12">
                    <div className="container d-flex flex-column align-items-center">
                         <nav aria-label="breadcrumb" className="breadcrumb-nav mb-0">
                              <div className="container">
                                   <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                             <a href="demo4.html">Home</a>
                                        </li>

                                        <li className="breadcrumb-item active" aria-current="page">
                                             Wishlist
                                        </li>
                                   </ol>
                              </div>
                         </nav>

                         <h1 className="mt-0">Wishlist</h1>
                    </div>
               </div>
               <div className="container my-12">
                    <div className="text-3xl font-bold">My wishlist on Porto Shop 4</div>
                    <table className="table table-order text-left my-6 border-none">
                         <thead>
                              <tr>
                                   <th className=""></th>
                                   <th className="text-base font-bold order-id">PRODUCT</th>
                                   <th className="text-base font-bold order-date">PRICE</th>
                                   <th className="text-base font-bold order-status">
                                        STOCK STATUS
                                   </th>
                                   <th className="text-base font-bold order-price">ACTIONS</th>
                              </tr>
                         </thead>
                         {wishlist.length == 0 ? (
                              <tbody>
                                   <tr>
                                        <td className="text-center p-0" colSpan={5}>
                                             <p className="mb-5 mt-5">
                                                  No product has been added to your wish list.
                                             </p>
                                        </td>
                                   </tr>
                              </tbody>
                         ) : (
                              <tbody>
                                   {wishlist.map(({ product, id, stockStatus }) => (
                                        <tr
                                             key={id}
                                             className="border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                        >
                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 relative">
                                                  <div className="w-24 h-24 relative rounded-md overflow-hidden">
                                                       <Image
                                                            src={product.imageSrc}
                                                            layout="fill"
                                                            alt={product.title}
                                                       />
                                                  </div>
                                             </td>
                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 align-middle ">
                                                  {product.title}
                                             </td>
                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 align-middle">
                                                  {product.price}
                                             </td>
                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 align-middle">
                                                  {stockStatus}
                                             </td>

                                             <td className="whitespace-nowrap font-light text-lg px-6 py-2 align-middle">
                                                  <button className="bg-gray-100 text-gray-800 px-6 py-3 mx-2 rounded-sm">
                                                       View
                                                  </button>
                                                  <button className="bg-gray-800  text-white px-6 py-3 mx-2 rounded-sm ">
                                                       Add To Cart
                                                  </button>
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         )}
                    </table>
               </div>
          </div>
     );
}
