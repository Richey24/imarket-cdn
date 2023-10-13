import React from "react";

import HeaderSearch from "@/templates/shared/Header/HeaderSearch";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";
import Logo from "@/templates/shared/Header/HeaderSearch/Logo";
import HeaderIcons from "@/templates/shared/Header/HeaderSearch/headerIcons";
import MenuButton from "@/templates/shared/Header/HeaderSearch/MenuButton";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header header-transparent">
               {/* <HeaderSearch company={company} categories={categories} /> */}
               <div className="tw-flex tw-items-center tw-justify-between tw-py-12 tw-px-10 md:tw-px-24">
                    <div className="tw-flex tw-items-center gap-2">
                         <div className="header-left col-lg-2 w-auto pl-0">
                              <MenuButton />
                              {/* logo */}
                              <Logo company={company} />
                         </div>
                         <PageLinks staticProps={staticProps} />
                    </div>
                    <HeaderIcons loggedInData={{}} cart={{}} />
               </div>
          </header>
     );
     {
          /* End .header */
     }
};
export default Header;
