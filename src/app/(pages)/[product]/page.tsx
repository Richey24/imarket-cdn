import { findFeaturedProducts, findProduct } from "@/api/product.api";
import { ProductDescription } from "@/app/components/Product/Product-description";
import ProductStuf from "@/app/components/Product/product-stuf";
import { useNumberInput } from "@chakra-ui/number-input";
// import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function ProductPage({ params }: { params: { product: string } }) {
     let product;
     try {
          product = await findProduct(params.product);
     } catch (err) {
          console.log({ err });
          if (!product) return notFound();
     }

     // const featuredProducts = findFeaturedProducts();

     // // console.log({ props });
     // const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
     //      step: 0.01,
     //      defaultValue: 1.53,
     //      min: 1,
     //      max: 6,
     //      precision: 2,
     // });

     // const inc = getIncrementButtonProps();
     // const dec = getDecrementButtonProps();
     // const input = getInputProps();

     // const img =
     //      "https://images.unsplash.com/photo-1689598843935-1aba53dd1277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
     return (
          <div className="tw-pb-12 tw-pt-8">
               <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                         <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                                   <a href="demo13.html">Home</a>
                              </li>
                              <li className="breadcrumb-item" aria-current="page">
                                   Shop
                              </li>
                              <li className="breadcrumb-item" aria-current="page">
                                   shoes,&nbsp;&nbsp;toys
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                   sports shoes
                              </li>
                         </ol>
                    </div>
               </nav>
               <div className="container">
                    <div className="product-single-container product-single-default">
                         <div className="cart-message d-none">
                              <strong className="single-cart-notice">
                                   {product?.details?.[0]?.name}
                              </strong>
                              <span>has been added to your cart.</span>
                         </div>

                         <div className="row md:tw-mt-16 tw-my-4">
                              <div className="col-md-5 product-single-gallery">
                                   <div className="tw-relative tw-aspect-square tw-rounded-xl tw-border tw-h-full tw-max-h-[400px] tw-w-full tw-overflow-hidden">
                                        <Image
                                             className="tw-h-full tw-w-full tw-object-fill"
                                             fill
                                             // sizes="(min-width: 1024px) 66vw, 100vw"
                                             alt="product-thumbnail"
                                             src={`data:image/jpeg;base64,${
                                                  product?.details?.[0]?.image_1920 || ""
                                             }`}
                                             priority={true}
                                        />
                                   </div>
                                   product images
                              </div>
                              <div className="col-md-1"></div>
                              <div className=" col-md-6 product-single-details">
                                   <ProductDescription
                                        productDetail={
                                             (product &&
                                                  product?.details &&
                                                  product?.details?.[0]) ||
                                             {}
                                        }
                                   />
                              </div>
                         </div>
                    </div>
                    {/* product stuff */}
                    <ProductStuf />
               </div>
          </div>
     );
}

export default ProductPage;
