"use client";
import React, { useEffect, useState } from "react";
import {
     useAddToCart,
     useGetCart,
     useGetCategories,
     useGetFeaturedProducts,
     useGetProducts,
     useGetSiteByDomain,
     useCreateCart,
     useRemoveProductFromCart,
     useUpdateProductQtyCart,
} from "./hooks";
import { getSubDomain } from "@/utils/helper";
import { SitesField, ThemeName } from "./types";
import NextNProgress from "nextjs-progressbar";
import { dummySite } from "./data";
import { useSession } from "next-auth/react";

export const AppContext = React.createContext<any>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
     const [site, setSite] = useState<SitesField | null>(null);
     const [loading, setLoading] = useState<boolean>(false);
     const [products, setProducts] = useState(null);
     const [featuredProducts, setFeaturedProducts] = useState(null);
     const [categories, setCategories] = useState(null);
     const [cart, setCart] = useState(null);
     const [brandcolor, setBrandcolor] = useState({
          primaryColor: "#3498db",
          secondaryColor: "#2ecc71",
     });

     const addToCart = useAddToCart();
     const getSiteByDomain = useGetSiteByDomain();
     const getProducts = useGetProducts();
     const getCategories = useGetCategories();
     const getFeaturedProducts = useGetFeaturedProducts();
     const createCart = useCreateCart();
     const getCart = useGetCart();
     const { data } = useSession();
     const removeProduct = useRemoveProductFromCart();
     const updateProductQtyOnCart = useUpdateProductQtyCart();


     useEffect(() => {
          if (typeof window !== "undefined") {
               const domain = getSubDomain(window.location.href as string);
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
          if (site && !cart && data) {
               getCart(
                    (data as any)?.user?.id,
                    (data: any) => {
                         setCart(data as any);
                    },
                    () => {},
               );
          }
     }, [site, data]);

     const handleAddToCart = async (productId: any, price: number | string, onDone: () => void) => {
          if (cart) {
               return addToCart(
                    {
                         companyId: site?.company?.company_id,
                         orderId: cart?.id,
                         productId,
                         qty: 1,
                         price_unit: price,
                    },
                    () => {
                         getCart(
                              (data as any)?.user?.id,
                              (data: any) => {
                                   setCart(data as any);
                                   onDone?.();
                              },
                              () => {},
                         );
                    },
                    () => {
                         onDone?.();
                    },
               );
          } else {
               createCart(
                    {
                         companyId: site?.company?.company_id,
                         userId: (data as any)?.user?.id,
                         products: [{ productId, qty: 1, price_unit: price }],
                    },
                    () => {
                         getCart(
                              (data as any)?.user?.id,
                              (data: any) => {
                                   setCart(data as any);
                                   onDone?.();
                              },
                              () => {},
                         );
                    },
                    () => {
                         onDone?.();
                    },
               );
          }
     };

     const handleUpdateProductQtyOnCart = (
          orderLineId: number,
          qty: number,
          onDone: () => void,
     ) => {
          updateProductQtyOnCart(
               orderLineId,
               qty,
               () => {
                    getCart(
                         (data as any)?.user?.id,
                         (data: any) => {
                              setCart(data as any);
                              onDone?.();
                         },
                         () => {},
                    );
               },
               () => {
                    onDone?.();
               },
          );
     };

     const handleRemoveProductFromOrder = (orderLineId: number, onDone: () => void) => {
          removeProduct(
               orderLineId,
               () => {
                    getCart(
                         (data as any)?.user?.id,
                         (data: any) => {
                              setCart(data as any);
                              onDone?.();
                         },
                         () => {},
                    );
               },
               () => {
                    onDone?.();
               },
          );
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
                    site,
                    loading,
                    categories,
                    products,
                    featuredProducts,
                    cart,
                    handleAddToCart,
                    handleRemoveProductFromOrder,
                    handleUpdateProductQtyOnCart,
               }}
          >
               {children}
          </AppContext.Provider>
     );
};

export default AppProvider;
