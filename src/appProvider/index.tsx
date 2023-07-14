"use client";
import React from "react";

export const AppContext = React.createContext<any>(null);

const dummySite = {
     company: {},
     theme: {
          theme: "theme1",
          menus: [],
          pages: [
               {
                    name: "home",
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
                         //           theme: "theme2",
                         //           name: "",
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
