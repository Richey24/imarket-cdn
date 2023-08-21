import { theme1TemplateConfig } from "./theme1";
import { theme2TemplateConfig } from "./theme2";
import { theme3TemplateConfig } from "./theme3";
import { theme4TemplateConfig } from "./theme4";
import { theme5TemplateConfig } from "./theme5";
import { theme7TemplateConfig } from "./theme7";
import { theme8TemplateConfig } from "./theme8";
import { theme9TemplateConfig } from "./theme9";
// import { theme10TemplateConfig } from "./theme10";
// import { theme11TemplateConfig } from "./theme11";
import { theme12TemplateConfig } from "./theme12";
import { theme13TemplateConfig } from "./theme13";
import { theme15TemplateConfig } from "./theme15";
import { theme20TemplateConfig } from "./theme20";
import { theme21TemplateConfig } from "./theme21";
import { theme30TemplateConfig } from "./theme30";
import { theme31TemplateConfig } from "./theme31";
import { theme32TemplateConfig } from "./theme32";
import { theme33TemplateConfig } from "./theme33";
import { theme34TemplateConfig } from "./theme34";
import theme35TemplateConfig from "./theme35";
import theme36TemplateConfig from "./theme36";
import theme37TemplateConfig from "./theme37";
import theme38TemplateConfig from "./theme38";
import theme39TemplateConfig from "./theme39";
import theme40TemplateConfig from "./theme40";
import theme41TemplateConfig from "./theme41";
import theme42TemplateConfig from "./theme42";
import { theme17TemplateConfig } from "./theme17";

// import { theme6TemplateConfig } from "./themex-2";

// Theme5 demo1
// Theme6 demo2
// Theme7 demo3
// Theme15 demo15
export const templateConfig: any = {
     theme1: theme1TemplateConfig,
     theme2: theme2TemplateConfig,
     theme3: theme3TemplateConfig,
     theme4: theme4TemplateConfig,
     theme5: theme5TemplateConfig,
     // theme6: theme6TemplateConfig,
     theme7: theme7TemplateConfig,
     theme8: theme8TemplateConfig,
     theme9: theme9TemplateConfig,
     // theme10: theme10TemplateConfig,
     // theme11: theme11TemplateConfig,
     theme12: theme12TemplateConfig,
     theme13: theme13TemplateConfig,
     theme15: theme15TemplateConfig,
     theme17: theme17TemplateConfig,
     theme20: theme20TemplateConfig,
     theme21: theme21TemplateConfig,
     theme30: theme30TemplateConfig,
     theme31: theme31TemplateConfig,
     theme32: theme32TemplateConfig,
     theme33: theme33TemplateConfig,
     theme34: theme34TemplateConfig,
     theme35: theme35TemplateConfig,
     theme36: theme36TemplateConfig,
     theme37: theme37TemplateConfig,
     theme38: theme38TemplateConfig,
     theme39: theme39TemplateConfig,
     theme40: theme40TemplateConfig,
     theme41: theme41TemplateConfig,
     theme42: theme42TemplateConfig,
};

export const cssImports = {
     theme1: "demo1",
     theme3: "demo3",
     theme2: "demo2",
     theme4: "demo4",
     theme5: "demo5",
     theme6: "demo2",
     theme7: "demo3",
     theme8: "demo8",
     theme9: "demo9",
     theme10: "demo20",
     theme11: "demo11",
     theme12: "demo12",
     theme13: "demo13",
     theme15: "demo15",
     theme17: "demo17",
     theme21: "demo21",
     theme30: "demo30",
     theme31: "demo31",
     theme32: "demo32",
     theme33: "demo33",
     theme34: "demo34",
     theme35: "demo35",
     theme36: "demo36",
     theme37: "demo37",
     theme38: "demo38",
     theme39: "demo39",
     theme40: "demo40",
     theme41: "demo41",
     theme42: "demo42",
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
