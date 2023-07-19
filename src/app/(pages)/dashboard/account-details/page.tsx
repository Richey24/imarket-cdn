function AccountDetails() {
     return (
          <div className="">
               <h3 className="account-sub-title d-none d-md-block mt-0 pt-1 ml-1">
                    <i className="icon-user-2 align-middle mr-3 pr-1"></i>Account Details
               </h3>
               <div className="account-content">
                    <form action="#">
                         <div className="row">
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label htmlFor="acc-name">
                                             First name <span className="required">*</span>
                                        </label>
                                        <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Editor"
                                             id="acc-name"
                                             name="acc-name"
                                             required
                                        />
                                   </div>
                              </div>

                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label htmlFor="acc-lastname">
                                             Last name <span className="required">*</span>
                                        </label>
                                        <input
                                             type="text"
                                             className="form-control"
                                             id="acc-lastname"
                                             name="acc-lastname"
                                             required
                                        />
                                   </div>
                              </div>
                         </div>

                         <div className="form-group mb-2">
                              <label htmlFor="acc-text">
                                   Display name <span className="required">*</span>
                              </label>
                              <input
                                   type="text"
                                   className="form-control"
                                   id="acc-text"
                                   name="acc-text"
                                   placeholder="Editor"
                                   required
                              />
                              <p>
                                   This will be how your name will be displayed in the account
                                   section and in reviews
                              </p>
                         </div>

                         <div className="form-group mb-4">
                              <label htmlFor="acc-email">
                                   Email address <span className="required">*</span>
                              </label>
                              <input
                                   type="email"
                                   className="form-control"
                                   id="acc-email"
                                   name="acc-email"
                                   placeholder="editor@gmail.com"
                                   required
                              />
                         </div>

                         <div className="change-password">
                              <h3 className="text-uppercase mb-2">Password Change</h3>

                              <div className="form-group">
                                   <label htmlFor="acc-password">
                                        Current Password (leave blank to leave unchanged)
                                   </label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        id="acc-password"
                                        name="acc-password"
                                   />
                              </div>

                              <div className="form-group">
                                   <label htmlFor="acc-password">
                                        New Password (leave blank to leave unchanged)
                                   </label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        id="acc-new-password"
                                        name="acc-new-password"
                                   />
                              </div>

                              <div className="form-group">
                                   <label htmlFor="acc-password">Confirm New Password</label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        id="acc-confirm-password"
                                        name="acc-confirm-password"
                                   />
                              </div>
                         </div>

                         <div className="form-footer mt-3 mb-0">
                              <button type="submit" className="btn btn-dark mr-0">
                                   Save changes
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
}

export default AccountDetails;
