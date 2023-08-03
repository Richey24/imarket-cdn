"use client";
import React from "react";

export const AppContext = React.createContext<any>(null);

const dummySite = {
     company: {},
     theme: {
          theme: "theme3",
          pages: [
               
               {
                    name: "home",
                    layout: "",
                    sections: [
                         // {
                         //      name: "footer",
                         //      // type: "footer",
                         //      content: "",
                         //      component: {
                         //           theme: "theme1",
                         //           name: "",
                         //      },
                         // },
                         // {
                         //      name: "header",
                         //      // type: "header",
                         //      content: "",
                         //      component: {
                         //           theme: "theme3",
                         //           props: { phone: "+1940595000" },
                         //      },
                         // },
                    ],
               },
          ],
          styles: {
               colors: [],
               mode: "light",
          },
     },
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
     return <AppContext.Provider value={{ site: dummySite }}>{children}</AppContext.Provider>;
};

export default AppProvider;
