import HeaderSearch from "@/templates/shared/Header/HeaderSearch";
import HeaderLinks2 from "@/templates/shared/Header/HeaderLinks/HeaderLinks2";
const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     return (
          <header className="header">
               <HeaderLinks2 staticProps={staticProps} />
               <HeaderSearch
                    loggedInData={{}}
                    cart={{}}
                    company={company}
                    categories={categories}
               />
          </header>
     );
     {
          /* End .header */
     }
};
export default Header;
