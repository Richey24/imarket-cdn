import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import ProductList from "@/templates/shared/Product/ProductList";
import BannerCategory from "./components/BannerCategory";
import ProductSlider from "@/templates/shared/Product/ProductSlider";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarVisibility } from "@/redux/global";
import { RootState } from "@/redux/store";

const Home = (props: any) => {
     // const dispatch = useDispatch();
     // const { isSideBarVisible } = useSelector((state: RootState) => state.general);

     const { static: statiProps, products, categories } = props;
     const [latestProductsState, setLatestProducts] = useState<any>(null);

     // const handleSideBarClose = () => {
     //      dispatch(setSideBarVisibility());
     //      console.log({ isSideBarVisible });
     // };
     useEffect(() => {
          if (products && !latestProductsState) {
               const latestProductsMap = products.map((product) => {
                    return {
                         productImageAlt: product.display_name,
                         productCategory: "SHOES, TOYS",
                         productImageUrl: "data:image/jpeg;base64," + product?.image_1920,
                         productImageUrlTwo: "data:image/jpeg;base64," + product?.image_1024,
                         productTitle: product.display_name,
                         productPrice: product.standard_price,
                         id: product.id,
                         slug: product.website_url,
                         tooltip: product.product_tooltip,
                         productImage: "data:image/jpeg;base64," + product?.image_1920,
                         productImageTwo: "data:image/jpeg;base64," + product?.image_1024,
                         __last_update: new Date(product.__last_update),
                    };
               });
               setLatestProducts(latestProductsMap);
          }
     }, [products]);

     return (
          <main className="main home">
               <Banner slides={statiProps?.banner ?? []} />
               <section className="featured-products-section container">
                    <h2 className="section-title text-center d-flex align-items-center">
                         Featured Products
                    </h2>
                    <ProductSlider products={latestProductsState} />
               </section>
               <div className="categories-section bg-primary">
                    <div className="container">
                         <h2 className="section-title border-0 title-decorate text-center text-white d-flex align-items-center">
                              <span>BROWSE OUR CATEGORIES</span>
                         </h2>
                         <BannerCategory categories={categories} />
                    </div>
               </div>
               {latestProductsState && latestProductsState.length && (
                    <div className="container">
                         <div className="arrival-products-section">
                              <div className="container">
                                   <h2 className="section-title text-center d-flex align-items-center">
                                        JUST ARRIVED
                                   </h2>

                                   <ProductList products={latestProductsState} />

                                   <hr className="mt-1 mb-4" />
                              </div>
                         </div>
                    </div>
               )}
          </main>
     );
};

export default Home;
