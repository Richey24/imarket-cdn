import Image from "next/image";
import Link from "next/link";

function Banner() {
     return (
          <div className="h-screen w-full">
               <div className="home-slide home-slide1 banner d-flex align-items-center h-full w-full">
                    <Image
                         fill
                         src="https://absa7kzimnaf.blob.core.windows.net/templates-images/demo3-slide.jpg"
                         style={{ backgroundColor: "#ecc" }}
                         alt="home banner"
                    />
                    <div className="container">
                         <div className=" absolute top-1/4 ">
                              <div className="font-medium text-3xl  ">Winter Fashion Trends</div>
                              <div className="text-uppercase text-4xl font-bold mb-0">
                                   Get up to 30% off
                              </div>
                              <div className="m-b-4 text-6xl font-black ">on Jackets</div>

                              <h5 className="text-uppercase my-3">
                                   Starting at
                                   <span className="coupon-sale-text">
                                        <sup>$</sup>199<sup>99</sup>
                                   </span>
                              </h5>
                              <Link href="#" className="btn btn-dark " role="button">
                                   Shop Now
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Banner;
