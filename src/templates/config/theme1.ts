import T1Footer from "../Theme1/Footer/Footer";
import T1Header from "../Theme1/Header/Header";
import { Home } from "../Theme1/Home/Home";
import T1pageLinks from "../Theme1/PageLinks/pageLinks";
import { IComponentProps } from "./config.type";
// import "../../assets/css/demo1.min.css";

export const theme1TemplateConfig = {
     header: T1Header,
     pageLink: T1pageLinks,
     home: Home,
     footer: T1Footer,
};
