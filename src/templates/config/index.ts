import { theme2TemplateConfig } from "./theme2";
import { theme3TemplateConfig } from "./theme3";
import { theme4TemplateConfig } from "./theme4";
import { theme5TemplateConfig } from "./theme5";
import { theme7TemplateConfig } from "./theme7";
import { theme8TemplateConfig } from "./theme8";
import { theme9TemplateConfig } from "./theme9";
import { theme12TemplateConfig } from "./theme12";
import { theme13TemplateConfig } from "./theme13";
import { theme15TemplateConfig } from "./theme15";
import { theme20TemplateConfig } from "./theme20";
import { theme21TemplateConfig } from "./theme21";
import { theme30TemplateConfig } from "./theme30";

import { theme6TemplateConfig } from "./themex-2";

// Theme5 demo1
// Theme6 demo2
// Theme7 demo3
// Theme15 demo15
export const templateConfig: any = {
     theme2: theme2TemplateConfig,
     theme3: theme3TemplateConfig,
     theme4: theme4TemplateConfig,
     theme5: theme5TemplateConfig,
     theme7: theme7TemplateConfig,
     theme8: theme8TemplateConfig,
     theme9: theme9TemplateConfig,
     theme12: theme12TemplateConfig,
     theme13: theme13TemplateConfig,
     theme15: theme15TemplateConfig,
     theme20: theme20TemplateConfig,
     theme21: theme21TemplateConfig,
     theme30: theme30TemplateConfig,

};

export const cssImports = {
     theme2: "demo2",
     theme3: "demo3",
     theme4: "demo4",
     theme5: "demo5",
     theme7: "demo7",
     theme8: "demo8",
     theme9: "demo9",
     theme12: "demo12",
     theme13: "demo13",
     theme15: "demo15",
     theme20: "demo20",
     theme21: "demo21",
     theme30: "demo30",

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
