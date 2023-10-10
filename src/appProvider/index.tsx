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
import { dummySite } from "./data";

export const AppContext = React.createContext<any>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
     const [site, setSite] = useState<SitesField | null>(null);
     const [loading, setLoading] = useState<boolean>(false);
     const [products, setProducts] = useState(null);
     const [featuredProducts, setFeaturedProducts] = useState(null);
     const [categories, setCategories] = useState(null);
     const [brandcolor, setBrandcolor] = useState({
          primaryColor: "#3498db",
          secondaryColor: "#2ecc71",
     });

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

     React.useEffect(() => {
          if (site) {
               console.log({ brandcolor: site.company.brandcolor });
               const colors = site.company.brandcolor;
               setBrandcolor(() => {
                    return { primaryColor: colors[0].hex, secondaryColor: colors[1].hex };
               });
          }
     }, [site]);
     useEffect(() => {
          if (window) {
               document.documentElement.style.setProperty(
                    "--primary-color",
                    brandcolor.primaryColor,
               );
               document.documentElement.style.setProperty(
                    "--secondary-color",
                    brandcolor.secondaryColor,
               );

               const root = document.documentElement;

               root.style.setProperty("--primary", brandcolor.primaryColor);
               root.style.setProperty("--secondary", brandcolor.secondaryColor);
          }
     }, [brandcolor]);

     return (
          <AppContext.Provider
               value={{
                    site: dummySite,
                    loading,
                    categories,
                    products,
                    featuredProducts,
                    handleAddToCart,
               }}
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
