import { templateImages } from "@/appProvider/templateImages"
import Image from "next/image";
import Slider from "react-slick";

const Testimonial = () => {


    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <section className="testimonials-section" id="testimonial">
                <div className="container">
                    <h2 className="subtitle text-center">TESTIMONIALS</h2>

                    <div className="testimonials-carousel images-left">
                        <Slider {...settings}>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <div className="testimonial">
                                        <figure>
                                            <Image src={templateImages.demo28.clientImage.client1} alt="client" width="120"
                                                height="120" />
                                        </figure>
                                        <div className="testimonial-owner">
                                            <div className="meta">
                                                <blockquote>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget quam
                                                        auctor, faucibus mi ac, ultrices eros. Sed maximus risus sem, nec imperdiet
                                                        nulla posuere vitae. Aenean a rutrum dolor. Ut quis nunc ligula.
                                                        Fusce
                                                    </p>
                                                </blockquote>
                                                <h4 className="testimonial-title">John Doe</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <figure>
                                            <Image src={templateImages.demo28.clientImage.client2} alt="client" width="120"
                                                height="120" />
                                        </figure>
                                        <div className="testimonial-owner">
                                            <div className="meta">
                                                <blockquote>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget quam
                                                        auctor, faucibus mi ac, ultrices eros. Sed maximus risus sem, nec imperdiet
                                                        nulla posuere vitae. Aenean a rutrum dolor. Ut quis nunc ligula.
                                                        Fusce
                                                    </p>
                                                </blockquote>
                                                <h4 className="testimonial-title">Jessica Doe</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <div className="testimonial">
                                        <figure>
                                            <Image src={templateImages.demo28.clientImage.client3} alt="client" width="120"
                                                height="120" />
                                        </figure>
                                        <div className="testimonial-owner">
                                            <div className="meta">
                                                <blockquote>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget quam
                                                        auctor, faucibus mi ac, ultrices eros. Sed maximus risus sem, nec imperdiet
                                                        nulla posuere vitae. Aenean a rutrum dolor. Ut quis nunc ligula.
                                                        Fusce
                                                    </p>
                                                </blockquote>
                                                <h4 className="testimonial-title">Chris Doe</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <figure>
                                            <Image src={templateImages.demo28.clientImage.client1} alt="client" width="120"
                                                height="120" />
                                        </figure>
                                        <div className="testimonial-owner">
                                            <div className="meta">
                                                <blockquote>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget quam
                                                        auctor, faucibus mi ac, ultrices eros. Sed maximus risus sem, nec imperdiet
                                                        nulla posuere vitae. Aenean a rutrum dolor. Ut quis nunc ligula.
                                                        Fusce
                                                    </p>
                                                </blockquote>
                                                <h4 className="testimonial-title">John Doe</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial