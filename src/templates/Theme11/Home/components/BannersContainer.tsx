import React from "react";

interface BannerData {
     title: string;
     productsCount: string;
     shopLink: string;
     imageUrl: string;
}

interface BannersContainerProps {
     banners: BannerData[];
}

const BannersContainer: React.FC<BannersContainerProps> = ({ banners }) => (
     <div className="banners-container text-uppercase clear">
          <div className="container">
               <div className="row row-joined">
                    {banners.map((banner, index) => (
                         <div key={index} className="banner col-md-4">
                              <div className="banner-content text-left">
                                   <h3 className="banner-title m-b-1">{banner.title}</h3>
                                   <p>{banner.productsCount} Products</p>
                                   <hr className="divider-short-thick" />
                                   <a href={banner.shopLink} className="btn">
                                        Shop now <i className="fas fa-long-arrow-alt-right" />
                                   </a>
                              </div>
                              <a href="#">
                                   <img
                                        src={banner.imageUrl}
                                        style={{ backgroundColor: "#efefef" }}
                                        alt="banner"
                                   />
                              </a>
                         </div>
                    ))}
               </div>
          </div>
     </div>
);

export default BannersContainer;
