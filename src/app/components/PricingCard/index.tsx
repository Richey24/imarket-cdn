import propTypes, { InferProps } from "prop-types";
import { Button } from "react-bootstrap";
import { BsCheckLg } from "react-icons/bs";

const reportModalProps = {
     title: propTypes.string.isRequired,
     description: propTypes.string,
     usage: propTypes.arrayOf(propTypes.string.isRequired),
     isPrimary: propTypes.bool,
     tag: propTypes.string,
     price: propTypes.string.isRequired,
};

function PricingCard({
     title,
     description,
     usage,
     tag,
     price,
     isPrimary,
}: InferProps<typeof reportModalProps>) {
     return (
          <div className={`tw-relative  border-black pricingCard h-full md:tw-h-[60rem]`}>
               <div className="p-5">
                    {tag && (
                         <Button
                              className="tw-absolute tw-top-0 tw-left-2/4 -tw-translate-y-2/4 -tw-translate-x-2/4 tw-px-6 tw-py-2 tw-mb-6 tw-font-semibold"
                              color="primary"
                         >
                              {tag}
                         </Button>
                    )}
                    <div
                         className={` tw-w-auto tw-mb-6 tw-font-bold tw-text-center tw-text-5xl text-primary`}
                    >
                         {title}
                    </div>
                    <div className="tw-mb-3 tw-text-[#8A8886] ">{description}</div>
                    <div className="tw-mx-auto tw-w-fit tw-mb-6">
                         <Button
                              className="tw-px-10 tw-py-3  tw-font-semibold tw-mx-auto tw-mb-4"
                              color="primary"
                         >
                              Add to Cart
                         </Button>
                         <p className="tw-underline tw-mb-6">70% Savings on Yearly</p>
                    </div>
                    <div className="tw-text-center">{price}</div>
                    <ul className={`list-inside${isPrimary ? "text-primary" : ""}`}>
                         {usage?.map((use) => {
                              return (
                                   <li
                                        className="tw-flex tw-items-center tw-border-b tw-py-4 tw-mb-6"
                                        key={`${title}-${use}`}
                                   >
                                        <span className="tw-text-2xl tw-mr-6">
                                             <BsCheckLg />
                                        </span>
                                        <p className="mb-0">{use}</p>
                                   </li>
                              );
                         })}
                    </ul>
               </div>
          </div>
     );
}

export default PricingCard;
