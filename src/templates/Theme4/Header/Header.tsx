import React, { useState } from "react";
import HeaderLinks from "@/templates/shared/Header/HeaderLinks";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header" style={{ background: "#fbfbfb" }}>
               <HeaderLinks staticProps={staticProps} />
               <HeaderSearch company={company} categories={categories} />
               <div className="container">
                    <PageLinks staticProps={staticProps} />
               </div>
          </header>
     );
};

export default Header;
