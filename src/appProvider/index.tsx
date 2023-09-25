"use client";
import React, { useEffect, useState } from "react";
import {
     useAddToCart,
     useGetCategories,
     useGetFeaturedProducts,
     useGetProducts,
     useGetSiteByDomain,
} from "./hook";
import { getSubDomain } from "@/utils/helper";
import { SitesField, ThemeName } from "./types";

import NextNProgress from "nextjs-progressbar";

export const AppContext = React.createContext<any>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
     const [site, setSite] = useState<SitesField | null>(null);
     const [loading, setLoading] = useState<boolean>(false);
     const [products, setProducts] = useState(null);
     const [featuredProducts, setFeaturedProducts] = useState(null);
     const [categories, setCategories] = useState(null);
     const addToCart = useAddToCart();
     const getSiteByDomain = useGetSiteByDomain();
     const getProducts = useGetProducts();
     const getCategories = useGetCategories();
     const getFeaturedProducts = useGetFeaturedProducts();

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
               getFeaturedProducts(
                    site?.company?.company_id,
                    (products) => {
                         setFeaturedProducts(products);
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

     const handleAddToCart = (product: any) => {
          console.log("log");
     };

     return (
          <AppContext.Provider
               value={{ site, loading, categories, products, featuredProducts, handleAddToCart }}
          >
               <NextNProgress
                    color="#29D"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                    showOnShallow={true}
               />

               {children}
          </AppContext.Provider>
     );
};

export default AppProvider;
