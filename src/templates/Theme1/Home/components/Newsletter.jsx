const NewsLetter = () => {
     return (
          <div className="widget widget-newsletters bg-gray text-center my-2">
               <h3 className="widget-title text-uppercase m-b-3">Subscribe Newsletter</h3>
               <p className="mb-2">Get all the latest information on Events, Sales and Offers. </p>
               <form action="#">
                    <div className="form-group position-relative sicon-envolope-letter">
                         <input
                              type="email"
                              className="form-control"
                              name="newsletter-email"
                              placeholder="Email address"
                         />
                    </div>
                    {/* Endd .form-group */}
                    <input
                         type="submit"
                         className="btn btn-primary btn-md"
                         defaultValue="Subscribe"
                    />
               </form>
          </div>
     );
};
export default NewsLetter;
