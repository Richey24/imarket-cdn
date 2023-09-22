import SocialIcons from "../../SocialIcons";
import Language from "./Language";
import Links from "./Links";

function HeaderLinks2({
     staticProps,
     className,
}: {
     staticProps: any;
     className?: string;
}): JSX.Element {
     return (
          <div className={`header-top ${className}`}>
               <div className={"container"}>
                    <div className="header-left">
                         <Language />
                    </div>

                    <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                         <Links />

                         <span className="separator"></span>

                         {/* social icons */}
                         <SocialIcons links={staticProps.socials} />
                    </div>
               </div>
          </div>
     );
}

export default HeaderLinks2;
