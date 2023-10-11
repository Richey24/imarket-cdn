import OwlCarousel from "react-owl-carousel";

const owlCarouselOptions = {
     dots: true,
     margin: 20,
     loop: false,
     items: 1,
};

function ClientsReview() {
     return (
          <section
               className="reviews-section"
               style={{ backgroundImage: "url(assets/images/demoes/demo34/bg-text.png)" }}
          >
               <div className="container">
                    <h2 className="section-title text-center m-b-2">Clients Reviews</h2>
                    <h5 className="section-info border-0 text-center mb-0">
                         Only the best seller products added recently in our catalog
                    </h5>

                    {/* <OwlCarousel
                         className="testimonial-carousel owl-carousel owl-theme show-nav-hover nav-outer dots-small mb-2"
                         {...owlCarouselOptions}
                    >
                         <div className="testimonial">
                              <blockquote>
                                   <p>
                                        I really love it. At first it does feel strange and a little
                                        sore after! But keep it up (I use morning and night) and my
                                        skin feels great.
                                   </p>
                              </blockquote>
                              <div className="testimonial-owner">
                                   <strong className="testimonial-title">Mary Doe</strong>
                              </div>
                         </div>
                         <div className="testimonial">
                              <blockquote>
                                   <p>
                                        I really love it. At first it does feel strange and a little
                                        sore after! But keep it up (I use morning and night) and my
                                        skin feels great.
                                   </p>
                              </blockquote>
                              <div className="testimonial-owner">
                                   <strong className="testimonial-title">Mary Doe</strong>
                              </div>
                         </div>
                    </OwlCarousel> */}
               </div>
          </section>
     );
}

export default ClientsReview;
