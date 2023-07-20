export default function Register() {
     return (
          <div className="flex w-screen h-screen items-center justify-center">
               <div className="bg-gray-50 p-6 border rounded-xl w-full md:w-1/2 xl:w-1/3">
                    <div className="heading mb-1">
                         <h2 className="title">Register</h2>
                    </div>

                    <form action="#">
                         <label htmlFor="register-email">
                              Email address
                              <span className="required">*</span>
                         </label>
                         <input
                              type="email"
                              className="form-input form-wide"
                              id="register-email"
                              required
                         />

                         <label htmlFor="register-password">
                              Password
                              <span className="required">*</span>
                         </label>
                         <input
                              type="password"
                              className="form-input form-wide"
                              id="register-password"
                              required
                         />

                         <div className="form-footer mb-2">
                              <button type="submit" className="btn btn-dark btn-md w-100 mr-0">
                                   Register
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
}
