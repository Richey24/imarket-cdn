import { templateImages } from "@/appProvider/templateImages"
import Image from "next/image"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-middle row">
                        <div className="col-lg-5 col-xl-6">
                            <div className="row mt-2" style={{ display: "flex", alignItems: "center" }}>
                                <div className="col-md-4 col-lg-12 col-xl-4">
                                    <a href="demo29.html" className="logo-footer"><Image src={templateImages.logoImage.logo2}
                                        width="112" height="44" alt="logo" />
                                    </a>
                                </div>
                                <div className="col-md-8 col-lg-12 col-xl-8">
                                    <div className="social-link">
                                        <h4>Questions</h4>
                                        <div className="links">
                                            <a href="#" className="phone_link">1-888-123-456</a>
                                            <hr className="vertical" />
                                            <div className="social-icons">
                                                <a href="#" className="social-icon social-facebook" target="_blank"
                                                    title="Facebook">
                                                    <i className="icon-facebook"></i>
                                                </a>
                                                <a href="#" className="social-icon social-twitter" target="_blank"
                                                    title="Twitter">
                                                    <i className="icon-twitter"></i>
                                                </a>
                                                <a href="#" className="social-icon social-instagram" target="_blank"
                                                    title="instagram">
                                                    <i className="icon-instagram"></i>
                                                </a>

                                                <a href="#" className="social-icon social-linkedin" target="_blank"
                                                    title="Linkedin">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-6">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h3 className="widget-title">Account</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><a href="dashboard.html">Dashboard</a></li>
                                                <li><a href="#">Cart</a></li>
                                                <li><a href="#">Checkout</a></li>
                                                <li><a href="#">Order tracking</a></li>
                                                <li><a href="#">Order history</a></li>
                                                <li><a href="#">Wishlist</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h3 className="widget-title">About</h3>
                                        <div className="widget-content">
                                            <ul>
                                                <li><a href="about.html">About us</a></li>
                                                <li><a href="#">Contact us</a></li>
                                                <li><a href="#">Shipping & Delivery</a></li>
                                                <li><a href="#">Privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-lg-flex align-items-center">
                        <p className="footer-copyright font2 mb-0">© Dreamtechlabs 2021. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer