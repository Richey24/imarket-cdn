function InfoBoxesContainer() {
     return (
          <div className="container">
               <div className="row justify-center feature-boxes-container pt-2">
                    <div className="col-sm-6 col-lg-3">
                         <div className="inline-block mb-4 feature-box-simple text-center ">
                              <i className="sicon-earphones-alt text-5xl"></i>

                              <div className="feature-box-content mb-4 p-0">
                                   <div className="mb-1">
                                        <div className="text-uppercase text-xl font-bold">
                                             Customer Support
                                        </div>
                                        <div className="text-lg">Need Assistence?</div>
                                   </div>

                                   <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum
                                        dolor sit amet.
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                         <div className="inline-block mb-4 feature-box-simple text-center">
                              <i className="sicon-credit-card text-5xl"></i>

                              <div className="feature-box-content p-0">
                                   <div className="mb-1">
                                        {" "}
                                        <div className="text-uppercase text-xl font-bold">
                                             Secured Payment
                                        </div>
                                        <div className="text-lg">Safe & Fast</div>
                                   </div>
                                   <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum
                                        dolor sit amet.
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                         <div className="inline-block mb-4 feature-box-simple text-center">
                              <i className="sicon-action-undo text-5xl"></i>

                              <div className="feature-box-content p-0">
                                   <div className="mb-1">
                                        {" "}
                                        <div className="text-uppercase text-xl font-bold">
                                             Free Returns
                                        </div>
                                        <div className="text-lg">Easy & Free</div>
                                   </div>
                                   <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum
                                        dolor sit amet.
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                         <div className="inline-block mb-4 feature-box-simple text-center">
                              <i className="icon-shipping text-5xl"></i>

                              <div className="feature-box-content p-0">
                                   <div className="mb-1">
                                        {" "}
                                        <div className="text-uppercase text-xl font-bold">
                                             Free Shipping
                                        </div>
                                        <div className="text-lg">Orders Over $99</div>
                                   </div>
                                   <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum
                                        dolor sit amet.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default InfoBoxesContainer;
