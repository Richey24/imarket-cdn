const NewsLetter = () => {
     return (
          <div className="widget-newsletter d-flex align-items-center align-items-sm-start flex-column flex-xl-row  justify-content-xl-between my-5 py-3">
               <div className="widget-newsletter-info text-center text-sm-left d-flex flex-column flex-sm-row align-items-center mb-1 mb-xl-0">
                    <i className="icon-envolope" />
                    <div className="widget-info-content">
                         <h5 className="widget-newsletter-title mb-0">
                              Subscribe To Our Newsletter
                         </h5>
                         <p className="widget-newsletter-content mb-0">
                              Get all the latest information on Events, Sales and Offers.
                         </p>
                    </div>
               </div>
               <form action="#" className="mb-0 w-lg-max mt-2 mt-md-0">
                    <div className="footer-submit-wrapper d-flex align-items-center">
                         <input
                              type="email"
                              className="form-control mb-0"
                              placeholder="Your E-mail Address"
                              size={40}
                              required
                         />
                         <button
                              type="submit"
                              className="btn btn-primary btn-sm text-transform-none"
                         >
                              Subscribe Now!
                         </button>
                    </div>
               </form>
          </div>
     );
};
export default NewsLetter;
