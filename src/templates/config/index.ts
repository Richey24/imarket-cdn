import { theme1TemplateConfig } from "./theme1";
import { theme2TemplateConfig } from "./theme2";
import { theme5TemplateConfig } from "./theme5";
import { theme6TemplateConfig } from "./theme6";
import { theme3TemplateConfig } from "./theme3";
import { theme7TemplateConfig } from "./theme7";
import { theme10TemplateConfig } from "./theme10";
import { theme11TemplateConfig } from "./theme11";
import { theme8TemplateConfig } from "./theme8";
import { theme9TemplateConfig } from "./theme9";
import { theme30TemplateConfig } from "./theme30";
import { theme31TemplateConfig } from "./theme31";
import { theme32TemplateConfig } from "./theme32";

// Theme5 demo1
// Theme6 demo2
// Theme7 demo3
export const templateConfig: any = {
    theme1: theme1TemplateConfig,
    theme2: theme2TemplateConfig,
    theme3: theme3TemplateConfig,
    theme5: theme5TemplateConfig,
    theme6: theme6TemplateConfig,
    theme7: theme7TemplateConfig,
    theme8: theme8TemplateConfig,
    theme10: theme10TemplateConfig,
    theme11: theme11TemplateConfig,
    theme9: theme9TemplateConfig,
    theme30: theme30TemplateConfig,
    theme31: theme31TemplateConfig,
    theme32: theme32TemplateConfig
};

// export const cssImports: { [key: string]: any } = {
//     // theme1: require("../../assets/css/demo13.min.css"),
//     // theme31: require("../../assets/css/demo31.min.css"),
//     theme32: require("../../assets/css/demo32.min.css"),
// };

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
