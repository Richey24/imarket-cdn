import ContactInfo from "@/templates/shared/Footer/Contact-Info";
import CopyRight from "@/templates/shared/Footer/Copy-Right";
import SocialIcons from "@/templates/shared/SocialIcons";
import { SubcribeEmail } from "@/templates/shared/SubcribeEmail";

const Footer = (props: any) => {
     const { static: staticProps, company } = props.props;

     return (
          <div>
               <footer className="footer">
                    <div className="footer-top">
                         <div className="container-fluid top-border d-flex align-items-center justify-content-between flex-wrap">
                              <div className="footer-left widget-newsletter d-md-flex align-items-center">
                                   <div className="widget-newsletter-info">
                                        <h5 className="widget-newsletter-title text-uppercase mb-0">
                                             subscribe newsletter
                                        </h5>
                                        <p className="widget-newsletter-content ls-0 font1 text-body mb-0">
                                             Get all the latest information on Events, Sales and
                                             Offers.
                                        </p>
                                   </div>

                                   <SubcribeEmail />
                              </div>
                              <div className="footer-right">
                                   <SocialIcons links={staticProps.socials || []} />
                              </div>
                         </div>
                    </div>
                    <div className="footer-middle">
                         <div className="container-fluid">
                              <div className="row">
                                   <div className="col-lg-4">
                                        <ContactInfo
                                             staticProps={staticProps}
                                             company={company}
                                             title="Contact Info"
                                        />
                                   </div>
                                   <div className="col-sm-6 col-lg-3">
                                        <div className="widget">
                                             <h3 className="widget-title">Account</h3>
                                             <div className="widget-content">
                                                  <ul>
                                                       <li>
                                                            <a href="dashboard.html">Dashboard</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Cart</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Checkout</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Order tracking</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Order history</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Wishlist</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-sm-6 col-lg-3">
                                        <div className="widget">
                                             <h3 className="widget-title">About</h3>
                                             <div className="widget-content">
                                                  <ul>
                                                       <li>
                                                            <a href="about.html">About us</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Contact us</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Shipping & Delivery</a>
                                                       </li>
                                                       <li>
                                                            <a href="#">Privacy</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <CopyRight name={company.company_name} />
               </footer>
          </div>
     );
};

export default Footer;
