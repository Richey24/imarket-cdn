import { theme1TemplateConfig } from "./theme1";
import { theme2TemplateConfig } from "./theme2";
import { theme5TemplateConfig } from "./theme5";
import { theme6TemplateConfig } from "./theme6";
import { theme3TemplateConfig } from "./theme3";
import { theme10TemplateConfig } from "./theme10";
import { theme11TemplateConfig } from "./theme11";
import { theme12TemplateConfig } from "./theme12";
import { theme7TemplateConfig } from "./theme7";
import { theme8TemplateConfig } from "./theme8";
import { theme9TemplateConfig } from "./theme9";
import { theme30TemplateConfig } from "./theme30";

// Theme5 demo1
// Theme6 demo2
// Theme7 demo3
export const templateConfig: any = {
     theme1: theme1TemplateConfig,
     theme2: theme2TemplateConfig,
     theme3: theme3TemplateConfig,
     theme5: theme5TemplateConfig,
     // theme6: theme6TemplateConfig,
     theme10: theme10TemplateConfig,
     theme11: theme11TemplateConfig,
     theme12: theme12TemplateConfig,
     theme7: theme7TemplateConfig,
     theme8: theme8TemplateConfig,
     theme9: theme9TemplateConfig,
     theme30: theme30TemplateConfig,
};

export const cssImports = {
     theme1: "demo13",
     theme5: "demo1",
     theme6: "demo2",
     theme7: "demo3",
     theme10: "demo20",
     theme11: "demo21",

     // theme2: require("../../assets/css/demo13.min.css"),
     // theme3: require("../../assets/css/demo13.min.css"),
     // theme5: (condition) => {
     //      if (condition) {
     //           // require("../../assets/css/demo1.min.css");
     //      }
     // },
     // theme6: require("../../assets/css/demo2.min.css"),
     // theme7: require("../../assets/css/demo3.min.css"),
     // theme10: require("../../assets/css/demo13.min.css"),
     // theme11: require("../../assets/css/demo13.min.css"),
     // theme12: require("../../assets/css/demo13.min.css"),
     // theme8: require("../../assets/css/demo13.min.css"),
     // theme9: require("../../assets/css/demo13.min.css"),
     // theme30: require("../../assets/css/demo13.min.css"),
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
