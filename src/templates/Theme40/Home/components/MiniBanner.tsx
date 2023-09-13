import { templateImages } from "@/appProvider/templateImages";

const MiniBanner = () => {
     return (
          <div
               className="banner-section banner-bg"
               style={{
                    backgroundImage: `url(${templateImages.demo40.bannerImage.banner4})`,
               }}
          >
               <div className="banner col-md-11 m-auto d-flex align-items-center flex-column flex-sm-row justify-content-center justify-content-sm-between">
                    <div className="content-left text-center text-sm-right">
                         <h6
                              className="text-transform-none"
                              data-animation-name="fadeInDownShorter"
                              data-animation-delay={100}
                         >
                              Exclusive Whole Wheat
                         </h6>
                         <h2
                              className="text-transform-none"
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={600}
                         >
                              Fluffy Pancakes
                         </h2>
                         <h3
                              className=""
                              data-animation-name="fadeInRightShorter"
                              data-animation-delay={1100}
                         >
                              GOOD OLD FASHIONED
                         </h3>
                    </div>
                    <div className="content-right text-center text-sm-right">
                         <h5
                              className=""
                              data-animation-name="fadeInUpShorter"
                              data-animation-delay={400}
                         >
                              BREAKFAST PRODUCTS ON SALE
                         </h5>
                         <h4
                              className="d-inline-block"
                              data-animation-name="fadeInRightShorter"
                              data-animation-delay={800}
                         >
                              <sup>UP TO</sup>
                              <b className="coupon-sale-text ls-10 text-white align-middle">50%</b>
                         </h4>
                    </div>
               </div>
          </div>
     );
};
export default MiniBanner;
