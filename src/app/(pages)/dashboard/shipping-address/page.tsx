function ShippingAddress() {
     return (
          <div className="address account-content mt-0 pt-2">
               <h4 className="title mb-3">Shipping Address</h4>

               <form className="mb-2" action="#">
                    <div className="row">
                         <div className="col-md-6">
                              <div className="form-group">
                                   <label>
                                        First name <span className="required">*</span>
                                   </label>
                                   <input type="text" className="form-control" required />
                              </div>
                         </div>

                         <div className="col-md-6">
                              <div className="form-group">
                                   <label>
                                        Last name <span className="required">*</span>
                                   </label>
                                   <input type="text" className="form-control" required />
                              </div>
                         </div>
                    </div>

                    <div className="form-group">
                         <label>Company </label>
                         <input type="text" className="form-control" />
                    </div>

                    <div className="select-custom">
                         <label>
                              Country / Region <span className="required">*</span>
                         </label>
                         <select name="orderby" className="form-control">
                              <option value="" selected={true}>
                                   British Indian Ocean Territory
                              </option>
                              <option value="1">Brunei</option>
                              <option value="2">Bulgaria</option>
                              <option value="3">Burkina Faso</option>
                              <option value="4">Burundi</option>
                              <option value="5">Cameroon</option>
                         </select>
                    </div>

                    <div className="form-group">
                         <label>
                              Street address <span className="required">*</span>
                         </label>
                         <input
                              type="text"
                              className="form-control"
                              placeholder="House number and street name"
                              required
                         />
                         <input
                              type="text"
                              className="form-control"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              required
                         />
                    </div>

                    <div className="form-group">
                         <label>
                              Town / City <span className="required">*</span>
                         </label>
                         <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                         <label>
                              State / Country <span className="required">*</span>
                         </label>
                         <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                         <label>
                              Postcode / ZIP <span className="required">*</span>
                         </label>
                         <input type="text" className="form-control" required />
                    </div>

                    <div className="form-footer mb-0">
                         <div className="form-footer-right">
                              <button type="submit" className="btn btn-dark py-4">
                                   Save Address
                              </button>
                         </div>
                    </div>
               </form>
          </div>
     );
}

export default ShippingAddress;
