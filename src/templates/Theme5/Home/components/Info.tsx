import Image from "next/image";
import brand1 from "../../../../assets/images/brands/small//brand1.png"
import brand2 from "../../../../assets/images/brands/small//brand2.png"
import brand3 from "../../../../assets/images/brands/small//brand3.png"
import brand4 from "../../../../assets/images/brands/small//brand4.png"
import brand5 from "../../../../assets/images/brands/small//brand5.png"
import brand6 from "../../../../assets/images/brands/small//brand6.png"
import banner4 from "../../../../assets/images/demoes/demo5/banners/banner-4.jpg"

const Info = () => {
    return (
        <div>
            <div className="container container-not-boxed mt-2">
                <div style={{ backgroundImage: `url(${banner4.src})` }} className="banner banner-big-sale mb-5">
                    <div className="banner-content row align-items-center py-3 mx-0">
                        <div className="col-xl-9 col-sm-8 pt-3">
                            <h2 className="text-white text-uppercase mb-md-0 px-3 text-center text-sm-left">
                                <b className="d-inline-block mr-3 mb-1">Big Sale</b>
                                All new fashion brands items up to 70% off
                                <small className="text-transform-none align-middle">Online Purchases Only</small>
                            </h2>
                        </div>
                        <div className="col-xl-3 col-sm-4 py-3 text-center text-sm-right">
                            <a className="btn btn-light btn-lg mr-3 ls-10" href="#">View Sale</a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="feature-boxes-container row mt-6 mb-1">
                        <div className="col-md-4">
                            <div className="feature-box px-sm-5 px-md-4 feature-box-simple text-center">
                                <i style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", marginBottom: "30px" }} className="sicon-earphones-alt"></i>

                                <div className="feature-box-content">
                                    <h3 className="mb-0 pb-1">Customer Support</h3>
                                    <h5 className="m-b-3">Need Assistance?</h5>

                                    <p>We really care about you and your website as much as you do. Purchasing Porto
                                        or
                                        any other theme from us you get 100% free support.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box px-sm-5 px-md-4 feature-box-simple text-center">
                                <i style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", marginBottom: "30px" }} className="sicon-credit-card"></i>

                                <div className="feature-box-content">
                                    <h3 className="mb-0 pb-1">Secured Payment</h3>
                                    <h5 className="m-b-3">Safe &amp; Fast</h5>

                                    <p>With Porto you can customize the layout, colors and styles within only a few
                                        minutes. Start creating an amazing website right now!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box px-sm-5 px-md-4 feature-box-simple text-center">
                                <i style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", marginBottom: "30px" }} className="sicon-action-undo"></i>

                                <div className="feature-box-content">
                                    <h3 className="mb-0 pb-1">Returns</h3>
                                    <h5 className="m-b-3">Easy &amp; Free</h5>

                                    <p>Porto has very powerful admin features to help customer to build their own
                                        shop
                                        in minutes without any special skills in web development.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "30px" }} className="brands-slider images-center">
                        <Image src={brand1} width="140" height="60" alt="brand" />
                        <Image src={brand2} width="140" height="60" alt="brand" />
                        <Image src={brand3} width="140" height="60" alt="brand" />
                        <Image src={brand4} width="140" height="60" alt="brand" />
                        <Image src={brand5} width="140" height="60" alt="brand" />
                        <Image src={brand6} width="140" height="60" alt="brand" />
                    </div> */}

                </div>
                {/* <hr className="mt-4 mb-0" /> */}
            </div>
        </div>
    )
}

export default Info