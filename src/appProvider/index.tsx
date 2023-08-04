"use client";
import React, { useEffect, useState } from "react";
import { useGetSiteByDomain } from "./hook";
import { getSubDomain } from "@/utils/helper";
import { SitesField } from "./types";
import axios from "axios";

export const AppContext = React.createContext<any>(null);

const dummySite = {
     company: {},
     theme: {
          theme: "theme1",
          footer: {
               name: "footer",
               content: "",
               component: {
                    theme: "theme1",
                    name: "",
                    props: { phone: "+1940595000" },
               },
          },
          header: {
               name: "header",
               content: "",
               component: {
                    theme: "theme1",
                    props: { phone: "+1940595000" },
               },
          },
          pages: [
               {
                    name: "home",
                    layout: "",
                    sections: [
                         {
                              name: "footer",
                              content: "",
                              component: {
                                   theme: "theme1",
                                   name: "",
                              },
                         },
                         {
                              name: "header",
                              content: "",
                              component: {
                                   theme: "theme1",
                                   props: { phone: "+1940595000" },
                              },
                         },
                         {
                              name: "home",
                              content: "",
                              component: {
                                   theme: "theme1",
                                   props: { phone: "+1940595000" },
                              },
                         },
                    ],
               },
          ],
          pageLinks: ["home", "shop"],
          styles: {
               colors: [],
               mode: "light",
          },
     },
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
     const [site, setSite] = useState<SitesField | null>(null);
     const [loading, setLoading] = useState<boolean>(false);
     const getSiteByDomain = useGetSiteByDomain();

     useEffect(() => {
          const domain = getSubDomain(window.location.href as string);
          if (window) {
               if (domain) {
                    setLoading(true);
                    getSiteByDomain(
                         domain,
                         (data) => {
                              setSite({ theme: data.site, company: data });
                              setLoading(false);
                         },
                         () => {
                              setLoading(false);
                         },
                    );
               } else {
               }
          }
     }, []);

     return <AppContext.Provider value={{ site, loading }}>{children}</AppContext.Provider>;
};

export default AppProvider;
