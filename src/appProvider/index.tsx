"use client";
import React, { useEffect, useState } from "react";
import { useGetSiteByDomain } from "./hook";
import { getSubDomain } from "@/utils/helper";
import { SitesField } from "./types";
import { dummySite } from "./data";

export const AppContext = React.createContext<any>(null);

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

     return (
          <AppContext.Provider value={{ site: dummySite, loading }}>{children}</AppContext.Provider>
     );
};

export default AppProvider;
