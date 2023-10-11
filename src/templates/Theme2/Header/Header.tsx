import HeaderLinks from "@/templates/shared/Header/HeaderLinks";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";

const Header = (props: any) => {
     const { static: staticProps, company, categories } = props.props;

     return (
          <header className="header">
               <HeaderLinks staticProps={staticProps} className="text-white" />

               <HeaderSearch
                    company={company}
                    categories={categories}
                    loggedInData={{}}
                    cart={{}}
               />
          </header>
     );
};

export default Header;
