import SocialIcons from "../../SocialIcons";
import Language from "./Language";
import Links from "./Links";

function HeaderLinks({
     staticProps,
     className,
}: {
     staticProps: any;
     className?: string;
}): JSX.Element {
     return (
          <div className={`header-top ${className}`}>
               <div className={"container"}>
                    <div className="header-left d-none d-sm-block">
                         <p className="top-message text-uppercase">
                              FREE Returns. Standard Shipping Orders $99+
                         </p>
                    </div>

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                         {/* header links */}
                         <Links />

                         <span className="separator"></span>

                         {/* language & currency */}
                         <Language />

                         <span className="separator"></span>

                         {/* social icons */}
                         <SocialIcons links={staticProps.socials} />
                    </div>
               </div>
          </div>
     );
}

export default HeaderLinks;
