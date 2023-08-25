 
import Image from "next/image";
import { miniBanners } from "../data";
const MiniBanner = (props) => {
     return (
          <div className={`col-md-${props.mdSize} col-lg-${props.size}`}>
               <div
                    className="banner banner1 mb-2 appear-animate"
                    data-animation-name="fadeIn"
                    data-animation-delay={200}
                    style={{ backgroundColor: "#d8d8d8" }}
               >
                    <figure>
                         <Image src={props.productImageUrl} alt="banner" width={580} height={374} />
                    </figure>
                    <div className={`banner-layer d-flex flex-column align-items-end ${props.styles}`}>
                         {props.h3 ? (
                              <>
                                   <div className="text-justify">
                                     
                                        <h3 className="font4 font-weight-bold ls-n-25 text-uppercase mb-0">
                                             {props.h3}
                                        </h3>
                                        <h4 className="ls-n-25 text-uppercase">{props.h4}</h4>
                                   </div>
                              </>
                         ) : null}
                         {props.h2 ? <h2 className="ls-n-25 text-uppercase" style={{fontSize:'20px'}}>{props.h2}</h2> : null}
                         <a href="demo23-shop.html" className="btn btn-link">
                              <i>View our Deals</i>
                              <i className="icon-right-open-big" />
                         </a>
                    </div>
               </div>
          </div>
     );
};
export const MiniBanners = () => {
     return (
          <div className="row mb-2">
               {miniBanners.map((minibanner, index) => (
                    <MiniBanner
                         h2={minibanner.h2}
                         h3={minibanner.h3}
                         h4={minibanner.h4}
                         size={minibanner.size}
                         mdSize={minibanner.mdSize}
                         atag={minibanner.atag}
                         productImageUrl={minibanner.productImageUrl}
                         styles={minibanner.styles}
                    />
               ))}
          </div>
     );
};
