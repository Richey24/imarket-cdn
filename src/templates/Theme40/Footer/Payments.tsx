import { templateImages } from "@/appProvider/templateImages";

const Payments = () => {
     return (
          <div className="payment-icons mr-0">
               <span
                    className="payment-icon visa"
                    style={{ backgroundImage: `url(${templateImages.paymentImage.payment1})` }}
               />
               <span
                    className="payment-icon paypal"
                    style={{
                         backgroundImage: `url(${templateImages.paymentImage.payment2})`,
                    }}
               />
               <span
                    className="payment-icon stripe"
                    style={{
                         backgroundImage: `url(${templateImages.paymentImage.payment3})`,
                    }}
               />
               <span
                    className="payment-icon verisign"
                    style={{
                         backgroundImage: `url(${templateImages.paymentImage.payment4})`,
                    }}
               />
          </div>
     );
};

export default Payments;
