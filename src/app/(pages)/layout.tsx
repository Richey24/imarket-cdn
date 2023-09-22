"use client";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/appProvider";
import { Next13ProgressBar } from "next13-progressbar";
import Head from "next/head";
import { cssImports, templateConfig } from "@/templates/config/index";
import { PlaceholderLayout } from "../components/PlaceholderLayout/PlaceholderLayout";
import { SitesField, ThemeName } from "@/appProvider/types";
import { NoSite } from "../components/NoSite/NoSite";
import "react-loading-skeleton/dist/skeleton.css";
import Sidebar from "../../templates/shared/SideBar";
import { setCartSideBarOpen, setSideBarVisibility } from "@/redux/global";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ScrollToTopButton from "../components/ScrollToTopBtn";
import RightDrawer from "@/templates/shared/CartSideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
     const dispatch = useDispatch();
     const { isSideBarVisible, isCartSideBarOpen } = useSelector(
          (state: RootState) => state.general,
     );

     const { site, loading, setLoading, categories, products } = useContext<{
          site: SitesField;
          loading: boolean;
          setLoading: React.Dispatch<React.SetStateAction<boolean>>;
          categories: any;
          products: any;
     }>(AppContext);
     const [styleLoader, setStyleLoader] = useState(false);
     const [menuBtn, setMenuBtn] = useState("template-menu");

     // console.log("site.theme.theme ", site);
     useEffect(() => {
          if (site) {
               setStyleLoader(true);
               import(
                    `../../assets/css/${cssImports()[site.theme.theme as ThemeName]}.min.css`
               ).then(() => {
                    setStyleLoader(false);
               });
          }
     }, [site]);

     console.log(site, loading);

     if (!site && loading) {
          return <PlaceholderLayout />;
     } else if (!site && !loading) {
          return <NoSite />;
     }

     const defualtTemplate = templateConfig[site.theme.theme];
     const Header = defualtTemplate?.["header"];
     const Footer = defualtTemplate?.["footer"];

     const handleSideBarClose = () => {
          dispatch(setSideBarVisibility());
     };

     const handleCartSideBarClose = () => {
          dispatch(setCartSideBarOpen());
     };

     const bodyStyles = isSideBarVisible
          ? { overflow: "hidden !important", height: "100vh" }
          : { overflow: "unset", height: "auto" };

     return (
          <html lang="en">
               {/* <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
               </Head> */}
               {!styleLoader && (
                    <body className={"homepage relative"}>
                         <Next13ProgressBar
                              height="4px"
                              color="#9d78f1"
                              options={{ showSpinner: true }}
                              showOnShallow
                         />

                         <Sidebar
                              data={{
                                   ...site.theme.header.component.props,
                                   company: site.company,
                                   categories,
                              }}
                              isOpen={isSideBarVisible}
                              toggleSidebar={handleSideBarClose}
                         />

                         <RightDrawer isOpen={isCartSideBarOpen} onClose={handleCartSideBarClose} />

                         <div
                              className={`page-wrapper tw-flex-1 tw-transition-transform ${
                                   isSideBarVisible ? "tw-translate-x-[28.889rem]" : ""
                              }`}
                         >
                              <Header
                                   props={{
                                        ...site.theme.header.component.props,
                                        company: site.company,
                                        categories,
                                   }}
                              />

                              {children}
                              <Footer
                                   props={{
                                        company: site.company,
                                        ...site.theme.footer.component.props,
                                   }}
                              />
                              <ScrollToTopButton />
                         </div>
                         {isSideBarVisible && (
                              <div
                                   className="tw-fixed tw-top-0 tw-bottom-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-black tw-opacity-40 tw-cursor-pointer"
                                   onClick={handleSideBarClose}
                              />
                         )}
                    </body>
               )}
               <style jsx global>{`
                    body {
                         overflow: ${bodyStyles.overflow};
                         height: ${bodyStyles.height};
                    }
               `}</style>
          </html>
     );
}
