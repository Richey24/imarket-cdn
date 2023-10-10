import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import OwlCarousel from "react-owl-carousel";
import { latestProducts } from "@/templates/Theme34/Home/data";
import Product from "@/app/components/Product";

const owlCarouselOptions = {
     dots: false,
     margin: 20,
     loop: false,
     responsive: {
          576: {
               items: 2,
          },
          992: {
               items: 3,
          },
     },
};
function TabContent() {
     return (
          // <OwlCarousel
          //      className="products-slider owl-carousel owl-theme show-nav-hover nav-outer nav-image-center"
          //      {...owlCarouselOptions}
          // >
          //      {latestProducts.map((product, idx) => {
          //           return (
          //                <Product
          //                     key={idx}
          //                     imageSrc={product.imageUrl as string}
          //                     productName={product.title}
          //                     price={product.price}
          //                />
          //           );
          //      })}
          // </OwlCarousel>
          <div></div>
     );
}

function Recomended() {
     return (
          <section className="recommended-section">
               <div className="container">
                    <h2 className="section-title m-b-2">Recommended Products</h2>
                    <h5 className="section-info p-b-4 mb-2">
                         Only the best seller products added recently in our catalog
                    </h5>

                    <Tabs
                         defaultActiveKey="best-seller"
                         id="justify-tab-example"
                         className="justify-content-center pt-4 m-b-3"
                    >
                         <Tab eventKey="best-seller" title="Best Seller">
                              <TabContent />
                         </Tab>
                         <Tab eventKey="what-new" title="What's new">
                              <TabContent />
                         </Tab>
                         <Tab eventKey="best-rating" title="Best Rating">
                              <TabContent />
                         </Tab>
                         <Tab eventKey="body" title="Body">
                              <TabContent />
                         </Tab>
                         <Tab eventKey="fragrance" title="Fragrance">
                              <TabContent />
                         </Tab>
                         <Tab eventKey="hair" title="Hair">
                              <TabContent />
                         </Tab>
                         <Tab eventKey="makeup" title="Makeup">
                              <TabContent />
                         </Tab>
                         <Tab eventKey="skincare" title="Skincare">
                              <TabContent />
                         </Tab>
                    </Tabs>
               </div>
          </section>
     );
}

export default Recomended;
