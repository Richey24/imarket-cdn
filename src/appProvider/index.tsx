"use client";
import React from "react";

export const AppContext = React.createContext<any>(null);

const dummySite = {
     company: {},
     theme: {
          theme: "theme2",
          menus: [],
          pages: {
               name: "home",
               sections: [
                    {
                         name: "banner",
                         type: "banner",
                         content: "",
                         component: {
                              theme: "theme1",
                              name: "",
                         },
                    },
               ],
          },
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
