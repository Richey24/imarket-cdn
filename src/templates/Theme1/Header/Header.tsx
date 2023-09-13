import HeaderLinks2 from "@/templates/shared/Header/HeaderLinks/HeaderLinks2";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     return (
          <div>
               {/* End .top-notice */}

               <header className="header home">
                    {/* sub */}
                    <HeaderLinks2 staticProps={staticProps} className="bg-primary text-uppercase" />
                    {/* search */}
                    <HeaderSearch company={company} categories={categories} className="text-dark" />
                    {/* End .header-middle */}
               </header>
               {/* End .header */}
          </div>
     );
};
export default Header;
