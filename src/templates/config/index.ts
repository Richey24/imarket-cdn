import { theme1TemplateConfig } from "./theme1";
import { theme2TemplateConfig } from "./theme2";
import { theme5TemplateConfig } from "./theme5";
import { theme6TemplateConfig } from "./theme6";
import { theme3TemplateConfig } from "./theme3";
import { theme10TemplateConfig } from "./theme10";
import { theme11TemplateConfig } from "./theme11";
import { theme4TemplateConfig } from "./theme4";
import { theme12TemplateConfig } from "./theme12";
import { theme7TemplateConfig } from "./theme7";
import { theme8TemplateConfig } from "./theme8";
import { theme9TemplateConfig } from "./theme9";
import { theme30TemplateConfig } from "./theme30";
import { theme31TemplateConfig } from "./theme31";
import { theme32TemplateConfig } from "./theme32";
import { theme33TemplateConfig } from "./theme33";

// Theme5 demo1
// Theme6 demo2
// Theme7 demo3
export const templateConfig: any = {
     theme1: theme1TemplateConfig,
     theme2: theme2TemplateConfig,
     theme3: theme3TemplateConfig,
     theme4: theme4TemplateConfig,
     theme5: theme5TemplateConfig,
     // theme6: theme6TemplateConfig,
     theme10: theme10TemplateConfig,
     theme11: theme11TemplateConfig,
     theme12: theme12TemplateConfig,
     theme7: theme7TemplateConfig,
     theme8: theme8TemplateConfig,
     theme9: theme9TemplateConfig,
     theme30: theme30TemplateConfig,
     theme31: theme31TemplateConfig,
     theme32: theme32TemplateConfig,
     theme33: theme33TemplateConfig,
};

export const cssImports = {
     theme1: "demo13",
     theme4: "demo4",
     theme5: "demo1",
     theme6: "demo2",
     theme7: "demo3",
     theme10: "demo20",
     theme11: "demo21",
     theme12: "demo12",
     theme31: "demo31",
     theme32: "demo32",
     theme33: "demo33",
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
