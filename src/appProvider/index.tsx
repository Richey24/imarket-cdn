"use client";
import React, { useEffect, useState } from "react";
import { useGetCategories, useGetProducts, useGetSiteByDomain } from "./hook";
import { getSubDomain } from "@/utils/helper";
import { SitesField, ThemeName } from "./types";
import { dummySite } from "./data";

export const AppContext = React.createContext<any>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
     const [site, setSite] = useState<SitesField | null>(null);
     const [loading, setLoading] = useState<boolean>(false);
     const [products, setProducts] = useState(null);
     const [categories, setCategories] = useState(null);

     const getSiteByDomain = useGetSiteByDomain();
     const getProducts = useGetProducts();
     const getCategories = useGetCategories();

     console.log(site);
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

     useEffect(() => {
          if (site && !products) {
               getProducts(
                    site?.company?.company_id,
                    (products) => {
                         setProducts(products);
                    },
                    () => {},
               );
               getCategories(
                    site?.company?._id,
                    (categories) => {
                         setCategories(categories);
                    },
                    () => {},
               );
          }
     }, [site]);

     return (
          <AppContext.Provider value={{ site, loading, categories, products }}>
               {children}
          </AppContext.Provider>
     );
};

export default AppProvider;
