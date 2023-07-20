export default function Login() {
     return (
          <div className="flex w-screen h-screen items-center justify-center">
               <div className="bg-gray-50 p-6 border rounded-xl w-full md:w-1/2 xl:w-1/3">
                    <div className="heading mb-1">
                         <h2 className="title">Login</h2>
                    </div>

                    <form action="#">
                         <label htmlFor="login-email">
                              Username or email address
                              <span className="required">*</span>
                         </label>
                         <input
                              type="email"
                              className="form-input form-wide"
                              id="login-email"
                              required
                         />

                         <label htmlFor="login-password">
                              Password
                              <span className="required">*</span>
                         </label>
                         <input
                              type="password"
                              className="form-input form-wide"
                              id="login-password"
                              required
                         />

                         <div className="form-footer">
                              <div className="custom-control custom-checkbox mb-0">
                                   <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="lost-password"
                                   />
                                   <label
                                        className="custom-control-label mb-0"
                                        htmlFor="lost-password"
                                   >
                                        Remember me
                                   </label>
                              </div>

                              <a
                                   href="forgot-password.html"
                                   className="forget-password text-dark form-footer-right"
                              >
                                   Forgot Password?
                              </a>
                         </div>
                         <button
                              type="submit"
                              className="btn bg-gray-800 text-gray-50 hover:bg-gray-700 rounded-sm btn-md w-100"
                         >
                              LOGIN
                         </button>
                    </form>
               </div>
          </div>
     );
}
