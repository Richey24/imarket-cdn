import visa from "../../../assets/images/payments/payment-visa.svg";

function CopyRight({ name }): JSX.Element {
     return (
          <div className="footer-bottom d-sm-flex align-items-center">
               <div className="footer-left">
                    <span className="footer-copyright">
                         © {name} {new Date().getFullYear()}. All Rights Reserved
                    </span>
               </div>
               <div className="footer-right ml-auto mt-1 mt-sm-0">
                    <div className="payment-icons mr-0">
                         <span
                              className="payment-icon visa"
                              style={{
                                   backgroundImage: `url('${visa}')`,
                              }}
                         />
                         <span
                              className="payment-icon paypal"
                              style={{
                                   backgroundImage:
                                        "url(assets/images/payments/payment-paypal.svg)",
                              }}
                         />
                         <span
                              className="payment-icon stripe"
                              style={{
                                   backgroundImage:
                                        "url(assets/images/payments/payment-stripe.png)",
                              }}
                         />
                         <span
                              className="payment-icon verisign"
                              style={{
                                   backgroundImage:
                                        "url(assets/images/payments/payment-verisign.svg)",
                              }}
                         />
                    </div>
               </div>
          </div>
     );
}

export default CopyRight;
