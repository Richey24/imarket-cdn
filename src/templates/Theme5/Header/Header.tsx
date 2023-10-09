import HeaderLinks from "@/templates/shared/Header/HeaderLinks";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";
import PageLinks from "@/templates/shared/Header/HeaderLinks/PageLinks";

const Header = (props: any) => {
     const { company, static: staticProps, categories } = props.props;

     const showDrop = (id: string) => {
          document.getElementById(id)?.classList.toggle("showDrop");
     };

     const showCanvas = (id: string) => {
          document.getElementById(id)?.classList.toggle("showCanvas");
     };

     return (
          <div>
               <header
                    style={{ backgroundColor: "#F6F7F9", paddingBottom: "20px" }}
                    className="header"
               >
                    <HeaderLinks staticProps={staticProps} />
                    <HeaderSearch
                         company={company}
                         categories={categories}
                         loggedInData={{}}
                         cart={{}}
                    />
                    <div className="container bg-primary">
                         <PageLinks staticProps={staticProps} />
                    </div>
               </header>
          </div>
     );
};
export default Header;
