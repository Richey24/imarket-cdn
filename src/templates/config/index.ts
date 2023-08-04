import { theme1TemplateConfig } from "./theme1";
import { theme2TemplateConfig } from "./theme2";
import { theme5TemplateConfig } from "./theme5";
import { theme6TemplateConfig } from "./theme6";
import { theme3TemplateConfig } from "./theme3";
import { ThemeName } from "@/appProvider/types";

export const templateConfig: any = {
     theme1: theme1TemplateConfig,
     theme2: theme2TemplateConfig,
     theme3: theme3TemplateConfig,
     theme5: theme5TemplateConfig,
     theme6: theme6TemplateConfig,
};

export const cssImports: { [key: string]: any } = {
     theme1: require("../../assets/css/demo13.min.css"),
};

export const themeProps = {
     header: {
          company: {},
          static: {
               languages: [],
               currencies: [],
               socials: [
                    { name: "facebook", link: "/" },
                    { name: "instagram", link: "/" },
                    { name: "twitter", link: "/" },
               ],
               pageLinks: [
                    {
                         name: "home",
                         url: "/",
                         subMenu: null,
                    },
                    {
                         name: "shop",
                         url: "/tester",
                         subMenu: [
                              {
                                   name: "tester",
                                   url: "/shop/tester",
                              },
                         ],
                    },
               ],
          },
     },
};
