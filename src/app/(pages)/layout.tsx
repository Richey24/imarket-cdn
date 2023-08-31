"use client";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/appProvider";
import Head from "next/head";
import { cssImports, templateConfig } from "@/templates/config/index";
import { PlaceholderLayout } from "../components/PlaceholderLayout/PlaceholderLayout";
import { SitesField, ThemeName } from "@/appProvider/types";
import { NoSite } from "../components/NoSite/NoSite";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
     const { site, loading, setLoading, categories, products } = useContext<{
          site: SitesField;
          loading: boolean;
          setLoading: React.Dispatch<React.SetStateAction<boolean>>;
          categories: any;
          products: any;
     }>(AppContext);
     const [styleLoader, setStyleLoader] = useState(false);

     // console.log("site.theme.theme ", site);
     useEffect(() => {
          if (site) {
               setStyleLoader(true);
               import(`../../assets/css/${cssImports[site.theme.theme as ThemeName]}.min.css`).then(
                    () => {
                         setStyleLoader(false);
                    },
               );
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

     return (
          <html lang="en">
               {/* <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
               </Head> */}
               {!styleLoader && (
                    <body className={"homepage relative"}>
                         <div className="page-wrapper">
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
                         </div>
                    </body>
               )}
          </html>
     );
}
