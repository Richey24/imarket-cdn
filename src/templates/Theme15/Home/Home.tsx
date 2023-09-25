import { featuredProducts, miniBanners } from "./data";
import Banner from "./components/Banner";
import MiniBanners from "./components/MiniBanner/MiniBanners";
import ProductSection from "./components/ProductSection";
import SaleBanner from "./components/SaleBanner";
import Newsletter from "./components/Newsletter";
import SideMenu from "./components/SideMenu";
import FeatureBoxes from "./components/FeatureBoxes";
import ServiceBox from "./components/ServiceBox";

export const Home = () => {
     return (
          <main className="main">
               <div className="container">
                    <Banner />
                    <ServiceBox />
                    <section className="product-section">
                         <div className="row">
                              <div className="sidebar-home col-lg-3 col-md-4 order-lg-first">
                                   <SideMenu />
                                   <FeatureBoxes />
                              </div>
                              <div className="col-lg-9 col-md-8">
                                   <ProductSection
                                        sectionTitle="Recent Products"
                                        sectionSubTitle=" All our new arrivals in a exclusive brand selection"
                                        products={featuredProducts}
                                        colLg={4}
                                        colMd={6}
                                   />
                              </div>
                         </div>
                    </section>
                    <MiniBanners banners={miniBanners} />
                    <ProductSection
                         sectionTitle="Products On Sale"
                         sectionSubTitle="All our sale products in a exclusive brand selection"
                         products={featuredProducts}
                         colLg={2}
                         colMd={3}
                    />
                    <SaleBanner />
                    <ProductSection
                         sectionTitle="Popular Products"
                         sectionSubTitle="All our popular products in a exclusive brand selection"
                         products={featuredProducts}
                         colLg={2}
                         colMd={3}
                    />
                    <div className="m-b-1" />
                    <Newsletter />
               </div>
          </main>
     );
};
